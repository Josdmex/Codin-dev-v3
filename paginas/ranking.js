/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            BANCO DE DADOS DE ITENS
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
const dbItens = [
    { id: 1, tipo: "cabeca", img: "../equipados/coroa_equip.png" },
    { id: 2, tipo: "cabeca", img: "../equipados/oculos_equip.png" },
    { id: 3, tipo: "cabeca", img: "../equipados/bone_equip.png" },
    { id: 4, tipo: "cabeca", img: "../equipados/cartola_equip.png" },
    { id: 5, tipo: "corpo", img: "../equipados/python_equip.png" },
    { id: 6, tipo: "corpo", img: "../equipados/moletom_equip.png" },
    { id: 7, tipo: "corpo", img: "../equipados/react_equip.png" },
    { id: 8, tipo: "corpo", img: "../equipados/blazer_equip.png" },
    { id: 9, tipo: "acessorios", img: "../equipados/katana_equip.png" },
    { id: 12, tipo: "acessorios", img: "../equipados/panda_equip.png" },
    { id: 15, tipo: "exoticos", img: "../equipados/anjo_equip.png" },
    { id: 16, tipo: "exoticos", img: "../equipados/darkasa_equip.png" }
];

function itemAleatorio(tipo) {
    const lista = dbItens.filter(i => i.tipo === tipo);
    return lista.length ? lista[Math.floor(Math.random() * lista.length)].id : null;
}

function gerarRoupaBot() {
    return {
        cabeca: Math.random() > 0.5 ? itemAleatorio('cabeca') : null,
        corpo: itemAleatorio('corpo'),
        acessorios: Math.random() > 0.7 ? itemAleatorio('acessorios') : null,
        exoticos: Math.random() > 0.8 ? itemAleatorio('exoticos') : null
    };
}

