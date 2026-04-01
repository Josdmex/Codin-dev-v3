/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        CONFIGURAÇÃO E ESTADO INICIAL
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
const CAMINHO_IMAGENS = "../equipados/";

let saldoSalvo = localStorage.getItem('codin_saldo');
let saldo = saldoSalvo !== null ? parseInt(saldoSalvo) : 500;

const itensEquipados = {
    cabeca: null,
    corpo: null,
    shorts: null,
    acessorios: null,
    exoticos: null
};

// --- LISTA DE ITENS  ---
const itensLoja = [
    // CABEÇA
    { id: 1, nome: "Coroa Dourada", categoria: "cabeca", preco: 500, icone: "../itens/coroa_dourada.png", adquirido: false, imagem: "../equipados/coroa_equip.png" },
    { id: 2, nome: "Óculos Escuros", categoria: "cabeca", preco: 150, icone: "../itens/oculos_escuros.png", adquirido: false, imagem: "../equipados/oculos_equip.png" },
    { id: 3, nome: "Boné Azul", categoria: "cabeca", preco: 100, icone: "../itens/bone_azul.png", adquirido: false, imagem: "../equipados/bone_equip.png" },
    { id: 4, nome: "Cartola Preta", categoria: "cabeca", preco: 200, icone: "../itens/cartola_preta.png", adquirido: false, imagem: "../equipados/cartola_equip.png" },
    { id: 19, nome: "Oculos de Praia", categoria: "cabeca", preco: 100, icone: "../itens/oculos_praia.png", adquirido: false, imagem: "../equipados/oculospraia_equip.png" },
    { id: 20, nome: "Chapeu de Padeiro", categoria: "cabeca", preco: 250, icone: "../itens/chapeu_padeiro.png", adquirido: false, imagem: "../equipados/chapeupadeiro_equip.png" },
    { id: 21, nome: "Coroa da Selva", categoria: "cabeca", preco: 50, icone: "../itens/coroa_selva.png", adquirido: false, imagem: "../equipados/coroaselva_equip.png" },

    // CORPO
    { id: 5, nome: "Camiseta Python", categoria: "corpo", preco: 250, icone: "../itens/camiseta_python.png", adquirido: false, imagem: "../equipados/python_equip.png" },
    { id: 6, nome: "Moletom Branco", categoria: "corpo", preco: 300, icone: "../itens/moletom_branco.png", adquirido: false, imagem: "../equipados/moletom_equip.png" },
    { id: 7, nome: "React Gola Polo", categoria: "corpo", preco: 200, icone: "../itens/react_golapolo.png", adquirido: false, imagem: "../equipados/react_equip.png" },
    { id: 8, nome: "Blazer Cinza", categoria: "corpo", preco: 450, icone: "../itens/blaze_cinza.png", adquirido: false, imagem: "../equipados/blazer_equip.png" },
    { id: 22, nome: "Colar de Flores", categoria: "corpo", preco: 250, icone: "../itens/colar_flor.png", adquirido: false, imagem: "../equipados/colarflor_equip.png" },
    { id: 23, nome: "Roupa de Padeiro", categoria: "corpo", preco: 90, icone: "../itens/padeiro_roupa.png", adquirido: false, imagem: "../equipados/padeiroroupa_equip.png" },

    // SHORTS
    { id: 24, nome: "Short de Praia", categoria: "shorts", preco: 190, icone: "../itens/short_praia.png", adquirido: false, imagem: "../equipados/shortpraia_equip.png" },
    { id: 25, nome: "Short de Praia Branco", categoria: "shorts", preco: 190, icone: "../itens/shortpraia_branco.png", adquirido: false, imagem: "../equipados/shortpraiabranco_equip.png" },

    // ACESSÓRIOS
    { id: 9, nome: "Katana Samurai", categoria: "acessorios", preco: 350, icone: "../itens/katana_samurai.png", adquirido: false, imagem: "../equipados/katana_equip.png" },
    { id: 12, nome: "Pantufa panda", categoria: "acessorios", preco: 120, icone: "../itens/pantufa_panda.png", adquirido: false, imagem: "../equipados/panda_equip.png" },

    // EXÓTICOS
    { 
        id: 15, nome: "Asas de Anjo", categoria: "exoticos", preco: 4200, 
        icone: "../itens/asas_anjo.png", adquirido: false, imagem: "../equipados/anjo_equip.png",
        efeito: "penas"
    },
    { 
        id: 16, nome: "Asas Dark", categoria: "exoticos", preco: 7000, 
        icone: "../itens/asas_dark.png", adquirido: false, imagem: "../equipados/darkasa_equip.png",
        efeito: "penas-dark"
    },

    { 
        id: 17, nome: "Roupa Ninja", categoria: "exoticos", preco: 3100, 
        icone: "../itens/roupa_ninja.png", adquirido: false, imagem: "../equipados/ninja_equip.png",
    },

    { 
        id: 18, nome: "Armadura Guaxi", categoria: "exoticos", preco: 3100, 
        icone: "../itens/armadura_cyber.png", adquirido: false, imagem: "../equipados/cyber_equip.png",
    },

    // --- CONSUMÍVEIS (BOOSTERS) ---
    {
        id: 101, nome: "Café Expresso", categoria: "consumiveis", preco: 500,
        icone: "../itens/caneca_cafe.png", 
        descricao: "XP em Dobro por 1 hora! ☕",
        efeitoConsumivel: "booster_1h"
    },
    {
        id: 102, nome: "Energético Dev", categoria: "consumiveis", preco: 2000,
        icone: "../itens/energetico_dev.png", 
        descricao: "XP em Dobro por 24 horas! ⚡",
        efeitoConsumivel: "booster_24h"
    },
    {
        id: 103, nome: "Livro Antigo", categoria: "consumiveis", preco: 5000,
        icone: "../itens/livro_xp.png", 
        descricao: "+500 XP Instantâneo! 📖",
        efeitoConsumivel: "xp_instantaneo"
    }
];

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        FUNÇÕES DE SALVAR E CARREGAR
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

function salvarProgressoGeral() {
    const idsComprados = itensLoja.filter(i => i.adquirido && i.categoria !== 'consumiveis').map(i => i.id);
    localStorage.setItem('codin_inventario', JSON.stringify(idsComprados));

    localStorage.setItem('codin_roupa_atual', JSON.stringify(itensEquipados));

    localStorage.setItem('codin_saldo', saldo);
}

