/* ==========================================================
   CODINDEV — PAINEL ADMINISTRATIVO
   Versão: 1.0.0
   Credenciais padrão:
     admin      / Codin@Admin2025  (Administrador — acesso total)
     moderador  / Codin@Mod2025    (Moderador — sem reset total e sem importar dados)
   ========================================================== */

'use strict';

// ──────────────────────────────────────────────────────────
//  CONSTANTES DE CONFIGURAÇÃO
// ──────────────────────────────────────────────────────────

const SALT = 'cd_admin_2025_';
const CHAVE_SESSAO_ADMIN = 'codin_admin_sessao';

// Credenciais carregadas de admin-credentials.js (não commitado).
// Se o arquivo não existir, ADMIN_CREDENTIALS fica indefinido e o login falha.

// Páginas gerenciáveis do site
const PAGINAS_DO_SITE = [
    { id: 'index',        nome: 'Dashboard',         path: '../index.html',                 icone: 'fa-house' },
    { id: 'cursos',       nome: 'Cursos',            path: '../paginas/cursos.html',        icone: 'fa-book' },
    { id: 'missoes',      nome: 'Missões',           path: '../paginas/missoes.html',       icone: 'fa-bullseye' },
    { id: 'missoes_menu', nome: 'Menu de Missões',    path: '../paginas/missoes_menu.html',   icone: 'fa-list' },
    { id: 'loja',         nome: 'Loja do Codin',      path: '../paginas/loja.html',           icone: 'fa-shopping-bag' },
    { id: 'ranking',      nome: 'Ranking',            path: '../paginas/ranking.html',        icone: 'fa-trophy' },
    { id: 'perfil',       nome: 'Perfil',             path: '../paginas/perfil.html',         icone: 'fa-user' },
    { id: 'configuracoes',nome: 'Configurações',      path: '../paginas/configuracoes.html',  icone: 'fa-gear' },
    { id: 'missao',       nome: 'Tela de Missão',     path: '../misssoes/missao.html',        icone: 'fa-play' }
];

// Arquivos estáticos informativos
const ARQUIVOS_ESTATICOS = [
    { nome: 'script.js',       path: '../script.js',              tipo: 'JS',  desc: 'Lógica principal do dashboard' },
    { nome: 'missoes_logica.js', path: '../missoes_logica.js',    tipo: 'JS',  desc: 'Banco de dados dos cursos' },
    { nome: 'missao.js',       path: '../misssoes/missao.js',     tipo: 'JS',  desc: 'Motor das missões interativas' },
    { nome: 'perfil.js',       path: '../paginas/perfil.js',      tipo: 'JS',  desc: 'Lógica do perfil do usuário' },
    { nome: 'ranking.js',      path: '../paginas/ranking.js',     tipo: 'JS',  desc: 'Geração do ranking global' },
    { nome: 'auth.js',         path: '../js/auth.js',             tipo: 'JS',  desc: 'Proteção de rotas e manutenção' },
    { nome: 'index.css',       path: '../css/index.css',          tipo: 'CSS', desc: 'Estilos globais do site' },
    { nome: 'missao.css',      path: '../misssoes/missao.css',    tipo: 'CSS', desc: 'Estilos da tela de missão' },
    { nome: 'perfil.css',      path: '../paginas/perfil.css',     tipo: 'CSS', desc: 'Estilos do perfil' },
    { nome: 'login.css',       path: '../login/login.css',        tipo: 'CSS', desc: 'Estilos da tela de login' }
];

// Cursos gerenciáveis
const CURSOS_CONFIG = [
    { id: 'logica',      nome: 'Lógica de Programação',  icone: 'fa-diagram-project', nivel: 'Gratuito' },
    { id: 'html_css',    nome: 'HTML & CSS (Básico)',     icone: 'fa-brands fa-html5', nivel: 'Gratuito' },
    { id: 'javascript',  nome: 'JavaScript',              icone: 'fa-brands fa-js',    nivel: 'Gratuito' },
    { id: 'python',      nome: 'Python',                  icone: 'fa-brands fa-python',nivel: 'Premium'  },
    { id: 'react',       nome: 'React',                   icone: 'fa-brands fa-react', nivel: 'Premium'  },
    { id: 'java',        nome: 'Java',                    icone: 'fa-brands fa-java',  nivel: 'Premium'  }
];

// Funcionalidades gerenciáveis
const FEATURES_CONFIG = [
    { id: 'loja',     nome: 'Loja do Codin',   desc: 'Permite compra de itens cosméticos' },
    { id: 'ranking',  nome: 'Ranking Global',  desc: 'Exibe o ranking competitivo entre usuários' },
    { id: 'missoes',  nome: 'Missões',         desc: 'Acesso às trilhas de cursos e missões semanais' },
    { id: 'perfil',   nome: 'Perfil',          desc: 'Personalização do mascote e troca de nome' }
];