const bots = [
    { id: 'bot1', nome: "André", nivel: 120, xpBarra: 500, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ninja", titulo: "Mestre CSS", roupa: gerarRoupaBot(), aura: 'purple' },
    { id: 'bot2', nome: "Luiza", nivel: 85, xpBarra: 1200, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Master", titulo: "Bug Hunter", roupa: gerarRoupaBot(), aura: 'none' },
    { id: 'bot3', nome: "Martins", nivel: 45, xpBarra: 100, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pixel", titulo: "Artista Digital", roupa: gerarRoupaBot(), aura: 'none' },
    { id: 'bot4', nome: "João", nivel: 200, xpBarra: 0, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Java", titulo: "Backend God", roupa: gerarRoupaBot(), aura: 'gold' }
];

let rankingGlobal = [];

document.addEventListener('DOMContentLoaded', () => {
    gerarRanking();
});

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                GERAÇÃO DA TABELA
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function gerarRanking() {
    const lista = document.getElementById('lista-ranking');
    if(!lista) return;
    lista.innerHTML = ''; 
    rankingGlobal = []; 

    const meuNome = localStorage.getItem('codin_nome') || "Você";
    const meuNivel = parseInt(localStorage.getItem('codin_nivel')) || 1;
    const meuXpBarra = parseInt(localStorage.getItem('codin_xp')) || 0;
    const minhaFoto = localStorage.getItem('codin_pfp') || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"; //vou colocar umas fotos do codin futuramente
    const minhaAura = localStorage.getItem('codin_aura_navbar') || 'none';
    
    const meuTituloId = localStorage.getItem('codin_titulo') || "Iniciante";
    const dicionarioTitulos = {
        "Iniciante": "Iniciante em Código",
        "PrimeiraCoroa": "Primeira Coroa",
        "MestrePython": "Mestre Python",
        "MestreLogica": "Mestre da Lógica",
        "LendaViva": "Lenda Implacável"
    };
    const meuTituloTexto = dicionarioTitulos[meuTituloId] || meuTituloId;
    
    let minhaRoupa = {};
    try { minhaRoupa = JSON.parse(localStorage.getItem('codin_roupa_atual')) || {}; } catch(e) {}

    const usuarioReal = {
        id: 'user_real',
        nome: meuNome, nivel: meuNivel, xpBarra: meuXpBarra, 
        avatar: minhaFoto, titulo: meuTituloTexto, roupa: minhaRoupa,
        aura: minhaAura, isMe: true
    };

    // Inclui usuários gerenciados pelo painel admin (exceto banidos)
    let usuariosAdmin = [];
    try {
        const raw = JSON.parse(localStorage.getItem('codin_admin_usuarios')) || [];
        usuariosAdmin = raw
            .filter(u => u.status !== 'banido')
            .map(u => ({
                id:       u.id,
                nome:     u.nome,
                nivel:    u.nivel    || 1,
                xpBarra:  u.xp       || 0,
                avatar:   u.avatar   || ('https://api.dicebear.com/7.x/avataaars/svg?seed=' + encodeURIComponent(u.nome)),
                titulo:   u.titulo ? (dicionarioTitulos[u.titulo] || u.titulo) : 'Iniciante em Código', // 👈 Título do admin corrigido também
                roupa:    u.roupa    || {},
                aura:     u.aura     || 'none'
            }));
    } catch (e) {}

    let listaCompleta = [...bots, ...usuariosAdmin, usuarioReal];

    rankingGlobal = listaCompleta.map(user => ({
        ...user, xpTotal: ((user.nivel - 1) * 2000) + user.xpBarra
    })).sort((a, b) => b.xpTotal - a.xpTotal);

    rankingGlobal.forEach((user, index) => {
        const posicao = index + 1;
        if(user.isMe) atualizarEstatisticasLaterais(posicao, user.xpTotal);

        let iconePosicao = `#${posicao}`;
        if (posicao === 1) iconePosicao = `<i class="fa-solid fa-trophy" style="color: #FFD700;"></i>`;
        if (posicao === 2) iconePosicao = `<i class="fa-solid fa-medal" style="color: #C0C0C0;"></i>`;
        if (posicao === 3) iconePosicao = `<i class="fa-solid fa-medal" style="color: #CD7F32;"></i>`;

        let classeAuraRow = '';
        if (user.aura === 'red') classeAuraRow = 'animacao-vermelho';
        else if (user.aura === 'gold') classeAuraRow = 'animacao-dourado';
        else if (user.aura === 'purple') classeAuraRow = 'animacao-roxo';

        const tr = document.createElement('tr');
        
        tr.className = (user.isMe ? 'row-me ' : '') + classeAuraRow;
        if (user.aura !== 'none') tr.setAttribute('data-aura', user.aura);

        tr.innerHTML = `
            <td><span class="rank-pos">${iconePosicao}</span></td>
            <td>
                <div class="user-cell">
                    <img src="${user.avatar}" class="rank-avatar">
                    <strong>${user.isMe ? user.nome + ' (Você)' : user.nome}</strong>
                </div>
            </td>
            <td><span class="lvl-badge">Lvl ${user.nivel}</span></td>
            <td style="color: #64748b; font-family: monospace;">${formatarNumero(user.xpTotal)} XP</td>
            <td><button class="btn-view-profile" onclick="verPerfilRanking(${index})"><i class="fa-solid fa-eye"></i></button></td>
        `;
        lista.appendChild(tr);
    });

    setTimeout(aplicarAurasNaTabela, 100);
}

function atualizarEstatisticasLaterais(pos, xp) {
    const elRank = document.getElementById('user-rank');
    const elXp = document.getElementById('user-xp');
    if(elRank) elRank.innerText = `#${pos}`;
    if(elXp) elXp.innerText = formatarNumero(xp);
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            VISUALIZAÇÃO DE PERFIL
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function verPerfilRanking(index) {
    const user = rankingGlobal[index];
    const modal = document.getElementById('modal-ver-perfil');
    if(!modal || !user) return;

    document.getElementById('view-img-avatar').src = user.avatar;
    document.getElementById('view-nome').innerText = user.nome;
    document.getElementById('view-nivel-badge').innerHTML = `<i class="fa-solid fa-star"></i> Nível ${user.nivel}`;
    document.getElementById('view-xp').innerText = formatarNumero(user.xpTotal);
    document.getElementById('view-titulo').innerText = user.titulo;
    
    const moedas = user.isMe ? (parseInt(localStorage.getItem('codin_saldo')) || 500) : formatarNumero(user.nivel * 50 + Math.floor(Math.random() * 2000));
    const streakReal = user.isMe ? (parseInt(localStorage.getItem('codin_streak')) || 0) : Math.floor(Math.random() * 30);
    const streak = streakReal + (streakReal === 1 ? " Dia" : " Dias");
    
    document.getElementById('view-moedas').innerText = typeof moedas === 'number' ? formatarNumero(moedas) : moedas;
    document.getElementById('view-streak').innerText = streak;

    renderizarVisualCompleto(user);
    aplicarAuraBadgeModal(user);
    modal.style.display = 'flex';
}

function renderizarVisualCompleto(user) {
    const stage = document.getElementById('view-mascot-stage');
    stage.classList.remove('aura-purple', 'aura-gold', 'aura-red');
    stage.querySelectorAll('.js-aura-effect').forEach(el => el.remove());

    if (user.aura && user.aura !== 'none') {
        stage.classList.add(`aura-${user.aura}`);
        
        if (user.aura === 'red') {
            const ring = document.createElement('div'); ring.className = 'js-aura-effect aura-ring-red';
            stage.insertBefore(ring, stage.firstChild);
            const eyeL = document.createElement('div'); eyeL.className = 'js-aura-effect aura-eye-beam left';
            stage.appendChild(eyeL);
            const eyeR = document.createElement('div'); eyeR.className = 'js-aura-effect aura-eye-beam right';
            stage.appendChild(eyeR);
        }
        else if (user.aura === 'gold') {
            const outR = document.createElement('div'); outR.className = 'js-aura-effect aura-ring-gold-outer';
            stage.insertBefore(outR, stage.firstChild);
            const inR = document.createElement('div'); inR.className = 'js-aura-effect aura-ring-gold-inner';
            stage.insertBefore(inR, stage.firstChild);
        }
        else if (user.aura === 'purple') {
            const orb = document.createElement('div'); orb.className = 'js-aura-effect aura-orb-purple';
            stage.insertBefore(orb, stage.firstChild);
        }
    }

    const layers = {
        cabeca: document.getElementById('view-layer-cabeca'),
        corpo: document.getElementById('view-layer-corpo'),
        acessorios: document.getElementById('view-layer-acessorios'),
        exoticos: document.getElementById('view-layer-exoticos')
    };

    for (let key in layers) {
        layers[key].style.display = 'none';
        layers[key].src = '';
        layers[key].style.cssText = 'display: none';
    }

    if (user.roupa) {
        for (let categoria in user.roupa) {
            const idItem = user.roupa[categoria];
            const el = layers[categoria];
            
            if (idItem && el) {
                const itemDb = dbItens.find(i => i.id === idItem);
                if (itemDb) {
                    el.src = itemDb.img;
                    el.style.display = 'block';

                    // --- CORREÇÃO DE ASAS ---
                    
                    // ID 16: Asa Dark (NA FRENTE DO BONECO)
                    if (itemDb.id === 16) { 
                        el.style.cssText = `
                            display: block !important;
                            z-index: 39 !important; /* Força ficar na frente */
                            transform-origin: center center !important;
                            /* MESMOS VALORES DO PROFILE.JS */
                            transform: scale(1.2) translate(-5px, -16px) !important; 
                        `;
                    }
                    // ID 15: Asa Anjo (ATRÁS DO BONECO)
                    else if (itemDb.id === 15) { 
                        el.style.cssText = `
                            display: block !important;
                            z-index: 1 !important; /* Força ficar atrás */
                            transform: scale(1.0) !important;
                        `;
                    }
                }
            }
        }
    }
}

function fecharModalPerfil() {
    document.getElementById('modal-ver-perfil').style.display = 'none';
    if (intervaloParticulasModal) clearInterval(intervaloParticulasModal);
}

function formatarNumero(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toLocaleString('pt-BR');
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            AURA DA BADGE DO MODAL
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
let intervaloParticulasModal = null;

function aplicarAuraBadgeModal(user) {
    const badge = document.getElementById('view-nivel-badge');
    if (!badge) return;

    if (intervaloParticulasModal) clearInterval(intervaloParticulasModal);
    badge.classList.remove('animacao-roxo', 'animacao-dourado', 'animacao-vermelho');
    badge.querySelectorAll('.particula-xp').forEach(p => p.remove());

    let config = null;
    
    if (user.aura === 'red') {
        config = { tipo: 'fumaca', cor: 'red', taxa: 60, tamanhoMin: 4, tamanhoMax: 5 };
        badge.classList.add('animacao-vermelho');
    } else if (user.aura === 'gold') {
        config = { tipo: 'normal', cor: '#FFD700', taxa: 100, tamanhoMin: 2, tamanhoMax: 4 };
        badge.classList.add('animacao-dourado');
    } else if (user.aura === 'purple') {
        config = { tipo: 'normal', cor: '#e9d8ecff', taxa: 200, tamanhoMin: 2, tamanhoMax: 4 };
        badge.classList.add('animacao-roxo');
    } else {
        return; 
    }

    if (typeof criarParticula === 'function') {
        intervaloParticulasModal = setInterval(() => {
            if (document.getElementById('modal-ver-perfil').style.display === 'flex') {
                criarParticula(badge, config);
            }
        }, config.taxa);
    }
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            PARTÍCULAS DIRETO NA TABELA
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
let intervalosTabelaRanking = [];

function aplicarAurasNaTabela() {
    intervalosTabelaRanking.forEach(clearInterval);
    intervalosTabelaRanking = [];
    const rowsComAura = document.querySelectorAll('tr[data-aura]');

    rowsComAura.forEach(row => {
        const aura = row.getAttribute('data-aura');
        if (!aura) return;

        let config = null;
        
        if (aura === 'red') config = { tipo: 'fumaca', cor: 'red', taxa: 120, tamanhoMin: 3, tamanhoMax: 5 };
        else if (aura === 'gold') config = { tipo: 'normal', cor: '#FFD700', taxa: 200, tamanhoMin: 2, tamanhoMax: 4 };
        else if (aura === 'purple') config = { tipo: 'normal', cor: '#e9d8ecff', taxa: 350, tamanhoMin: 2, tamanhoMax: 4 };

        if (config && typeof criarParticula === 'function') {
            const intervalo = setInterval(() => {
                criarParticula(row, config);
            }, config.taxa);
            
            intervalosTabelaRanking.push(intervalo);
        }
    });
}