function carregarDadosSalvos() {
    let inventarioSalvo = null;
    try { inventarioSalvo = JSON.parse(localStorage.getItem('codin_inventario')); } catch (e) { localStorage.removeItem('codin_inventario'); }
    if (inventarioSalvo) {
        itensLoja.forEach(item => {
            if (inventarioSalvo.includes(item.id)) {
                item.adquirido = true;
            }
        });
    }
    let roupaSalva = null;
    try { roupaSalva = JSON.parse(localStorage.getItem('codin_roupa_atual')); } catch (e) { localStorage.removeItem('codin_roupa_atual'); }
    if (roupaSalva) {
        Object.assign(itensEquipados, roupaSalva);
        
        for (let categoria in itensEquipados) {
            const idItem = itensEquipados[categoria];
            if (idItem) {
                const item = itensLoja.find(i => i.id === idItem);
                if (item) atualizarCamadaVisual(item);
            }
        }
    }
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            ATUALIZAÇÃO VISUAL (UI)
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function atualizarVisualizacaoSaldo() {
    const saldoNavbar = document.getElementById('saldo-navbar');
    if (saldoNavbar) {
        saldoNavbar.innerText = formatarNumero(saldo); 
    }

    const saldoLoja = document.getElementById('saldo-loja');
    if (saldoLoja) {
        saldoLoja.innerText = formatarNumero(saldo); 
    }

    localStorage.setItem('codin_saldo', saldo);
}

function atualizarNavbar() {
    const nivel = parseInt(localStorage.getItem('codin_nivel')) || 1;
    const xp = parseInt(localStorage.getItem('codin_xp')) || 0;
    const saldo = parseInt(localStorage.getItem('codin_saldo')) || 500;

    const boosterAte = parseInt(localStorage.getItem('codin_booster_xp_ate')) || 0;
    const agora = new Date().getTime();
    let textoBooster = "";
    
    if (agora < boosterAte) {
        textoBooster = " (⚡ 2x Ativo)";
    }

    // --- PARTE NAVBAR ---
    const elementoNivel = document.getElementById('nivel-usuario');
    if (elementoNivel) {
        elementoNivel.innerText = `Nível ${nivel}`;
    }

    const xpNecessario = 100 + (nivel * 75);

    let porcentagem = Math.floor((xp / xpNecessario) * 100);
    if (porcentagem > 100) porcentagem = 100;

    const barraXP = document.getElementById('barra-xp-navbar');
    if (barraXP) {
        barraXP.style.width = `${porcentagem}%`;
        barraXP.title = `${xp} / ${xpNecessario} XP`; 
    }

    const elementoSaldo = document.getElementById('saldo-navbar');
    if (elementoSaldo) {
        elementoSaldo.innerText = formatarNumero(saldo);
    }

    const dashNivel = document.getElementById('nivel-dashboard');
    if (dashNivel) {
        dashNivel.innerText = `Nível ${nivel}${textoBooster}`; 
    }

    const dashSaldo = document.getElementById('saldo-dashboard');
    if (dashSaldo) {
        dashSaldo.innerText = `${formatarNumero(saldo)} Procyons`; 
    }
    
    const streak = parseInt(localStorage.getItem('codin_streak')) || 0;
    const elStreakNavbar = document.getElementById('streak-navbar');
    if (elStreakNavbar) elStreakNavbar.innerText = streak;
    const elStreakDash = document.getElementById('streak-dashboard');
    if (elStreakDash) elStreakDash.innerText = streak + (streak === 1 ? ' dia' : ' dias');

    if (typeof atualizarVidasVisual === 'function') {
        atualizarVidasVisual();
    }
}

function renderizarItens(categoria) {
    const container = document.querySelector('.conteudo-abas');
    if (!container) return; 

    container.innerHTML = '';

    const itensFiltrados = itensLoja.filter(item => item.categoria === categoria);

    itensFiltrados.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('item-card');

        let htmlBotoes = '';
        
        // --- LÓGICA ESPECIAL PROS CONSUMIVEIS ---
        if (categoria === 'consumiveis') {
            const podeComprar = saldo >= item.preco;
            const classeBotao = podeComprar ? "botao-comprar-ativo" : "botao-comprar";
            
            htmlBotoes = `
                <div class="descricao-item" style="font-size: 12px; color: #666; margin-bottom: 5px;">
                    ${item.descricao || ''}
                </div>
                <div class="acoes-card">
                    <button class="${classeBotao}" onclick="comprarConsumivel(${item.id})">
                        <span class="material-symbols-outlined">bolt</span> Comprar e Usar
                    </button>
                </div>
            `;
        } 
        // --- LÓGICA PADRÃO (ROUPAS) ---
        else {
            const estaEquipado = itensEquipados[item.categoria] === item.id;
            
            if (item.adquirido) { 
                let botaoAcaoHTML = '';           
                if (estaEquipado) {
                    botaoAcaoHTML = `
                        <button class="botao-desequipar" onclick="desequiparItem('${item.categoria}')" title="Desequipar">
                            <span class="material-symbols-outlined">close</span>
                        </button>
                    `;
                } else {
                    botaoAcaoHTML = `
                        <button class="botao-experimentar" onclick="equiparItem(${item.id})" title="Usar Item">
                            <span class="material-symbols-outlined">checkroom</span>
                        </button>
                    `;
                }
                htmlBotoes = `
                    <div class="acoes-card">
                        <button class="botao-adquirido">
                            <span class="material-symbols-outlined" style="font-size: 18px;">check_circle</span> Adquirido
                        </button>
                        ${botaoAcaoHTML}
                    </div>
                `;
            } else {
                const podeComprar = saldo >= item.preco;
                const classeBotao = podeComprar ? "botao-comprar-ativo" : "botao-comprar";

                const nomeArquivoImagem = item.imagem.split('/').pop();
                const elementoCamada = document.getElementById(`layer-${item.categoria}`);
                const estaExperimentando = elementoCamada && 
                                           elementoCamada.style.display !== 'none' && 
                                           elementoCamada.src.includes(nomeArquivoImagem);

                let botaoOlhoOuX = '';
                
                if (estaExperimentando) {
                    botaoOlhoOuX = `
                        <button class="botao-desequipar" onclick="removerProva('${item.categoria}')" title="Parar de Experimentar" style="background-color: #ff5252; color: white; border: none; border-radius: 5px; cursor: pointer; padding: 5px; display: flex; align-items: center; justify-content: center;">
                            <span class="material-symbols-outlined">close</span>
                        </button>
                    `;
                } else {
                    botaoOlhoOuX = `
                        <button class="botao-experimentar" onclick="experimentarItem(${item.id})" title="Experimentar">
                            <span class="material-symbols-outlined">visibility</span>
                        </button>
                    `;
                }

                htmlBotoes = `
                    <div class="acoes-card">
                        <button class="${classeBotao}" onclick="tentarComprar(${item.id})">
                            <span class="material-symbols-outlined" style="font-size: 16px;">shopping_cart</span> Comprar
                        </button>
                        ${botaoOlhoOuX}
                    </div>
                `;
            }
        }

        card.innerHTML = `
            <img src="${item.icone}" class="icone-item" alt="${item.nome}">
            <h3>${item.nome}</h3>
            <div class="preco">
                <img src="../codin/procyons.png" style="width: 16px; vertical-align: middle; margin-right: 5px;"> ${item.preco}
            </div>
            ${htmlBotoes}
        `;
        container.appendChild(card);
    });
}

function atualizarUIAtual() {
    const abaAtiva = document.querySelector('.aba-botao.active');
    if (abaAtiva) {
        renderizarItens(abaAtiva.getAttribute('data-aba'));
    }
}

/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                     SISTEMA DE XP, NÍVEL E BOOSTERS
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
function mostrarNotificacao(texto, tipo = 'sucesso') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.classList.add('toast-mensagem');
    
    toast.classList.add(`toast-${tipo}`);
    
    let iconeClass = 'fa-solid fa-circle-check';

    if (tipo === 'ouro')     iconeClass = 'fa-solid fa-trophy';           // Nível 200
    if (tipo === 'roxo')     iconeClass = 'fa-solid fa-bolt';             // Nível 50 (Energia/Místico)
    if (tipo === 'vermelho') iconeClass = 'fa-solid fa-fire';             // Nível 500 (Modo Deus)
    if (tipo === 'info')     iconeClass = 'fa-solid fa-circle-info';      // Informação geral
    if (tipo === 'erro')     iconeClass = 'fa-solid fa-circle-xmark';     // Erro

    toast.innerHTML = `
        <i class="${iconeClass}" style="font-size: 1.2em;"></i>
        <span style="font-weight: 500;">${texto}</span>
    `;
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

