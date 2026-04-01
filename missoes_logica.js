/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        BANCO DE DADOS (TiTULOS PARA O MENU)
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

// LISTA 1: MISSÕES SEMANAIS (Básico)
const missoesSemanaisFixas = [
    { id: "var_tipos", titulo: "Variáveis e Tipos" },
    { id: "operadores", titulo: "Operadores Lógicos" },
    { id: "condicionais", titulo: "Estruturas Condicionais" },
    { id: "loops", titulo: "Loops e Repetições" },
    { id: "funcoes", titulo: "Funções Básicas" },
    { id: "arrays", titulo: "Arrays e Listas" },
    { id: "objetos", titulo: "Objetos e Classes" }
];

// LISTA 2: CURSO DE LÓGICA 
const trilhaCursoLogica = [
    // --- MÓDULO 1: A Lógica do Pensamento ---
    { id: "logica_sequencia", titulo: "1. A Ordem Importa" },
    { id: "logica_decisao", titulo: "2. E Se...? (Decisões)" },
    { id: "logica_padroes", titulo: "3. O Poder da Repetição" },
    { id: "logica_debug", titulo: "4. Caçando Bugs" },
    { id: "logica_troca", titulo: "5. O Problema dos Copos" },
    { id: "logica_contador", titulo: "6. Ensinando a Contar" },
    { id: "revisao_logica_1", titulo: "7. Desafio: Semáforo" },

    // --- MÓDULO 2: Algoritmos ---
    { id: "alg_busca", titulo: "8. Busca Esperta" },
    { id: "alg_ordenacao", titulo: "9. Ordenação (Bubble Sort)" },
    { id: "alg_caminho", titulo: "10. Otimização (GPS)" },
    { id: "alg_pilha", titulo: "11. Pilhas (Undo)" },
    { id: "alg_fila", titulo: "12. Filas (Queue)" },
    { id: "alg_acumulador", titulo: "13. O Acumulador" },
    { id: "proj_final_logica", titulo: "14. Projeto: Escape Room" },

    // --- MÓDULO 3: Estruturas Avançadas ---
    { id: "est_matriz", titulo: "15. Matrizes (Grids)" },
    { id: "est_dicionario", titulo: "16. Dicionários (Keys)" },
    { id: "alg_recursao", titulo: "17. Recursão" },
    { id: "logica_modulo", titulo: "18. O Operador %" },
    { id: "logica_erros", titulo: "19. Blindando o Código" },
    { id: "est_arvore", titulo: "20. Árvores (Trees)" },
    { id: "revisao_logica_2", titulo: "21. Desafio: O Hacker" },

    // Módulo 4: Orientação a Objetos
    { id: "oop_classe", titulo: "22. A Fábrica (Classes)" },
    { id: "oop_atributos", titulo: "23. Dando Vida" },
    { id: "oop_metodos", titulo: "24. Ensinando Ações" },
    { id: "oop_heranca", titulo: "25. Herança" },
    { id: "oop_polimorfismo", titulo: "26. Polimorfismo" },
    { id: "oop_encapsulamento", titulo: "27. Segurança (Privado)" },
    { id: "proj_final_oop", titulo: "28. Projeto: Arena RPG" },

    // Módulo 5: Ferramentas Modernas
    { id: "fer_json", titulo: "29. JSON" },
    { id: "fer_string", titulo: "30. Dominando Textos" },
    { id: "fer_datas", titulo: "31. O Tempo (Dates)" },
    { id: "fer_lambda", titulo: "32. Funções Lambda" },
    { id: "fer_funcional", titulo: "33. Map & Filter" },
    { id: "fer_regex", titulo: "34. Regex (Padrões)" },
    { id: "fer_api", titulo: "35. APIs e Rede" },

    // Módulo 6: Engenharia de Software
    { id: "eng_clean", titulo: "36. Clean Code" },
    { id: "eng_git", titulo: "37. Git & GitHub" },
    { id: "eng_testes", titulo: "38. Testes Unitários" },
    { id: "eng_patterns", titulo: "39. Design Patterns" },
    { id: "eng_bigo", titulo: "40. Performance (Big O)" },
    { id: "eng_mvc", titulo: "41. Arquitetura MVC" },
    { id: "desafio_final_mestre", titulo: "42. DESAFIO MESTRE" }
];