// ──────────────────────────────────────────────────────────
//  ESTADO DA SESSÃO ADMIN
// ──────────────────────────────────────────────────────────

let adminLogado = null; // { usuario, role }

// ──────────────────────────────────────────────────────────
//  INICIALIZAÇÃO
// ──────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    verificarSessaoAdmin();
    iniciarRelogio();
});

function verificarSessaoAdmin() {
    try {
        const sessao = JSON.parse(sessionStorage.getItem(CHAVE_SESSAO_ADMIN));
        if (sessao && sessao.usuario && ADMIN_CREDENTIALS[sessao.usuario]) {
            adminLogado = sessao;
            mostrarApp();
        } else {
            mostrarLogin();
        }
    } catch (e) {
        mostrarLogin();
    }
}

function mostrarLogin() {
    document.getElementById('screen-login').style.display = 'flex';
    document.getElementById('screen-app').style.display = 'none';
    setTimeout(() => document.getElementById('input-usuario').focus(), 100);
}

function mostrarApp() {
    document.getElementById('screen-login').style.display = 'none';
    document.getElementById('screen-app').style.display = 'block';

    // Preenche dados do admin na sidebar
    const iniciais = adminLogado.usuario.charAt(0).toUpperCase();
    document.getElementById('admin-avatar-initials').textContent = iniciais;
    document.getElementById('admin-display-nome').textContent = adminLogado.usuario;
    document.getElementById('admin-display-role').textContent =
        ADMIN_CREDENTIALS[adminLogado.usuario]?.role || adminLogado.role;

    // Restringe zona de perigo para moderadores
    if (adminLogado.role === 'moderador') {
        const btnResetTotal = document.querySelector('[onclick="confirmarResetTotal()"]');
        const btnImportar = document.querySelector('[onclick="document.getElementById(\'input-importar\').click()"]');
        if (btnResetTotal) { btnResetTotal.disabled = true; btnResetTotal.title = 'Sem permissão (apenas administrador)'; }
        if (btnImportar)   { btnImportar.disabled = true;   btnImportar.title   = 'Sem permissão (apenas administrador)'; }
    }

    navegarPara('dashboard');
}

// ──────────────────────────────────────────────────────────
//  AUTENTICAÇÃO
// ──────────────────────────────────────────────────────────

function fazerLogin(evento) {
    evento.preventDefault();
    const usuario = document.getElementById('input-usuario').value.trim().toLowerCase();
    const senha   = document.getElementById('input-senha').value;
    const erroEl  = document.getElementById('login-erro');
    const btnEl   = document.getElementById('btn-entrar');

    erroEl.style.display = 'none';

    const cred = ADMIN_CREDENTIALS[usuario];
    if (!cred || btoa(SALT + senha) !== cred.hash) {
        erroEl.style.display = 'block';
        document.getElementById('login-erro-msg').textContent = 'Usuário ou senha incorretos.';
        document.getElementById('input-senha').value = '';
        document.getElementById('input-senha').focus();
        registrarLog('warning', 'Tentativa de login falhou', `Usuário: "${usuario}"`);
        return;
    }

    btnEl.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Entrando...';
    btnEl.disabled = true;

    const sessao = { usuario, role: cred.role, inicio: Date.now() };
    sessionStorage.setItem(CHAVE_SESSAO_ADMIN, JSON.stringify(sessao));
    adminLogado = sessao;

    registrarLog('success', 'Login no painel admin', `Usuário: ${usuario} | Role: ${cred.role}`);

    setTimeout(() => mostrarApp(), 600);
}

function fazerLogout() {
    registrarLog('info', 'Logout do painel admin', `Usuário: ${adminLogado?.usuario}`);
    sessionStorage.removeItem(CHAVE_SESSAO_ADMIN);
    adminLogado = null;
    mostrarLogin();
    document.getElementById('input-usuario').value = '';
    document.getElementById('input-senha').value = '';
    document.getElementById('btn-entrar').innerHTML = '<i class="fa-solid fa-lock-open"></i> Entrar no Painel';
    document.getElementById('btn-entrar').disabled = false;
}

// ──────────────────────────────────────────────────────────
//  NAVEGAÇÃO
// ──────────────────────────────────────────────────────────

const TITULOS_SECAO = {
    dashboard: 'Visão Geral',
    usuarios:  'Gerenciar Usuários',
    conteudo:  'Gerenciar Conteúdo',
    arquivos:  'Páginas & Arquivos',
    logs:      'Logs de Ações',
    sistema:   'Sistema'
};

