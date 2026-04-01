/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            BANCO DE DADOS DE ITENS
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
const itensLojaDatabase = [
    { id: 1, categoria: "cabeca", imagem: "../equipados/coroa_equip.png", efeito: null },
    { id: 2, categoria: "cabeca", imagem: "../equipados/oculos_equip.png", efeito: null },
    { id: 3, categoria: "cabeca", imagem: "../equipados/bone_equip.png", efeito: null },
    { id: 4, categoria: "cabeca", imagem: "../equipados/cartola_equip.png", efeito: null },
    { id: 5, categoria: "corpo", imagem: "../equipados/python_equip.png", efeito: null },
    { id: 6, categoria: "corpo", imagem: "../equipados/moletom_equip.png", efeito: null },
    { id: 7, categoria: "corpo", imagem: "../equipados/react_equip.png", efeito: null },
    { id: 8, categoria: "corpo", imagem: "../equipados/blazer_equip.png", efeito: null },
    { id: 9, categoria: "acessorios", imagem: "../equipados/katana_equip.png", efeito: null },
    { id: 12, categoria: "acessorios", imagem: "../equipados/panda_equip.png", efeito: null },
    { id: 15, categoria: "exoticos", imagem: "../equipados/anjo_equip.png", efeito: "penas" },
    { id: 16, categoria: "exoticos", imagem: "../equipados/darkasa_equip.png", efeito: "penas-dark" }
];

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                 INICIALIZAÇÃO 
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('profile-preloader');
    if(loader) loader.classList.remove('hidden');

    carregarDadosUsuario();
    carregarMascotePerfil();
    configurarUploadFoto();
    
    const auraSalva = localStorage.getItem('codin_aura_navbar') || 'none';
    if(auraSalva) {
        setAura(auraSalva);
    }

    setTimeout(() => {
        if(loader) loader.classList.add('hidden');
    }, 800);

    window.addEventListener('storage', (e) => {
        carregarDadosUsuario();
    });
});

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            CARREGAMENTO DE DADOS 
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function carregarDadosUsuario() {
    const nome = localStorage.getItem('codin_nome') || "Dev Iniciante";
    
    let rawSaldo = localStorage.getItem('codin_saldo');
    let rawXpAtual = localStorage.getItem('codin_xp');
    let rawNivel = localStorage.getItem('codin_nivel');
    
    const saldo = parseInt(rawSaldo) || 500;
    const xpBarra = parseInt(rawXpAtual) || 0;
    const nivel = parseInt(rawNivel) || 1;
    const fotoSalva = localStorage.getItem('codin_pfp');

    let xpTotalReal = 0;
    const xpTotalSalvo = localStorage.getItem('codin_xp_total');

    if (xpTotalSalvo) {
        xpTotalReal = parseInt(xpTotalSalvo);
    } else {
        xpTotalReal = ((nivel - 1) * 2000) + xpBarra;
    }

    const elNome = document.getElementById('profile-name');
    if(elNome) elNome.innerText = nome;

    const elXp = document.getElementById('prof-xp');
    if(elXp) {
        elXp.innerText = formatarNumeroInteligente(xpTotalReal);
        elXp.title = "XP Total Acumulado: " + xpTotalReal.toLocaleString('pt-BR'); 
    }

    const elSaldo = document.getElementById('prof-saldo');
    if(elSaldo) {
        elSaldo.innerText = formatarNumeroInteligente(saldo);
        elSaldo.title = saldo.toLocaleString('pt-BR');
    }

    const streakReal = parseInt(localStorage.getItem('codin_streak')) || 0;
    const elStreak = document.getElementById('prof-streak');
    if(elStreak) {
        elStreak.innerText = streakReal + (streakReal === 1 ? " Dia" : " Dias");
    }

    const elNivel = document.getElementById('prof-nivel-badge');
    if(elNivel) elNivel.innerHTML = `<i class="fa-solid fa-star"></i> Nível ${nivel}`;

    if (fotoSalva) {
        const imgAvatar = document.getElementById('user-avatar-img');
        if(imgAvatar) imgAvatar.src = fotoSalva;
    }
    
    carregarTitulosDesbloqueados();
}