function ganharXP(quantidade) {
    let xpAtual = parseInt(localStorage.getItem('codin_xp')) || 0;
    let nivelAtual = parseInt(localStorage.getItem('codin_nivel')) || 1;
    let nivelAntigo = nivelAtual; 

    const boosterAte = parseInt(localStorage.getItem('codin_booster_xp_ate')) || 0;
    const agora = new Date().getTime();
    let multiplicador = 1;

    if (agora < boosterAte) {
        multiplicador = 2; 
    }

    const xpGanho = quantidade * multiplicador;
    xpAtual += xpGanho;

    let xpTotal = parseInt(localStorage.getItem('codin_xp_total')) || 0;
    localStorage.setItem('codin_xp_total', xpTotal + xpGanho);

    while (true) {
        let xpNecessario = 100 + (nivelAtual * 75);

        if (xpAtual >= xpNecessario) {
            xpAtual -= xpNecessario;
            nivelAtual++;
            
            if (nivelAtual === 50) mostrarNotificacao("Desbloqueou: Aura Mística (Roxa)!", "roxo");
            if (nivelAtual === 200) mostrarNotificacao("Desbloqueou: Aura Lendária (Dourada)!", "ouro");
            if (nivelAtual === 500) mostrarNotificacao("Desbloqueou: MODO DEUS (Fumaça)!", "vermelho");
        } else {
            break; 
        }
    }   

    localStorage.setItem('codin_xp', xpAtual);
    localStorage.setItem('codin_nivel', nivelAtual);
    atualizarNavbar();

    if (nivelAtual > nivelAntigo) {
        mostrarLevelUp(nivelAtual); 
        iniciarParticulasXP(); 
    }
}

function ativarBooster(horas) {
    const agora = new Date().getTime();
    const tempoExtra = horas * 60 * 60 * 1000;
    
    let validadeAtual = parseInt(localStorage.getItem('codin_booster_xp_ate')) || 0;
    if (validadeAtual < agora) validadeAtual = agora;

    const novaValidade = validadeAtual + tempoExtra;
    localStorage.setItem('codin_booster_xp_ate', novaValidade);

    mostrarNotificacao(`BOOSTER ATIVADO! XP em dobro por ${horas}h!`, "sucesso");
    
    atualizarNavbar();
    verificarEfeitoBooster(); 
}

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    AÇÕES (COMPRA, CONSUMÍVEIS, EQUIPAR)
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