function navegarPara(secao) {
    // Esconde todas as seções
    document.querySelectorAll('.secao').forEach(s => s.classList.remove('ativa'));
    // Ativa a seção alvo
    const alvo = document.getElementById('sec-' + secao);
    if (alvo) alvo.classList.add('ativa');

    // Atualiza nav items
    document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.toggle('active', n.dataset.secao === secao);
    });

    // Atualiza título do topbar
    document.getElementById('topbar-titulo').textContent = TITULOS_SECAO[secao] || secao;

    // Carrega dados da seção
    const loaders = {
        dashboard: carregarDashboard,
        usuarios:  carregarUsuarios,
        conteudo:  carregarConteudo,
        arquivos:  carregarArquivos,
        logs:      carregarLogs,
        sistema:   carregarSistema
    };
    if (loaders[secao]) loaders[secao]();

    // Fecha sidebar em mobile
    document.getElementById('sidebar').classList.remove('aberta');
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('aberta');
}

// ──────────────────────────────────────────────────────────
//  RELÓGIO
// ──────────────────────────────────────────────────────────

function iniciarRelogio() {
    function atualizar() {
        const agora = new Date();
        document.getElementById('topbar-relogio').textContent =
            agora.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
    }
    atualizar();
    setInterval(atualizar, 30000);
}

// ──────────────────────────────────────────────────────────
//  SEÇÃO: DASHBOARD
// ──────────────────────────────────────────────────────────

function carregarDashboard() {
    // Usuário ativo
    const nome = localStorage.getItem('codin_nome') || '(nenhum)';
    document.getElementById('dash-nome-usuario').textContent = nome;

    // Usuários gerenciados
    const usuarios = getUsuariosGerenciados();
    document.getElementById('dash-total-usuarios').textContent = usuarios.length;

    // Cursos ativos
    const configCursos = getConfigCursos();
    const ativos = Object.values(configCursos).filter(v => v).length;
    document.getElementById('dash-cursos-ativos').textContent = `${ativos}/${CURSOS_CONFIG.length}`;

    // Páginas desativadas
    const desativadas = getPaginasDesativadas();
    document.getElementById('dash-paginas-desativadas').textContent = desativadas.length;

    // Badge de banidos
    const banidos = usuarios.filter(u => u.status === 'banido').length;
    const badgeBanidos = document.getElementById('badge-usuarios-banidos');
    badgeBanidos.style.display = banidos > 0 ? 'inline' : 'none';
    badgeBanidos.textContent = banidos;

    // Info do usuário atual
    const nivel  = localStorage.getItem('codin_nivel') || '1';
    const xp     = localStorage.getItem('codin_xp') || '0';
    const saldo  = localStorage.getItem('codin_saldo') || '0';
    const vidas  = localStorage.getItem('codin_vidas') || '5';

    // 👇 AQUI: Trocando DroidCoins por Procyons 👇
    document.getElementById('dash-info-usuario').innerHTML = `
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap:12px;">
            ${infoBox('fa-user', 'Nome', nome, 'purple')}
            ${infoBox('fa-star', 'Nível', nivel, 'amber')}
            ${infoBox('fa-bolt', 'XP da Barra', xp, 'blue')}
            ${infoBox('fa-coins', 'Procyons', saldo, 'green')}
            ${infoBox('fa-heart', 'Vidas', vidas, 'red')}
        </div>
    `;

    // Logs recentes
    const logs = getLogs().slice(-5).reverse();
    document.getElementById('dash-logs-recentes').innerHTML = logs.length
        ? logs.map(renderizarLogItem).join('')
        : '<div class="empty-state"><i class="fa-solid fa-scroll"></i><p>Nenhuma ação ainda.</p></div>';
}

function infoBox(icon, label, value, cor) {
    return `
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:14px; display:flex; align-items:center; gap:10px;">
            <div class="stat-icon ${cor}" style="width:36px;height:36px;border-radius:8px;font-size:.9rem;">
                <i class="fa-solid ${icon}"></i>
            </div>
            <div>
                <div style="font-size:.72rem; color:var(--text-s); font-weight:600; text-transform:uppercase; letter-spacing:.5px;">${label}</div>
                <div style="font-size:1.1rem; font-weight:800; color:var(--text-p);">${value}</div>
            </div>
        </div>`;
}

// ──────────────────────────────────────────────────────────
//  SEÇÃO: USUÁRIOS
// ──────────────────────────────────────────────────────────