// --- FORMATAÇÃO K, M, B, T  ---
function formatarNumeroInteligente(num) {
    if (!num) return "0";
    
    if (num >= 1000000000000) return (num / 1000000000000).toFixed(1).replace('.0', '') + 'T';
    if (num >= 1000000000) return (num / 1000000000).toFixed(1).replace('.0', '') + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace('.0', '') + 'k';
    
    return num.toLocaleString('pt-BR');
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                 UPLOAD DE FOTO 
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function configurarUploadFoto() {
    const inputFoto = document.getElementById('upload-foto');
    const imgAvatar = document.getElementById('user-avatar-img');

    if (!inputFoto || !imgAvatar) return;

    inputFoto.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const imagemBase64 = event.target.result;
                imgAvatar.src = imagemBase64;
                try {
                    localStorage.setItem('codin_pfp', imagemBase64);
                } catch (err) {
                    alert("Imagem muito grande! Tente uma menor.");
                }
            };
            reader.readAsDataURL(file);
        }
    });
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
             MASCOTE (CARREGAMENTO COM CORRECoES VISUAIS)
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function carregarMascotePerfil() {
    let roupaSalva = null;
    try { roupaSalva = JSON.parse(localStorage.getItem('codin_roupa_atual')); } catch (e) { localStorage.removeItem('codin_roupa_atual'); }
    const auraSalva = localStorage.getItem('codin_aura_navbar') || 'none';
    
    const stage = document.getElementById('mascot-stage');
    if(stage) {
        stage.classList.remove('aura-purple', 'aura-gold', 'aura-red');
        if (auraSalva !== 'none') stage.classList.add(`aura-${auraSalva}`);
    }

    atualizarBotoesAura(auraSalva);

    if (roupaSalva) {
        const layers = {
            cabeca: document.getElementById('prof-layer-cabeca'),
            corpo: document.getElementById('prof-layer-corpo'),
            acessorios: document.getElementById('prof-layer-acessorios'),
            exoticos: document.getElementById('prof-layer-exoticos')
        };

        for (let categoria in roupaSalva) {
            const idItemSalvo = roupaSalva[categoria];
            const layerImg = layers[categoria];

            if (idItemSalvo && layerImg) {
                const itemEncontrado = itensLojaDatabase.find(i => i.id === idItemSalvo);
                
                if (itemEncontrado) {
                    layerImg.src = itemEncontrado.imagem;
                    layerImg.style.display = 'block';
                    // ID 16 = Asa Dark
                    if (itemEncontrado.id === 16) {
                        layerImg.style.cssText = `
                            display: block !important;
                            z-index: 9 !important;
                            transform: scale(1.2) translate(-5px, -16px) !important;
                            transform-origin: center center !important;
                            pointer-events: none;
                        `;
                    }
                    // ID 15 = Asa de Anjo
                    else if (itemEncontrado.id === 15) {
                        layerImg.style.cssText = `
                            display: block !important;
                            z-index: 1 !important;
                            transform: scale(1.0) !important;
                            transform-origin: center center !important;
                            pointer-events: none;
                        `;
                        // caso n entenda, isso é uma correção pq as asas ficavam tortas pq o tamanho
                        // da imagem era diferente
                    } 
                    else {
                        layerImg.style.transform = '';
                        layerImg.style.zIndex = '';
                        layerImg.style.border = '';
                    }

                    if (itemEncontrado.efeito) ativarEfeitoPerfil(itemEncontrado.efeito);
                }
            } else if (layerImg) {
                layerImg.style.cssText = ''; 
                layerImg.style.display = 'none'; 
            }
        }
    }
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        SISTEMA DE AURAS E EFEITOS
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function ativarEfeitoPerfil(tipoEfeito) {
    const container = document.getElementById('prof-container-efeitos');
    if (!container) return;
    container.innerHTML = ''; 

    let classeParticula = '';
    if (tipoEfeito === 'penas-dark') classeParticula = 'particula-pena-dark';
    else if (tipoEfeito === 'penas') classeParticula = 'particula-pena';
    else return;

    setInterval(() => {
        if(!document.getElementById('prof-container-efeitos')) return;
        const p = document.createElement('div');
        p.classList.add('particula', classeParticula);
        const range = 100; 
        const moveX = (Math.random() - 0.5) * range;
        const moveY = (Math.random() - 0.5) * range;
        const rot = (Math.random() - 0.5) * 360;

        p.style.setProperty('--move-x', `${moveX}px`);
        p.style.setProperty('--move-y', `${moveY}px`);
        p.style.setProperty('--rotacao', `${rot}deg`);

        container.appendChild(p);
        setTimeout(() => p.remove(), 2500);
    }, 600);
}

function clearAuraEffects() {
    const stage = document.getElementById('mascot-stage');
    if (!stage) return;
    stage.classList.remove('aura-purple', 'aura-gold', 'aura-red');
    const efeitosJS = stage.querySelectorAll('.js-aura-effect');
    efeitosJS.forEach(el => el.remove());
}

function setAura(color) {
    const nivelAtual = parseInt(localStorage.getItem('codin_nivel')) || 1;
    const requisitos = { 'purple': 50, 'gold': 200, 'red': 500, 'none': 0 };

    if (color !== 'none' && nivelAtual < requisitos[color]) {
        if(document.readyState === 'loading') return;
        mostrarNotificacao(`Nível ${requisitos[color]} necessário!`, 'erro');
        return;
    }

    clearAuraEffects();
    localStorage.setItem('codin_aura_navbar', color);
    atualizarBotoesAura(color);
    
    if (typeof iniciarParticulasXP === 'function') iniciarParticulasXP();

    if (color === 'none') {
        if(document.readyState !== 'loading') mostrarNotificacao(`Aura removida.`, 'info');
    } else {
        if(document.readyState !== 'loading') mostrarNotificacao(`Tema ${color.toUpperCase()} aplicado!`, 'sucesso');
        const stage = document.getElementById('mascot-stage');
        if(stage) stage.classList.add(`aura-${color}`);
    }
}

function atualizarBotoesAura(activeColor) {
    document.querySelectorAll('.aura-btn').forEach(btn => {
        btn.style.border = 'none';
        btn.style.transform = 'scale(1)';
    });
    const activeBtn = document.querySelector(`.aura-btn.${activeColor}`);
    if (activeBtn) {
        activeBtn.style.border = '2px solid #333';
        activeBtn.style.transform = 'scale(1.2)';
    }
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            MODAIS (NOME E ERRO)
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function abrirModalNome() {
    document.getElementById('profile-modal-name').style.display = 'flex';
}

function fecharModalNome() {
    document.getElementById('profile-modal-name').style.display = 'none';
}

function confirmarTrocaNome() {
    const input = document.getElementById('input-novo-nome');
    const novoNome = input.value.trim();
    const CUSTO_NOME = 1000;

    if (!novoNome) {
        mostrarNotificacao("Digite um nome válido.", "erro");
        return;
    }

    let rawSaldo = localStorage.getItem('codin_saldo');
    let saldoAtual = rawSaldo ? parseInt(rawSaldo.toString().replace(/\D/g, '')) : 0;

    if (saldoAtual >= CUSTO_NOME) {
        saldoAtual -= CUSTO_NOME;
        localStorage.setItem('codin_saldo', saldoAtual);
        localStorage.setItem('codin_nome', novoNome);
        
        carregarDadosUsuario();
        fecharModalNome();
        input.value = "";
        
        mostrarNotificacao(`Identidade alterada! -${CUSTO_NOME} moedas.`, "sucesso");

        // Atualiza toda a navbar de uma vez via função centralizada de script.js
        if (typeof atualizarNavbar === 'function') atualizarNavbar();

    } else {
        fecharModalNome(); 
        abrirModalErro(); 
    }
}

function abrirModalErro() {
    document.getElementById('profile-modal-error').style.display = 'flex';
}

function fecharModalErro() {
    document.getElementById('profile-modal-error').style.display = 'none';
}

const selectTitulo = document.getElementById('user-title');
if(selectTitulo) {
    selectTitulo.addEventListener('change', (e) => {
        localStorage.setItem('codin_titulo', e.target.value);
    });
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    SISTEMA DE NOTIFICAÇÃO (TOAST)
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function mostrarNotificacao(texto, tipo = 'sucesso') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.classList.add('toast-mensagem', `toast-${tipo}`);
    
    let iconeClass = 'fa-solid fa-circle-check';
    if (tipo === 'info') iconeClass = 'fa-solid fa-circle-info';
    if (tipo === 'erro') iconeClass = 'fa-solid fa-circle-xmark';

    toast.innerHTML = `<i class="${iconeClass}" style="font-size: 1.2em;"></i> <span style="font-weight: 500;">${texto}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    SISTEMA DE TÍTULOS (CUSTOM SELECT)
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function carregarTitulosDesbloqueados() {
    const containerOpcoes = document.getElementById('title-options-list');
    if (!containerOpcoes) return;

    let resgatadas = JSON.parse(localStorage.getItem('codin_conquistas_resgatadas')) || {};
    containerOpcoes.innerHTML = ''; 

    let titulosDisponiveis = [
        { id: "Iniciante", icone: "fa-solid fa-seedling", cor: "#22c55e", texto: "Iniciante em Código" }
    ];

    if (resgatadas['conq_primeira']) {
        titulosDisponiveis.push({ id: "PrimeiraCoroa", icone: "fa-solid fa-crown", cor: "#eab308", texto: "Primeira Coroa" });
    }
    if (resgatadas['conq_python']) {
        titulosDisponiveis.push({ id: "MestrePython", icone: "fa-brands fa-python", cor: "#3b82f6", texto: "Mestre Python" });
    }
    if (resgatadas['conq_logica']) {
        titulosDisponiveis.push({ id: "MestreLogica", icone: "fa-solid fa-brain", cor: "#ec4899", texto: "Mestre da Lógica" });
    }
    if (resgatadas['conq_streak30']) {
        titulosDisponiveis.push({ id: "LendaViva", icone: "fa-solid fa-fire", cor: "#ef4444", texto: "Lenda Implacável" });
    }

    const tituloSalvo = localStorage.getItem('codin_titulo') || "Iniciante";

    titulosDisponiveis.forEach(titulo => {
        const opt = document.createElement('div');
        opt.className = 'custom-option' + (titulo.id === tituloSalvo ? ' selected' : '');
        opt.innerHTML = `<i class="${titulo.icone}" style="color: ${titulo.cor};"></i> <span>${titulo.texto}</span>`;

        opt.onclick = () => {
            document.getElementById('selected-title-text').innerText = titulo.texto;
            document.querySelector('.selected-content i').className = titulo.icone;
            document.querySelector('.selected-content i').style.color = titulo.cor;
            
            document.querySelectorAll('.custom-option').forEach(el => el.classList.remove('selected'));
            opt.classList.add('selected');

            localStorage.setItem('codin_titulo', titulo.id);
            document.getElementById('custom-title-select').classList.remove('open');
            
            if(typeof mostrarNotificacao === 'function') mostrarNotificacao(`Título equipado!`, 'sucesso');
        };

        if (titulo.id === tituloSalvo) {
            document.getElementById('selected-title-text').innerText = titulo.texto;
            document.querySelector('.selected-content i').className = titulo.icone;
            document.querySelector('.selected-content i').style.color = titulo.cor;
        }

        containerOpcoes.appendChild(opt);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const customSelect = document.getElementById('custom-title-select');
    const trigger = document.querySelector('.custom-select-trigger');
    
    if (trigger && customSelect) {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation(); 
            customSelect.classList.toggle('open');
        });
    }

    document.addEventListener('click', (e) => {
        if (customSelect && !customSelect.contains(e.target)) {
            customSelect.classList.remove('open');
        }
    });
});