function tocarAnimacaoMascote(_ignoredTime, callbackTroca) {
    const video = document.getElementById('animacao-mascote');

    if (video) {
        setCamadasVisiveis(false);
        video.style.display = 'block';
        video.currentTime = 0;

        setTimeout(() => {
            if (typeof callbackTroca === 'function') callbackTroca();
        }, 150);

        video.onended = () => {
            video.style.display = 'none';
            setCamadasVisiveis(true);
        };

        video.play().catch(() => {
            video.style.display = 'none';
            setCamadasVisiveis(true);
        });
    } else {
        if (typeof callbackTroca === 'function') callbackTroca();
    }
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                     AÇÕES (MODIFICADAS PARA USAR O MODAL)
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

function comprarConsumivel(idItem) {
    const item = itensLoja.find(i => i.id === idItem);
    if (!item) return;

    if (saldo >= item.preco) {
        mostrarModalCompra(item, 'consumivel');
    } else {
       mostrarModalSemSaldo();
    }
}

function tentarComprar(idItem) {
    const item = itensLoja.find(i => i.id === idItem);
    if (!item) return;

    if (saldo >= item.preco) {
        mostrarModalCompra(item, 'item');
    } else {
        mostrarModalSemSaldo();
    }
}

function equiparItem(idItem) {
    const item = itensLoja.find(i => i.id === idItem);
    if (!item) return;
    const isEspecialEquipado = itensEquipados['exoticos'] === 17 || itensEquipados['exoticos'] === 18;
    if (isEspecialEquipado) {
        if (item.categoria === 'cabeca') {
            mostrarNotificacao("Este traje exótico não permite usar itens de cabeça!", "erro");
            return;
        }
        if (item.categoria === 'corpo' && item.id !== 6) {
            mostrarNotificacao("Este traje só permite usar o Moletom Branco por cima!", "erro");
            return;
        }
        if (item.categoria === 'shorts' || item.categoria === 'short') {
            mostrarNotificacao("Este traje exótico não permite usar shorts!", "erro");
            return;
        }
    }

    if (item.id === 17 || item.id === 18) {
        if (itensEquipados['cabeca']) {
            mostrarNotificacao("Desequipe o item da cabeça antes de colocar este traje!", "erro");
            return;
        }
        if (itensEquipados['corpo'] && itensEquipados['corpo'] !== 6) {
            mostrarNotificacao("Desequipe a camisa atual antes de colocar este traje!", "erro");
            return;
        }
        if (itensEquipados['shorts']) {
            mostrarNotificacao("Desequipe o short atual antes de colocar este traje!", "erro");
            return;
        }
    }

    tocarAnimacaoMascote(0, () => {
        itensEquipados[item.categoria] = item.id;
        atualizarCamadaVisual(item);
        atualizarUIAtual();
        salvarProgressoGeral(); 
    });
}

function desequiparItem(categoria) {
    itensEquipados[categoria] = null;
    
    if (categoria === 'exoticos') {
        limparEfeitosVisuais();
    }
    
    const idCamada = `layer-${categoria}`;
    const elementoCamada = document.getElementById(idCamada);
    
    if (elementoCamada) {
        elementoCamada.style.display = 'none';
        elementoCamada.src = '';
    }

    verificarRoupaNinja();

    const abaAtiva = document.querySelector('.aba-botao.active').getAttribute('data-aba');
    renderizarItens(abaAtiva);

    salvarProgressoGeral(); 
    atualizarUIAtual();
}

function removerProva(categoria) {
    const idEquipadoReal = itensEquipados[categoria];
    
    if (idEquipadoReal) {
        const itemReal = itensLoja.find(i => i.id === idEquipadoReal);
        if (itemReal) atualizarCamadaVisual(itemReal);
    } else {
        const elementoCamada = document.getElementById(`layer-${categoria}`);
        if (elementoCamada) {
            elementoCamada.style.display = 'none';
            elementoCamada.src = '';
        }
        if (categoria === 'exoticos') limparEfeitosVisuais();
    }

    verificarRoupaNinja();
    atualizarUIAtual();
}

function experimentarItem(idItem) {
    const item = itensLoja.find(i => i.id === idItem);
    if (!item) return;
    const layerExotico = document.getElementById('layer-exoticos');
    const especialVisivel = layerExotico && layerExotico.style.display !== 'none' && 
        (layerExotico.src.includes('ninja_equip') || layerExotico.src.includes('cyber_equip'));

    if (especialVisivel) {
        if (item.categoria === 'cabeca') {
            mostrarNotificacao("Tire o traje exótico para provar itens de cabeça!", "erro");
            return; 
        }
        if (item.categoria === 'corpo' && item.id !== 6) {
            mostrarNotificacao("Com este traje, você só pode provar o Moletom Branco!", "erro");
            return;
        }
        if (item.categoria === 'shorts') {
            mostrarNotificacao("Tire o traje exótico para provar shorts!", "erro");
            return; 
        }
    }
    if (item.id === 17 || item.id === 18) {
        const layerCabeca = document.getElementById('layer-cabeca');
        const cabecaVisivel = layerCabeca && layerCabeca.style.display !== 'none' && layerCabeca.getAttribute('src') !== '';
        
        const layerCorpo = document.getElementById('layer-corpo');
        const corpoVisivel = layerCorpo && layerCorpo.style.display !== 'none' && layerCorpo.getAttribute('src') !== '' && !layerCorpo.src.includes('moletom_equip');

        const layerShorts = document.getElementById('layer-shorts');
        const shortsVisivel = layerShorts && layerShorts.style.display !== 'none' && layerShorts.getAttribute('src') !== '';

        if (cabecaVisivel) {
            mostrarNotificacao("Tire o item da cabeça antes de provar este traje!", "erro");
            return;
        }
        if (corpoVisivel) {
            mostrarNotificacao("Tire a camisa atual antes de provar este traje!", "erro");
            return;
        }
        if (shortsVisivel) {
            mostrarNotificacao("Tire o short atual antes de provar este traje!", "erro");
            return;
        }
    }

    tocarAnimacaoMascote(0, () => {
        atualizarCamadaVisual(item);
        atualizarUIAtual(); 
    });
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            MODAL DE CONFIRMAÇÃO DE COMPRA 
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
let compraPendente = null; // Guarda o que o usuário quer comprar
let modalCompraCache = null;

function mostrarModalCompra(item, tipo) {
    compraPendente = { item: item, tipo: tipo };

    if (!modalCompraCache) {
        modalCompraCache = document.createElement('div');
        modalCompraCache.className = 'modal-overlay';
        modalCompraCache.id = 'modal-compra-container';
        
        modalCompraCache.innerHTML = `
            <div class="card-compra">
                <img id="mod-img-item" src="" style="height: 60px; margin-bottom:10px;">
                <h2 class="titulo-compra">Confirmar Compra?</h2>
                <p class="texto-compra">
                    Comprar <strong id="mod-nome-item">Item</strong><br>
                    por <strong style="color:#4CAF50"><img src="../codin/procyons.png" style="width: 16px; vertical-align: middle; margin-right: 5px;"> <span id="mod-preco-item">0</span></strong>?
                </p>
                <div class="botoes-compra">
                    <button class="btn-cancelar" onclick="fecharModalCompra()">Cancelar</button>
                    <button class="btn-confirmar" onclick="confirmarCompraReal()">Confirmar</button>
                </div>
            </div>
        `;
        document.body.appendChild(modalCompraCache);
    }

    document.getElementById('mod-nome-item').innerText = item.nome;
    document.getElementById('mod-preco-item').innerText = item.preco;
    document.getElementById('mod-img-item').src = item.icone;

    modalCompraCache.style.display = 'flex';
}

function fecharModalCompra() {
    if (modalCompraCache) modalCompraCache.style.display = 'none';
    compraPendente = null;
}
function confirmarCompraReal() {
    if (!compraPendente) return;

    const { item, tipo } = compraPendente;

    if (tipo === 'consumivel') {
        if (saldo >= item.preco) {
            saldo -= item.preco;
            atualizarVisualizacaoSaldo();

            if (item.efeitoConsumivel === 'booster_1h') {
                ativarBooster(1);
            } else if (item.efeitoConsumivel === 'booster_24h') {
                ativarBooster(24);
            } else if (item.efeitoConsumivel === 'xp_instantaneo') {
                ganharXP(500);
                mostrarNotificacao("Sabedoria absorvida! +500 XP", "sucesso");
            }
            salvarProgressoGeral();
        } else {
            mostrarModalSemSaldo();
        }
    } 
    
    else if (tipo === 'item') {
        if (saldo >= item.preco) {
            fecharModalCompra(); 

            tocarAnimacaoMascote(0, () => {
                saldo -= item.preco;
                item.adquirido = true;
                
                if (item.id === 17 || item.id === 18) {
                    itensEquipados['cabeca'] = null;
                    const lCabeca = document.getElementById('layer-cabeca');
                    if (lCabeca) { lCabeca.style.display = 'none'; lCabeca.src = ''; }
                    
                    if (itensEquipados['corpo'] !== null && itensEquipados['corpo'] !== 6) { 
                        itensEquipados['corpo'] = null;
                        const lCorpo = document.getElementById('layer-corpo');
                        if (lCorpo) { lCorpo.style.display = 'none'; lCorpo.src = ''; }
                    }

                    if (itensEquipados['shorts'] !== null) { 
                        itensEquipados['shorts'] = null;
                        const lShorts = document.getElementById('layer-shorts');
                        if (lShorts) { lShorts.style.display = 'none'; lShorts.src = ''; }
                    }
                }

                const isEspecialEquipado = itensEquipados['exoticos'] === 17 || itensEquipados['exoticos'] === 18;
                const isConflitante = item.categoria === 'cabeca' || item.categoria === 'shorts' || (item.categoria === 'corpo' && item.id !== 6);

                if (isEspecialEquipado && isConflitante) {
                    itensEquipados['exoticos'] = null;
                    const lExotico = document.getElementById('layer-exoticos');
                    if (lExotico) { lExotico.style.display = 'none'; lExotico.src = ''; }
                    limparEfeitosVisuais();
                }

                itensEquipados[item.categoria] = item.id;
                atualizarCamadaVisual(item);
                
                atualizarVisualizacaoSaldo();
                atualizarUIAtual();
                atualizarNavbar();
                salvarProgressoGeral(); 
            });
            return; 
        } else {
            mostrarModalSemSaldo();
        }
    }

    fecharModalCompra();
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
             MODAL DE SALDO INSUFICIENTE
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
let modalSaldoCache = null;

function mostrarModalSemSaldo() {
    if (!modalSaldoCache) {
        modalSaldoCache = document.getElementById('modal-sem-saldo');
        
        if (!modalSaldoCache) {
            const modal = document.createElement('div');
            modal.id = 'modal-sem-saldo';
            modal.className = 'modal-overlay'; 
            
            modal.innerHTML = `
                <div class="card-erro">
                    <div class="icone-erro">
                        <i class="fas fa-sack-xmark"></i> </div>
                    
                    <h2 class="titulo-compra" style="color:#ff5252">Ops! Faltou Grana</h2>
                    
                    <p class="texto-compra">
                        Você não tem Procyons suficientes para comprar este item.
                        <br><br>
                        <strong>Complete mais missões para ganhar moedas!</strong>
                    </p>
                    
                    <button class="btn-erro" onclick="fecharModalSemSaldo()">
                        Entendi
                    </button>
                </div>
            `;
            document.body.appendChild(modal);
            modalSaldoCache = modal;
        }
    }

    modalSaldoCache.style.display = 'flex';
}

function fecharModalSemSaldo() {
    if (modalSaldoCache) {
        modalSaldoCache.style.display = 'none';
    }
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        CONTROLE DE ABAS E AUXILIARES
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function trocarAba(novaAba) {
    document.querySelectorAll('.aba-botao').forEach(btn => {
        btn.classList.remove('active');
    });
    const botaoAtivo = document.querySelector(`.aba-botao[data-aba="${novaAba}"]`);
    if (botaoAtivo) {
        botaoAtivo.classList.add('active');
    }
    renderizarItens(novaAba);
}

function verificarRoupaNinja() {
    const layerBase = document.querySelector('.layer.base');
    const layerExotico = document.getElementById('layer-exoticos');
    
    if (!layerBase || !layerExotico) return;

    const usandoTrajeEspecial = layerExotico.style.display !== 'none' && 
        (layerExotico.src.includes('ninja_equip') || layerExotico.src.includes('cyber_equip'));

    if (usandoTrajeEspecial) {
        layerBase.style.opacity = '0'; 
    } else {
        layerBase.style.opacity = '1'; 
    }
}

function atualizarCamadaVisual(item) {
    const idCamada = `layer-${item.categoria}`;
    const elementoCamada = document.getElementById(idCamada);

    if (elementoCamada && item.imagem) {
        elementoCamada.src = item.imagem;
        elementoCamada.style.display = 'block';

        if (item.categoria === 'exoticos') {
            limparEfeitosVisuais();
            if (item.efeito) ativarEfeitoVisual(item.efeito);
        }
    }
    
    // Roda a nossa checagem sempre que uma roupa nova for desenhada
    verificarRoupaNinja();
}

function setCamadasVisiveis(mostrar) {
    const categorias = ['cabeca', 'corpo', 'shorts', 'acessorios', 'exoticos'];
    categorias.forEach(cat => {
        const el = document.getElementById(`layer-${cat}`);
        if (el) {
            const src = el.getAttribute('src');
            el.style.display = (!mostrar || !src || src === '') ? 'none' : 'block';
        }
    });
    
    const layerBase = document.querySelector('.layer.base');
    if (layerBase) {
        if (!mostrar) {
            layerBase.style.display = 'none'; // Some durante a animação de fumaça/vídeo
        } else {
            layerBase.style.display = 'block'; // Volta depois da animação
            verificarRoupaNinja(); // Decide se vai ficar opaco ou não
        }
    }
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            SISTEMA DE PARTÍCULAS
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
let intervaloEfeito = null;

function ativarEfeitoVisual(tipoEfeito) {
    limparEfeitosVisuais(); 
    const container = document.getElementById('container-efeitos');
    if (!container) return;

    let classeParticula = '';
    let frequenciaCriacao = 300;

    if (tipoEfeito === 'penas') {
        classeParticula = 'particula-pena'; 
        frequenciaCriacao = 550;
    } else if (tipoEfeito === 'penas-dark') {
        classeParticula = 'particula-pena-dark';
        frequenciaCriacao = 550;
    } else if (tipoEfeito === 'brilho') {
        classeParticula = 'particula-brilho';
        frequenciaCriacao = 200;
    }

    function criarParticulaEfeito() {
        const particula = document.createElement('div');
        particula.classList.add('particula', classeParticula);

        if (tipoEfeito === 'penas' || tipoEfeito === 'penas-dark') {
            const range = 600;
            const destinoX = (Math.random() - 0.5) * range; 
            const destinoY = (Math.random() - 0.5) * range;
            const rotacao = (Math.random() - 0.5) * 360;

            particula.style.setProperty('--move-x', `${destinoX}px`);
            particula.style.setProperty('--move-y', `${destinoY}px`);
            particula.style.setProperty('--rotacao', `${rotacao}deg`);
        } else {
            particula.style.left = Math.random() * 90 + '%';
            const escala = 0.5 + Math.random() * 0.5;
            particula.style.transform = `scale(${escala})`;
        }

        container.appendChild(particula);
        setTimeout(() => { particula.remove(); }, 3000);
    }

    criarParticulaEfeito();
    intervaloEfeito = setInterval(criarParticulaEfeito, frequenciaCriacao);
}

function limparEfeitosVisuais() {
    if (intervaloEfeito) {
        clearInterval(intervaloEfeito);
        intervaloEfeito = null;
    }
    const container = document.getElementById('container-efeitos');
    if (container) container.innerHTML = '';
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            SISTEMA DE VIDAS
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
const MAX_VIDAS = 5;
const TEMPO_REGEN_MS = 1 * 60 * 60 * 1000;

function gerenciarVidas() {
    let vidas = parseInt(localStorage.getItem('codin_vidas'));
    let ultimaPerda = localStorage.getItem('codin_tempo_vida');
    const agora = new Date().getTime();

    if (isNaN(vidas)) {
        vidas = MAX_VIDAS;
        localStorage.setItem('codin_vidas', vidas);
    }

    if (vidas < MAX_VIDAS && ultimaPerda) {
        ultimaPerda = parseInt(ultimaPerda);
        const tempoPassado = agora - ultimaPerda;
        const vidasRecuperadas = Math.floor(tempoPassado / TEMPO_REGEN_MS);

        if (vidasRecuperadas > 0) {
            vidas = Math.min(MAX_VIDAS, vidas + vidasRecuperadas);
            localStorage.setItem('codin_vidas', vidas);
            
            if (vidas < MAX_VIDAS) {
                const sobraTempo = tempoPassado % TEMPO_REGEN_MS;
                localStorage.setItem('codin_tempo_vida', agora - sobraTempo);
            } else {
                localStorage.removeItem('codin_tempo_vida');
            }
        }
    }
    return vidas;
}

function atualizarVidasVisual() {
    const vidas = gerenciarVidas();
    const containerVidas = document.getElementById('vidas-navbar');
    if (containerVidas) {
        containerVidas.innerHTML = '';
        for(let i=0; i<MAX_VIDAS; i++) {
            if (i < vidas) {
                containerVidas.innerHTML += '<i class="fa-solid fa-heart" style="color:#ff5252;"></i>';
            } else {
                containerVidas.innerHTML += '<i class="fa-regular fa-heart" style="color:#ccc;"></i>';
            }
        }
    }
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                INICIALIZAÇÃO
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function finalizarCarregamento() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('preloader-escondido');
            setTimeout(() => { preloader.remove(); }, 500);
        }, 1000); 
    }
}

function exibirAnuncioAdmin() {
    try {
        const cfg = JSON.parse(localStorage.getItem('codin_admin_anuncio')) || {};
        if (cfg.ativo && cfg.texto) {
            const banner = document.getElementById('admin-anuncio-banner');
            const texto  = document.getElementById('admin-anuncio-texto');
            if (banner && texto) { texto.textContent = cfg.texto; banner.style.display = 'block'; }
        }
    } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof carregarDadosSalvos === 'function') carregarDadosSalvos();
    exibirAnuncioAdmin();

    verificarOfensiva();

    iniciarParticulasXP();
    atualizarNavbar(); 
    atualizarProgressoCursos();
    verificarEfeitoBooster();
    if (typeof atualizarVisualizacaoSaldo === 'function') atualizarVisualizacaoSaldo();
    atualizarVidasVisual();
    
    if (typeof atualizarPaginaMissoes === 'function') atualizarPaginaMissoes();

    if (typeof atualizarPaginaMissoes === 'function') atualizarPaginaMissoes();
    if (typeof atualizarConquistas === 'function') atualizarConquistas();

    const btnJornada = document.getElementById('btn-jornada-principal');
    if (btnJornada) {
        if (sessionStorage.getItem('codin_recem_cadastrado') === 'true') {
            btnJornada.innerHTML = '<i class="fas fa-play"></i> Inicie sua Jornada';
        } else {
            btnJornada.innerHTML = '<i class="fas fa-play"></i> Continuar Aprendendo';
        }
    }
    
    const botoes = document.querySelectorAll('.abas-loja button');
    if (botoes.length > 0) {
        botoes.forEach(button => {
            button.addEventListener('click', (e) => {
                const target = e.target.closest('button'); 
                const categoria = target.getAttribute('data-aba');
                trocarAba(categoria);
            });
        });
        trocarAba('cabeca');
    }
});

if (document.readyState === 'complete') {
    finalizarCarregamento();
} else {
    window.addEventListener('load', finalizarCarregamento);
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    ATUALIZAR PROGRESSO E BOTÕES DOS CURSOS
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function atualizarProgressoCursos() {
    let concluidas = [];
    try { concluidas = JSON.parse(localStorage.getItem('codin_missoes_concluidas')) || []; } catch (e) { localStorage.removeItem('codin_missoes_concluidas'); }
    
    // --- 1. LÓGICA DE PROGRAMAÇÃO ---
    const prefixosLogica = [
        "logica_", "revisao_", "alg_", "proj_", "est_", 
        "oop_", "fer_", "eng_", "desafio_"
    ];
    const feitasLogica = concluidas.filter(id => prefixosLogica.some(p => id.startsWith(p))).length;
    const totalLogica = 42; 
    let porcLogica = Math.floor((feitasLogica / totalLogica) * 100);
    if (porcLogica > 100) porcLogica = 100;

    const txtLogica = document.getElementById('contador-logica');
    const barLogica = document.getElementById('barra-logica');
    const percLogica = document.getElementById('porcentagem-logica');
    const btnLogica = document.getElementById('btn-curso-logica');

    if (txtLogica) txtLogica.innerText = `${feitasLogica}/${totalLogica} lições`;
    if (barLogica) barLogica.style.width = `${porcLogica}%`;
    if (percLogica) percLogica.innerText = `${porcLogica}%`;
    
    if (btnLogica) {
        if (feitasLogica >= totalLogica) {
            btnLogica.innerHTML = '<i class="fa-solid fa-circle-check"></i> Terminado';
            btnLogica.style.backgroundColor = '#22c55e'; // Verde
            btnLogica.style.color = '#fff';
            btnLogica.style.border = 'none';
        } else if (feitasLogica > 0) {
            btnLogica.innerHTML = '<i class="fas fa-play"></i> Continuar';
            btnLogica.style.backgroundColor = ''; // Volta ao padrão
            btnLogica.style.color = '';
            btnLogica.style.border = '';
        } else {
            btnLogica.innerHTML = '<i class="fas fa-play"></i> Iniciar Curso';
            btnLogica.style.backgroundColor = '';
            btnLogica.style.color = '';
            btnLogica.style.border = '';
        }
    }


    // --- 2. HTML E CSS BÁSICO ---
    const feitasHtml = concluidas.filter(id => 
        (id.startsWith("html_") || id.startsWith("css_")) && !id.startsWith("css_adv_")
    ).length;
    const totalHtml = 28; 
    let porcHtml = Math.floor((feitasHtml / totalHtml) * 100);
    if (porcHtml > 100) porcHtml = 100;

    const txtHtml = document.getElementById('contador-html');
    const barHtml = document.getElementById('barra-html');
    const percHtml = document.getElementById('porcentagem-html');
    const btnContinuar = document.getElementById('btn-continuar-html');
    const btnApostila = document.getElementById('btn-apostila-html');
    const badgePremio = document.querySelector('.card2 .badge-premio'); 

    if (txtHtml) txtHtml.innerText = `${feitasHtml}/${totalHtml} lições`;
    if (barHtml) barHtml.style.width = `${porcHtml}%`;
    if (percHtml) percHtml.innerText = `${porcHtml}%`;

    if (btnContinuar && btnApostila) {
        if (porcHtml >= 100) {
            btnApostila.style.display = 'flex';
            if(badgePremio) badgePremio.classList.add('ativo');
            
            // Em vez de esconder o botão, mostra como Terminado
            btnContinuar.style.display = 'block';
            btnContinuar.innerHTML = '<i class="fa-solid fa-circle-check"></i> Terminado';
            btnContinuar.style.backgroundColor = '#22c55e';
            btnContinuar.style.color = '#fff';
            btnContinuar.style.border = 'none';
        } else {
            btnContinuar.style.display = 'block';
            btnApostila.style.display = 'none';
            if(badgePremio) badgePremio.classList.remove('ativo');
            
            btnContinuar.style.backgroundColor = '';
            btnContinuar.style.color = '';
            btnContinuar.style.border = '';
            btnContinuar.innerHTML = feitasHtml > 0 ? '<i class="fas fa-play"></i> Continuar' : '<i class="fas fa-play"></i> Iniciar Curso';
        }
    }

    // --- 3. JAVASCRIPT BÁSICO ---
    const feitasJs = concluidas.filter(id => id.startsWith("js_")).length;
    const totalJs = 40; 
    let porcJs = Math.floor((feitasJs / totalJs) * 100);
    if (porcJs > 100) porcJs = 100;

    const txtJs = document.getElementById('contador-js');
    const barJs = document.getElementById('barra-js');
    const percJs = document.getElementById('porcentagem-js');
    const btnContinuarJs = document.getElementById('btn-continuar-js');
    const btnApostilaJs = document.getElementById('btn-apostila-js');
    const badgeJs = document.querySelector('#card-javascript .badge-premio'); 

    if (txtJs) txtJs.innerText = `${feitasJs}/${totalJs} lições`;
    if (barJs) barJs.style.width = `${porcJs}%`;
    if (percJs) percJs.innerText = `${porcJs}%`;

    if (btnContinuarJs && btnApostilaJs) {
        if (porcJs >= 100) {
            btnApostilaJs.style.display = 'flex'; 
            if(badgeJs) badgeJs.classList.add('ativo');

            // Em vez de esconder, mostra Terminado
            btnContinuarJs.style.display = 'block';
            btnContinuarJs.innerHTML = '<i class="fa-solid fa-circle-check"></i> Terminado';
            btnContinuarJs.style.backgroundColor = '#22c55e';
            btnContinuarJs.style.color = '#fff';
            btnContinuarJs.style.border = 'none';
        } else {
            btnContinuarJs.style.display = 'block'; 
            btnApostilaJs.style.display = 'none';
            if(badgeJs) badgeJs.classList.remove('ativo');

            btnContinuarJs.style.backgroundColor = '';
            btnContinuarJs.style.color = '';
            btnContinuarJs.style.border = '';
            btnContinuarJs.innerHTML = feitasJs > 0 ? '<i class="fas fa-play"></i> Continuar' : '<i class="fas fa-play"></i> Iniciar Curso';
        }
    }

    // --- 4. CSS AVANÇADO (RPG) ---
    const feitasCssAdv = concluidas.filter(id => id.startsWith("css_adv_")).length;
    const totalCssAdv = 26; 
    let porcCssAdv = Math.floor((feitasCssAdv / totalCssAdv) * 100);
    if (porcCssAdv > 100) porcCssAdv = 100;

    const txtCssAdv = document.getElementById('contador-css-adv');
    const barCssAdv = document.getElementById('barra-css-adv');
    const percCssAdv = document.getElementById('porcentagem-css-adv');
    const btnCssAdv = document.getElementById('btn-curso-css-adv'); 

    if (txtCssAdv) txtCssAdv.innerText = `${feitasCssAdv}/${totalCssAdv} lições`;
    if (barCssAdv) barCssAdv.style.width = `${porcCssAdv}%`;
    if (percCssAdv) percCssAdv.innerText = `${porcCssAdv}%`;
    
    if (btnCssAdv) {
        if (feitasCssAdv >= totalCssAdv) {
            btnCssAdv.innerHTML = '<i class="fa-solid fa-circle-check"></i> Terminado';
            btnCssAdv.style.backgroundColor = '#22c55e';
            btnCssAdv.style.color = '#fff';
            btnCssAdv.style.border = 'none';
        } else if (feitasCssAdv > 0) {
            btnCssAdv.innerHTML = '<i class="fas fa-play"></i> Continuar';
            btnCssAdv.style.backgroundColor = '';
            btnCssAdv.style.color = '';
            btnCssAdv.style.border = '';
        } else {
            btnCssAdv.innerHTML = '<i class="fas fa-play"></i> Iniciar Curso';
            btnCssAdv.style.backgroundColor = '';
            btnCssAdv.style.color = '';
            btnCssAdv.style.border = '';
        }
    }
}

function baixarApostila() {
    //  O arquivo
    const linkDownload = './assets/Apostila_Codin_HTML_CSS.pdf'; 
    
    const a = document.createElement('a');
    a.href = linkDownload;
    a.download = 'Apostila_Completa_Codin.pdf'; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    if (typeof mostrarNotificacao === 'function') {
        mostrarNotificacao("Download iniciado! Aproveite o conhecimento. 📜✨", "#FBC02D"); 
    }
}

function baixarApostilaJS() {
    const linkDownload = './assets/Apostila_Codin_JS.pdf'; 
    const a = document.createElement('a');
    a.href = linkDownload;
    a.download = 'Apostila_Master_JavaScript.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    if (typeof mostrarNotificacao === 'function') {
        mostrarNotificacao("Apostila de JS desbloqueada! Bons estudos. 📜⚡", "#FBC02D");
    }
}
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            GERADOR DE FUMAÇA E PARTÍCULAS 
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
let intervaloParticulas = null;

function iniciarParticulasXP() {
    const nivelAtual = parseInt(localStorage.getItem('codin_nivel')) || 1;
    const badge = document.getElementById('badge-nivel-container');
    
    const auraEquipada = localStorage.getItem('codin_aura_navbar'); 
    
    if (intervaloParticulas) clearInterval(intervaloParticulas);
    if (!badge) return;

    document.querySelectorAll('.particula-xp').forEach(p => p.remove());
    badge.classList.remove('animacao-roxo', 'animacao-dourado', 'animacao-vermelho');
    badge.style.boxShadow = '';
    badge.style.border = '';
    badge.style.background = '';

    let config = null;
    
    if (auraEquipada === 'red' && nivelAtual >= 500) {
        config = { tipo: 'fumaca', cor: 'red', taxa: 60, tamanhoMin: 4, tamanhoMax: 5 };
        badge.classList.add('animacao-vermelho');
    } 
    else if (auraEquipada === 'gold' && nivelAtual >= 200) {
        config = { tipo: 'normal', cor: '#FFD700', taxa: 100, tamanhoMin: 2, tamanhoMax: 4 };
        badge.classList.add('animacao-dourado');
    } 
    else if (auraEquipada === 'purple' && nivelAtual >= 50) {
        config = { tipo: 'normal', cor: '#e9d8ecff', taxa: 200, tamanhoMin: 2, tamanhoMax: 4 };
        badge.classList.add('animacao-roxo');
    } 
    else {
        return; 
    }

    intervaloParticulas = setInterval(() => {
        criarParticula(badge, config);
    }, config.taxa);
}

function criarParticula(container, config) {
    const p = document.createElement('div');
    p.classList.add('particula-xp');

    if (config.tipo === 'fumaca') {
        p.classList.add('particula-fumaca');
        p.style.setProperty('--opacidade-inicial', '0.6');
    } else {
        p.style.setProperty('--opacidade-inicial', '1');
    }

    const posX = Math.random() * 90 + 5; 
    const tamanho = Math.random() * (config.tamanhoMax - config.tamanhoMin) + config.tamanhoMin;
    const tempo = Math.random() * 1.5 + 1.5; 
    const desvioX = (Math.random() - 0.5) * 60; 
    const rotacao = (Math.random() - 0.5) * 360; 

    p.style.setProperty('--cor', config.cor);
    p.style.setProperty('--pos-x', posX + '%');
    p.style.setProperty('--tamanho', tamanho + 'px');
    p.style.setProperty('--tempo', tempo + 's');
    p.style.setProperty('--desvio-x', desvioX + 'px');
    p.style.setProperty('--rotacao', rotacao + 'deg'); 

    container.appendChild(p);
    setTimeout(() => { p.remove(); }, 3500);
}

function verificarEfeitoBooster() {
    const barraXp = document.getElementById('badge-nivel-container') 
                 || document.querySelector('.barra-progresso-preenchimento')
                 || document.querySelector('.barra-xp-interna'); 

    if (!barraXp) return;

    const boosterAte = parseInt(localStorage.getItem('codin_booster_xp_ate')) || 0;
    const agora = new Date().getTime();

    if (agora < boosterAte) {
        barraXp.classList.add('efeito-booster-ativo');
    } else {
        barraXp.classList.remove('efeito-booster-ativo');
    }
}

function continuarJornada() {
    const secaoDestino = document.querySelector('.section-missoes');

    if (secaoDestino) {
        secaoDestino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   SISTEMA VISUAL DE LEVEL UP ´PRA TESTE
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

function mostrarLevelUp(novoNivel) {
    const modal = document.getElementById('modal-levelup');

    if (!modal) return;

    const imgEvolucao = modal.querySelector('#img-evolucao');
    const txtNivel = modal.querySelector('#numero-nivel-novo');

    let caminhoBase = "./codin/";

    let imagemSrc = caminhoBase + "fotocodin.png";

    if (imgEvolucao) {
        imgEvolucao.onerror = function() {
            this.src = caminhoBase + "codinlogin.png";
        };
        imgEvolucao.src = imagemSrc;
    }

    if (txtNivel) txtNivel.innerText = novoNivel;

    modal.style.display = 'flex';
}

function fecharModalLevelUp() {
    const modal = document.getElementById('modal-levelup');
    if(modal) modal.style.display = 'none';
}

// Formata números apenas se forem maiores que 100k //
function formatarNumero(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
    }
    
    if (num >= 100000) {
        return (num / 1000).toFixed(1).replace('.0', '') + 'k';
    }
    return num;
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            SISTEMA DA PÁGINA DE MISSÕES E RECOMPENSAS
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

function resgatarRecompensa(idMissao, moedas, xp) {
    let resgatadas = JSON.parse(localStorage.getItem('codin_missoes_resgatadas')) || {};
    const hoje = new Date().toDateString();

    if (resgatadas.data !== hoje) {
        resgatadas = { data: hoje }; 
    }

    if (resgatadas[idMissao]) {
        if(typeof mostrarNotificacao === 'function') mostrarNotificacao("Você já resgatou essa recompensa hoje!", "erro");
        return;
    }

    saldo += moedas; 
    localStorage.setItem('codin_saldo', saldo);
    if (typeof atualizarVisualizacaoSaldo === 'function') atualizarVisualizacaoSaldo();

    if (typeof ganharXP === 'function') {
        ganharXP(xp);
    } else {
        let xpAtual = parseInt(localStorage.getItem('codin_xp')) || 0;
        localStorage.setItem('codin_xp', xpAtual + xp);
    }

    if(typeof mostrarNotificacao === 'function') {
        mostrarNotificacao(`Resgatado! +${moedas} Moedas e +${xp} XP`, "sucesso");
    } else {
        alert(`Resgatado! +${moedas} Moedas e +${xp} XP`);
    }

    resgatadas[idMissao] = true;
    localStorage.setItem('codin_missoes_resgatadas', JSON.stringify(resgatadas));

    atualizarPaginaMissoes();
    if(typeof atualizarNavbar === 'function') atualizarNavbar();
}


function atualizarPaginaMissoes() {
    if (!document.querySelector('.vs2-sections')) return;

    let resgatadas = JSON.parse(localStorage.getItem('codin_missoes_resgatadas')) || {};
    const hoje = new Date().toDateString();
    if (resgatadas.data !== hoje) {
        resgatadas = { data: hoje };
        localStorage.setItem('codin_missoes_resgatadas', JSON.stringify(resgatadas));
    }

    let streakAtual = parseInt(localStorage.getItem('codin_streak')) || 0;
    let streakProgresso = Math.min(streakAtual, 7);
    let streakPerc = Math.floor((streakProgresso / 7) * 100);

    document.getElementById('texto-diaria-2').innerText = `${streakProgresso}/7`;
    document.getElementById('barra-diaria-2').style.width = `${streakPerc}%`;
    document.getElementById('perc-diaria-2').innerText = `${streakPerc}%`;

    const btnDiaria2 = document.getElementById('btn-diaria-2');
    if (streakProgresso >= 7) {
        if (resgatadas['diaria_streak']) {
            document.getElementById('card-diaria-2').classList.add('vs2-completed');
            if(btnDiaria2) btnDiaria2.outerHTML = `<span class="vs2-completed-tag"><i class="fa-solid fa-circle-check"></i> Completa</span>`;
        } else {
            if(btnDiaria2) {
                btnDiaria2.innerHTML = '<i class="fas fa-gift"></i> Resgatar';
                btnDiaria2.style.backgroundColor = "#FFC107"; 
                btnDiaria2.style.color = "#000";
                btnDiaria2.onclick = () => resgatarRecompensa('diaria_streak', 100, 200);
            }
        }
    }

    let licoesHoje = parseInt(localStorage.getItem('codin_licoes_hoje')) || 0;
    let licoesProgresso = Math.min(licoesHoje, 3);
    let licoesPerc = Math.floor((licoesProgresso / 3) * 100);

    document.getElementById('texto-diaria-1').innerText = `${licoesProgresso}/3`;
    document.getElementById('barra-diaria-1').style.width = `${licoesPerc}%`;
    document.getElementById('perc-diaria-1').innerText = `${licoesPerc}%`;

    const btnDiaria1 = document.getElementById('btn-diaria-1');
    if (licoesProgresso >= 3) {
        if (resgatadas['diaria_3licoes']) {
            document.getElementById('card-diaria-1').classList.add('vs2-completed');
            if(btnDiaria1) btnDiaria1.outerHTML = `<span class="vs2-completed-tag"><i class="fa-solid fa-circle-check"></i> Completa</span>`;
        } else {
            if(btnDiaria1) {
                btnDiaria1.innerHTML = '<i class="fas fa-gift"></i> Resgatar';
                btnDiaria1.style.backgroundColor = "#FFC107"; 
                btnDiaria1.style.color = "#000";
                btnDiaria1.onclick = () => resgatarRecompensa('diaria_3licoes', 50, 100);
            }
        }
    }

    let xpTotal = parseInt(localStorage.getItem('codin_xp_total')) || 0;

    let xpProgresso = xpTotal >= 1000 ? 1000 : xpTotal;
    let xpPerc = Math.floor((xpProgresso / 1000) * 100);

    document.getElementById('texto-sem-1').innerText = `${xpProgresso}/1000`;
    document.getElementById('barra-sem-1').style.width = `${xpPerc}%`;
    document.getElementById('perc-sem-1').innerText = `${xpPerc}%`;

    const btnSem1 = document.getElementById('btn-sem-1');
    if (xpProgresso >= 1000) {
        if (resgatadas['semanal_1000xp']) {
            document.getElementById('card-sem-1').classList.add('vs2-completed');
            if(btnSem1) btnSem1.outerHTML = `<span class="vs2-completed-tag"><i class="fa-solid fa-circle-check"></i> Completa</span>`;
        } else {
            if(btnSem1) {
                btnSem1.innerHTML = '<i class="fas fa-gift"></i> Resgatar';
                btnSem1.style.backgroundColor = "#FFC107"; 
                btnSem1.style.color = "#000";
                btnSem1.onclick = () => resgatarRecompensa('semanal_1000xp', 200, 300);
            }
        }
    }
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            SISTEMA DE OFENSIVA REAL (FOGUINHO)
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function verificarOfensiva() {
    let streakAtual = parseInt(localStorage.getItem('codin_streak')) || 0;
    let ultimaDataStr = localStorage.getItem('codin_ultima_data');
    
    const hoje = new Date();
    const dataHojeStr = hoje.toDateString(); 
    
    if (ultimaDataStr) {
        const ultimaData = new Date(ultimaDataStr);

        const hojeZerado = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
        const ultimaZerada = new Date(ultimaData.getFullYear(), ultimaData.getMonth(), ultimaData.getDate());

        const diffTempo = hojeZerado - ultimaZerada;
        const diffDias = diffTempo / (1000 * 60 * 60 * 24);
        
        if (diffDias === 1) {
            streakAtual++;
            localStorage.setItem('codin_streak', streakAtual);
            localStorage.setItem('codin_ultima_data', dataHojeStr);
            if(typeof mostrarNotificacao === 'function') mostrarNotificacao(`Ofensiva atualizada: ${streakAtual} dias! 🔥`, "sucesso");
            
        } else if (diffDias > 1) {
            streakAtual = 1;
            localStorage.setItem('codin_streak', streakAtual);
            localStorage.setItem('codin_ultima_data', dataHojeStr);
            if(typeof mostrarNotificacao === 'function') mostrarNotificacao("Você perdeu sua ofensiva! Recomeçando do dia 1.", "erro");
        }
    } else {
        streakAtual = 1;
        localStorage.setItem('codin_streak', streakAtual);
        localStorage.setItem('codin_ultima_data', dataHojeStr);
    }
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                SISTEMA DE CONQUISTAS
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

function resgatarConquista(idConquista, moedas) {
    let resgatadas = JSON.parse(localStorage.getItem('codin_conquistas_resgatadas')) || {};
    
    if(resgatadas[idConquista]) return;

    saldo += moedas; 
    localStorage.setItem('codin_saldo', saldo);
    if (typeof atualizarVisualizacaoSaldo === 'function') atualizarVisualizacaoSaldo();

    resgatadas[idConquista] = true;
    localStorage.setItem('codin_conquistas_resgatadas', JSON.stringify(resgatadas));

    if(typeof mostrarNotificacao === 'function') mostrarNotificacao(`Conquista Desbloqueada! +${moedas} Procyons 🏆`, "ouro");

    atualizarConquistas();
}

function processarCartaoConquista(idConquista, condicaoAtingida, premio, idCard, idBtn, resgatadas) {
    const card = document.getElementById(idCard);
    const btn = document.getElementById(idBtn);
    if (!card || !btn) return;

    if (resgatadas[idConquista]) {
        card.classList.add('desbloqueada');
        btn.classList.add('status-desbloqueada');
        btn.innerHTML = 'Desbloqueada';
        btn.style.backgroundColor = ""; 
        btn.onclick = null;
    } else if (condicaoAtingida) {
        card.classList.add('desbloqueada');
        btn.classList.remove('status-desbloqueada');
        btn.innerHTML = '<i class="fas fa-gift"></i> Resgatar';
        btn.style.backgroundColor = "#FFC107";
        btn.style.color = "#000";
        btn.style.cursor = "pointer";
        btn.onclick = () => resgatarConquista(idConquista, premio);
    } else {
        card.classList.remove('desbloqueada');
        btn.classList.remove('status-desbloqueada');
        btn.innerHTML = premio;
        btn.style.backgroundColor = "";
        btn.style.cursor = "default";
        btn.onclick = null;
    }
}

function atualizarConquistas() {
    if (!document.querySelector('.grade-conquistas')) return;

    let concluidas = JSON.parse(localStorage.getItem('codin_missoes_concluidas')) || [];
    let streak = parseInt(localStorage.getItem('codin_streak')) || 0;
    let resgatadas = JSON.parse(localStorage.getItem('codin_conquistas_resgatadas')) || {};

    processarCartaoConquista('conq_primeira', concluidas.length >= 1, 25, 'card-conq-primeira', 'btn-conq-primeira', resgatadas);

    const prefixosLogica = ["logica_", "revisao_", "alg_", "proj_", "est_", "oop_", "fer_", "eng_", "desafio_"];
    const feitasLogica = concluidas.filter(id => prefixosLogica.some(p => id.startsWith(p))).length;
    processarCartaoConquista('conq_logica', feitasLogica >= 42, 150, 'card-conq-logica', 'btn-conq-logica', resgatadas);

    processarCartaoConquista('conq_streak30', streak >= 30, 500, 'card-conq-streak30', 'btn-conq-streak30', resgatadas);

    const feitasPython = concluidas.filter(id => id.startsWith("py_")).length;
    processarCartaoConquista('conq_python', feitasPython >= 35, 100, 'card-conq-python', 'btn-conq-python', resgatadas);
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            SINCRONIZAÇÃO DO DASHBOARD (INDEX.HTML)
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function atualizarMissaoDiariaHome() {
    const cardMissaoHome = document.getElementById('card-missao-diaria-home');
    if (!cardMissaoHome) return; 

    let licoesHoje = parseInt(localStorage.getItem('codin_licoes_hoje')) || 0;
    let dataLicoes = localStorage.getItem('codin_data_licoes_hoje');
    const hoje = new Date().toDateString();

    if (dataLicoes !== hoje) {
        licoesHoje = 0;
    }

    let licoesProgresso = Math.min(licoesHoje, 3);
    let licoesPerc = Math.floor((licoesProgresso / 3) * 100);

    const barra = document.getElementById('barra-missao-diaria-home');
    const texto = document.getElementById('texto-missao-diaria-home');
    const recompensa = document.getElementById('recompensa-missao-diaria-home');

    if (barra) barra.style.width = `${licoesPerc}%`;
    if (texto) texto.innerText = `${licoesProgresso}/3`;

    let resgatadas = JSON.parse(localStorage.getItem('codin_missoes_resgatadas')) || {};
    
    if (licoesProgresso >= 3) {
        if (resgatadas['diaria_3licoes'] && resgatadas.data === hoje) {
            if (recompensa) recompensa.innerHTML = '<span style="color:#4CAF50; font-weight:bold;"><i class="fa-solid fa-circle-check"></i> Resgatada!</span>';
        } else {
            if (recompensa) recompensa.innerHTML = '<a href="./paginas/missoes.html" style="color:#FFC107; font-weight:bold; text-decoration:none;"><i class="fas fa-gift"></i> Resgatar Prêmio!</a>';
        }
    } else {
        if (recompensa) recompensa.innerHTML = '<img src="./codin/procyons.png" style="width: 16px; vertical-align: middle; margin-right: 5px;"> Recompensa: 50 Procyons';
    }
}

window.addEventListener('load', atualizarMissaoDiariaHome);


// localStorage.setItem('codin_nivel', 50); location.reload(); -- Mudar seu level

// localStorage.setItem('codin_dev_mode', 'true'); location.reload(); --Dev mod