// LISTA 3: CURSO HTML e CSS 
const trilhaCursoHtml = [
    // --- PARTE 1: HTML (14 Lições) ---
    { id: "html_estrutura", titulo: "1. Estrutura Básica" },
    { id: "html_textos", titulo: "2. Títulos e Textos" },
    { id: "html_formatacao", titulo: "3. Formatação" },
    { id: "html_links", titulo: "4. Links" },
    { id: "html_imagens", titulo: "5. Imagens" },
    { id: "html_listas", titulo: "6. Listas" },
    { id: "html_atributos", titulo: "7. Atributos" },
    { id: "html_tabelas", titulo: "8. Tabelas" },
    { id: "html_forms", titulo: "9. Formulários" },
    { id: "html_botoes", titulo: "10. Botões" },
    { id: "html_divs", titulo: "11. Div e Span" },
    { id: "html_classes", titulo: "12. IDs e Classes" },
    { id: "html_semantica", titulo: "13. Semântica" },
    { id: "html_projeto", titulo: "14. Desafio HTML" },

    // --- PARTE 2: CSS (Bloco 1 - Introdução) ---
    { id: "css_intro", titulo: "15. Introdução ao CSS" },
    { id: "css_seletores", titulo: "16. Seletores" },
    { id: "css_cores", titulo: "17. Cores e Fundos" },
    { id: "css_texto", titulo: "18. Tipografia" },
    { id: "css_boxmodel", titulo: "19. Box Model" },
    { id: "css_display", titulo: "20. Display e Posição" },
    { id: "css_flex_intro", titulo: "21. Flexbox: O Container" },
    { id: "css_flex_alinhamento", titulo: "22. Flexbox: Alinhando" },
    { id: "css_flex_wrap", titulo: "23. Flexbox: Quebras" },
    { id: "css_projeto_layout", titulo: "24. Projeto: Site Flex" },
    { id: "css_grid", titulo: "25. CSS Grid Layout" },
    { id: "css_responsivo", titulo: "26. Responsividade" },
    { id: "css_animacoes", titulo: "27. Efeitos e Animações" },
    { id: "css_projeto_final", titulo: "28. PROJETO MASTER" }
];

// LISTA 4: CURSO JAVASCRIPT (40 Lições)
const trilhaCursoJs = [
    // --- MÓDULO 1: FUNDAMENTOS ---
    { id: "js_intro", titulo: "1. Hello World" },
    { id: "js_console", titulo: "2. O Console" },
    { id: "js_variaveis", titulo: "3. Variáveis (Let & Const)" },
    { id: "js_tipos", titulo: "4. Tipos de Dados" },
    { id: "js_operadores", titulo: "5. Matemática no Código" },
    { id: "js_comparadores", titulo: "6. Comparadores" },
    { id: "js_logica", titulo: "7. E, OU, NÃO" },
    { id: "js_templates", titulo: "8. Template Strings" },
    { id: "js_null", titulo: "9. Null e Undefined" },
    { id: "js_desafio_1", titulo: "10. Desafio: Média" },

    //(Módulo 2):
    { id: "js_condicionais", titulo: "11. Decisões (If/Else)" },
    { id: "js_ternario", titulo: "12. Else If e Ternário" },
    { id: "js_switch", titulo: "13. Switch Case" },
    { id: "js_while", titulo: "14. Loop While" },
    { id: "js_for", titulo: "15. Loop For" },

    //(Módulo 3 - DOM):
    { id: "js_dom_intro", titulo: "16. O que é DOM?" },
    { id: "js_seletores", titulo: "17. Selecionando Elementos" },
    { id: "js_conteudo", titulo: "18. Mudando Texto" },
    { id: "js_estilo", titulo: "19. Mudando CSS (Estilo)" },
    { id: "js_eventos", titulo: "20. Eventos (Clicks)" },

    //(Módulo 4 - Dados):
    { id: "js_arrays", titulo: "21. Arrays (Listas)" },
    { id: "js_arrays_metodos", titulo: "22. Manipulando Listas" },
    { id: "js_for_of", titulo: "23. Loop For..Of" },
    { id: "js_objetos", titulo: "24. Objetos (Objects)" },
    { id: "js_objetos_metodos", titulo: "25. Métodos e 'This'" },

    //(Módulo 5 - Moderno):
    { id: "js_arrow", titulo: "26. Arrow Functions" },
    { id: "js_destructuring", titulo: "27. Desestruturação" },
    { id: "js_map_filter", titulo: "28. Map e Filter" },
    { id: "js_json", titulo: "29. O que é JSON?" },
    { id: "js_localstorage", titulo: "30. LocalStorage" },

    //(Módulo 6 - Async):
    { id: "js_async_intro", titulo: "31. Assincronismo" },
    { id: "js_promises", titulo: "32. Promises (Promessas)" },
    { id: "js_async_await", titulo: "33. Async / Await" },
    { id: "js_fetch", titulo: "34. Fetch API (Requisições)" },
    { id: "js_try_catch", titulo: "35. Tratando Erros" },
];