function carregarUsuarios() {
    // Usuário atual
    const nome  = localStorage.getItem('codin_nome')  || '—';
    const nivel = localStorage.getItem('codin_nivel') || '1';
    const xp    = localStorage.getItem('codin_xp')    || '0';
    const saldo = localStorage.getItem('codin_saldo') || '0';

    // 👇 AQUI: Trocando DroidCoins por Procyons 👇
    document.getElementById('tabela-usuario-atual').innerHTML = `
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(150px,1fr)); gap:12px;">
            ${infoBox('fa-user', 'Nome', nome, 'purple')}
            ${infoBox('fa-star', 'Nível', nivel, 'amber')}
            ${infoBox('fa-bolt', 'XP Barra', xp, 'blue')}
            ${infoBox('fa-coins', 'Procyons', saldo, 'green')}
        </div>`;

    // Usuários gerenciados
    const usuarios = getUsuariosGerenciados();
    const tbody = document.getElementById('tabela-usuarios-gerenciados');
    const empty = document.getElementById('empty-usuarios');

    if (usuarios.length === 0) {
        tbody.innerHTML = '';
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';
    tbody.innerHTML = usuarios.map((u, i) => {
        const xpTotal = ((u.nivel - 1) * 2000) + u.xp;
        const statusBadge = u.status === 'banido'
            ? '<span class="badge badge-red"><i class="fa-solid fa-ban"></i> Banido</span>'
            : '<span class="badge badge-green"><i class="fa-solid fa-check"></i> Ativo</span>';
        return `
            <tr>
                <td><strong>#${i + 1}</strong></td>
                <td>
                    <strong>${escHtml(u.nome)}</strong>
                    <div style="font-size:.72rem; color:var(--text-s);">${u.titulo}</div>
                </td>
                <td><span class="badge badge-purple">Lvl ${u.nivel}</span></td>
                <td style="font-family:monospace; font-size:.82rem;">${formatarNum(xpTotal)} XP</td>
                <td>${statusBadge}</td>
                <td>
                    <div style="display:flex; gap:6px;">
                        <button class="btn btn-ghost btn-sm" onclick="abrirModalEditarUsuario('${u.id}')" title="Editar">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="btn btn-sm ${u.status === 'banido' ? 'btn-success' : 'btn-warning'}"
                            onclick="toggleBanirUsuario('${u.id}')" title="${u.status === 'banido' ? 'Desbanir' : 'Banir'}">
                            <i class="fa-solid ${u.status === 'banido' ? 'fa-user-check' : 'fa-user-slash'}"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="confirmarDeletar('${u.id}')" title="Remover">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>`;
    }).join('');
}

function abrirModalNovoUsuario() {
    document.getElementById('modal-usuario-id').value = '';
    document.getElementById('modal-usuario-titulo').textContent = 'Adicionar Usuário';
    document.getElementById('mu-nome').value  = '';
    document.getElementById('mu-nivel').value = 1;
    document.getElementById('mu-xp').value    = 0;
    document.getElementById('mu-titulo').value = 'Iniciante';
    document.getElementById('mu-aura').value  = 'none';
    document.getElementById('mu-status').value = 'ativo';
    abrirModal('modal-usuario');
}

function abrirModalEditarUsuario(id) {
    const usuarios = getUsuariosGerenciados();
    const u = usuarios.find(x => x.id === id);
    if (!u) return;

    document.getElementById('modal-usuario-id').value = id;
    document.getElementById('modal-usuario-titulo').textContent = 'Editar Usuário';
    document.getElementById('mu-nome').value   = u.nome;
    document.getElementById('mu-nivel').value  = u.nivel;
    document.getElementById('mu-xp').value     = u.xp;
    document.getElementById('mu-titulo').value = u.titulo;
    document.getElementById('mu-aura').value   = u.aura || 'none';
    document.getElementById('mu-status').value = u.status || 'ativo';
    abrirModal('modal-usuario');
}

function salvarUsuario() {
    const nome   = document.getElementById('mu-nome').value.trim();
    const nivel  = parseInt(document.getElementById('mu-nivel').value) || 1;
    const xp     = parseInt(document.getElementById('mu-xp').value)    || 0;
    const titulo = document.getElementById('mu-titulo').value;
    const aura   = document.getElementById('mu-aura').value;
    const status = document.getElementById('mu-status').value;

    if (!nome) { toast('Informe um nome para o usuário.', 'warning'); return; }

    const idExistente = document.getElementById('modal-usuario-id').value;
    const usuarios = getUsuariosGerenciados();

    if (idExistente) {
        const idx = usuarios.findIndex(u => u.id === idExistente);
        if (idx >= 0) {
            usuarios[idx] = { ...usuarios[idx], nome, nivel, xp, titulo, aura, status };
            registrarLog('success', 'Usuário editado', `ID: ${idExistente} | Nome: ${nome}`);
        }
    } else {
        const novo = { id: 'adm_' + Date.now(), nome, nivel, xp, titulo, aura, status, avatar: gerarAvatarUrl(nome) };
        usuarios.push(novo);
        registrarLog('success', 'Usuário adicionado', `Nome: ${nome} | Nível: ${nivel}`);
    }

    salvarUsuariosGerenciados(usuarios);
    fecharModal('modal-usuario');
    carregarUsuarios();
    toast('Usuário salvo com sucesso!', 'success');
}

function abrirModalEditarUsuarioAtual() {
    document.getElementById('ua-nome').value  = localStorage.getItem('codin_nome')  || '';
    document.getElementById('ua-nivel').value = localStorage.getItem('codin_nivel') || 1;
    document.getElementById('ua-xp').value    = localStorage.getItem('codin_xp')    || 0;
    document.getElementById('ua-saldo').value = localStorage.getItem('codin_saldo') || 500;
    abrirModal('modal-usuario-atual');
}

function salvarUsuarioAtual() {
    const nome  = document.getElementById('ua-nome').value.trim();
    const nivel = parseInt(document.getElementById('ua-nivel').value) || 1;
    const xp    = parseInt(document.getElementById('ua-xp').value)    || 0;
    const saldo = parseInt(document.getElementById('ua-saldo').value) || 0;

    if (!nome) { toast('Informe um nome.', 'warning'); return; }

    localStorage.setItem('codin_nome',  nome);
    localStorage.setItem('codin_nivel', nivel);
    localStorage.setItem('codin_xp',    xp);
    localStorage.setItem('codin_saldo', saldo);

    registrarLog('warning', 'Dados do usuário ativo alterados via admin',
        `Nome: ${nome} | Nível: ${nivel} | XP: ${xp} | Procyons: ${saldo}`);

    fecharModal('modal-usuario-atual');
    carregarUsuarios();
    carregarDashboard();
    toast('Usuário atual atualizado!', 'success');
}

function toggleBanirUsuario(id) {
    const usuarios = getUsuariosGerenciados();
    const u = usuarios.find(x => x.id === id);
    if (!u) return;

    u.status = u.status === 'banido' ? 'ativo' : 'banido';
    salvarUsuariosGerenciados(usuarios);

    const acao = u.status === 'banido' ? 'Usuário banido' : 'Usuário desbanido';
    registrarLog('warning', acao, `Nome: ${u.nome}`);
    carregarUsuarios();
    toast(`${acao}: ${u.nome}`, u.status === 'banido' ? 'warning' : 'success');
}

let _deletarId = null;

function confirmarDeletar(id) {
    const u = getUsuariosGerenciados().find(x => x.id === id);
    if (!u) return;

    _deletarId = id;
    document.getElementById('modal-conf-msg').textContent =
        `Tem certeza que deseja remover o usuário "${u.nome}"? Esta ação não pode ser desfeita.`;
    document.getElementById('btn-conf-confirmar').onclick = executarDeletar;
    abrirModal('modal-confirmar');
}

function executarDeletar() {
    if (!_deletarId) return;
    const usuarios = getUsuariosGerenciados();
    const u = usuarios.find(x => x.id === _deletarId);
    const novos = usuarios.filter(x => x.id !== _deletarId);
    salvarUsuariosGerenciados(novos);

    if (u) registrarLog('danger', 'Usuário removido', `Nome: ${u.nome}`);
    fecharModal('modal-confirmar');
    _deletarId = null;
    carregarUsuarios();
    toast('Usuário removido.', 'success');
}

// ──────────────────────────────────────────────────────────
//  SEÇÃO: CONTEÚDO
// ──────────────────────────────────────────────────────────

function carregarConteudo() {
    const configCursos   = getConfigCursos();
    const configFeatures = getConfigFeatures();

    // Cursos
    document.getElementById('lista-cursos-toggle').innerHTML = CURSOS_CONFIG.map(c => {
        const ativo = configCursos[c.id] !== false; // padrão: ativo
        return `
            <div class="toggle-row">
                <div class="toggle-info">
                    <div class="title"><i class="fa-solid ${c.icone}" style="color:var(--accent);margin-right:6px;"></i>${c.nome}</div>
                    <div class="desc">${c.nivel}</div>
                </div>
                <label class="switch">
                    <input type="checkbox" ${ativo ? 'checked' : ''} onchange="toggleCurso('${c.id}', this.checked)">
                    <span class="slider"></span>
                </label>
            </div>`;
    }).join('');

    // Features
    document.getElementById('lista-features-toggle').innerHTML = FEATURES_CONFIG.map(f => {
        const ativo = configFeatures[f.id] !== false;
        return `
            <div class="toggle-row">
                <div class="toggle-info">
                    <div class="title">${f.nome}</div>
                    <div class="desc">${f.desc}</div>
                </div>
                <label class="switch">
                    <input type="checkbox" ${ativo ? 'checked' : ''} onchange="toggleFeature('${f.id}', this.checked)">
                    <span class="slider"></span>
                </label>
            </div>`;
    }).join('');

    // Anúncio
    let anuncio = {};
    try { anuncio = JSON.parse(localStorage.getItem('codin_admin_anuncio')) || {}; } catch (e) {}
    if (anuncio.texto)  document.getElementById('anuncio-texto').value = anuncio.texto;
    if (anuncio.tipo)   document.getElementById('anuncio-tipo').value  = anuncio.tipo;
    if (anuncio.ativo !== undefined) document.getElementById('anuncio-ativo').value = String(anuncio.ativo);

    if (anuncio.texto && anuncio.ativo) previewAnuncio();
}

function toggleCurso(id, ativo) {
    const config = getConfigCursos();
    config[id] = ativo;
    localStorage.setItem('codin_admin_config_cursos', JSON.stringify(config));
    const nome = CURSOS_CONFIG.find(c => c.id === id)?.nome || id;
    registrarLog(ativo ? 'success' : 'warning', `Curso ${ativo ? 'ativado' : 'desativado'}`, nome);
    toast(`"${nome}" ${ativo ? 'ativado' : 'desativado'}.`, ativo ? 'success' : 'warning');
}

function toggleFeature(id, ativo) {
    const config = getConfigFeatures();
    config[id] = ativo;
    localStorage.setItem('codin_admin_config_features', JSON.stringify(config));
    const nome = FEATURES_CONFIG.find(f => f.id === id)?.nome || id;
    registrarLog(ativo ? 'success' : 'warning', `Feature ${ativo ? 'ativada' : 'desativada'}`, nome);
    toast(`"${nome}" ${ativo ? 'ativada' : 'desativada'}.`, ativo ? 'success' : 'warning');
}

function salvarAnuncio() {
    const texto = document.getElementById('anuncio-texto').value.trim();
    const tipo  = document.getElementById('anuncio-tipo').value;
    const ativo = document.getElementById('anuncio-ativo').value === 'true';

    localStorage.setItem('codin_admin_anuncio', JSON.stringify({ texto, tipo, ativo }));
    registrarLog('info', `Anúncio ${ativo ? 'publicado' : 'salvo (inativo)'}`, texto.slice(0, 60));
    toast('Anúncio salvo!', 'success');
    if (ativo) previewAnuncio();
}

function previewAnuncio() {
    const texto = document.getElementById('anuncio-texto').value.trim();
    const tipo  = document.getElementById('anuncio-tipo').value;
    const box   = document.getElementById('anuncio-preview-box');

    if (!texto) { box.innerHTML = ''; return; }

    const icones = { info: 'fa-circle-info', success: 'fa-circle-check', warning: 'fa-triangle-exclamation', danger: 'fa-circle-exclamation' };
    box.innerHTML = `
        <div class="anuncio-preview ${tipo}">
            <i class="fa-solid ${icones[tipo] || 'fa-circle-info'}"></i>
            ${escHtml(texto)}
        </div>`;
}

// ──────────────────────────────────────────────────────────
//  SEÇÃO: ARQUIVOS / PÁGINAS
// ──────────────────────────────────────────────────────────

function carregarArquivos() {
    const desativadas = getPaginasDesativadas();

    // Páginas
    document.getElementById('lista-paginas').innerHTML = PAGINAS_DO_SITE.map(p => {
        const emManutencao = desativadas.includes(p.id);
        return `
            <div class="file-item">
                <div class="file-info">
                    <i class="fa-solid ${p.icone} file-icon"></i>
                    <div>
                        <div class="file-name">${p.nome}</div>
                        <div class="file-path">${p.path}</div>
                    </div>
                </div>
                <div class="file-actions">
                    <span class="badge ${emManutencao ? 'badge-red' : 'badge-green'}">
                        ${emManutencao ? '🔧 Manutenção' : '✅ Online'}
                    </span>
                    <label class="switch" title="${emManutencao ? 'Reativar página' : 'Colocar em manutenção'}">
                        <input type="checkbox" ${!emManutencao ? 'checked' : ''}
                            onchange="togglePagina('${p.id}', '${escHtml(p.nome)}', this.checked)">
                        <span class="slider"></span>
                    </label>
                    <a href="${p.path}" target="_blank" class="btn btn-ghost btn-sm" title="Abrir página">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>`;
    }).join('');

    // Arquivos estáticos (informativos)
    document.getElementById('lista-arquivos-estaticos').innerHTML = ARQUIVOS_ESTATICOS.map(a => {
        const cor = a.tipo === 'JS' ? 'badge-amber' : 'badge-purple';
        return `
            <div class="file-item">
                <div class="file-info">
                    <i class="fa-solid fa-file-code file-icon"></i>
                    <div>
                        <div class="file-name">${a.nome}</div>
                        <div class="file-path">${a.path} — ${a.desc}</div>
                    </div>
                </div>
                <div class="file-actions">
                    <span class="badge ${cor}">${a.tipo}</span>
                </div>
            </div>`;
    }).join('');
}

function togglePagina(id, nome, online) {
    const desativadas = getPaginasDesativadas();
    let novas;

    if (online) {
        novas = desativadas.filter(p => p !== id);
        registrarLog('success', 'Página reativada', nome);
        toast(`"${nome}" está online.`, 'success');
    } else {
        novas = [...new Set([...desativadas, id])];
        registrarLog('warning', 'Página em manutenção', nome);
        toast(`"${nome}" colocada em manutenção.`, 'warning');
    }

    localStorage.setItem('codin_admin_paginas_desativadas', JSON.stringify(novas));

    // Atualiza o badge no dashboard
    document.getElementById('dash-paginas-desativadas').textContent = novas.length;
}

// ──────────────────────────────────────────────────────────
//  SEÇÃO: LOGS
// ──────────────────────────────────────────────────────────

function carregarLogs() {
    const logs = getLogs().reverse();
    const lista = document.getElementById('lista-logs');
    const empty = document.getElementById('empty-logs');

    if (logs.length === 0) {
        lista.innerHTML = '';
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';
    lista.innerHTML = logs.map(renderizarLogItem).join('');
}

function renderizarLogItem(log) {
    const dot = { info: 'info', success: 'success', warning: 'warning', danger: 'danger' }[log.tipo] || 'info';
    return `
        <div class="log-item">
            <div class="log-dot ${dot}"></div>
            <div>
                <div class="log-acao">${escHtml(log.acao)}</div>
                <div class="log-detalhe">${escHtml(log.detalhe || '')}</div>
            </div>
            <div class="log-hora">${formatarDataLog(log.ts)}</div>
        </div>`;
}

function limparLogs() {
    document.getElementById('modal-conf-msg').textContent =
        'Isso apagará todo o histórico de ações do painel. Deseja continuar?';
    document.getElementById('btn-conf-confirmar').onclick = () => {
        localStorage.removeItem('codin_admin_logs');
        fecharModal('modal-confirmar');
        carregarLogs();
        toast('Logs limpos.', 'success');
    };
    abrirModal('modal-confirmar');
}

// ──────────────────────────────────────────────────────────
//  SEÇÃO: SISTEMA
// ──────────────────────────────────────────────────────────

function carregarSistema() {
    const devMode = localStorage.getItem('codin_dev_mode') === 'true';
    document.getElementById('toggle-devmode').checked = devMode;
}

function toggleDevModeGlobal(ativo) {
    localStorage.setItem('codin_dev_mode', String(ativo));
    registrarLog('info', `Dev mode ${ativo ? 'ativado' : 'desativado'}`, 'Modo desenvolvedor global');
    toast(`Dev mode ${ativo ? 'ativado' : 'desativado'}.`, 'info');
}

function exportarDados() {
    const dados = {};
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        dados[chave] = localStorage.getItem(chave);
    }

    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `codindev_backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);

    registrarLog('info', 'Dados exportados', `Backup em JSON gerado`);
    toast('Dados exportados com sucesso!', 'success');
}

function importarDados(evento) {
    if (adminLogado?.role === 'moderador') {
        toast('Sem permissão para importar dados.', 'danger'); return;
    }

    const arquivo = evento.target.files[0];
    if (!arquivo) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const dados = JSON.parse(e.target.result);
            document.getElementById('modal-conf-msg').textContent =
                `Isso sobrescreverá ${Object.keys(dados).length} chaves no localStorage. Continuar?`;
            document.getElementById('btn-conf-confirmar').onclick = () => {
                Object.entries(dados).forEach(([k, v]) => localStorage.setItem(k, v));
                registrarLog('warning', 'Dados importados de backup JSON', `${Object.keys(dados).length} chaves restauradas`);
                fecharModal('modal-confirmar');
                carregarDashboard();
                toast('Dados importados com sucesso!', 'success');
            };
            abrirModal('modal-confirmar');
        } catch (err) {
            toast('Arquivo JSON inválido.', 'danger');
        }
    };
    reader.readAsText(arquivo);
    evento.target.value = '';
}

function confirmarResetUsuario() {
    document.getElementById('modal-conf-msg').textContent =
        'Isso apagará TODO o progresso do usuário ativo neste navegador (XP, moedas, missões, inventário). Continuar?';
    document.getElementById('btn-conf-confirmar').onclick = executarResetUsuario;
    abrirModal('modal-confirmar');
}

function executarResetUsuario() {
    const nome = localStorage.getItem('codin_nome') || '(desconhecido)';
    const chaves = Object.keys(localStorage).filter(k => k.startsWith('codin_') && !k.startsWith('codin_admin_'));
    chaves.forEach(k => localStorage.removeItem(k));

    registrarLog('danger', 'Progresso do usuário resetado via admin', `Usuário: ${nome}`);
    fecharModal('modal-confirmar');
    carregarDashboard();
    carregarUsuarios();
    toast('Usuário resetado.', 'warning');
}

function confirmarResetTotal() {
    if (adminLogado?.role === 'moderador') {
        toast('Sem permissão para executar reset total.', 'danger'); return;
    }

    document.getElementById('modal-conf-msg').innerHTML =
        '<strong style="color:var(--danger)">⚠️ ATENÇÃO:</strong> Isso apagará absolutamente TUDO: dados do usuário, usuários gerenciados, configurações admin, anúncios, logs e flags de manutenção. Esta ação é irreversível!';
    document.getElementById('btn-conf-confirmar').onclick = executarResetTotal;
    abrirModal('modal-confirmar');
}

function executarResetTotal() {
    localStorage.clear();
    registrarLog('danger', 'RESET TOTAL do sistema executado', `Admin: ${adminLogado?.usuario}`);
    fecharModal('modal-confirmar');
    carregarDashboard();
    toast('Reset total executado. Todos os dados foram apagados.', 'danger');
}

// ──────────────────────────────────────────────────────────
//  LOGS — ARMAZENAMENTO
// ──────────────────────────────────────────────────────────

function getLogs() {
    try { return JSON.parse(localStorage.getItem('codin_admin_logs')) || []; } catch (e) { return []; }
}

function registrarLog(tipo, acao, detalhe) {
    const logs = getLogs();
    logs.push({ ts: Date.now(), tipo, acao, detalhe: detalhe || '', admin: adminLogado?.usuario || '—' });
    // Mantém apenas os últimos 200 logs
    if (logs.length > 200) logs.splice(0, logs.length - 200);
    localStorage.setItem('codin_admin_logs', JSON.stringify(logs));
}

// ──────────────────────────────────────────────────────────
//  GETTERS/SETTERS DO ESTADO (localStorage)
// ──────────────────────────────────────────────────────────

function getUsuariosGerenciados() {
    try { return JSON.parse(localStorage.getItem('codin_admin_usuarios')) || []; } catch (e) { return []; }
}

function salvarUsuariosGerenciados(lista) {
    localStorage.setItem('codin_admin_usuarios', JSON.stringify(lista));
}

function getPaginasDesativadas() {
    try { return JSON.parse(localStorage.getItem('codin_admin_paginas_desativadas')) || []; } catch (e) { return []; }
}

function getConfigCursos() {
    try { return JSON.parse(localStorage.getItem('codin_admin_config_cursos')) || {}; } catch (e) { return {}; }
}

function getConfigFeatures() {
    try { return JSON.parse(localStorage.getItem('codin_admin_config_features')) || {}; } catch (e) { return {}; }
}

// ──────────────────────────────────────────────────────────
//  UI HELPERS
// ──────────────────────────────────────────────────────────

function abrirModal(id) {
    document.getElementById(id).classList.add('aberto');
}

function fecharModal(id) {
    document.getElementById(id).classList.remove('aberto');
}

// Fecha modal ao clicar no backdrop
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('aberto');
    }
});

function toast(msg, tipo = 'info') {
    const container = document.getElementById('toast-container');
    const el = document.createElement('div');
    el.className = `toast ${tipo}`;

    const icones = { success: 'fa-circle-check', danger: 'fa-circle-exclamation', warning: 'fa-triangle-exclamation', info: 'fa-circle-info' };
    el.innerHTML = `<i class="fa-solid ${icones[tipo] || 'fa-circle-info'}"></i> ${escHtml(msg)}`;
    container.appendChild(el);

    setTimeout(() => el.remove(), 3500);
}

function escHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function formatarNum(n) {
    n = Number(n) || 0;
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
    if (n >= 1_000)     return (n / 1_000).toFixed(1) + 'k';
    return n.toLocaleString('pt-BR');
}

function formatarDataLog(ts) {
    if (!ts) return '—';
    return new Date(ts).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
}

function gerarAvatarUrl(nome) {
    const seed = encodeURIComponent(nome || 'user');
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
}