// LISTA: CURSO CSS AVANÇADO (RPG)
const trilhaCssAvancado = [
    { id: "css_adv_1", titulo: "1. A Magia das Cores" },
    { id: "css_adv_2", titulo: "2. Classes e Grupos" },
    { id: "css_adv_3", titulo: "3. O Poder do ID" },
    { id: "css_adv_4", titulo: "4. Box Model (Território)" },
    { id: "css_adv_5", titulo: "5. Estrutura (Display)" },
    { id: "css_adv_6", titulo: "6. Posicionamento (GPS)" },
    { id: "css_adv_7", titulo: "7. Tipografia (A Voz)" },
    { id: "css_adv_8", titulo: "8. Interação (:hover)" },
    { id: "css_adv_9", titulo: "9. Fundos (Background)" },
    { id: "css_adv_10", titulo: "10. Decoração (Style)" },
    // -- Flesx Box
    { id: "css_adv_11", titulo: "11. A Guilda (Flexbox)" },
    { id: "css_adv_12", titulo: "12. Campo de Batalha (Justify)" },
    { id: "css_adv_13", titulo: "13. A Masmorra Vertical" },
    { id: "css_adv_14", titulo: "14. O Tesouro (Sizing)" },
    { id: "css_adv_15", titulo: "15. Táticas (Order & Self)" },
    { id: "css_adv_16", titulo: "16. A Bússola (Eixos)" },
    { id: "css_adv_17", titulo: "17. Arquitetura (Aninhado)" },
    { id: "css_adv_18", titulo: "18. Alinhamento (Santo Graal)" },
    { id: "css_adv_19", titulo: "19. Fluxo (Wrap & Align)" },
    { id: "css_adv_20", titulo: "20. O Arquiteto (Layouts)" },
    // -- Grid
    { id: "css_adv_21", titulo: "21. A Rede Urbana (Grid)" },
    { id: "css_adv_22", titulo: "22. Mestre de Obras (Pos)" },
    { id: "css_adv_23", titulo: "23. O Arquiteto (Grid Areas)" },
    { id: "css_adv_24", titulo: "24. Alinhamento Perfeito" },
    // -- Responsividade
    { id: "css_adv_25", titulo: "25. O Metamorfo (@media)" },
    { id: "css_adv_26", titulo: "26. Medidas Mágicas" },
];

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    (FILTRO)
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const modo = params.get('modo');
    
    const tituloPagina = document.querySelector('.header-section h3');

    if (modo === 'curso_logica') {
        if(tituloPagina) tituloPagina.innerHTML = '<i class="fas fa-network-wired"></i> Lógica de Programação';
        renderizarListaDashboard(trilhaCursoLogica);
    } 
    else if (modo === 'curso_html_css') {
        if(tituloPagina) tituloPagina.innerHTML = '<i class="fa-brands fa-html5"></i> HTML & CSS Básico';
        renderizarListaDashboard(trilhaCursoHtml);
    }
    else if (modo === 'curso_js') {
        if(tituloPagina) tituloPagina.innerHTML = '<i class="fa-brands fa-js" style="color:#F7DF1E;"></i> JavaScript Básico';
        renderizarListaDashboard(trilhaCursoJs);
    }
    else if (modo === 'curso_css_adv') {
        if(tituloPagina) tituloPagina.innerHTML = '<i class="fa-brands fa-css3-alt" style="color:#2965f1;"></i> CSS Pro (RPG)';
        renderizarListaDashboard(trilhaCssAvancado);
    }
    else {
        // Padrão (Semanais)
        if(tituloPagina) tituloPagina.innerHTML = '<i class="fas fa-clock"></i> Missões Semanais';
        renderizarListaDashboard(missoesSemanaisFixas);
    }
});

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     RENDERIZAÇÃO INTELIGENTE 
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function renderizarListaDashboard(missoes) {
    const container = document.getElementById('lista-missoes-dashboard');
    if (!container) return; 

    container.innerHTML = '';

    let concluidas = [];
    try { concluidas = JSON.parse(localStorage.getItem('codin_missoes_concluidas')) || []; } catch (e) { localStorage.removeItem('codin_missoes_concluidas'); }
    const modoDev = localStorage.getItem('codin_dev_mode') === 'true';

    let encontrouProxima = false;

    missoes.forEach((missao, index) => {
        const jaFez = concluidas.includes(missao.id);
        let numeroVisual = index + 1;
        
        let classeItem = '';
        let conteudoNumero = numeroVisual;
        let htmlBadge = '';
        let htmlBotao = '';

        if (jaFez) {
            classeItem = 'completo';
            conteudoNumero = '<i class="fa-solid fa-check"></i>';
            
        } 
        else if (!encontrouProxima) {
            classeItem = 'ativo';
            conteudoNumero = '<i class="fa-solid fa-play"></i>';
            encontrouProxima = true; 
            htmlBadge = '<div class="badge-status">Comece agora</div>';
            
            htmlBotao = `
                <button class="btn-missao-continuar" onclick="irParaMissao('${missao.id}')">
                    Iniciar Atividade
                </button>
            `;
        } 
        else {
            if (modoDev) {
                classeItem = 'ativo dev-mode-item'; 
                conteudoNumero = '<i class="fa-solid fa-lock-open"></i>'; 
                htmlBadge = '<div class="badge-status" style="background:#333; color:#0f0;">DEV MODE</div>';
                
                htmlBotao = `
                    <button class="btn-missao-continuar" style="background-color: #444; border: 1px solid #0f0; color: #0f0;" onclick="irParaMissao('${missao.id}')">
                        <i class="fas fa-bug"></i> Testar
                    </button>
                `;
            } else {
                classeItem = 'bloqueado';
                conteudoNumero = '<i class="fa-solid fa-lock"></i>'; 
            }
        }

        const html = `
            <div class="item-missao-dashboard ${classeItem}">
                <div class="missao-numero">
                    ${conteudoNumero}
                </div>
                
                <div class="missao-info">
                    <h4>${missao.titulo}</h4>
                    ${htmlBadge}
                </div>

                <div class="missao-acao">
                    ${htmlBotao}
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

function irParaMissao(idMissao) {
    const urlAtual = window.location.pathname;
    let prefixo = '';

    if (urlAtual.includes('/paginas/')) {
        prefixo = '../'; 
    } else {
        prefixo = './'; 
    }

    window.location.href = `${prefixo}misssoes/missao.html?id=${idMissao}`;
}