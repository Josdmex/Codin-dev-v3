/* ======================================================
   1. BANCO DE DADOS DE TODAS AS MISSÕES (CONTEÚDO)
   ====================================================== */
const bancoDeMissoes = {

    // --- SEMANAIS: VARIÁVEIS E TIPOS ---
    "var_tipos": [
        {
            tipo: "teoria",
            titulo: "O que são variáveis?",
            conteudo: `
                <p>Imagine que variáveis são <strong>caixas com etiquetas</strong>. Você guarda algo dentro e usa a etiqueta para encontrar depois.</p>
                <div style="background:#f4f4f4; padding:10px; border-radius:5px; margin:10px 0; font-family:monospace;">
                    nome = "Codin" <span style="color:green"># Texto (String)</span><br>
                    vidas = 5 <span style="color:green"># Inteiro (Int)</span><br>
                    preco = 10.50 <span style="color:green"># Decimal (Float)</span><br>
                    vivo = True <span style="color:green"># Booleano (Bool)</span>
                </div>
                <p><strong>Regra de Ouro:</strong> Textos sempre precisam de aspas (" " ou ' '). Números não!</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Criando um Inteiro",
            instrucao: "Crie uma variável chamada 'idade' com valor 18.",
            blocos: ["idade", "=", "18", "print", "'18'"],
            respostaCerta: ["idade", "=", "18"]
        },
        {
            tipo: "montagem",
            titulo: "Criando uma String",
            instrucao: "Crie a variável 'nome' com o texto 'Codin'.",
            blocos: ["nome", "=", "'Codin'", "Codin", "print"],
            respostaCerta: ["nome", "=", "'Codin'"]
        },
        {
            tipo: "quiz",
            titulo: "Identifique o Float",
            instrucao: "Qual destas variáveis é um número decimal (float)?",
            opcoes: ["preco = 10", "preco = 10.90", "preco = '10.90'", "preco = True"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Valor Booleano",
            instrucao: "Defina a variável 'ligado' como True (Verdadeiro).",
            blocos: ["ligado", "=", "True", "False", "'True'"],
            respostaCerta: ["ligado", "=", "True"]
        },
        {
            tipo: "quiz",
            titulo: "Aspas importam?",
            instrucao: "O valor '15' (com aspas) é de qual tipo?",
            opcoes: ["Int (Inteiro)", "Float (Decimal)", "String (Texto)", "Bool"],
            respostaIndex: 2
        },
        {
            tipo: "montagem",
            titulo: "Corrigindo Erro",
            instrucao: "Corrija: texto = 50 (Quero que seja texto)",
            blocos: ["texto", "=", "'50'", "50", "int"],
            respostaCerta: ["texto", "=", "'50'"]
        }
    ],

    // --- MISSÃO 2: OPERADORES LÓGICOS ---
    "operadores": [
        {
            tipo: "teoria",
            titulo: "Matemática e Comparação",
            conteudo: `
                <p>O computador é uma calculadora super rápida. Além de somar, ele sabe <strong>comparar</strong> coisas.</p>
                <ul style="list-style:none; padding-left:0;">
                    <li>➕ <strong>Soma:</strong> <code>total = 10 + 5</code></li>
                    <li>✖️ <strong>Multiplicação:</strong> <code>area = 4 * 4</code></li>
                    <li>❓ <strong>Igualdade:</strong> <code>senha == "123"</code> (Note os dois iguais!)</li>
                    <li>🚫 <strong>Diferente:</strong> <code>cor != "azul"</code></li>
                </ul>
                <p>O resultado de uma comparação é sempre Verdadeiro (True) ou Falso (False).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Fazendo uma Soma",
            instrucao: "Crie uma variável 'soma' que recebe 10 mais 5.",
            blocos: ["soma", "=", "10", "+", "5", "*"],
            respostaCerta: ["soma", "=", "10", "+", "5"]
        },
        {
            tipo: "quiz",
            titulo: "Resultado da Multiplicação",
            instrucao: "Quanto vale: x = 3 * 4 ?",
            opcoes: ["7", "12", "34", "0.75"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Comparação Maior",
            instrucao: "Verifique se 10 é maior que 5.",
            blocos: ["10", ">", "5", "<", "=", "=="],
            respostaCerta: ["10", ">", "5"]
        },
        {
            tipo: "quiz",
            titulo: "Igualdade",
            instrucao: "Qual símbolo usamos para perguntar se A é IGUAL a B?",
            opcoes: ["=", "==", "===", "equals"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Operador E (AND)",
            instrucao: "Verifique: Se idade > 18 E dinheiro > 0.",
            blocos: ["if", "idade > 18", "and", "dinheiro > 0", "or"],
            respostaCerta: ["if", "idade > 18", "and", "dinheiro > 0"]
        },
        {
            tipo: "montagem",
            titulo: "Correção de Lógica",
            instrucao: "O código x = 10 / 2 deve guardar 5.0.",
            blocos: ["x", "=", "10", "/", "2", "*"],
            respostaCerta: ["x", "=", "10", "/", "2"]
        }
    ],

    // --- MISSÃO 3: ESTRUTURAS CONDICIONAIS ---
    "condicionais": [
        {
            tipo: "teoria",
            titulo: "O porteiro do código (IF)",
            conteudo: `
                <p>O <strong>if</strong> (se) funciona como um segurança: ele só deixa o código rodar se a condição for verdadeira.</p>
                <div style="background:#f4f4f4; padding:10px; border-radius:5px; font-family:monospace;">
                    if idade >= 18:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("Pode entrar")<br>
                    else:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("Barrado!")
                </div>
                <p>⚠️ <strong>Atenção:</strong> Em Python, o espaço antes do print (indentação) é obrigatório! Ele diz o que está dentro do IF.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Estrutura IF básica",
            instrucao: "Monte: Se idade for maior que 18...",
            blocos: ["if", "idade", ">", "18", ":", "then"],
            respostaCerta: ["if", "idade", ">", "18", ":"]
        },
        {
            tipo: "montagem",
            titulo: "Estrutura ELSE",
            instrucao: "Adicione o 'senão' no final do código.",
            blocos: ["else", ":", "if", "elif", ";"],
            respostaCerta: ["else", ":"]
        },
        {
            tipo: "quiz",
            titulo: "Indentação",
            instrucao: "Em Python, o que define o bloco de código dentro do IF?",
            opcoes: ["Chaves {}", "Ponto e vírgula ;", "Indentação (Espaço)", "Parênteses ()"],
            respostaIndex: 2
        },
        {
            tipo: "montagem",
            titulo: "O ELIF (Senão Se)",
            instrucao: "Verifique uma segunda condição com elif nota > 5.",
            blocos: ["elif", "nota", ">", "5", ":", "else"],
            respostaCerta: ["elif", "nota", ">", "5", ":"]
        },
        {
            tipo: "quiz",
            titulo: "Lógica do Código",
            instrucao: "Se x=5. O código: 'if x > 10: print(A) else: print(B)' imprime o quê?",
            opcoes: ["A", "B", "Erro", "Nada"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Corrigindo Sintaxe",
            instrucao: "Faltam os dois pontos! if vivo == True",
            blocos: ["if", "vivo", "==", "True", ":"],
            respostaCerta: ["if", "vivo", "==", "True", ":"]
        }
    ],

    // --- MISSÃO 4: LOOPS E REPETIÇÕES ---
    "loops": [
        {
            tipo: "teoria",
            titulo: "Não repita, use Loops!",
            conteudo: `
                <p>Para não escrever o mesmo código 100 vezes, usamos Loops (Laços de Repetição).</p>
                <p><strong>🔄 For:</strong> Use quando souber o limite. <br>
                <code>for i in range(5):</code> (Repete 5 vezes, de 0 a 4)</p>
                <p><strong>🔄 While:</strong> Use enquanto uma condição for verdade. <br>
                <code>while bateria > 0:</code> (Repete até a bateria acabar)</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Loop For simples",
            instrucao: "Monte um loop que vai de 0 a 9 (range 10).",
            blocos: ["for", "i", "in", "range(10)", ":"],
            respostaCerta: ["for", "i", "in", "range(10)", ":"]
        },
        {
            tipo: "quiz",
            titulo: "Contagem",
            instrucao: "range(3) gera quais números?",
            opcoes: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "1, 2"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Loop While",
            instrucao: "Enquanto vida for maior que 0...",
            blocos: ["while", "vida", ">", "0", ":", "for"],
            respostaCerta: ["while", "vida", ">", "0", ":"]
        },
        {
            tipo: "montagem",
            titulo: "Printando na lista",
            instrucao: "Para cada 'item' na 'lista': print(item)",
            blocos: ["for", "item", "in", "lista", ":", "print(item)"],
            respostaCerta: ["for", "item", "in", "lista", ":", "print(item)"]
        },
        {
            tipo: "quiz",
            titulo: "Loop Infinito",
            instrucao: "O que acontece se a condição do While nunca ficar Falsa?",
            opcoes: ["O código para", "O loop roda para sempre (trava)", "Dá erro de sintaxe"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Arrumando o Loop",
            instrucao: "Corrija: for x on range(5): (Use 'in')",
            blocos: ["for", "x", "in", "range(5)", ":"],
            respostaCerta: ["for", "x", "in", "range(5)", ":"]
        }
    ],

    // --- MISSÃO 5: FUNÇÕES BÁSICAS ---
    "funcoes": [
        {
            tipo: "teoria",
            titulo: "O Liquidificador de Código",
            conteudo: `
                <p>Funções são como liquidificadores: você joga ingredientes (parâmetros), ele processa e te devolve um suco (retorno).</p>
                <div style="background:#f4f4f4; padding:10px; border-radius:5px; font-family:monospace;">
                    def somar(a, b): <span style="color:green"># Cria a máquina</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return a + b<br><br>
                    resultado = somar(10, 5) <span style="color:green"># Usa a máquina</span>
                </div>
                <p>Usamos <code>def</code> para criar a função e <code>return</code> para devolver o valor final.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Definindo Função",
            instrucao: "Crie uma função chamada 'pular'.",
            blocos: ["def", "pular", "()", ":", "func"],
            respostaCerta: ["def", "pular", "()", ":"]
        },
        {
            tipo: "montagem",
            titulo: "Chamando a Função",
            instrucao: "Execute a função pular que você criou.",
            blocos: ["pular()", "def pular", "call pular", ":"],
            respostaCerta: ["pular()"]
        },
        {
            tipo: "quiz",
            titulo: "Parâmetros",
            instrucao: "Em 'def somar(a, b):', o que são 'a' e 'b'?",
            opcoes: ["O nome da função", "O retorno", "Parâmetros (inputs)", "Erros"],
            respostaIndex: 2
        },
        {
            tipo: "montagem",
            titulo: "Retornando Valor",
            instrucao: "Faça a função devolver o resultado.",
            blocos: ["return", "resultado", "print", "exit"],
            respostaCerta: ["return", "resultado"]
        },
        {
            tipo: "quiz",
            titulo: "Indentação na Função",
            instrucao: "O código da função deve estar...",
            opcoes: ["Na mesma linha do def", "Indentado (recuado) para a direita", "Colado na margem esquerda"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Correção de Definição",
            instrucao: "Corrija: function atacar(): (Use 'def')",
            blocos: ["def", "atacar", "()", ":", "function"],
            respostaCerta: ["def", "atacar", "()", ":"]
        }
    ],

    // --- MISSÃO 6: ARRAYS E LISTAS ---
    "arrays": [
        {
            tipo: "teoria",
            titulo: "Sua Mochila (Listas)",
            conteudo: `
                <p>Uma variável normal guarda uma coisa. Uma <strong>Lista (Array)</strong> é como uma mochila: guarda várias coisas juntas!</p>
                <p><code>mochila = ["Espada", "Poção", "Mapa"]</code></p>
                <p><strong>Atenção:</strong> Em programação, começamos a contar do ZERO.</p>
                <ul>
                    <li>mochila[0] é "Espada"</li>
                    <li>mochila[1] é "Poção"</li>
                </ul>
            `
        },
        {
            tipo: "montagem",
            titulo: "Criando Lista",
            instrucao: "Crie uma lista 'nums' com 1, 2, 3.",
            blocos: ["nums", "=", "[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}"],
            respostaCerta: ["nums", "=", "[1, 2, 3]"]
        },
        {
            tipo: "quiz",
            titulo: "Acessando Itens",
            instrucao: "frutas = ['Maca', 'Banana']. Qual é frutas[0]?",
            opcoes: ["Maca", "Banana", "Erro", "0"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Pegando o segundo item",
            instrucao: "Como acessar o segundo item da lista 'itens'?",
            blocos: ["itens[1]", "itens[2]", "itens(1)", "itens.2"],
            respostaCerta: ["itens[1]"]
        },
        {
            tipo: "montagem",
            titulo: "Adicionando Item",
            instrucao: "Adicione 'Mapa' na lista inventario usando append.",
            blocos: ["inventario", ".append", "('Mapa')", ".add"],
            respostaCerta: ["inventario", ".append", "('Mapa')"]
        },
        {
            tipo: "quiz",
            titulo: "Tamanho da Lista",
            instrucao: "Qual comando diz quantos itens tem na lista?",
            opcoes: ["size()", "count()", "len()", "width()"],
            respostaIndex: 2
        },
        {
            tipo: "montagem",
            titulo: "Lista Vazia",
            instrucao: "Crie uma lista vazia chamada 'vazia'.",
            blocos: ["vazia", "=", "[]", "Empty", "{}"],
            respostaCerta: ["vazia", "=", "[]"]
        }
    ],

    // --- MISSÃO 7: OBJETOS E CLASSES ---
    "objetos": [
        {
            tipo: "teoria",
            titulo: "A Fábrica de Robôs",
            conteudo: `
                <p>Pense na <strong>Classe</strong> como a planta (o desenho) de um robô. Pense no <strong>Objeto</strong> como o robô pronto.</p>
                <ul>
                    <li><strong>Classe:</strong> <code>Heroi()</code> (O molde)</li>
                    <li><strong>Objeto:</strong> <code>player1</code> (O boneco criado)</li>
                </ul>
                <p>Eles têm <strong>Atributos</strong> (vida, nome) e <strong>Métodos</strong> (atacar, pular).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Criando uma Classe",
            instrucao: "Defina a classe 'Heroi'.",
            blocos: ["class", "Heroi", ":", "def", "()"],
            respostaCerta: ["class", "Heroi", ":"]
        },
        {
            tipo: "montagem",
            titulo: "Criando um Objeto",
            instrucao: "Crie um 'player1' usando a classe Heroi().",
            blocos: ["player1", "=", "Heroi()", "new Heroi", "class"],
            respostaCerta: ["player1", "=", "Heroi()"]
        },
        {
            tipo: "quiz",
            titulo: "Atributos",
            instrucao: "Se player1.vida = 100, o que é '.vida'?",
            opcoes: ["Um método", "Uma classe", "Um atributo", "Um erro"],
            respostaIndex: 2
        },
        {
            tipo: "montagem",
            titulo: "Acessando Propriedade",
            instrucao: "Imprima o nome do player1.",
            blocos: ["print", "(", "player1.nome", ")", ".name"],
            respostaCerta: ["print", "(", "player1.nome", ")"]
        },
        {
            tipo: "quiz",
            titulo: "Métodos",
            instrucao: "O que são métodos dentro de uma classe?",
            opcoes: ["São variáveis", "São funções da classe", "São listas", "São comentários"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Método Construtor",
            instrucao: "Em Python, o construtor se chama...",
            blocos: ["def", "__init__", "(self):", "setup"],
            respostaCerta: ["def", "__init__", "(self):"]
        }
    ],

    // ==========================================
    // MÓDULO 1: A LÓGICA DO PENSAMENTO (A Base)
    // ==========================================

    // --- 8. SEQUÊNCIA LÓGICA (O Começo de Tudo) ---
    "logica_sequencia": [
        {
            tipo: "teoria",
            titulo: "1. A Ordem Importa",
            conteudo: `
                <p>Bem-vindo à Lógica! Aqui, o computador é como um robô obediente, mas "cego".</p>
                <p>Ele lê uma linha, executa. Lê a próxima, executa. Ele nunca adivinha sua intenção.</p>
                <p><strong>Conceito:</strong> Se você trocar a ordem dos passos (Sequenciamento), o resultado muda completamente (ou dá erro).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "O Sanduíche",
            instrucao: "Se fechar o pão antes de por o recheio, não é sanduíche.",
            blocos: ["Pegar Pão", "Passar Manteiga", "Colocar Queijo", "Fechar Pão"],
            respostaCerta: ["Pegar Pão", "Passar Manteiga", "Colocar Queijo", "Fechar Pão"]
        },
        {
            tipo: "quiz",
            titulo: "Causa e Efeito",
            instrucao: "No código, posso usar o resultado de uma conta antes de fazer a conta?",
            opcoes: ["Claro, o PC adivinha", "Não, dá erro (Variável não definida)", "Sim, se pedir com educação"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Sair de Casa",
            instrucao: "A porta está trancada. Qual a lógica física?",
            blocos: ["Destrancar", "Abrir Porta", "Sair", "Fechar"],
            respostaCerta: ["Destrancar", "Abrir Porta", "Sair", "Fechar"]
        },
        {
            tipo: "montagem",
            titulo: "Vestir o Boneco",
            instrucao: "Lógica de Camadas: O que fica por baixo vai primeiro.",
            blocos: ["Cueca", "Calça", "Cinto", "Casaco"],
            respostaCerta: ["Cueca", "Calça", "Cinto", "Casaco"]
        },
        {
            tipo: "quiz",
            titulo: "Bug de Lógica",
            instrucao: "O código é: 'Beber Água' -> 'Encher Copo'. O que acontece?",
            opcoes: ["Funciona normal", "Erro: Bebeu ar (Copo vazio)", "O copo enche sozinho"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Algoritmo da Troca",
            instrucao: "Trocar pneu: Não dá pra tirar o velho com o carro no chão.",
            blocos: ["Levantar Carro", "Tirar Pneu Velho", "Por Pneu Novo", "Abaixar Carro"],
            respostaCerta: ["Levantar Carro", "Tirar Pneu Velho", "Por Pneu Novo", "Abaixar Carro"]
        }
    ],

    // --- 9. DECISÃO LÓGICA (A Bifurcação) ---
    "logica_decisao": [
        {
            tipo: "teoria",
            titulo: "2. E Se...? (Decisões)",
            conteudo: `
                <p>Até agora, o código era uma linha reta. Mas a vida tem escolhas!</p>
                <p>O <strong>IF (Se)</strong> cria uma bifurcação na estrada. O computador analisa uma condição (Verdadeiro ou Falso).</p>
                <p>Se Verdadeiro, vai para a direita. Se Falso (Else), vai para a esquerda.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Dia de Chuva",
            instrucao: "O computador pergunta: Está chovendo?",
            blocos: ["se chover:", "levar(guarda-chuva)", "senao:", "levar(oculos)"],
            respostaCerta: ["se chover:", "levar(guarda-chuva)"]
        },
        {
            tipo: "quiz",
            titulo: "Exclusão",
            instrucao: "Se a condição do IF for verdadeira, o computador lê o ELSE?",
            opcoes: ["Lê os dois", "Ignora o Else completamente", "Trava"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Senha do Cofre",
            instrucao: "Apenas a senha exata abre.",
            blocos: ["se senha == '123':", "abrir_cofre()", "senao:", "soar_alarme()"],
            respostaCerta: ["se senha == '123':", "abrir_cofre()", "senao:", "soar_alarme()"]
        },
        {
            tipo: "montagem",
            titulo: "Bateria Fraca",
            instrucao: "Se bateria < 10%, economizar energia.",
            blocos: ["se bateria < 10:", "modo_economico()", "senao:", "alto_desempenho()"],
            respostaCerta: ["se bateria < 10:", "modo_economico()"]
        },
        {
            tipo: "quiz",
            titulo: "Aninhamento",
            instrucao: "Posso colocar um IF dentro de outro IF?",
            opcoes: ["Sim (Decisão dentro de decisão)", "Não, confunde o PC", "Só em jogos 3D"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Balada +18",
            instrucao: "Filtro de idade. Maior ou igual a 18.",
            blocos: ["se idade >= 18:", "entrada_liberada()", "senao:", "barrado()"],
            respostaCerta: ["se idade >= 18:", "entrada_liberada()"]
        }
    ],

    // --- 10. PADRÕES E LOOPS (A Automação) ---
    "logica_padroes": [
        {
            tipo: "teoria",
            titulo: "3. O Poder da Repetição",
            conteudo: `
                <p>Programadores odeiam repetir código. Se você precisa fazer algo 100 vezes, não escreva 100 linhas!</p>
                <p>Use um <strong>Loop</strong>. Identifique o padrão (o que se repete) e mande o computador fazer o trabalho pesado.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Caminhada",
            instrucao: "Não use 4 blocos 'Andar'. Use um loop.",
            blocos: ["repetir 4 vezes:", "andar()", "parar()", "if"],
            respostaCerta: ["repetir 4 vezes:", "andar()"]
        },
        {
            tipo: "quiz",
            titulo: "Padrão Visual",
            instrucao: "Qual o padrão aqui? A, B, A, B, A, B...",
            opcoes: ["A", "A, B, C", "A, B"],
            respostaIndex: 2
        },
        {
            tipo: "montagem",
            titulo: "Loop Infinito",
            instrucao: "Cuidado! Se a condição nunca for falsa, ele roda pra sempre.",
            blocos: ["enquanto Verdade:", "girar()", "parar", "1 vez"],
            respostaCerta: ["enquanto Verdade:", "girar()"]
        },
        {
            tipo: "montagem",
            titulo: "Empilhar Caixas",
            instrucao: "Enquanto tiver caixa no chão, empilhe.",
            blocos: ["enquanto tem_caixa:", "empilhar()", "se", "fim"],
            respostaCerta: ["enquanto tem_caixa:", "empilhar()"]
        },
        {
            tipo: "quiz",
            titulo: "Utilidade",
            instrucao: "Por que loops são essenciais?",
            opcoes: ["Para gastar bateria", "Para processar listas gigantes com pouco código", "Para deixar o jogo lento"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Geometria",
            instrucao: "Quadrado = Andar + Virar (4 vezes).",
            blocos: ["repetir 4 vezes:", "andar()", "virar_direita()", "pular"],
            respostaCerta: ["repetir 4 vezes:", "andar()", "virar_direita()"]
        }
    ],

    // --- 11. DEBUG (O Detetive) ---
    "logica_debug": [
        {
            tipo: "teoria",
            titulo: "4. Caçando Bugs",
            conteudo: `
                <p>Escrever código é fácil. Consertar código (Debug) é que exige cérebro.</p>
                <p>O <strong>Bug</strong> é quando o código roda sem erro, mas faz a coisa errada (Lógica falha). Você precisa simular o robô na sua mente.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "O Robô Cego",
            instrucao: "O robô andou 5 passos e caiu no buraco (que estava no passo 3). Erro de quem?",
            opcoes: ["Do robô", "Do programador (Lógica)", "Do buraco"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Corrigindo Rota",
            instrucao: "O robô bateu. Faça ele pular ANTES de andar.",
            blocos: ["pular()", "andar()", "correr()", "voltar()"],
            respostaCerta: ["pular()", "andar()"]
        },
        {
            tipo: "montagem",
            titulo: "Travamento",
            instrucao: "O loop não para! Adicione o Break (Parar).",
            blocos: ["enquanto bateria > 0:", "andar()", "bateria_acabou = True", "break"],
            respostaCerta: ["enquanto bateria > 0:", "andar()"]
        },
        {
            tipo: "quiz",
            titulo: "Teste de Mesa",
            instrucao: "Como os pros acham bugs?",
            opcoes: ["Chutam código aleatório", "Leem linha a linha simulando os valores", "Reformatam o PC"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Ordem Inversa",
            instrucao: "Para sair do poço: Subir, DEPOIS andar.",
            blocos: ["subir_escada()", "andar()", "cair()", "descer()"],
            respostaCerta: ["subir_escada()", "andar()"]
        },
        {
            tipo: "montagem",
            titulo: "Tempo de Forno",
            instrucao: "Torrada queimada = Muito tempo esperando.",
            blocos: ["colocar_pao()", "esperar(2_minutos)", "esperar(20_minutos)", "comer()"],
            respostaCerta: ["colocar_pao()", "esperar(2_minutos)"]
        }
    ],

    // --- 12. A LÓGICA DA TROCA (Swap) ---
    "logica_troca": [
        {
            tipo: "teoria",
            titulo: "5. O Problema dos Copos",
            conteudo: `
                <p>Este é um clássico. Você tem um Copo de Suco (A) e um de Água (B). Como trocar os líquidos sem misturar?</p>
                <p>Se fizer <code>A = B</code>, você joga a água no suco e perde o suco! Você precisa de um <strong>Copo Vazio (Temp)</strong>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Passo 1: Salvar",
            instrucao: "Guarde o conteúdo de A no copo Temp.",
            blocos: ["temp", "=", "A", "B"],
            respostaCerta: ["temp", "=", "A"]
        },
        {
            tipo: "montagem",
            titulo: "Passo 2: Substituir",
            instrucao: "Agora A está vazio (seguro). Jogue B em A.",
            blocos: ["A", "=", "B", "temp"],
            respostaCerta: ["A", "=", "B"]
        },
        {
            tipo: "montagem",
            titulo: "Passo 3: Recuperar",
            instrucao: "Pegue o suco (que estava em Temp) e jogue em B.",
            blocos: ["B", "=", "temp", "A"],
            respostaCerta: ["B", "=", "temp"]
        },
        {
            tipo: "quiz",
            titulo: "Sem Temp",
            instrucao: "O que acontece se eu não usar a variável auxiliar?",
            opcoes: ["Funciona igual", "Perco o valor da primeira variável", "Os dois valores se somam"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Troca Rápida",
            instrucao: "Em Python, podemos trocar direto: A, B = B, A",
            blocos: ["A, B", "=", "B, A", "temp"],
            respostaCerta: ["A, B", "=", "B, A"]
        },
        {
            tipo: "quiz",
            titulo: "Conceito",
            instrucao: "Variável Temp serve para...",
            opcoes: ["Esquentar o processador", "Armazenar valor temporariamente", "Criar bugs"],
            respostaIndex: 1
        }
    ],

    // --- 13. CONTADORES (Matemática Viva) ---
    "logica_contador": [
        {
            tipo: "teoria",
            titulo: "6. Ensinando a Contar",
            conteudo: `
                <p>O computador não sabe o que é 'próximo'. Você precisa ser explícito.</p>
                <p>A fórmula mágica é: <code>x = x + 1</code>.</p>
                <p>Lê-se: 'O novo valor de X é o valor antigo de X, mais um'. É assim que funcionam placares, vidas e likes.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "O Início",
            instrucao: "Todo contador começa de algum lugar (Geralmente 0).",
            blocos: ["pontos", "=", "0", "10", "null"],
            respostaCerta: ["pontos", "=", "0"]
        },
        {
            tipo: "montagem",
            titulo: "Level Up",
            instrucao: "Ganhou XP? Adicione ao total.",
            blocos: ["xp", "=", "xp + 10", "10"],
            respostaCerta: ["xp", "=", "xp + 10"]
        },
        {
            tipo: "quiz",
            titulo: "Matemática",
            instrucao: "Se x = 5. Depois de x = x + 2, quanto vale x?",
            opcoes: ["5", "2", "7", "Erro"],
            respostaIndex: 2
        },
        {
            tipo: "montagem",
            titulo: "Dano",
            instrucao: "Perdeu vida? Subtraia do contador.",
            blocos: ["vida", "=", "vida - 1", "remove 1"],
            respostaCerta: ["vida", "=", "vida - 1"]
        },
        {
            tipo: "montagem",
            titulo: "Contar até 10",
            instrucao: "Enquanto x for menor que 10, aumente x.",
            blocos: ["enquanto x < 10:", "x = x + 1", "pare", "if"],
            respostaCerta: ["enquanto x < 10:", "x = x + 1"]
        },
        {
            tipo: "quiz",
            titulo: "Acumulador",
            instrucao: "Contador soma 1. Acumulador soma...",
            opcoes: ["Apenas 1 também", "Valores variáveis (preços, notas)", "Subtrai"],
            respostaIndex: 1
        }
    ],

    // --- 14. REVISÃO I (O Grande Teste) ---
    "revisao_logica_1": [
        {
            tipo: "teoria",
            titulo: "7. Desafio: Semáforo Inteligente",
            conteudo: `
                <p>Vamos juntar tudo! Sequência (a luz muda), Decisão (se vermelho, pare) e Loop (funciona pra sempre).</p>
                <p>Você vai programar a lógica de um carro autônomo.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Vermelho = Perigo",
            instrucao: "Se o sinal for vermelho, pare imediatamente.",
            blocos: ["se sinal == 'vermelho':", "frear()", "acelerar()", "senao"],
            respostaCerta: ["se sinal == 'vermelho':", "frear()"]
        },
        {
            tipo: "montagem",
            titulo: "Verde = Siga",
            instrucao: "Senão, se for verde, pode ir.",
            blocos: ["senao se sinal == 'verde':", "acelerar()", "parar()", "if"],
            respostaCerta: ["senao se sinal == 'verde':", "acelerar()"]
        },
        {
            tipo: "quiz",
            titulo: "Imprevisto",
            instrucao: "E se o sinal quebrar (ficar apagado)?",
            opcoes: ["O carro deve parar (Segurança)", "O carro deve acelerar", "O carro explode"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Ciclo Eterno",
            instrucao: "O sistema de trânsito nunca dorme.",
            blocos: ["enquanto Verdade:", "ler_sensor()", "parar", "1x"],
            respostaCerta: ["enquanto Verdade:", "ler_sensor()"]
        },
        {
            tipo: "montagem",
            titulo: "Pedestre",
            instrucao: "Prioridade total: Se pedestre na rua, pare tudo.",
            blocos: ["se pedestre_detectado:", "frear_emergencia()", "buzinar()", "ignorar"],
            respostaCerta: ["se pedestre_detectado:", "frear_emergencia()"]
        },
        {
            tipo: "quiz",
            titulo: "Conclusão",
            instrucao: "Para programar carros, robôs e foguetes, o mais importante é...",
            opcoes: ["Gráficos bonitos", "Lógica sólida e segura", "Usar muita memória"],
            respostaIndex: 1
        }
    ],

    // ==========================================
    // MÓDULO 2: ALGORITMOS (Resolvendo Problemas)
    // ==========================================

    // --- 15. ADIVINHE O NÚMERO (Busca Binária) ---
    "alg_busca": [
        {
            tipo: "teoria",
            titulo: "8. Busca Esperta",
            conteudo: `
                <p>Eu pensei num número de 1 a 100. Como você adivinha?</p>
                <p>Você pode chutar 1, 2, 3... (Lento). Ou pode chutar <strong>50</strong> (Metade).</p>
                <p>Se eu disser "É Menor", você eliminou os números 51 a 100 de uma vez! Isso é a <strong>Busca Binária</strong>.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Melhor Chute",
            instrucao: "Entre 1 e 1000. Qual o primeiro chute ideal?",
            opcoes: ["1", "1000", "500 (O meio)"],
            respostaIndex: 2
        },
        {
            tipo: "montagem",
            titulo: "É Maior?",
            instrucao: "Se o chute for menor que o segredo, chute mais alto.",
            blocos: ["se chute < segredo:", "tente_maior()", "tente_menor()", "acertou"],
            respostaCerta: ["se chute < segredo:", "tente_maior()"]
        },
        {
            tipo: "montagem",
            titulo: "É Menor?",
            instrucao: "Se o chute for maior que o segredo, chute mais baixo.",
            blocos: ["senao se chute > segredo:", "tente_menor()", "tente_maior()", "ganhou"],
            respostaCerta: ["senao se chute > segredo:", "tente_menor()"]
        },
        {
            tipo: "montagem",
            titulo: "Vitória",
            instrucao: "Se não é maior nem menor, você acertou.",
            blocos: ["senao:", "vitoria()", "perdeu", "if"],
            respostaCerta: ["senao:", "vitoria()"]
        },
        {
            tipo: "quiz",
            titulo: "Requisito",
            instrucao: "Para isso funcionar, a lista precisa estar...",
            opcoes: ["Bagunçada", "Ordenada (1, 2, 3...)", "Aleatória"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Game Loop",
            instrucao: "Repetir até acertar.",
            blocos: ["enquanto nao_acertou:", "chutar()", "dormir()", "if"],
            respostaCerta: ["enquanto nao_acertou:", "chutar()"]
        }
    ],

    // --- 16. ORGANIZANDO A ESTANTE (Ordenação) ---
    "alg_ordenacao": [
        {
            tipo: "teoria",
            titulo: "9. Ordenação (Bubble Sort)",
            conteudo: `
                <p>Para a Busca Binária funcionar, precisamos ordenar a lista. Mas como?</p>
                <p>Imagine livros numa estante. Compare dois vizinhos. Se estiverem na ordem errada, <strong>Troque</strong>.</p>
                <p>Faça isso várias vezes até tudo estar no lugar. Esse é o Bubble Sort (Bolha).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Comparar Vizinhos",
            instrucao: "Se o item da esquerda (A) for maior que o da direita (B)...",
            blocos: ["se A > B:", "trocar(A, B)", "manter()", "ler()"],
            respostaCerta: ["se A > B:", "trocar(A, B)"]
        },
        {
            tipo: "quiz",
            titulo: "Objetivo",
            instrucao: "Queremos uma lista Crescente. O maior número vai para...",
            opcoes: ["O começo", "O final", "O meio"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Varrendo a Lista",
            instrucao: "Verifique todos os pares da lista.",
            blocos: ["para i na lista:", "comparar_vizinhos()", "dormir", "1x"],
            respostaCerta: ["para i na lista:", "comparar_vizinhos()"]
        },
        {
            tipo: "montagem",
            titulo: "Persistência",
            instrucao: "Repita o processo enquanto houver trocas a fazer.",
            blocos: ["enquanto houve_troca:", "revisar_lista()", "parar", "if"],
            respostaCerta: ["enquanto houve_troca:", "revisar_lista()"]
        },
        {
            tipo: "quiz",
            titulo: "Performance",
            instrucao: "Esse método é o mais rápido do mundo?",
            opcoes: ["Sim", "Não, é lento para listas grandes", "É instantâneo"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "A Troca (Recall)",
            instrucao: "Lembre da missão dos copos. Use Temp.",
            blocos: ["temp = A", "A = B", "B = temp", "C = A"],
            respostaCerta: ["temp = A", "A = B", "B = temp"]
        }
    ],

    // --- 17. O MENOR CAMINHO (Otimização) ---
    "alg_caminho": [
        {
            tipo: "teoria",
            titulo: "10. Otimização (GPS)",
            conteudo: `
                <p>Em apps de mapa ou lojas, queremos o <strong>Menor Caminho</strong> ou o <strong>Menor Preço</strong>.</p>
                <p>Lógica do Campeão: Assuma que o primeiro item é o vencedor. Se achar um melhor, atualize o vencedor.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Suposição",
            instrucao: "Digamos que o menor preço é o do primeiro produto.",
            blocos: ["menor = lista[0]", "menor = 0", "menor = 1000", "path"],
            respostaCerta: ["menor = lista[0]"]
        },
        {
            tipo: "montagem",
            titulo: "O Desafiante",
            instrucao: "Se acharmos um item mais barato que o atual 'menor'...",
            blocos: ["se item < menor:", "atualizar_menor()", "ignorar()", "entao"],
            respostaCerta: ["se item < menor:", "atualizar_menor()"]
        },
        {
            tipo: "montagem",
            titulo: "Novo Campeão",
            instrucao: "Atualize a variável 'menor'.",
            blocos: ["menor = item", "item = menor", "menor = 0", "break"],
            respostaCerta: ["menor = item"]
        },
        {
            tipo: "quiz",
            titulo: "Lógica Inversa",
            instrucao: "Para achar o MAIOR número (Recorde), uso qual sinal?",
            opcoes: ["< (Menor)", "> (Maior)", "="],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Varredura",
            instrucao: "Olhe todos os caminhos possíveis.",
            blocos: ["para rota no mapa:", "verificar_distancia()", "dormir", "if"],
            respostaCerta: ["para rota no mapa:", "verificar_distancia()"]
        },
        {
            tipo: "quiz",
            titulo: "GPS",
            instrucao: "O Google Maps usa isso para...",
            opcoes: ["Gastar gasolina", "Te perder", "Achar a rota mais rápida"],
            respostaIndex: 2
        }
    ],

    // --- 18. A PILHA DE PRATOS (LIFO) ---
    "alg_pilha": [
        {
            tipo: "teoria",
            titulo: "11. Pilhas (Undo)",
            conteudo: `
                <p>Estruturas de Dados organizam a informação. A <strong>Pilha</strong> é igual a uma pia de pratos.</p>
                <p>Você coloca um em cima do outro. Para lavar, pega o do <strong>TOPO</strong> (o último que chegou).</p>
                <p>Regra <strong>LIFO</strong>: Last In, First Out (Último a entrar, Primeiro a sair).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Empilhar (Push)",
            instrucao: "Adicione o Prato 1 na pilha.",
            blocos: ["pilha.push(Prato1)", "pilha.pop()", "base", "topo"],
            respostaCerta: ["pilha.push(Prato1)"]
        },
        {
            tipo: "montagem",
            titulo: "Desempilhar (Pop)",
            instrucao: "Tire o prato do topo.",
            blocos: ["pilha.pop()", "pilha.push()", "lavar", "quebrar"],
            respostaCerta: ["pilha.pop()"]
        },
        {
            tipo: "quiz",
            titulo: "Ordem",
            instrucao: "Coloquei A, depois B. Qual sai primeiro?",
            opcoes: ["A", "B", "Os dois juntos"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Navegador",
            instrucao: "O botão 'Voltar' é uma pilha. Volte 1 página.",
            blocos: ["historico.pop()", "historico.push()", "avancar()", "site"],
            respostaCerta: ["historico.pop()"]
        },
        {
            tipo: "quiz",
            titulo: "Ctrl+Z",
            instrucao: "O 'Desfazer' no Word usa qual lógica?",
            opcoes: ["Fila", "Pilha (Desfaz o último feito)", "Sorteio"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Erro",
            instrucao: "Se tentar tirar de uma pilha vazia...",
            blocos: ["erro_pilha_vazia", "sucesso", "continuar", "ok"],
            respostaCerta: ["erro_pilha_vazia"]
        }
    ],

    // --- 19. A FILA DO BANCO (FIFO) ---
    "alg_fila": [
        {
            tipo: "teoria",
            titulo: "12. Filas (Queue)",
            conteudo: `
                <p>A Fila é justa. Quem chega primeiro, é atendido primeiro.</p>
                <p>Regra <strong>FIFO</strong>: First In, First Out (Primeiro a entrar, Primeiro a sair).</p>
                <p>Usado em impressoras e servidores de jogos online.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Chegada",
            instrucao: "Pessoa entra no final da fila.",
            blocos: ["fila.entrar(Pessoa)", "fila.sair()", "atender()", "tchau"],
            respostaCerta: ["fila.entrar(Pessoa)"]
        },
        {
            tipo: "quiz",
            titulo: "Atendimento",
            instrucao: "Tenho P1 e P2 na fila. Quem atendo?",
            opcoes: ["P2", "P1 (O que chegou antes)", "Quem pagar mais"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Saída",
            instrucao: "Atender o primeiro da fila.",
            blocos: ["atender(primeiro)", "atender(ultimo)", "ignorar", "fila"],
            respostaCerta: ["atender(primeiro)"]
        },
        {
            tipo: "montagem",
            titulo: "Impressora",
            instrucao: "Imprimir na ordem de envio.",
            blocos: ["imprimir(documento_antigo)", "imprimir(documento_novo)", "cancelar"],
            respostaCerta: ["imprimir(documento_antigo)"]
        },
        {
            tipo: "quiz",
            titulo: "Diferença",
            instrucao: "Pilha é LIFO. Fila é...",
            opcoes: ["LIFO", "FIFO", "WIFI"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Vazio?",
            instrucao: "Se fila vazia, caixa livre.",
            blocos: ["se fila_vazia:", "caixa_livre()", "trabalhar()", "ocupado"],
            respostaCerta: ["se fila_vazia:", "caixa_livre()"]
        }
    ],

    // --- 20. O COFRE (Acumulador) ---
    "alg_acumulador": [
        {
            tipo: "teoria",
            titulo: "13. O Acumulador",
            conteudo: `
                <p>Contadores somam de 1 em 1. <strong>Acumuladores</strong> somam valores variados.</p>
                <p>É como o caixa do mercado: soma 10 reais, depois 50, depois 5. O valor cresce.</p>
                <p><code>total = total + preco</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Zerando",
            instrucao: "O total começa zerado.",
            blocos: ["total = 0", "total = 100", "total = []", "null"],
            respostaCerta: ["total = 0"]
        },
        {
            tipo: "montagem",
            titulo: "Somando",
            instrucao: "Adicione o preço ao total.",
            blocos: ["total", "=", "total + preco", "item"],
            respostaCerta: ["total", "=", "total + preco"]
        },
        {
            tipo: "quiz",
            titulo: "Média",
            instrucao: "Para calcular a média da turma, uso acumulador?",
            opcoes: ["Sim, somo as notas", "Não, pego só a última", "Não precisa"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Loop de Soma",
            instrucao: "Passe todos os produtos no caixa.",
            blocos: ["para item no carrinho:", "total = total + item.preco", "subtrair", "if"],
            respostaCerta: ["para item no carrinho:", "total = total + item.preco"]
        },
        {
            tipo: "quiz",
            titulo: "Multiplicação",
            instrucao: "Para acumular multiplicação (Fatorial), começo com 0?",
            opcoes: ["Sim", "Não, começo com 1 (Senão zera tudo)", "Tanto faz"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Saldo Bancário",
            instrucao: "Depósito aumenta o saldo.",
            blocos: ["saldo", "=", "saldo + deposito", "saque"],
            respostaCerta: ["saldo", "=", "saldo + deposito"]
        }
    ],

    // --- 21. PROJETO (Escape Room) ---
    "proj_final_logica": [
        {
            tipo: "teoria",
            titulo: "14. Projeto: Escape Room",
            conteudo: `
                <p>Hora de um teste! Você está trancado num quarto escuro.</p>
                <p>Use Lógica (Se/Senão), Loops e Listas para escapar. Boa sorte!</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Passo 1: Luz",
            instrucao: "Se estiver escuro, acenda a luz.",
            blocos: ["se escuro:", "acender_luz()", "quebrar_luz()", "senao"],
            respostaCerta: ["se escuro:", "acender_luz()"]
        },
        {
            tipo: "montagem",
            titulo: "Passo 2: Busca",
            instrucao: "Procure a chave em todos os móveis (Loop).",
            blocos: ["para movel no quarto:", "procurar_chave()", "dormir()", "if"],
            respostaCerta: ["para movel no quarto:", "procurar_chave()"]
        },
        {
            tipo: "montagem",
            titulo: "Passo 3: Inventário",
            instrucao: "Achou? Guarde na mochila.",
            blocos: ["se achou:", "mochila.append('chave')", "jogar_fora()", "break"],
            respostaCerta: ["se achou:", "mochila.append('chave')"]
        },
        {
            tipo: "quiz",
            titulo: "Senha",
            instrucao: "A senha são os 3 primeiros números pares.",
            opcoes: ["1, 3, 5", "2, 4, 6", "2, 3, 5"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Passo 4: Liberdade",
            instrucao: "Se tem chave E senha correta, abra.",
            blocos: ["se tem_chave e senha_ok:", "abrir_porta()", "trancar()", "OU"],
            respostaCerta: ["se tem_chave e senha_ok:", "abrir_porta()"]
        },
        {
            tipo: "montagem",
            titulo: "Fim",
            instrucao: "Saia correndo!",
            blocos: ["sair()", "entrar()", "ficar()", "loop"],
            respostaCerta: ["sair()"]
        },
        {
            tipo: "quiz",
            titulo: "Status",
            instrucao: "Você é um Programador?",
            opcoes: ["Ainda não", "Sim, eu domino a Lógica!", "Talvez"],
            respostaIndex: 1
        }
    ],
    // ==========================================
    // MÓDULO 3: ESTRUTURAS AVANÇADAS (A Engenharia)
    // ==========================================

    // --- 22. MATRIZES (O Mundo em 2D) ---
    "est_matriz": [
        {
            tipo: "teoria",
            titulo: "15. Matrizes (Grids)",
            conteudo: `
                <p>Até agora, suas listas eram uma linha reta. Mas o mundo é 2D (Altura e Largura)!</p>
                <p>Uma <strong>Matriz</strong> é uma lista de listas. Pense num tabuleiro de Batalha Naval ou Excel.</p>
                <p><code>mapa[0][1]</code> significa: Linha 0, Coluna 1.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Criando o Mapa",
            instrucao: "Crie uma matriz 2x2 (Duas listas dentro de uma lista principal).",
            blocos: ["mapa", "=", "[[0,0], [0,0]]", "[0, 0, 0, 0]"],
            respostaCerta: ["mapa", "=", "[[0,0], [0,0]]"]
        },
        {
            tipo: "quiz",
            titulo: "Coordenadas",
            instrucao: "Em tabuleiro[linha][coluna], quem vem primeiro?",
            opcoes: ["A Coluna (Vertical)", "A Linha (Horizontal)", "Aleatório"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Acessando",
            instrucao: "Pegue o item da Linha 1, Coluna 0.",
            blocos: ["item", "=", "mapa[1][0]", "mapa[0][1]"],
            respostaCerta: ["item", "=", "mapa[1][0]"]
        },
        {
            tipo: "montagem",
            titulo: "Varredura 2D",
            instrucao: "Para ler tudo, precisamos de um Loop dentro de outro!",
            blocos: ["para linha no mapa:", "para item na linha:", "ler(item)", "if"],
            respostaCerta: ["para linha no mapa:", "para item na linha:"]
        },
        {
            tipo: "quiz",
            titulo: "Pixel Art",
            instrucao: "A tela do seu monitor é...",
            opcoes: ["Uma lista gigante", "Uma Matriz de Pixels (Linhas e Colunas)", "Magia"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Jogo da Velha",
            instrucao: "Marque X no centro (Linha 1, Coluna 1).",
            blocos: ["tabuleiro[1][1]", "=", "'X'", "'O'"],
            respostaCerta: ["tabuleiro[1][1]", "=", "'X'"]
        }
    ],

    // --- 23. DICIONÁRIOS (Etiquetas) ---
    "est_dicionario": [
        {
            tipo: "teoria",
            titulo: "16. Dicionários (Keys)",
            conteudo: `
                <p>Em listas, você acha as coisas pelo número (índice 0, 1, 2). É ruim saber que o "Nome" está na posição 0.</p>
                <p>Em <strong>Dicionários</strong>, usamos etiquetas (Chaves)!</p>
                <p>Exemplo: <code>heroi = {"nome": "Codin", "hp": 100}</code>. Muito mais fácil!</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Ficha de RPG",
            instrucao: "Crie um dicionário com nome e level.",
            blocos: ["player", "=", "{'nome': 'Leo', 'lv': 1}", "[]"],
            respostaCerta: ["player", "=", "{'nome': 'Leo', 'lv': 1}"]
        },
        {
            tipo: "quiz",
            titulo: "Busca",
            instrucao: "Como pego o preço da 'Maca' no dicionário 'loja'?",
            opcoes: ["loja[0]", "loja['Maca']", "loja.index('Maca')"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Dano",
            instrucao: "O heroi tomou hit. Acesse a chave 'hp' e mude.",
            blocos: ["heroi['hp']", "=", "50", "100"],
            respostaCerta: ["heroi['hp']", "=", "50"]
        },
        {
            tipo: "montagem",
            titulo: "Nova Habilidade",
            instrucao: "Adicione 'mana': 20 ao dicionário.",
            blocos: ["heroi['mana']", "=", "20", ".push"],
            respostaCerta: ["heroi['mana']", "=", "20"]
        },
        {
            tipo: "quiz",
            titulo: "Performance",
            instrucao: "Achar algo pelo nome (Chave) é...",
            opcoes: ["Muito rápido (Instantâneo)", "Lento, tem que ler tudo", "Impossível"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Inventário Inteligente",
            instrucao: "Verifique se tem 'chave' na mochila.",
            blocos: ["se 'chave' in mochila:", "abrir_porta()", "senao", "for"],
            respostaCerta: ["se 'chave' in mochila:", "abrir_porta()"]
        }
    ],

    // --- 24. RECURSÃO (O Loop Sem Loop) ---
    "alg_recursao": [
        {
            tipo: "teoria",
            titulo: "17. Recursão",
            conteudo: `
                <p>Prepare a mente! Recursão é quando uma função <strong>chama a si mesma</strong>.</p>
                <p>É como colocar um espelho na frente do outro: a imagem se repete ao infinito.</p>
                <p>Para não travar o PC, precisamos de uma condição de parada (Caso Base).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "O Espelho",
            instrucao: "A função contar chama ela mesma (loop reverso).",
            blocos: ["def contar(n):", "contar(n-1)", "parar", "if"],
            respostaCerta: ["def contar(n):", "contar(n-1)"]
        },
        {
            tipo: "quiz",
            titulo: "Perigo",
            instrucao: "Se eu esquecer de mandar parar (Caso Base), o que acontece?",
            opcoes: ["Stack Overflow (Estoura a memória)", "Nada", "Funciona normal"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Fatorial (!)",
            instrucao: "5! = 5 * 4... Retorne n vezes o fatorial anterior.",
            blocos: ["return", "n * fatorial(n-1)", "n + n", "0"],
            respostaCerta: ["return", "n * fatorial(n-1)"]
        },
        {
            tipo: "montagem",
            titulo: "Caso Base",
            instrucao: "Se n chegar a 0, Pare e retorne 1.",
            blocos: ["se n == 0:", "return 1", "return 0", "continue"],
            respostaCerta: ["se n == 0:", "return 1"]
        },
        {
            tipo: "quiz",
            titulo: "Natureza",
            instrucao: "Árvores são recursivas?",
            opcoes: ["Sim (Galhos têm galhos menores)", "Não", "Só as de plástico"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Poder",
            instrucao: "Tudo que um Loop faz, a Recursão também faz.",
            blocos: ["Verdadeiro", "Falso", "Talvez", "Bug"],
            respostaCerta: ["Verdadeiro"]
        }
    ],

    // --- 25. MÓDULO (Ciclos) ---
    "logica_modulo": [
        {
            tipo: "teoria",
            titulo: "18. O Operador % (Resto)",
            conteudo: `
                <p>Na escola, 10 dividido por 3 dá 3 e sobra 1. Em programação, esse "sobra 1" é ouro!</p>
                <p>O símbolo <strong>% (Módulo)</strong> pega o resto.</p>
                <p>Usamos para saber se é Par/Ímpar, fazer relógios e turnos de jogos.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Par ou Ímpar",
            instrucao: "Se o resto da divisão por 2 for zero, é Par.",
            blocos: ["se x % 2 == 0:", "print('Par')", "print('Impar')", "/"],
            respostaCerta: ["se x % 2 == 0:", "print('Par')"]
        },
        {
            tipo: "quiz",
            titulo: "Matemática",
            instrucao: "Quanto é 5 % 2?",
            opcoes: ["1 (Sobra 1)", "2.5", "0"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Relógio",
            instrucao: "Se passar de 60 segundos, volte ao 0.",
            blocos: ["segundos", "=", "(segundos + 1) % 60", "+ 1"],
            respostaCerta: ["segundos", "=", "(segundos + 1) % 60"]
        },
        {
            tipo: "montagem",
            titulo: "Ano Bissexto",
            instrucao: "Ano divisível por 4 tem resto 0.",
            blocos: ["se ano % 4 == 0:", "eh_bissexto()", "normal()", "if"],
            respostaCerta: ["se ano % 4 == 0:", "eh_bissexto()"]
        },
        {
            tipo: "quiz",
            titulo: "Turnos",
            instrucao: "O chefe ataca a cada 3 turnos. Qual a lógica?",
            opcoes: ["if turno % 3 == 0", "if turno == 3", "if turno > 3"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Sintaxe",
            instrucao: "Quero o RESTO, não a divisão.",
            blocos: ["resto", "=", "A % B", "A / B"],
            respostaCerta: ["resto", "=", "A % B"]
        }
    ],

    // --- 26. TRATAMENTO DE ERROS (Robustez) ---
    "logica_erros": [
        {
            tipo: "teoria",
            titulo: "19. Blindando o Código",
            conteudo: `
                <p>Usuários cometem erros. Eles digitam letras em calculadoras e tentam dividir por zero.</p>
                <p>Se você não proteger, o programa fecha na cara (Crash). Usamos <strong>Try / Except</strong>.</p>
                <p>"Tente fazer isso. Se der erro, execute o plano B."</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Tentar (Try)",
            instrucao: "Tente converter o texto em número.",
            blocos: ["try:", "numero = int(texto)", "if texto:", "erro"],
            respostaCerta: ["try:", "numero = int(texto)"]
        },
        {
            tipo: "montagem",
            titulo: "Capturar (Except)",
            instrucao: "Se falhar, avise o usuário educadamente.",
            blocos: ["except:", "print('Erro! Digite números')", "else:", "continue"],
            respostaCerta: ["except:", "print('Erro! Digite números')"]
        },
        {
            tipo: "quiz",
            titulo: "O Proibido",
            instrucao: "Quanto é 10 dividido por 0?",
            opcoes: ["Erro Fatal (Crash)", "Zero", "Infinito"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Defesa",
            instrucao: "Proteja a divisão por zero.",
            blocos: ["try:", "res = 10 / 0", "except:", "res = 0"],
            respostaCerta: ["try:", "res = 10 / 0", "except:", "res = 0"]
        },
        {
            tipo: "montagem",
            titulo: "Limpeza (Finally)",
            instrucao: "O bloco Finally roda SEMPRE (com ou sem erro).",
            blocos: ["finally:", "fechar_programa()", "end", "stop"],
            respostaCerta: ["finally:", "fechar_programa()"]
        },
        {
            tipo: "quiz",
            titulo: "Filosofia",
            instrucao: "Programador bom é aquele que...",
            opcoes: ["Prevê que o erro vai acontecer", "Nunca erra", "Culpa o usuário"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Internet",
            instrucao: "Se a conexão cair, reconecte.",
            blocos: ["try: baixar()", "except: reconectar()", "desistir()", "if"],
            respostaCerta: ["try: baixar()", "except: reconectar()"]
        }
    ],

    // --- 27. ÁRVORES (Hierarquia) ---
    "est_arvore": [
        {
            tipo: "teoria",
            titulo: "20. Árvores (Trees)",
            conteudo: `
                <p>Nem tudo é lista. As pastas do seu PC e o HTML deste site são <strong>Árvores</strong>.</p>
                <p>Tem uma Raiz (Root) que se divide em Galhos e termina nas Folhas.</p>
                <p>É a estrutura da hierarquia: Pai -> Filho -> Neto.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "A Raiz",
            instrucao: "Tudo começa na raiz (ex: Disco C:).",
            blocos: ["raiz", "=", "Pasta('C:')", "Pasta('D:')"],
            respostaCerta: ["raiz", "=", "Pasta('C:')"]
        },
        {
            tipo: "montagem",
            titulo: "Criando Ramos",
            instrucao: "Adicione uma pasta dentro da Raiz.",
            blocos: ["raiz.adicionar(pasta_jogos)", "raiz.cortar()", "pai", "mae"],
            respostaCerta: ["raiz.adicionar(pasta_jogos)"]
        },
        {
            tipo: "quiz",
            titulo: "HTML",
            instrucao: "O site é uma árvore (DOM). Quem é a raiz?",
            opcoes: ["< html >", "< body >", "< h1 >"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Aninhamento",
            instrucao: "Coloque o Título dentro do Corpo.",
            blocos: ["body.append(h1)", "h1.append(body)", "head", "tag"],
            respostaCerta: ["body.append(h1)"]
        },
        {
            tipo: "quiz",
            titulo: "I.A.",
            instrucao: "NPCs de jogos usam 'Árvore de Decisão' para pensar?",
            opcoes: ["Sim", "Não, usam dados", "Usam sorte"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Navegação",
            instrucao: "Para ler uma árvore, usamos recursão.",
            blocos: ["ler_filhos(raiz)", "ler_tudo()", "loop", "if"],
            respostaCerta: ["ler_filhos(raiz)"]
        },
        {
            tipo: "montagem",
            titulo: "Família",
            instrucao: "Avo -> Pai -> Filho.",
            blocos: ["Avo.filhos = [Pai]", "Pai.filhos = [Filho]", "Neto", "Irmao"],
            respostaCerta: ["Avo.filhos = [Pai]", "Pai.filhos = [Filho]"]
        }
    ],

    // --- 28. REVISÃO LÓGICA II (Desafio Hacker) ---
    "revisao_logica_2": [
        {
            tipo: "teoria",
            titulo: "21. Desafio: O Hacker",
            conteudo: `
                <p>Você foi contratado para testar a segurança de um sistema (White Hat).</p>
                <p>Você vai precisar de Matrizes (para o mapa de rede), Dicionários (para senhas) e Try/Catch (para não ser detectado).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "1. Mapa de Rede",
            instrucao: "O servidor está na Matriz, posição [4][2].",
            blocos: ["alvo", "=", "rede[4][2]", "rede[2][4]"],
            respostaCerta: ["alvo", "=", "rede[4][2]"]
        },
        {
            tipo: "montagem",
            titulo: "2. Decodificar",
            instrucao: "Pegue a senha do 'admin' no Dicionário.",
            blocos: ["senha", "=", "lista_senhas['admin']", "lista_senhas[0]"],
            respostaCerta: ["senha", "=", "lista_senhas['admin']"]
        },
        {
            tipo: "quiz",
            titulo: "Ética",
            instrucao: "A senha era '1234'. Isso é seguro?",
            opcoes: ["Não, é horrível", "Sim, ninguém adivinha", "Depende"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "3. Força Bruta",
            instrucao: "Teste senhas de 0 a 999 (Loop).",
            blocos: ["para i no range(1000):", "testar_senha(i)", "hackear()", "if"],
            respostaCerta: ["para i no range(1000):", "testar_senha(i)"]
        },
        {
            tipo: "montagem",
            titulo: "4. Evasão",
            instrucao: "Se o Firewall bloquear, mude o IP (Try/Except).",
            blocos: ["try: conectar()", "except: mudar_ip()", "sair()", "else"],
            respostaCerta: ["try: conectar()", "except: mudar_ip()"]
        },
        {
            tipo: "montagem",
            titulo: "5. Rastros",
            instrucao: "Apague seu IP dos logs (Lista).",
            blocos: ["logs.remove(meu_ip)", "logs = meu_ip", "delete logs", "add"],
            respostaCerta: ["logs.remove(meu_ip)"]
        },
        {
            tipo: "quiz",
            titulo: "Status",
            instrucao: "Sistema invadido. O que fazer?",
            opcoes: ["Avisar a empresa da falha", "Roubar dados", "Apagar o banco de dados"],
            respostaIndex: 0
        }
    ],
    // ==========================================
    // MÓDULO 4: ORIENTAÇÃO A OBJETOS (A Arquitetura)
    // ==========================================

    // --- 22. CLASSES E OBJETOS (A Forma e o Bolo) ---
    "oop_classe": [
        {
            tipo: "teoria",
            titulo: "22. A Fábrica de Coisas",
            conteudo: `
                <p>Até agora usamos variáveis soltas. Mas num jogo, um Inimigo tem vida, dano e nome tudo junto.</p>
                <p>Para isso criamos uma <strong>Classe</strong> (o molde/planta) e geramos <strong>Objetos</strong> (as coisas reais).</p>
                <p>Ex: A planta da casa é a Classe. A casa construída é o Objeto.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Conceito",
            instrucao: "Qual a diferença entre Classe e Objeto?",
            opcoes: ["São a mesma coisa", "Classe é o molde, Objeto é o item criado", "Classe é o item real"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "O Molde",
            instrucao: "Defina a classe 'Robo'.",
            blocos: ["class", "Robo", ":", "def", "()"],
            respostaCerta: ["class", "Robo", ":"]
        },
        {
            tipo: "montagem",
            titulo: "Criando (Instanciar)",
            instrucao: "Crie um objeto 'r1' usando o molde Robo.",
            blocos: ["r1", "=", "Robo()", "class", "new"],
            respostaCerta: ["r1", "=", "Robo()"]
        },
        {
            tipo: "quiz",
            titulo: "Multiplicação",
            instrucao: "Com uma Classe 'Carro', quantos carros posso criar?",
            opcoes: ["Só um", "Quantos eu quiser (memória permitindo)", "Apenas 10"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Tipos",
            instrucao: "O tipo de r1 será...",
            blocos: ["type(r1)", "==", "Robo", "int"],
            respostaCerta: ["type(r1)", "==", "Robo"]
        }
    ],

    // --- 23. ATRIBUTOS (Características) ---
    "oop_atributos": [
        {
            tipo: "teoria",
            titulo: "23. Dando Vida (Atributos)",
            conteudo: `
                <p>Um objeto vazio é inútil. Ele precisa de características, chamadas de <strong>Atributos</strong>.</p>
                <p>No código, usamos o <code>self</code> para dizer "Eu mesmo".</p>
                <p><code>self.vida = 100</code> significa: "A Minha vida é 100".</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Construtor",
            instrucao: "A função que cria os atributos chama-se...",
            blocos: ["def", "__init__", "(self):", "start"],
            respostaCerta: ["def", "__init__", "(self):"]
        },
        {
            tipo: "montagem",
            titulo: "Definindo Cor",
            instrucao: "Diga que a cor 'deste objeto' é azul.",
            blocos: ["self.cor", "=", "'azul'", "cor"],
            respostaCerta: ["self.cor", "=", "'azul'"]
        },
        {
            tipo: "quiz",
            titulo: "Individualidade",
            instrucao: "Se eu mudar a cor do Carro A, a cor do Carro B muda?",
            opcoes: ["Sim, estão ligados", "Não, são objetos independentes", "Depende do código"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Acessando",
            instrucao: "Imprima a cor do 'meu_carro'.",
            blocos: ["print", "(", "meu_carro.cor", ")", "self"],
            respostaCerta: ["print", "(", "meu_carro.cor", ")"]
        },
        {
            tipo: "montagem",
            titulo: "Parâmetros",
            instrucao: "Receba 'nome' e grave no atributo.",
            blocos: ["def __init__(self, nome):", "self.nome = nome", "nome = nome", "self"],
            respostaCerta: ["def __init__(self, nome):", "self.nome = nome"]
        }
    ],

    // --- 24. MÉTODOS (Ações) ---
    "oop_metodos": [
        {
            tipo: "teoria",
            titulo: "24. Ensinando a Agir",
            conteudo: `
                <p>Atributos são o que o objeto <strong>É</strong>. Métodos são o que o objeto <strong>FAZ</strong>.</p>
                <p>Métodos são funções dentro da classe. Elas sempre devem receber <code>self</code> como primeiro parâmetro.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Criar Ação",
            instrucao: "Crie o método 'latir' dentro da classe Cachorro.",
            blocos: ["def", "latir", "(self):", "print('Au!')"],
            respostaCerta: ["def", "latir", "(self):"]
        },
        {
            tipo: "montagem",
            titulo: "Executar",
            instrucao: "Faça o cachorro 'rex' latir.",
            blocos: ["rex.latir()", "rex.latir", "latir(rex)", "self"],
            respostaCerta: ["rex.latir()"]
        },
        {
            tipo: "quiz",
            titulo: "O Self",
            instrucao: "Por que passamos 'self'?",
            opcoes: ["É obrigatório no Python", "Para o método saber quem está latindo", "As duas anteriores"],
            respostaIndex: 2
        },
        {
            tipo: "montagem",
            titulo: "Interação",
            instrucao: "Método para perder vida: self.vida recebe self.vida - dano.",
            blocos: ["self.vida", "=", "self.vida - dano", "vida"],
            respostaCerta: ["self.vida", "=", "self.vida - dano"]
        },
        {
            tipo: "quiz",
            titulo: "Lógica",
            instrucao: "Um método pode chamar outro método?",
            opcoes: ["Sim (self.outro_metodo())", "Não", "Só se for público"],
            respostaIndex: 0
        }
    ],

    // --- 25. HERANÇA (Família de Classes) ---
    "oop_heranca": [
        {
            tipo: "teoria",
            titulo: "25. Herança (Pai e Filho)",
            conteudo: `
                <p>Imagine criar um jogo. Tem Zumbi, Esqueleto e Orc. Todos têm 'vida' e 'andar'.</p>
                <p>Não repita código! Crie uma classe <strong>Monstro</strong> (Pai) e faça os outros <strong>Herdarem</strong> dela.</p>
                <p><code>class Zumbi(Monstro):</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Herdando",
            instrucao: "Crie a classe Gato que herda de Animal.",
            blocos: ["class", "Gato", "(Animal):", "def"],
            respostaCerta: ["class", "Gato", "(Animal):"]
        },
        {
            tipo: "quiz",
            titulo: "Vantagem",
            instrucao: "Para que serve herança?",
            opcoes: ["Deixar o código bonito", "Reaproveitar código e organizar", "Aumentar a memória"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Adicionar",
            instrucao: "O Gato tem tudo do Animal, mas também mia.",
            blocos: ["def miar(self):", "print('Miau')", "super()", "latir"],
            respostaCerta: ["def miar(self):", "print('Miau')"]
        },
        {
            tipo: "montagem",
            titulo: "Hierarquia",
            instrucao: "Veiculo -> Carro -> Ferrari. Quem é o avô?",
            opcoes: ["Carro", "Veiculo", "Ferrari"],
            respostaIndex: 1
        },
        {
            tipo: "quiz",
            titulo: "Acesso",
            instrucao: "O filho pode usar os métodos do pai?",
            opcoes: ["Sim, herda tudo", "Não, são privados", "Só se pedir"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Super",
            instrucao: "Para chamar o construtor do Pai, usamos...",
            blocos: ["super().__init__()", "pai.__init__()", "self.pai()", "dad"],
            respostaCerta: ["super().__init__()"]
        }
    ],

    // --- 26. POLIMORFISMO (Camaleão) ---
    "oop_polimorfismo": [
        {
            tipo: "teoria",
            titulo: "26. Polimorfismo",
            conteudo: `
                <p>Palavra difícil, conceito simples: "Várias formas".</p>
                <p>O pai (Animal) tem o método <code>falar()</code>. O Cachorro faz "Au", o Gato faz "Miau".</p>
                <p>O nome do método é o mesmo, mas o comportamento muda em cada filho.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Sobrescrita",
            instrucao: "Reescreva o método falar() no Gato.",
            blocos: ["def falar(self):", "print('Miau')", "print('Som')", "pass"],
            respostaCerta: ["def falar(self):", "print('Miau')"]
        },
        {
            tipo: "montagem",
            titulo: "Lista de Animais",
            instrucao: "Para cada bicho na fazenda, falar.",
            blocos: ["para bicho na fazenda:", "bicho.falar()", "if", "print"],
            respostaCerta: ["para bicho na fazenda:", "bicho.falar()"]
        },
        {
            tipo: "quiz",
            titulo: "Mágica",
            instrucao: "O código 'bicho.falar()' sabe qual som fazer sozinho?",
            opcoes: ["Sim, ele verifica o tipo do objeto", "Não, dá erro", "Ele faz um som aleatório"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Ataque",
            instrucao: "Mago ataca com magia, Guerreiro com espada. Método: atacar().",
            blocos: ["def atacar(self):", "usar_magia()", "usar_espada()", "dano"],
            respostaCerta: ["def atacar(self):", "usar_magia()"]
        },
        {
            tipo: "quiz",
            titulo: "Utilidade",
            instrucao: "Isso ajuda a...",
            opcoes: ["Tratar objetos diferentes de forma uniforme", "Confundir o programador", "Criar vírus"],
            respostaIndex: 0
        }
    ],

    // --- 27. ENCAPSULAMENTO (O Cofre) ---
    "oop_encapsulamento": [
        {
            tipo: "teoria",
            titulo: "27. Privacidade",
            conteudo: `
                <p>Você não quer que qualquer um mude seu saldo bancário para zero, né?</p>
                <p><strong>Encapsulamento</strong> é proteger os dados. Em Python, usamos <code>__</code> antes do nome para dizer "Privado".</p>
                <p>Ex: <code>self.__senha</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Privado",
            instrucao: "Defina saldo como privado.",
            blocos: ["self.__saldo", "=", "0", "self.saldo"],
            respostaCerta: ["self.__saldo", "=", "0"]
        },
        {
            tipo: "quiz",
            titulo: "Acesso Direto",
            instrucao: "Posso fazer 'conta.__saldo = 1000' de fora da classe?",
            opcoes: ["Pode", "Não, dá erro ou não funciona", "O Python deixa mas é feio"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Getter (Pegar)",
            instrucao: "Crie um método para ver o saldo.",
            blocos: ["def get_saldo(self):", "return self.__saldo", "print", "set"],
            respostaCerta: ["def get_saldo(self):", "return self.__saldo"]
        },
        {
            tipo: "montagem",
            titulo: "Setter (Definir)",
            instrucao: "Método para mudar saldo com segurança.",
            blocos: ["def set_saldo(self, valor):", "if valor > 0:", "self.__saldo = valor", "else"],
            respostaCerta: ["def set_saldo(self, valor):", "if valor > 0:", "self.__saldo = valor"]
        },
        {
            tipo: "quiz",
            titulo: "Por que usar?",
            instrucao: "Para garantir que os dados...",
            opcoes: ["Sejam válidos e seguros", "Sejam públicos", "Sejam apagados"],
            respostaIndex: 0
        }
    ],

    // --- 28. PROJETO RPG (Juntando Tudo) ---
    "proj_final_oop": [
        {
            tipo: "teoria",
            titulo: "28. Projeto: Arena RPG",
            conteudo: `
                <p>Vamos criar um sistema de batalha!</p>
                <p>Precisamos de uma Classe 'Personagem', com atributos (vida, força) e métodos (atacar, receber_dano).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "1. A Classe",
            instrucao: "Crie a classe e o construtor.",
            blocos: ["class Heroi:", "def __init__(self, nome):", "self.vida = 100", "return"],
            respostaCerta: ["class Heroi:", "def __init__(self, nome):", "self.vida = 100"]
        },
        {
            tipo: "montagem",
            titulo: "2. Atacar",
            instrucao: "Método atacar tira vida do inimigo.",
            blocos: ["def atacar(self, alvo):", "alvo.receber_dano(self.forca)", "print", "if"],
            respostaCerta: ["def atacar(self, alvo):", "alvo.receber_dano(self.forca)"]
        },
        {
            tipo: "montagem",
            titulo: "3. Receber Dano",
            instrucao: "Reduza a vida e verifique se morreu.",
            blocos: ["self.vida -= dano", "se self.vida <= 0:", "morrer()", "vivo"],
            respostaCerta: ["self.vida -= dano", "se self.vida <= 0:", "morrer()"]
        },
        {
            tipo: "montagem",
            titulo: "4. Combate",
            instrucao: "Enquanto ambos vivos, p1 ataca p2.",
            blocos: ["enquanto p1.vivo e p2.vivo:", "p1.atacar(p2)", "p2.atacar(p1)", "break"],
            respostaCerta: ["enquanto p1.vivo e p2.vivo:", "p1.atacar(p2)"]
        },
        {
            tipo: "quiz",
            titulo: "Evolução",
            instrucao: "Se eu quiser criar um 'Mago', eu devo...",
            opcoes: ["Criar do zero", "Herdar de Heroi (class Mago(Heroi))", "Copiar e colar o código"],
            respostaIndex: 1
        }
    ],
    // ==========================================
    // MÓDULO 5: FERRAMENTAS MODERNAS (O Cinto de Utilidades)
    // ==========================================

    // --- 29. JSON (O Idioma da Web) ---
    "fer_json": [
        {
            tipo: "teoria",
            titulo: "29. JSON",
            conteudo: `
                <p>Como um site envia dados para outro? Usando <strong>JSON</strong> (JavaScript Object Notation).</p>
                <p>É quase igual a um Dicionário, mas em formato de Texto. É leve e todo mundo entende.</p>
                <p>Ex: <code>"{ 'nome': 'Codin', 'nivel': 10 }"</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Estrutura",
            instrucao: "Monte um JSON válido (Chave e Valor com aspas).",
            blocos: ["{", "'user': 'admin'", "}", "user = admin"],
            respostaCerta: ["{", "'user': 'admin'", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Formato",
            instrucao: "O JSON viaja pela internet como...",
            opcoes: ["Texto (String)", "Imagem", "Pensamento"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Parse (Ler)",
            instrucao: "Converta o texto JSON em objeto real.",
            blocos: ["dados", "=", "json.parse(texto)", "json.read()"],
            respostaCerta: ["dados", "=", "json.parse(texto)"]
        },
        {
            tipo: "montagem",
            titulo: "Stringify (Enviar)",
            instrucao: "Converta o objeto em texto para enviar.",
            blocos: ["texto", "=", "json.stringify(objeto)", "objeto.text()"],
            respostaCerta: ["texto", "=", "json.stringify(objeto)"]
        },
        {
            tipo: "quiz",
            titulo: "Uso",
            instrucao: "Onde o JSON é mais usado?",
            opcoes: ["Em APIs e Configurações", "Para desenhar telas", "Para limpar memória"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Acesso",
            instrucao: "Depois de converter, pegue o login.",
            blocos: ["login", "=", "dados['user']", "dados(user)"],
            respostaCerta: ["login", "=", "dados['user']"]
        }
    ],

    // --- 30. MANIPULAÇÃO DE TEXTO (Strings) ---
    "fer_string": [
        {
            tipo: "teoria",
            titulo: "30. Dominando Textos",
            conteudo: `
                <p>Usuários escrevem tudo errado: "  CoDiN  ". Você precisa limpar isso.</p>
                <p>Podemos cortar, deixar maiúsculo, substituir palavras e limpar espaços.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Limpeza (Trim)",
            instrucao: "Remova os espaços inúteis do começo e fim.",
            blocos: ["texto_limpo", "=", "texto.trim()", "clean()"],
            respostaCerta: ["texto_limpo", "=", "texto.trim()"]
        },
        {
            tipo: "montagem",
            titulo: "Gritando",
            instrucao: "Converta tudo para MAIÚSCULO.",
            blocos: ["gritar", "=", "texto.upper()", "texto.up()"],
            respostaCerta: ["gritar", "=", "texto.upper()"]
        },
        {
            tipo: "quiz",
            titulo: "Substituição",
            instrucao: "Como trocar 'ruim' por 'bom'?",
            opcoes: ["replace('ruim', 'bom')", "change('ruim', 'bom')", "swap()"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Fatiar (Slice)",
            instrucao: "Pegue apenas as 3 primeiras letras.",
            blocos: ["sigla", "=", "texto[0:3]", "texto[3]"],
            respostaCerta: ["sigla", "=", "texto[0:3]"]
        },
        {
            tipo: "montagem",
            titulo: "Separar (Split)",
            instrucao: "Transforme 'banana,uva' em lista.",
            blocos: ["lista", "=", "texto.split(',')", "texto.list()"],
            respostaCerta: ["lista", "=", "texto.split(',')"]
        },
        {
            tipo: "quiz",
            titulo: "Chatbot",
            instrucao: "Para entender o usuário, devemos comparar texto...",
            opcoes: ["Do jeito que veio", "Padronizado (tudo minúsculo e limpo)", "Em binário"],
            respostaIndex: 1
        }
    ],

    // --- 31. DATAS E TEMPO (Time Travel) ---
    "fer_datas": [
        {
            tipo: "teoria",
            titulo: "31. O Tempo é Relativo",
            conteudo: `
                <p>Programar datas é difícil! Anos bissextos, fusos horários...</p>
                <p>O computador conta o tempo em <strong>Milissegundos</strong> desde 1970 (Timestamp).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Agora",
            instrucao: "Pegue a data e hora atual.",
            blocos: ["hoje", "=", "new Date()", "Time.now()"],
            respostaCerta: ["hoje", "=", "new Date()"]
        },
        {
            tipo: "quiz",
            titulo: "Timestamp",
            instrucao: "O que é o Timestamp?",
            opcoes: ["Um selo dos correios", "Um número gigante que representa o tempo", "O nome do relógio"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Extrair Ano",
            instrucao: "Pegue apenas o ano da data.",
            blocos: ["ano", "=", "data.getYear()", "data.year"],
            respostaCerta: ["ano", "=", "data.getYear()"]
        },
        {
            tipo: "montagem",
            titulo: "Diferença",
            instrucao: "Calcule quanto tempo passou (Fim - Inicio).",
            blocos: ["tempo", "=", "fim - inicio", "fim + inicio"],
            respostaCerta: ["tempo", "=", "fim - inicio"]
        },
        {
            tipo: "montagem",
            titulo: "Agendamento",
            instrucao: "Execute algo daqui a 5 segundos.",
            blocos: ["setTimeout(acao, 5000)", "wait(5)", "delay"],
            respostaCerta: ["setTimeout(acao, 5000)"]
        },
        {
            tipo: "quiz",
            titulo: "Fuso Horário",
            instrucao: "UTC é...",
            opcoes: ["O horário universal (Londres)", "Uma marca de relógio", "Uma linguagem"],
            respostaIndex: 0
        }
    ],

    // --- 32. FUNÇÕES LAMBDA (One-Liners) ---
    "fer_lambda": [
        {
            tipo: "teoria",
            titulo: "32. Funções Lambda",
            conteudo: `
                <p>E se a função for tão pequena que cabe numa linha?</p>
                <p>Usamos <strong>Lambda</strong> (ou Arrow Function). É uma função anônima e rápida.</p>
                <p>Ex: <code>dobro = lambda x: x * 2</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Sintaxe",
            instrucao: "Crie uma lambda que soma 1.",
            blocos: ["prox", "=", "lambda x: x + 1", "def x"],
            respostaCerta: ["prox", "=", "lambda x: x + 1"]
        },
        {
            tipo: "quiz",
            titulo: "Utilidade",
            instrucao: "Quando usar Lambda?",
            opcoes: ["Para funções gigantes", "Para funções curtas e rápidas", "Para criar variáveis"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "No Javascript",
            instrucao: "Em JS, usamos a flecha (=>).",
            blocos: ["dobro", "=", "(n) => n * 2", "function n"],
            respostaCerta: ["dobro", "=", "(n) => n * 2"]
        },
        {
            tipo: "montagem",
            titulo: "Ordenação",
            instrucao: "Ordene pelo preço usando lambda.",
            blocos: ["lista.sort(key=lambda x: x.preco)", "lista.order()", "if"],
            respostaCerta: ["lista.sort(key=lambda x: x.preco)"]
        },
        {
            tipo: "quiz",
            titulo: "Nome",
            instrucao: "Funções lambda têm nome?",
            opcoes: ["Não (são anônimas)", "Sim, sempre", "Depende do dia"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Simplificando",
            instrucao: "Troque: def soma(a,b): return a+b",
            blocos: ["soma = lambda a,b: a+b", "soma = a+b", "def"],
            respostaCerta: ["soma = lambda a,b: a+b"]
        }
    ],

    // --- 33. MAP E FILTER (Processamento em Massa) ---
    "fer_funcional": [
        {
            tipo: "teoria",
            titulo: "33. Map & Filter",
            conteudo: `
                <p>Não use loops para tudo! O <strong>Map</strong> transforma todos os itens. O <strong>Filter</strong> seleciona itens.</p>
                <p>Ex: Dar desconto em todos os preços (Map). Pegar só os maiores de idade (Filter).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Map (Transformar)",
            instrucao: "Dobre todos os números da lista.",
            blocos: ["novos = lista.map(n => n * 2)", "lista.for()", "loop"],
            respostaCerta: ["novos = lista.map(n => n * 2)"]
        },
        {
            tipo: "montagem",
            titulo: "Filter (Filtrar)",
            instrucao: "Pegue apenas os números pares.",
            blocos: ["pares = lista.filter(n => n % 2 == 0)", "lista.map", "if"],
            respostaCerta: ["pares = lista.filter(n => n % 2 == 0)"]
        },
        {
            tipo: "quiz",
            titulo: "Diferença",
            instrucao: "O Map muda o tamanho da lista?",
            opcoes: ["Não, o tamanho é igual", "Sim, diminui", "Sim, aumenta"],
            respostaIndex: 0
        },
        {
            tipo: "quiz",
            titulo: "Diferença 2",
            instrucao: "O Filter muda o tamanho da lista?",
            opcoes: ["Sim, pode diminuir", "Não, nunca", "Aumenta"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Combo",
            instrucao: "Filtre os positivos e depois dobre.",
            blocos: ["lista.filter(pos).map(dobro)", "lista.map.filter", "for"],
            respostaCerta: ["lista.filter(pos).map(dobro)"]
        },
        {
            tipo: "montagem",
            titulo: "Sem Loop",
            instrucao: "Isso substitui o 'For' clássico.",
            blocos: ["Verdadeiro", "Falso", "Talvez", "Bug"],
            respostaCerta: ["Verdadeiro"]
        }
    ],

    // --- 34. REGEX (O Código Da Vinci) ---
    "fer_regex": [
        {
            tipo: "teoria",
            titulo: "34. Regex",
            conteudo: `
                <p><strong>Expressões Regulares</strong> são padrões para achar coisas em textos.</p>
                <p>Quer achar um email? Um telefone? Use Regex.</p>
                <p>Ex: <code>\\d+</code> acha qualquer número.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Poder",
            instrucao: "Regex serve para...",
            opcoes: ["Validar formulários e buscas", "Hackear a NASA", "Criar imagens"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Achar Dígitos",
            instrucao: "Encontre os números no texto.",
            blocos: ["texto.match(/\\d+/)", "texto.find(num)", "search"],
            respostaCerta: ["texto.match(/\\d+/)"]
        },
        {
            tipo: "montagem",
            titulo: "Email",
            instrucao: "Padrão simples de email: texto @ texto.",
            blocos: ["/\\w+@\\w+/", "email()", "if @", "find"],
            respostaCerta: ["/\\w+@\\w+/"]
        },
        {
            tipo: "montagem",
            titulo: "Substituir",
            instrucao: "Troque todos os espaços (\\s) por traços.",
            blocos: ["texto.replace(/\\s/g, '-')", "texto.split()", "remove"],
            respostaCerta: ["texto.replace(/\\s/g, '-')"]
        },
        {
            tipo: "quiz",
            titulo: "Complexidade",
            instrucao: "Regex é fácil de ler?",
            opcoes: ["Não, parece código alienígena", "Sim, é igual português", "É colorido"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Início de linha",
            instrucao: "O chapéu (^) indica início.",
            blocos: ["/^Ola/", "Ola$", "Start"],
            respostaCerta: ["/^Ola/"]
        }
    ],

    // --- 35. APIs (Conectando Mundos) ---
    "fer_api": [
        {
            tipo: "teoria",
            titulo: "35. APIs",
            conteudo: `
                <p>O seu jogo roda no celular, mas os dados vêm do Servidor. Quem liga os dois? A <strong>API</strong>.</p>
                <p>Você faz um <strong>Request</strong> (Pedido) e recebe um <strong>Response</strong> (Resposta).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "O Pedido (Fetch)",
            instrucao: "Peça dados ao servidor.",
            blocos: ["fetch('https://api.com/dados')", "get.url()", "download"],
            respostaCerta: ["fetch('https://api.com/dados')"]
        },
        {
            tipo: "quiz",
            titulo: "Verbos",
            instrucao: "Para PEGAR dados usamos GET. Para ENVIAR usamos...",
            opcoes: ["POST", "GIVE", "SEND"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Aguardar (Async)",
            instrucao: "A internet demora. Espere a resposta.",
            blocos: ["await fetch()", "now fetch()", "fast"],
            respostaCerta: ["await fetch()"]
        },
        {
            tipo: "montagem",
            titulo: "Resposta",
            instrucao: "Transforme a resposta em JSON.",
            blocos: ["resposta.json()", "resposta.txt()", "ler"],
            respostaCerta: ["resposta.json()"]
        },
        {
            tipo: "quiz",
            titulo: "Status 200",
            instrucao: "Se o servidor responder código 200, significa...",
            opcoes: ["Sucesso (OK)", "Erro", "Não encontrado"],
            respostaIndex: 0
        },
        {
            tipo: "quiz",
            titulo: "Status 404",
            instrucao: "Se der erro 404...",
            opcoes: ["Não encontrado", "Servidor pegou fogo", "Sucesso"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Erro 500",
            instrucao: "Se der erro 500, a culpa é...",
            opcoes: ["Do Servidor", "Sua", "Da Internet"],
            respostaIndex: 0
        }
    ],
    // ==========================================
    // MÓDULO 6: ENGENHARIA DE SOFTWARE 
    // ==========================================

    // --- 36. CLEAN CODE (Código Limpo) ---
    "eng_clean": [
        {
            tipo: "teoria",
            titulo: "36. Clean Code",
            conteudo: `
                <p>Qualquer um escreve código que o computador entende. Bons programadores escrevem código que <strong>humanos</strong> entendem.</p>
                <p>Nomes claros, funções pequenas e sem gambiarras. Isso é Código Limpo.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Nomes Ruins",
            instrucao: "Troque a variável 'x' por algo útil.",
            blocos: ["saldo", "=", "100", "x", "n"],
            respostaCerta: ["saldo", "=", "100"]
        },
        {
            tipo: "quiz",
            titulo: "Comentários",
            instrucao: "Código bom precisa de muitos comentários?",
            opcoes: ["Não, o código deve se explicar sozinho", "Sim, em cada linha", "Sim, para explicar gambiarras"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Função Única",
            instrucao: "Uma função deve fazer APENAS uma coisa. Separe.",
            blocos: ["def calcular_e_imprimir():", "calcular()", "imprimir()", "tudo_junto"],
            respostaCerta: ["calcular()", "imprimir()"]
        },
        {
            tipo: "montagem",
            titulo: "Refatoração",
            instrucao: "Melhore: if a == true. (É redundante)",
            blocos: ["if a:", "if a == true:", "if a is yes", "bool"],
            respostaCerta: ["if a:"]
        },
        {
            tipo: "quiz",
            titulo: "DRY",
            instrucao: "O que significa o princípio DRY?",
            opcoes: ["Don't Repeat Yourself (Não se repita)", "Do Repeat Yourself", "Don't Run Yesterday"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Número Mágico",
            instrucao: "Não use '3.14' solto. Use uma constante.",
            blocos: ["PI = 3.14", "area = raio * PI", "3.14", "area = 3.14"],
            respostaCerta: ["PI = 3.14", "area = raio * PI"]
        }
    ],

    // --- 37. GIT & VERSIONAMENTO (A Máquina do Tempo) ---
    "eng_git": [
        {
            tipo: "teoria",
            titulo: "37. Git (Versionamento)",
            conteudo: `
                <p>E se você quebrar o código e quiser voltar? O <strong>Git</strong> é a máquina do tempo dos programadores.</p>
                <p>Você salva pontos na história (Commits) e pode voltar neles quando quiser.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Salvar (Commit)",
            instrucao: "Tire uma 'foto' do código atual.",
            blocos: ["git commit -m 'Arrumei o bug'", "git save", "ctrl+s", "camera"],
            respostaCerta: ["git commit -m 'Arrumei o bug'"]
        },
        {
            tipo: "quiz",
            titulo: "Nuvem",
            instrucao: "Para enviar o código para o GitHub (Internet), usamos...",
            opcoes: ["git push", "git upload", "git send"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Baixar (Pull)",
            instrucao: "Seu colega mudou o código. Baixe a versão dele.",
            blocos: ["git pull", "git down", "download", "get"],
            respostaCerta: ["git pull"]
        },
        {
            tipo: "montagem",
            titulo: "Ramificação (Branch)",
            instrucao: "Crie uma linha do tempo paralela para testar.",
            blocos: ["git checkout -b 'nova-feature'", "git new", "create", "branch"],
            respostaCerta: ["git checkout -b 'nova-feature'"]
        },
        {
            tipo: "quiz",
            titulo: "Conflito",
            instrucao: "O que é 'Merge Conflict'?",
            opcoes: ["Quando dois mexem na mesma linha e o Git não sabe qual escolher", "Quando o PC trava", "Briga no escritório"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Unir (Merge)",
            instrucao: "Junte sua branch com a principal (Main).",
            blocos: ["git merge 'nova-feature'", "git join", "mix", "fsuion"],
            respostaCerta: ["git merge 'nova-feature'"]
        }
    ],

    // --- 38. TESTES UNITÁRIOS  ---
    "eng_testes": [
        {
            tipo: "teoria",
            titulo: "38. Testes (QA)",
            conteudo: `
                <p>Como garantir que sua calculadora soma certo? Criando um robô que testa ela!</p>
                <p>Isso é <strong>Teste Unitário</strong>. Você escreve código para testar seu próprio código.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Assert (Garantir)",
            instrucao: "Verifique se 2 + 2 é igual a 4.",
            blocos: ["assert", "2 + 2 == 4", "if", "maybe"],
            respostaCerta: ["assert", "2 + 2 == 4"]
        },
        {
            tipo: "quiz",
            titulo: "TDD",
            instrucao: "O que é TDD (Test Driven Development)?",
            opcoes: ["Escrever o teste ANTES do código", "Testar Depois de Dormir", "Nunca testar"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Teste de Função",
            instrucao: "Teste se a função 'dobro(5)' retorna 10.",
            blocos: ["assert", "dobro(5) == 10", "return", "check"],
            respostaCerta: ["assert", "dobro(5) == 10"]
        },
        {
            tipo: "montagem",
            titulo: "Caso de Erro",
            instrucao: "Teste se dividir por zero lança erro.",
            blocos: ["assert_raises(ZeroDivisionError, dividir, 10, 0)", "try", "error", "test"],
            respostaCerta: ["assert_raises(ZeroDivisionError, dividir, 10, 0)"]
        },
        {
            tipo: "quiz",
            titulo: "Cobertura",
            instrucao: "O que é 'Code Coverage'?",
            opcoes: ["Porcentagem do código que foi testada", "Cobrir o PC com pano", "Seguro de vida"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "CI/CD",
            instrucao: "Só faça o deploy se os testes passarem.",
            blocos: ["if testes_passaram:", "deploy()", "senao:", "bloquear()"],
            respostaCerta: ["if testes_passaram:", "deploy()"]
        }
    ],

    // --- 39. DESIGN PATTERNS (Receitas de Bolo) ---
    "eng_patterns": [
        {
            tipo: "teoria",
            titulo: "39. Padrões de Projeto",
            conteudo: `
                <p>Problemas comuns têm soluções padrão. Chamamos isso de <strong>Design Patterns</strong>.</p>
                <p>Exemplo: O <strong>Singleton</strong> garante que só exista UM objeto daquela classe (tipo o Banco de Dados).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Singleton",
            instrucao: "Se já existe instância, retorne ela. Senão, crie.",
            blocos: ["se instancia_existe:", "return instancia", "senao:", "criar_nova()"],
            respostaCerta: ["se instancia_existe:", "return instancia"]
        },
        {
            tipo: "quiz",
            titulo: "Factory",
            instrucao: "O padrão Factory serve para...",
            opcoes: ["Fabricar objetos complexos sem expor a lógica", "Criar fábricas reais", "Resetar o PC"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Observer",
            instrucao: "Quando o Youtuber posta (Subject), avise os inscritos (Observers).",
            blocos: ["para inscrito na lista:", "inscrito.notificar()", "ignorar", "if"],
            respostaCerta: ["para inscrito na lista:", "inscrito.notificar()"]
        },
        {
            tipo: "montagem",
            titulo: "Strategy",
            instrucao: "Mude a estratégia de ataque sem mudar o personagem.",
            blocos: ["heroi.set_arma(Espada)", "heroi.set_arma(Arco)", "atacar", "if"],
            respostaCerta: ["heroi.set_arma(Espada)"]
        },
        {
            tipo: "quiz",
            titulo: "God Class",
            instrucao: "Criar uma classe 'GerenteGeral' que faz TUDO é...",
            opcoes: ["Um Anti-Pattern (Ruim)", "Um Design Pattern (Bom)", "Essencial"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Adapter",
            instrucao: "Adapte a tomada de 3 pinos para 2.",
            blocos: ["adaptador.conectar(tomada_3)", "converter()", "tomada_2", "plug"],
            respostaCerta: ["adaptador.conectar(tomada_3)"]
        }
    ],

    // --- 40. COMPLEXIDADE (Big O) ---
    "eng_bigo": [
        {
            tipo: "teoria",
            titulo: "40. Big O (Performance)",
            conteudo: `
                <p>Seu código funciona com 10 itens. E com 1 bilhão?</p>
                <p>A Notação <strong>Big O</strong> mede quão lento o código fica conforme os dados crescem.</p>
                <p><strong>O(1)</strong> é instantâneo. <strong>O(n)</strong> cresce com os dados. <strong>O(n²)</strong> é muito lento!</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "O(1) - Rápido",
            instrucao: "Pegar um item pelo índice é instantâneo.",
            blocos: ["item", "=", "lista[500]", "loop"],
            respostaCerta: ["item", "=", "lista[500]"]
        },
        {
            tipo: "montagem",
            titulo: "O(n) - Linear",
            instrucao: "Buscar um nome numa lista desordenada (tem que ler tudo).",
            blocos: ["para item na lista:", "se item == alvo:", "break", "sort"],
            respostaCerta: ["para item na lista:", "se item == alvo:"]
        },
        {
            tipo: "quiz",
            titulo: "O(n²)",
            instrucao: "Um loop dentro de outro loop (Bubble Sort) é...",
            opcoes: ["Quadrático (Lento pra caramba)", "Rápido", "Constante"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Otimizar",
            instrucao: "Troque a Lista (Lenta) por Dicionário (Rápido).",
            blocos: ["dados = {}", "dados = []", "buscar", "slow"],
            respostaCerta: ["dados = {}"]
        },
        {
            tipo: "montagem",
            titulo: "Logarítmico O(log n)",
            instrucao: "A Busca Binária corta o problema pela metade.",
            blocos: ["dividir_lista_meio()", "ler_tudo()", "aleatorio", "n*n"],
            respostaCerta: ["dividir_lista_meio()"]
        },
        {
            tipo: "quiz",
            titulo: "Melhor Opção",
            instrucao: "Qual é melhor para 1 milhão de dados?",
            opcoes: ["O(1) ou O(log n)", "O(n²)", "O(n!)"],
            respostaIndex: 0
        }
    ],

    // --- 41. ARQUITETURA (MVC) ---
    "eng_mvc": [
        {
            tipo: "teoria",
            titulo: "41. Arquitetura MVC",
            conteudo: `
                <p>Não misture banco de dados com tela! Organize em camadas:</p>
                <ul>
                    <li><strong>Model:</strong> Os dados (Banco).</li>
                    <li><strong>View:</strong> A tela (HTML/Design).</li>
                    <li><strong>Controller:</strong> O cérebro que liga os dois.</li>
                </ul>
            `
        },
        {
            tipo: "montagem",
            titulo: "Model",
            instrucao: "O Model cuida do Banco de Dados.",
            blocos: ["class UsuarioModel:", "salvar_no_banco()", "pintar_botao()", "html"],
            respostaCerta: ["class UsuarioModel:", "salvar_no_banco()"]
        },
        {
            tipo: "montagem",
            titulo: "View",
            instrucao: "A View cuida do HTML.",
            blocos: ["mostrar_na_tela()", "salvar_sql()", "regra_negocio", "div"],
            respostaCerta: ["mostrar_na_tela()"]
        },
        {
            tipo: "montagem",
            titulo: "Controller",
            instrucao: "O Controller pega dados do Model e manda pra View.",
            blocos: ["dados = Model.get()", "View.render(dados)", "SQL", "CSS"],
            respostaCerta: ["dados = Model.get()", "View.render(dados)"]
        },
        {
            tipo: "quiz",
            titulo: "Front vs Back",
            instrucao: "No MVC Web, a View geralmente é...",
            opcoes: ["Frontend (HTML/CSS)", "Backend (Python)", "Database"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "API",
            instrucao: "A API é um Controller que devolve JSON.",
            blocos: ["return json(dados)", "return html(dados)", "print", "view"],
            respostaCerta: ["return json(dados)"]
        },
        {
            tipo: "quiz",
            titulo: "Bagunça",
            instrucao: "Colocar SQL direto no botão do HTML é...",
            opcoes: ["Errado (Viola MVC)", "Certo e rápido", "Design Pattern"],
            respostaIndex: 0
        }
    ],

    // --- 42. DESAFIO FINAL: O MESTRE CODIN (O Sistema Operacional) ---
    "desafio_final_mestre": [
        {
            tipo: "teoria",
            titulo: "42. DESAFIO: O Kernel",
            conteudo: `
                <p><strong>Parabéns!</strong> Você chegou a ultima missão.</p>
                <p>Sua missão final: Criar o núcleo (Kernel) de um mini Sistema Operacional.</p>
                <p>Você vai precisar de: Filas (Processos), Dicionários (Memória), Tratamento de Erro e Permissões.</p>
                <p>Boa sorte, Mestre.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "1. Boot",
            instrucao: "Inicie o Kernel e a Memória (RAM).",
            blocos: ["kernel = {}", "ram = [0]*1024", "desligar", "null"],
            respostaCerta: ["kernel = {}", "ram = [0]*1024"]
        },
        {
            tipo: "montagem",
            titulo: "2. Processos",
            instrucao: "Adicione programas na Fila de execução.",
            blocos: ["fila_cpu.push(prog1)", "fila_cpu.push(prog2)", "executar", "stop"],
            respostaCerta: ["fila_cpu.push(prog1)", "fila_cpu.push(prog2)"]
        },
        {
            tipo: "montagem",
            titulo: "3. Scheduler",
            instrucao: "Enquanto houver processos, execute o primeiro (FIFO).",
            blocos: ["enquanto fila_cpu:", "processo = fila_cpu.pop_first()", "processo.rodar()", "break"],
            respostaCerta: ["enquanto fila_cpu:", "processo = fila_cpu.pop_first()", "processo.rodar()"]
        },
        {
            tipo: "montagem",
            titulo: "4. Memória Protegida",
            instrucao: "Se programa tentar acessar área proibida, mate-o (Kill).",
            blocos: ["try: acessar_memoria()", "except AccessDenied:", "kill(processo)", "permitir"],
            respostaCerta: ["try: acessar_memoria()", "except AccessDenied:", "kill(processo)"]
        },
        {
            tipo: "montagem",
            titulo: "5. Sistema de Arquivos",
            instrucao: "Salve o arquivo no 'Disco' (Dicionário).",
            blocos: ["disco['relatorio.txt']", "=", "conteudo_arquivo", "delete"],
            respostaCerta: ["disco['relatorio.txt']", "=", "conteudo_arquivo"]
        },
        {
            tipo: "montagem",
            titulo: "6. User Mode",
            instrucao: "Usuário não pode ser Admin (Root).",
            blocos: ["se usuario != 'root':", "bloquear_comando()", "formatar_pc()", "allow"],
            respostaCerta: ["se usuario != 'root':", "bloquear_comando()"]
        },
        {
            tipo: "quiz",
            titulo: "O FIM",
            instrucao: "Você completou as 42 missões. O que você é?",
            opcoes: ["Um Mestre Codin", "Um compilador", "Uma I.A."],
            respostaIndex: 0
        }
    ],
    // ==========================================
    // CURSO: HTML & CSS (PARTE 1 - HTML - CORRIGIDO)
    // ==========================================

    // --- 1. ESTRUTURA BÁSICA (8 Páginas) ---
    "html_estrutura": [
        {
            tipo: "teoria",
            titulo: "1. Bem-vindo à Web",
            conteudo: `
                <p>O <strong>HTML</strong> é a fundação de toda página web.</p>
                <p>Pense nele como o esqueleto do site. Sem HTML, não existe site.</p>
                <p>Ele funciona através de <strong>Tags</strong>: <code>&lt;tag&gt;</code>.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Conceito",
            instrucao: "O HTML é uma linguagem de programação?",
            opcoes: ["Sim, igual Python", "Não, é uma linguagem de Marcação", "É um banco de dados"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "2. A Tag HTML",
            conteudo: `
                <p>Tudo deve estar dentro da tag principal: <code>&lt;html&gt;</code>.</p>
                <p>A maioria das tags precisa ser aberta e fechada com barra <code>/</code>.</p>
                <p>Ex: <code>&lt;html&gt; ... &lt;/html&gt;</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "O Início",
            instrucao: "Abra e feche a tag principal do site.",
            blocos: ["<html>", "</html>", "<body>", "<site>", "web"],
            respostaCerta: ["<html>", "</html>"]
        },
        {
            tipo: "teoria",
            titulo: "3. Cabeça e Corpo",
            conteudo: `
                <p>O site é dividido em duas partes:</p>
                <ul>
                    <li><code>&lt;head&gt;</code> (Cabeça): Configurações invisíveis.</li>
                    <li><code>&lt;body&gt;</code> (Corpo): Tudo que o usuário VÊ na tela.</li>
                </ul>
            `
        },
        {
            tipo: "quiz",
            titulo: "Visibilidade",
            instrucao: "Onde devo escrever 'Olá Mundo' para aparecer na tela?",
            // AQUI ESTAVA O BUG: Usei &lt; e &gt;
            opcoes: ["Na &lt;head&gt;", "No &lt;body&gt;", "Fora do &lt;html&gt;"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Estrutura Completa",
            instrucao: "Monte: HTML > Body > Texto.",
            blocos: ["<html>", "<body>", "Olá", "</body>", "</html>", "<head>"],
            respostaCerta: ["<html>", "<body>", "Olá", "</body>", "</html>"]
        },
        {
            tipo: "quiz",
            titulo: "Revisão",
            instrucao: "Qual a função da tag <head>?",
            opcoes: ["Mostrar imagens", "Guardar configurações e metadados", "Criar o rodapé"],
            respostaIndex: 1
        }
    ],

    // --- 2. TÍTULOS E TEXTOS (8 Páginas) ---
    "html_textos": [
        {
            tipo: "teoria",
            titulo: "1. Títulos (Headings)",
            conteudo: `
                <p>Temos 6 níveis de títulos:</p>
                <p><code>&lt;h1&gt;</code> é o Gigante (Principal).<br>
                <code>&lt;h6&gt;</code> é o minúsculo.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Título Principal",
            instrucao: "Crie o título do seu portfólio.",
            blocos: ["<h1>", "Meu Portfólio", "</h1>", "header", "h2"],
            respostaCerta: ["<h1>", "Meu Portfólio", "</h1>"]
        },
        {
            tipo: "quiz",
            titulo: "Hierarquia",
            instrucao: "Qual subtítulo é menor que h2, mas maior que h4?",
            opcoes: ["h1", "h3", "h5", "h2.5"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "2. Parágrafos",
            conteudo: `
                <p>Para textos comuns, usamos a tag <code>&lt;p&gt;</code> (Paragraph).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Escrevendo",
            instrucao: "Crie um parágrafo sobre você.",
            blocos: ["<p>", "Sou um Programador", "</p>", "text", "write"],
            respostaCerta: ["<p>", "Sou um Programador", "</p>"]
        },
        {
            tipo: "teoria",
            titulo: "3. Quebra de Linha",
            conteudo: `
                <p>O HTML ignora 'Enter'. Para pular linha, use <code>&lt;br&gt;</code>.</p>
                <p>Ela é uma tag vazia, não precisa fechar.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Poema",
            instrucao: "Rosas são vermelhas (pula linha) Violetas são azuis.",
            blocos: ["Rosas...", "<br>", "Violetas...", "</br>", "enter"],
            respostaCerta: ["Rosas...", "<br>", "Violetas..."]
        },
        {
            tipo: "quiz",
            titulo: "Linha Horizontal",
            instrucao: "Qual tag desenha uma linha horizontal?",
            // AQUI CORRIGI AS OPÇÕES
            opcoes: ["&lt;line&gt;", "&lt;hr&gt;", "&lt;br&gt;", "&lt;row&gt;"],
            respostaIndex: 1
        }
    ],

    // --- 3. FORMATAÇÃO (8 Páginas) ---
    "html_formatacao": [
        {
            tipo: "teoria",
            titulo: "1. Negrito (Bold)",
            conteudo: `
                <p>Para destacar:</p>
                <ul>
                    <li><code>&lt;b&gt;</code>: Apenas visual.</li>
                    <li><code>&lt;strong&gt;</code>: Semântico (Importante pro Google).</li>
                </ul>
            `
        },
        {
            tipo: "montagem",
            titulo: "Destaque Forte",
            instrucao: "Use a tag semântica para destacar 'Atenção'.",
            blocos: ["<strong>", "Atenção", "</strong>", "<b>", "style"],
            respostaCerta: ["<strong>", "Atenção", "</strong>"]
        },
        {
            tipo: "teoria",
            titulo: "2. Itálico",
            conteudo: `
                <p>Para <em>ênfase</em>:</p>
                <ul>
                    <li><code>&lt;i&gt;</code>: Visual.</li>
                    <li><code>&lt;em&gt;</code>: Semântico (Emphasis).</li>
                </ul>
            `
        },
        {
            tipo: "montagem",
            titulo: "Estrangeirismo",
            instrucao: "Formate a palavra 'Software' com ênfase.",
            blocos: ["<em>", "Software", "</em>", "<i>", "slanted"],
            respostaCerta: ["<em>", "Software", "</em>"]
        },
        {
            tipo: "teoria",
            titulo: "3. Comentários",
            conteudo: `
                <p>Recados invisíveis no código: <code>&lt;!-- Recado --&gt;</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Escondido",
            instrucao: "Crie um comentário 'TODO: Arrumar'.",
            blocos: ["", "//", "#"],
            respostaCerta: [""]
        },
        {
            tipo: "teoria",
            titulo: "4. Marca texto",
            conteudo: `
                <p><code>&lt;mark&gt;</code>: Marca texto amarelo.</p>
                <p><code>&lt;del&gt;</code>: Texto riscado.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Promoção",
            instrucao: "Para mostrar 'De R$100 por R$50', qual tag uso no R$100?",
            // CORRIGIDO AQUI TAMBÉM
            opcoes: ["&lt;bold&gt;", "&lt;mark&gt;", "&lt;del&gt; (Riscado)", "&lt;u&gt;"],
            respostaIndex: 2
        }
    ],

    // --- 4. LINKS (ANCORAS) (8 Páginas) ---
    "html_links": [
        {
            tipo: "teoria",
            titulo: "1. O Hiperlink",
            conteudo: `
                <p>A tag <code>&lt;a&gt;</code> cria links.</p>
                <p>O atributo <strong>href</strong> diz o destino.</p>
                <p>Ex: <code>&lt;a href='google.com'&gt;Ir&lt;/a&gt;</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Link Externo",
            instrucao: "Crie um link para 'https://codin.dev'.",
            blocos: ["<a", "href='https://codin.dev'>", "Codin", "</a>"],
            respostaCerta: ["<a", "href='https://codin.dev'>", "Codin", "</a>"]
        },
        {
            tipo: "quiz",
            titulo: "O Texto",
            instrucao: "O que o usuário VÊ no exemplo: <a href='x'>Clique Aqui</a>?",
            opcoes: ["x", "Clique Aqui", "href"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "2. Nova Aba",
            conteudo: `
                <p>Use <code>target='_blank'</code> para abrir o link em outra aba.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Nova Janela",
            instrucao: "Adicione o target blank.",
            blocos: ["<a", "href='site.com'", "target='_blank'>", "Link", "</a>"],
            respostaCerta: ["<a", "href='site.com'", "target='_blank'>", "Link", "</a>"]
        },
        {
            tipo: "teoria",
            titulo: "3. Links Internos",
            conteudo: `
                <p>Links na mesma página usam IDs.</p>
                <p>Se o destino é <code>id='topo'</code>, o link é <code>href='#topo'</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Voltar ao Topo",
            instrucao: "Crie um link que leva para o ID '#inicio'.",
            blocos: ["<a", "href='#inicio'>", "Subir", "</a>"],
            respostaCerta: ["<a", "href='#inicio'>", "Subir", "</a>"]
        },
        {
            tipo: "quiz",
            titulo: "Erro Comum",
            instrucao: "O que acontece se eu esquecer o href?",
            opcoes: ["O link não é clicável", "Vai para o Google", "O site explode"],
            respostaIndex: 0
        }
    ],

    // --- 5. IMAGENS (8 Páginas) ---
    "html_imagens": [
        {
            tipo: "teoria",
            titulo: "1. Imagens",
            conteudo: `
                <p>Use a tag <code>&lt;img&gt;</code>.</p>
                <p>Ela não tem fechamento. O atributo <code>src</code> define a imagem.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Inserindo Foto",
            instrucao: "Coloque a imagem 'dog.png'.",
            blocos: ["<img", "src='dog.png'", "alt='Cão'>", "</img>", "href"],
            respostaCerta: ["<img", "src='dog.png'", "alt='Cão'>"]
        },
        {
            tipo: "teoria",
            titulo: "2. O atributo ALT",
            conteudo: `
                <p>O <code>alt</code> é o texto alternativo para cegos ou se a imagem falhar.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "SEO",
            instrucao: "O Google lê imagens?",
            opcoes: ["Sim, ele vê cores", "Não, ele lê o 'alt' para entender", "Só PNG"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Tamanho",
            conteudo: `
                <p>Use <code>width</code> (largura) e <code>height</code> (altura) para ajustar.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Miniatura",
            instrucao: "Defina largura de 50 pixels.",
            blocos: ["<img", "src='icone.png'", "width='50'", ">"],
            respostaCerta: ["<img", "src='icone.png'", "width='50'", ">"]
        },
        {
            tipo: "teoria",
            titulo: "4. Caminhos",
            conteudo: `
                <p>Imagens locais: <code>src='pasta/foto.jpg'</code>.</p>
                <p>Imagens da web: <code>src='https://...'</code>.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Bug",
            instrucao: "Imagem quebrada (ícone rasgado). O que pode ser?",
            opcoes: ["Caminho/Nome errado no src", "Computador sem som", "Falta o alt"],
            respostaIndex: 0
        }
    ],
    // --- 6. LISTAS (8 Páginas) ---
    "html_listas": [
        {
            tipo: "teoria",
            titulo: "1. Listas Não Ordenadas",
            conteudo: `
                <p>Para criar listas de itens sem ordem específica (com bolinhas), usamos <code>&lt;ul&gt;</code> (Unordered List).</p>
                <p>Cada item dentro da lista deve ser uma tag <code>&lt;li&gt;</code> (List Item).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Lista de Compras",
            instrucao: "Crie uma lista de compras.",
            blocos: ["<ul>", "<li>Pão</li>", "<li>Leite</li>", "</ul>", "<ol>"],
            respostaCerta: ["<ul>", "<li>Pão</li>", "<li>Leite</li>", "</ul>"]
        },
        {
            tipo: "teoria",
            titulo: "2. Listas Ordenadas",
            conteudo: `
                <p>Se a ordem importa (1º, 2º, 3º), usamos <code>&lt;ol&gt;</code> (Ordered List).</p>
                <p>O navegador coloca os números automaticamente.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Pódio",
            instrucao: "Liste os vencedores em ordem.",
            blocos: ["<ol>", "<li>Ouro</li>", "<li>Prata</li>", "</ol>", "<ul>"],
            respostaCerta: ["<ol>", "<li>Ouro</li>", "<li>Prata</li>", "</ol>"]
        },
        {
            tipo: "quiz",
            titulo: "Item",
            instrucao: "Qual tag é usada DENTRO de &lt;ul&gt; e &lt;ol&gt;?",
            opcoes: ["&lt;item&gt;", "&lt;il&gt;", "&lt;li&gt;"],
            respostaIndex: 2
        },
        {
            tipo: "teoria",
            titulo: "3. Listas Aninhadas",
            conteudo: `
                <p>Você pode colocar uma lista dentro da outra!</p>
                <p>Basta colocar um novo <code>&lt;ul&gt;</code> dentro de um <code>&lt;li&gt;</code>.</p>
                <p>Isso cria sub-níveis (como em menus).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Sub-lista",
            instrucao: "Crie uma lista dentro do item 'Frutas'.",
            blocos: ["<li>Frutas", "<ul><li>Maçã</li></ul>", "</li>", "<ol>"],
            respostaCerta: ["<li>Frutas", "<ul><li>Maçã</li></ul>", "</li>"]
        },
        {
            tipo: "quiz",
            titulo: "Menu",
            instrucao: "Menus de site geralmente são feitos com...",
            opcoes: ["Tabelas", "Listas de links (&lt;ul&gt; com &lt;a&gt;)", "Parágrafos"],
            respostaIndex: 1
        }
    ],

    // --- 7. ATRIBUTOS GERAIS (8 Páginas) ---
    "html_atributos": [
        {
            tipo: "teoria",
            titulo: "1. O que são Atributos?",
            conteudo: `
                <p>Atributos dão informações extras para as tags.</p>
                <p>Eles sempre vão na <strong>tag de abertura</strong> e seguem o padrão: <code>nome="valor"</code>.</p>
                <p>Ex: <code>&lt;p class="texto"&gt;</code></p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Sintaxe",
            instrucao: "Qual a forma correta de escrever um atributo?",
            opcoes: ["&lt;tag atributo='valor'&gt;", "&lt;tag atributo:valor&gt;", "&lt;tag&gt; atributo='valor'"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "2. O atributo Title",
            conteudo: `
                <p>O atributo <code>title</code> adiciona uma dica (tooltip) quando o usuário passa o mouse sobre o elemento.</p>
                <p>Funciona em quase todas as tags.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Dica Secreta",
            instrucao: "Adicione a dica 'Surpresa' no botão.",
            blocos: ["<button", "title='Surpresa'>", "Clique", "</button>"],
            respostaCerta: ["<button", "title='Surpresa'>", "Clique", "</button>"]
        },
        {
            tipo: "teoria",
            titulo: "3. Atributo Hidden",
            conteudo: `
                <p>O atributo <code>hidden</code> serve para esconder um elemento da tela.</p>
                <p>Ele é um atributo booleano (não precisa de valor, só o nome basta).</p>
                <p>Ex: <code>&lt;p hidden&gt;Texto Invisível&lt;/p&gt;</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Esconde-Esconde",
            instrucao: "Esconda o parágrafo.",
            blocos: ["<p", "hidden>", "Segredo", "</p>"],
            respostaCerta: ["<p", "hidden>", "Segredo", "</p>"]
        },
        {
            tipo: "quiz",
            titulo: "Aspas",
            instrucao: "Posso usar aspas simples ' ' ou duplas \" \" nos valores?",
            opcoes: ["Só duplas", "Só simples", "Tanto faz, desde que combine"],
            respostaIndex: 2
        },
        {
            tipo: "teoria",
            titulo: "4. Atributo Style",
            conteudo: `
                <p>O atributo <code>style</code> permite colocar CSS direto na tag (Inline CSS).</p>
                <p>Não é recomendado para sites grandes, mas útil para testes rápidos.</p>
                <p>Ex: <code>style="color: red;"</code></p>
            `
        }
    ],

    // --- 8. TABELAS (8 Páginas) ---
    "html_tabelas": [
        {
            tipo: "teoria",
            titulo: "1. A Tabela",
            conteudo: `
                <p>Tabelas servem para exibir dados, não para layout do site.</p>
                <p>A tag principal é <code>&lt;table&gt;</code>.</p>
                <p>Dentro dela, criamos linhas e colunas.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. Linhas e Células",
            conteudo: `
                <p><code>&lt;tr&gt;</code> (Table Row): Cria uma linha horizontal.</p>
                <p><code>&lt;td&gt;</code> (Table Data): Cria uma célula de dado dentro da linha.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Primeira Linha",
            instrucao: "Crie uma linha com dois dados: A e B.",
            blocos: ["<tr>", "<td>A</td>", "<td>B</td>", "</tr>", "<table>"],
            respostaCerta: ["<tr>", "<td>A</td>", "<td>B</td>", "</tr>"]
        },
        {
            tipo: "quiz",
            titulo: "Significado",
            instrucao: "O que significa TR?",
            opcoes: ["Table Right", "Table Row (Linha)", "Table Register"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Cabeçalho (TH)",
            conteudo: `
                <p>Para a primeira linha (títulos das colunas), usamos <code>&lt;th&gt;</code> (Table Header) em vez de TD.</p>
                <p>O texto fica em negrito e centralizado automaticamente.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Títulos",
            instrucao: "Crie o cabeçalho 'Nome' e 'Idade'.",
            blocos: ["<tr>", "<th>Nome</th>", "<th>Idade</th>", "</tr>"],
            respostaCerta: ["<tr>", "<th>Nome</th>", "<th>Idade</th>", "</tr>"]
        },
        {
            tipo: "teoria",
            titulo: "4. Bordas",
            conteudo: `
                <p>Por padrão, tabelas são invisíveis. Para ver as linhas, usamos CSS ou o atributo antigo <code>border="1"</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Tabela Completa",
            instrucao: "Feche a estrutura da tabela.",
            blocos: ["<table>", "<tr><td>Dado</td></tr>", "</table>", "</div>"],
            respostaCerta: ["<table>", "<tr><td>Dado</td></tr>", "</table>"]
        }
    ],

    // --- 9. FORMULÁRIOS (8 Páginas) ---
    "html_forms": [
        {
            tipo: "teoria",
            titulo: "1. Interação",
            conteudo: `
                <p>Formulários coletam dados do usuário. A tag pai é <code>&lt;form&gt;</code>.</p>
                <p>Dentro dela, usamos vários tipos de <strong>Inputs</strong> (Entradas).</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. Input de Texto",
            conteudo: `
                <p>A tag <code>&lt;input&gt;</code> é a mais versátil. Ela não tem fechamento.</p>
                <p><code>type="text"</code> cria uma caixa de texto simples.</p>
                <p><code>placeholder="Digite..."</code> mostra um texto fantasma de dica.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Campo Nome",
            instrucao: "Crie um input com dica 'Seu Nome'.",
            blocos: ["<input", "type='text'", "placeholder='Seu Nome'>", "/>"],
            respostaCerta: ["<input", "type='text'", "placeholder='Seu Nome'>"]
        },
        {
            tipo: "quiz",
            titulo: "Senha",
            instrucao: "Qual type esconde os caracteres com bolinhas?",
            opcoes: ["hidden", "secret", "password"],
            respostaIndex: 2
        },
        {
            tipo: "teoria",
            titulo: "3. Checkbox e Radio",
            conteudo: `
                <p><code>type="checkbox"</code>: Caixinha de marcar (pode marcar várias).</p>
                <p><code>type="radio"</code>: Bolinha de opção (só pode escolher uma do grupo).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Termos de Uso",
            instrucao: "Crie uma opção de marcar 'Aceito'.",
            blocos: ["<input", "type='checkbox'>", "Aceito", "radio"],
            respostaCerta: ["<input", "type='checkbox'>", "Aceito"]
        },
        {
            tipo: "teoria",
            titulo: "4. Label (Etiqueta)",
            conteudo: `
                <p>Para tornar o texto clicável junto com o input, usamos a tag <code>&lt;label&gt;</code>.</p>
                <p>Isso melhora muito a usabilidade.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Email",
            instrucao: "Use o type especial para emails.",
            blocos: ["<input", "type='email'>", "required", "mail"],
            respostaCerta: ["<input", "type='email'>"]
        }
    ],

    // --- 10. BOTÕES (8 Páginas) ---
    "html_botoes": [
        {
            tipo: "teoria",
            titulo: "1. O Botão",
            conteudo: `
                <p>Para criar botões clicáveis, usamos a tag <code>&lt;button&gt;</code>.</p>
                <p>O texto do botão vai entre as tags de abertura e fechamento.</p>
                <p>Ex: <code>&lt;button&gt;Clique Aqui&lt;/button&gt;</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Botão Salvar",
            instrucao: "Crie um botão escrito 'Salvar'.",
            blocos: ["<button>", "Salvar", "</button>", "input", "click"],
            respostaCerta: ["<button>", "Salvar", "</button>"]
        },
        {
            tipo: "teoria",
            titulo: "2. Input vs Button",
            conteudo: `
                <p>Também podemos criar botões com <code>&lt;input type="button" value="Texto"&gt;</code>.</p>
                <p>Mas a tag <code>&lt;button&gt;</code> é mais moderna e permite colocar ícones ou imagens dentro.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Melhor Opção",
            instrucao: "Qual tag é mais flexível para botões modernos?",
            opcoes: ["&lt;input type='submit'&gt;", "&lt;button&gt;", "&lt;div&gt;"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Botão de Enviar",
            conteudo: `
                <p>Dentro de um formulário, o botão principal deve ser do tipo <code>submit</code>.</p>
                <p><code>&lt;button type="submit"&gt;Enviar&lt;/button&gt;</code></p>
                <p>Ele dispara o envio dos dados.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Enviar Dados",
            instrucao: "Crie o botão que envia o form.",
            blocos: ["<button", "type='submit'>", "Entrar", "</button>"],
            respostaCerta: ["<button", "type='submit'>", "Entrar", "</button>"]
        },
        {
            tipo: "teoria",
            titulo: "4. Botão Desabilitado",
            conteudo: `
                <p>Podemos impedir o clique usando o atributo <code>disabled</code>.</p>
                <p>Útil quando o usuário ainda não preencheu tudo.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Bloqueado",
            instrucao: "Crie um botão que não funciona.",
            blocos: ["<button", "disabled>", "Aguarde...", "</button>"],
            respostaCerta: ["<button", "disabled>", "Aguarde...", "</button>"]
        }
    ],
    // --- 11. DIV E SPAN (8 Páginas) ---
    "html_divs": [
        {
            tipo: "teoria",
            titulo: "1. Agrupando Coisas",
            conteudo: `
                <p>Às vezes precisamos agrupar vários elementos para aplicar estilo ou organizar o layout.</p>
                <p>Usamos containers genéricos para isso: <code>&lt;div&gt;</code> e <code>&lt;span&gt;</code>.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. A Tag DIV",
            conteudo: `
                <p>A <code>&lt;div&gt;</code> (Division) é um elemento de <strong>Bloco</strong>.</p>
                <p>Ela ocupa a largura toda e quebra a linha (empilha elementos).</p>
                <p>É a caixa mais usada para criar seções, cards e layouts.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Criando um Bloco",
            instrucao: "Coloque dois parágrafos dentro de uma Div.",
            blocos: ["<div>", "<p>A</p>", "<p>B</p>", "</div>", "<span>"],
            respostaCerta: ["<div>", "<p>A</p>", "<p>B</p>", "</div>"]
        },
        {
            tipo: "teoria",
            titulo: "3. A Tag SPAN",
            conteudo: `
                <p>O <code>&lt;span&gt;</code> é um elemento de <strong>Linha</strong> (Inline).</p>
                <p>Ele serve para selecionar pequenos pedaços de texto sem quebrar a linha.</p>
                <p>Ex: Mudar a cor de apenas <em>uma palavra</em> numa frase.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Detalhe na Linha",
            instrucao: "Use span para destacar a palavra 'Azul'.",
            blocos: ["Texto", "<span>", "Azul", "</span>", "<div>"],
            respostaCerta: ["Texto", "<span>", "Azul", "</span>"]
        },
        {
            tipo: "quiz",
            titulo: "Diferença",
            instrucao: "Qual a principal diferença visual entre Div e Span?",
            opcoes: ["Div quebra linha (bloco), Span continua na linha", "Span é para imagens", "Div é colorido"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Aninhamento",
            instrucao: "Coloque um Span dentro de um parágrafo dentro de uma Div.",
            blocos: ["<div>", "<p>", "<span>Oi</span>", "</p>", "</div>"],
            respostaCerta: ["<div>", "<p>", "<span>Oi</span>", "</p>", "</div>"]
        },
        {
            tipo: "quiz",
            titulo: "Uso Comum",
            instrucao: "Para criar um 'Card' de produto, qual tag é melhor para envolver tudo?",
            opcoes: ["&lt;span&gt;", "&lt;div&gt;", "&lt;p&gt;"],
            respostaIndex: 1
        }
    ],

    // --- 12. IDs e CLASSES (8 Páginas) ---
    "html_classes": [
        {
            tipo: "teoria",
            titulo: "1. Batizando Elementos",
            conteudo: `
                <p>Como diferenciar um <code>&lt;p&gt;</code> do outro para pintar de cores diferentes?</p>
                <p>Damos nomes a eles usando os atributos <strong>id</strong> e <strong>class</strong>.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. Classes (Grupo)",
            conteudo: `
                <p>Use <code>class</code> quando quiser agrupar vários elementos com o mesmo estilo.</p>
                <p>Ex: Vários botões com <code>class="btn-vermelho"</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Grupo de Botões",
            instrucao: "Crie um botão com a classe 'perigo'.",
            blocos: ["<button", "class='perigo'>", "Apagar", "</button>"],
            respostaCerta: ["<button", "class='perigo'>", "Apagar", "</button>"]
        },
        {
            tipo: "quiz",
            titulo: "Regra da Classe",
            instrucao: "Posso usar a mesma classe em 10 elementos diferentes?",
            opcoes: ["Sim, classes são para grupos", "Não, é proibido", "Só em divs"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. ID (Identidade)",
            conteudo: `
                <p>Use <code>id</code> para elementos <strong>ÚNICOS</strong> na página.</p>
                <p>Ex: O Logotipo, o Cabeçalho Principal, o Rodapé.</p>
                <p>É como o CPF do elemento. Não pode repetir!</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Elemento Único",
            instrucao: "Defina o ID 'titulo-principal' no H1.",
            blocos: ["<h1", "id='titulo-principal'>", "Ola", "</h1>"],
            respostaCerta: ["<h1", "id='titulo-principal'>", "Ola", "</h1>"]
        },
        {
            tipo: "quiz",
            titulo: "Conflito",
            instrucao: "O que acontece se eu colocar o mesmo ID em dois elementos?",
            opcoes: ["O HTML invalida (erro de lógica) e o JS pode falhar", "Funciona normal", "O site fica mais rápido"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Misto",
            instrucao: "Uma div pode ter ID e Classe ao mesmo tempo.",
            blocos: ["<div", "id='header'", "class='dark'>", "</div>"],
            respostaCerta: ["<div", "id='header'", "class='dark'>", "</div>"]
        }
    ],

    // --- 13. SEMÂNTICA (8 Páginas) ---
    "html_semantica": [
        {
            tipo: "teoria",
            titulo: "1. HTML Semântico",
            conteudo: `
                <p>Poderíamos fazer um site só com <code>&lt;div&gt;</code>, mas o Google não entenderia nada.</p>
                <p>Tags semânticas têm <strong>significado</strong>. Elas explicam O QUE é o conteúdo.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. Header e Nav",
            conteudo: `
                <p><code>&lt;header&gt;</code>: Topo do site ou de uma seção.</p>
                <p><code>&lt;nav&gt;</code>: Links de navegação (Menu).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Topo do Site",
            instrucao: "Crie um cabeçalho com um menu dentro.",
            blocos: ["<header>", "<nav>", "Menu", "</nav>", "</header>"],
            respostaCerta: ["<header>", "<nav>", "Menu", "</nav>", "</header>"]
        },
        {
            tipo: "teoria",
            titulo: "3. Main e Footer",
            conteudo: `
                <p><code>&lt;main&gt;</code>: O conteúdo principal e único da página.</p>
                <p><code>&lt;footer&gt;</code>: O rodapé (copyright, contatos).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Rodapé",
            instrucao: "Crie o rodapé com um parágrafo.",
            blocos: ["<footer>", "<p>", "© 2025", "</p>", "</footer>"],
            respostaCerta: ["<footer>", "<p>", "© 2025", "</p>", "</footer>"]
        },
        {
            tipo: "quiz",
            titulo: "Artigo",
            instrucao: "Qual tag é melhor para um post de blog?",
            opcoes: ["&lt;div&gt;", "&lt;article&gt;", "&lt;span&gt;"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "4. Section",
            conteudo: `
                <p><code>&lt;section&gt;</code>: Separa o site em partes temáticas (Sobre, Serviços, Contato).</p>
                <p>É melhor que usar várias divs soltas.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Estrutura Ideal",
            instrucao: "Monte: Header > Main > Footer.",
            blocos: ["<header>...</header>", "<main>...</main>", "<footer>...</footer>", "<div>"],
            respostaCerta: ["<header>...</header>", "<main>...</main>", "<footer>...</footer>"]
        }
    ],

    // --- 14. PROJETO FINAL HTML (8 Páginas) ---
    "html_projeto": [
        {
            tipo: "teoria",
            titulo: "14. Desafio Final: Card de Perfil",
            conteudo: `
                <p>Parabéns! Você dominou o HTML básico.</p>
                <p>Agora vamos construir a estrutura de um <strong>Card de Perfil</strong> completo.</p>
                <p>Lembre-se: sem CSS, ele vai parecer feio, mas a estrutura estará sólida!</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "1. O Container",
            instrucao: "Crie a div principal que segura o cartão.",
            blocos: ["<div", "class='card-perfil'>", "</div>", "id"],
            respostaCerta: ["<div", "class='card-perfil'>", "</div>"]
        },
        {
            tipo: "montagem",
            titulo: "2. A Foto",
            instrucao: "Adicione a imagem do usuário dentro do card.",
            blocos: ["<img", "src='usuario.jpg'", "alt='Foto de Perfil'>", "</img>"],
            respostaCerta: ["<img", "src='usuario.jpg'", "alt='Foto de Perfil'>"]
        },
        {
            tipo: "montagem",
            titulo: "3. O Nome",
            instrucao: "Use um título para o nome do usuário.",
            blocos: ["<h2>", "Mestre Codin", "</h2>", "h1"],
            respostaCerta: ["<h2>", "Mestre Codin", "</h2>"]
        },
        {
            tipo: "montagem",
            titulo: "4. A Descrição",
            instrucao: "Use um parágrafo para a bio.",
            blocos: ["<p>", "Desenvolvedor Fullstack", "</p>", "span"],
            respostaCerta: ["<p>", "Desenvolvedor Fullstack", "</p>"]
        },
        {
            tipo: "montagem",
            titulo: "5. Status",
            instrucao: "Use um span com classe para o status 'Online'.",
            blocos: ["<span", "class='status'>", "Online", "</span>"],
            respostaCerta: ["<span", "class='status'>", "Online", "</span>"]
        },
        {
            tipo: "montagem",
            titulo: "6. Botão de Ação",
            instrucao: "Crie um botão para 'Seguir'.",
            blocos: ["<button", "type='button'>", "Seguir", "</button>"],
            respostaCerta: ["<button", "type='button'>", "Seguir", "</button>"]
        },
        {
            tipo: "quiz",
            titulo: "Conclusão",
            instrucao: "O HTML está pronto. O que falta para ficar colorido e bonito?",
            opcoes: ["Mais HTML", "CSS (Cascading Style Sheets)", "Javascript"],
            respostaIndex: 1
        }
    ],
    // ==========================================
    // CURSO: HTML & CSS (PARTE 2 - CSS)
    // ==========================================

    // --- 15. INTRODUÇÃO AO CSS (8 Páginas) ---
    "css_intro": [
        {
            tipo: "teoria",
            titulo: "1. O que é CSS?",
            conteudo: `
                <p><strong>CSS</strong> (Cascading Style Sheets) serve para estilizar o HTML.</p>
                <p>Enquanto o HTML diz "Isto é um botão", o CSS diz "Este botão é azul, redondo e tem sombra".</p>
                <p>Sem CSS, a web seria preto e branco.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Função",
            instrucao: "Para que serve o CSS?",
            opcoes: ["Criar lógica de banco de dados", "Estilizar e dar layout à página", "Criar links"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "2. Sintaxe Básica",
            conteudo: `
                <p>A regra CSS tem 3 partes: Seletor, Propriedade e Valor.</p>
                <p>Ex: <code>h1 { color: red; }</code></p>
                <p>Traduzindo: "Selecione todos os H1 e mude a cor para vermelho".</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Primeira Regra",
            instrucao: "Pinte o parágrafo de azul.",
            blocos: ["p", "{", "color: blue;", "}", "()"],
            respostaCerta: ["p", "{", "color: blue;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "3. Onde escrever CSS?",
            conteudo: `
                <p>A melhor forma é criar um arquivo externo (ex: <code>style.css</code>) e linkar no HTML.</p>
                <p>Usamos a tag <code>&lt;link&gt;</code> dentro do <code>&lt;head&gt;</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Conectando",
            instrucao: "Linke o arquivo style.css.",
            blocos: ["<link", "rel='stylesheet'", "href='style.css'>", "src"],
            respostaCerta: ["<link", "rel='stylesheet'", "href='style.css'>"]
        },
        {
            tipo: "teoria",
            titulo: "4. Cascata (Cascade)",
            conteudo: `
                <p>O "C" de CSS significa Cascata. A regra que vem por último ganha.</p>
                <p>Se você disser que o texto é Azul na linha 1, e Vermelho na linha 10, ele será Vermelho.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Prioridade",
            instrucao: "p { color: blue } depois p { color: red }. Qual a cor final?",
            opcoes: ["Azul", "Roxo (Mistura)", "Vermelho (A última vence)"],
            respostaIndex: 2
        }
    ],

    // --- 16. SELETORES (8 Páginas) ---
    "css_seletores": [
        {
            tipo: "teoria",
            titulo: "1. Seletor de Tag",
            conteudo: `
                <p>O mais básico. Seleciona todas as tags daquele tipo.</p>
                <p><code>p { ... }</code> afeta TODOS os parágrafos do site.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Todos os H1",
            instrucao: "Defina o tamanho da fonte de todos os H1.",
            blocos: ["h1", "{", "font-size: 20px;", "}", "#h1"],
            respostaCerta: ["h1", "{", "font-size: 20px;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "2. Seletor de Classe (.)",
            conteudo: `
                <p>Seleciona elementos com um atributo <code>class</code> específico.</p>
                <p>Começa com PONTO (.). Ex: <code>.botao { ... }</code> afeta <code>&lt;div class='botao'&gt;</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Classe Destaque",
            instrucao: "Estilize a classe '.destaque'.",
            blocos: [".destaque", "{", "background: yellow;", "}", "destaque"],
            respostaCerta: [".destaque", "{", "background: yellow;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "3. Seletor de ID (#)",
            conteudo: `
                <p>Seleciona UM elemento único com atributo <code>id</code>.</p>
                <p>Começa com HASHTAG (#). Ex: <code>#topo { ... }</code>.</p>
                <p>O ID é mais forte que a Classe.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Menu Principal",
            instrucao: "Estilize o elemento com id 'menu'.",
            blocos: ["#menu", "{", "width: 100%;", "}", ".menu"],
            respostaCerta: ["#menu", "{", "width: 100%;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "4. Seletor Universal (*)",
            conteudo: `
                <p>O asterisco <code>*</code> seleciona TUDO na página.</p>
                <p>Geralmente usado para resetar margens: <code>* { margin: 0; }</code>.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Quem ganha?",
            instrucao: "Se tenho <p id='a' class='b'>. O ID pinta de Azul, a Classe de Vermelho. Qual a cor?",
            opcoes: ["Vermelho", "Azul (ID é mais específico)", "Preto"],
            respostaIndex: 1
        }
    ],

    // --- 17. CORES E FUNDOS (8 Páginas) ---
    "css_cores": [
        {
            tipo: "teoria",
            titulo: "1. Color (Texto)",
            conteudo: `
                <p>A propriedade <code>color</code> muda a cor do TEXTO (fonte).</p>
                <p>Podemos usar nomes em inglês: <code>red</code>, <code>blue</code>, <code>gold</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Texto Verde",
            instrucao: "Mude a cor da fonte para verde.",
            blocos: ["p {", "color: green;", "}", "text-color"],
            respostaCerta: ["p {", "color: green;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "2. Hexadecimal",
            conteudo: `
                <p>Profissionais usam códigos Hexadecimais (#RRGGBB).</p>
                <p><code>#000000</code> é Preto. <code>#FFFFFF</code> é Branco.</p>
                <p><code>#FF0000</code> é Vermelho puro.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Fundo Escuro",
            instrucao: "Mude o fundo (background) para um cinza escuro (#333).",
            blocos: ["body {", "background-color: #333;", "}", "color"],
            respostaCerta: ["body {", "background-color: #333;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "3. RGB e RGBA",
            conteudo: `
                <p><code>rgb(255, 0, 0)</code> é vermelho.</p>
                <p>O <strong>RGBA</strong> tem um quarto número: Transparência (Alpha).</p>
                <p><code>rgba(0, 0, 0, 0.5)</code> é preto com 50% de transparência.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Transparência",
            instrucao: "Qual valor deixa a cor totalmente invisível?",
            opcoes: ["alpha = 1", "alpha = 0", "alpha = 100"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "4. Imagem de Fundo",
            conteudo: `
                <p>Podemos usar uma imagem como fundo.</p>
                <p><code>background-image: url('foto.jpg');</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Papel de Parede",
            instrucao: "Coloque 'bg.png' no fundo.",
            blocos: ["div {", "background-image:", "url('bg.png');", "}"],
            respostaCerta: ["div {", "background-image:", "url('bg.png');", "}"]
        }
    ],

    // --- 18. TIPOGRAFIA (8 Páginas) ---
    "css_texto": [
        {
            tipo: "teoria",
            titulo: "1. Font Family",
            conteudo: `
                <p>Define a família da fonte (o desenho da letra).</p>
                <p>Ex: <code>font-family: 'Arial', sans-serif;</code></p>
                <p>Sempre coloque uma opção reserva no final.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Mudando a Fonte",
            instrucao: "Use a fonte Roboto.",
            blocos: ["body {", "font-family: 'Roboto';", "}", "font-style"],
            respostaCerta: ["body {", "font-family: 'Roboto';", "}"]
        },
        {
            tipo: "teoria",
            titulo: "2. Font Size",
            conteudo: `
                <p>Define o tamanho. Pode ser em <code>px</code> (fixo) ou <code>rem</code> (relativo).</p>
                <p>16px é o padrão da web.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Título Grande",
            instrucao: "Deixe o H1 com 32 pixels.",
            blocos: ["h1 {", "font-size: 32px;", "}", "size: 32"],
            respostaCerta: ["h1 {", "font-size: 32px;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "3. Font Weight",
            conteudo: `
                <p>Define o 'peso' (negrito).</p>
                <p><code>bold</code> (ou 700) é negrito.</p>
                <p><code>normal</code> (ou 400) é normal.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Negrito",
            instrucao: "Qual propriedade deixa o texto mais grosso?",
            opcoes: ["font-style", "font-weight", "text-decoration"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "4. Text Align",
            conteudo: `
                <p>Alinha o texto dentro da caixa.</p>
                <p><code>left</code> (padrão), <code>center</code> (centro), <code>right</code> (direita).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Centralizando",
            instrucao: "Centralize o texto do título.",
            blocos: ["h1 {", "text-align: center;", "}", "align: middle"],
            respostaCerta: ["h1 {", "text-align: center;", "}"]
        }
    ],

    // --- 19. BOX MODEL (8 Páginas) - O MAIS IMPORTANTE ---
    "css_boxmodel": [
        {
            tipo: "teoria",
            titulo: "1. O Box Model",
            conteudo: `
                <p>No CSS, <strong>TUDO é uma caixa</strong> (retângulo).</p>
                <p>Essa caixa tem camadas: Conteúdo > Padding > Border > Margin.</p>
                <p>Entender isso é essencial para layout.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Ordem",
            instrucao: "Qual é a camada mais externa (fora da borda)?",
            opcoes: ["Padding", "Margin", "Content"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "2. Padding (Preenchimento)",
            conteudo: `
                <p>É o espaço <strong>INTERNO</strong>, entre o texto e a borda.</p>
                <p>Se você tem um botão, o padding faz ele ficar 'gordinho', afastando a borda do texto.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Botão Gordinho",
            instrucao: "Dê 20px de espaço interno.",
            blocos: ["button {", "padding: 20px;", "}", "margin"],
            respostaCerta: ["button {", "padding: 20px;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "3. Border (Borda)",
            conteudo: `
                <p>A linha em volta do elemento.</p>
                <p>Sintaxe: <code>border: espessura tipo cor;</code></p>
                <p>Ex: <code>border: 1px solid black;</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Borda Vermelha",
            instrucao: "Crie uma borda sólida de 2px vermelha.",
            blocos: ["div {", "border: 2px solid red;", "}", "line"],
            respostaCerta: ["div {", "border: 2px solid red;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "4. Margin (Margem)",
            conteudo: `
                <p>É o espaço <strong>EXTERNO</strong>, fora da borda.</p>
                <p>Serve para afastar um elemento do outro (ex: afastar dois botões).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Afastar",
            instrucao: "Dê 50px de margem em volta da caixa.",
            blocos: ["div {", "margin: 50px;", "}", "padding"],
            respostaCerta: ["div {", "margin: 50px;", "}"]
        }
    ],
    // --- 20. DISPLAY E POSITION (8 Páginas) ---
    "css_display": [
        {
            tipo: "teoria",
            titulo: "1. Propriedade Display",
            conteudo: `
                <p>O <code>display</code> define como o elemento se comporta na linha.</p>
                <ul>
                    <li><code>block</code>: Ocupa a linha toda (ex: div, h1).</li>
                    <li><code>inline</code>: Fica na mesma linha, só ocupa o tamanho do texto (ex: span, a).</li>
                </ul>
            `
        },
        {
            tipo: "montagem",
            titulo: "Transformação",
            instrucao: "Transforme um link (inline) em bloco para poder dar largura.",
            blocos: ["a {", "display: block;", "}", "inline"],
            respostaCerta: ["a {", "display: block;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "2. Display None",
            conteudo: `
                <p><code>display: none;</code> remove o elemento da tela. Ele deixa de ocupar espaço (diferente de <code>visibility: hidden</code> que deixa um buraco).</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Esconder",
            instrucao: "Qual comando faz o elemento sumir completamente?",
            opcoes: ["opacity: 0", "display: none", "color: transparent"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Position Relative",
            conteudo: `
                <p>O <code>position</code> muda a regra do jogo.</p>
                <p><code>relative</code>: O elemento continua no lugar dele, mas você pode empurrá-lo com <code>top</code>, <code>left</code>, etc.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Empurrãozinho",
            instrucao: "Mova o elemento 10px para baixo.",
            blocos: ["div {", "position: relative;", "top: 10px;", "}"],
            respostaCerta: ["div {", "position: relative;", "top: 10px;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "4. Position Absolute",
            conteudo: `
                <p><code>absolute</code>: O elemento sai do fluxo normal. Ele flutua por cima dos outros.</p>
                <p>Ele se posiciona em relação ao pai mais próximo (que tenha position relative).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "No Canto",
            instrucao: "Cole o elemento no topo direito.",
            blocos: ["position: absolute;", "top: 0;", "right: 0;", "left"],
            respostaCerta: ["position: absolute;", "top: 0;", "right: 0;"]
        }
    ],

    // --- 21. FLEXBOX: O CONTAINER (8 Páginas) ---
    "css_flex_intro": [
        {
            tipo: "teoria",
            titulo: "1. O Poder do Flexbox",
            conteudo: `
                <p>Chega de sofrer alinhando coisas! O Flexbox é um sistema unidimensional (linha ou coluna).</p>
                <p>Para ativar, usamos <code>display: flex;</code> no elemento PAI (Container).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Ativando",
            instrucao: "Transforme a div '.menu' em um container flex.",
            blocos: [".menu {", "display: flex;", "}", "block"],
            respostaCerta: [".menu {", "display: flex;", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Efeito Imediato",
            instrucao: "O que acontece com as divs filhas quando ativo 'display: flex' no pai?",
            opcoes: ["Elas ficam uma ao lado da outra (linha)", "Elas somem", "Elas ficam empilhadas"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "2. Flex Direction",
            conteudo: `
                <p>Você decide a direção dos filhos:</p>
                <ul>
                    <li><code>row</code>: Linha (padrão). Esquerda pra direita.</li>
                    <li><code>column</code>: Coluna. Cima pra baixo.</li>
                </ul>
            `
        },
        {
            tipo: "montagem",
            titulo: "Coluna",
            instrucao: "Faça os itens ficarem um embaixo do outro.",
            blocos: ["flex-direction:", "column;", "row;", "display"],
            respostaCerta: ["flex-direction:", "column;"]
        },
        {
            tipo: "teoria",
            titulo: "3. Flex Direction Reverso",
            conteudo: `
                <p>Também podemos inverter a ordem!</p>
                <p><code>row-reverse</code>: Direita pra esquerda.</p>
                <p><code>column-reverse</code>: Baixo pra cima.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Chat",
            instrucao: "Para fazer um chat que começa de baixo pra cima, qual uso?",
            opcoes: ["column-reverse", "row-reverse", "column"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Invertendo",
            instrucao: "Inverta a ordem da linha.",
            blocos: ["flex-direction:", "row-reverse;", "up;", "down"],
            respostaCerta: ["flex-direction:", "row-reverse;"]
        }
    ],

    // --- 22. FLEXBOX: ALINHAMENTO (8 Páginas) ---
    "css_flex_alinhamento": [
        {
            tipo: "teoria",
            titulo: "1. Eixo Principal (Justify)",
            conteudo: `
                <p>Para alinhar no eixo principal (horizontal, se for row), usamos <code>justify-content</code>.</p>
                <p><code>center</code>: Centraliza.</p>
                <p><code>space-between</code>: Espalha (um no começo, um no fim).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Centralizar Horizontal",
            instrucao: "Coloque os itens no centro da linha.",
            blocos: ["justify-content:", "center;", "middle;", "align"],
            respostaCerta: ["justify-content:", "center;"]
        },
        {
            tipo: "teoria",
            titulo: "2. Eixo Cruzado (Align Items)",
            conteudo: `
                <p>Para alinhar no eixo contrário (vertical, se for row), usamos <code>align-items</code>.</p>
                <p>É o segredo para centralizar verticalmente!</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Centro Total",
            instrucao: "Centralize nos dois eixos.",
            blocos: ["display: flex;", "justify-content: center;", "align-items: center;", "left"],
            respostaCerta: ["display: flex;", "justify-content: center;", "align-items: center;"]
        },
        {
            tipo: "quiz",
            titulo: "Menu de Site",
            instrucao: "Para separar 'Logo' na esquerda e 'Links' na direita, uso...",
            opcoes: ["justify-content: space-between", "justify-content: center", "margin: auto"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. Gap (Espaçamento)",
            conteudo: `
                <p>O jeito moderno de dar espaço entre os itens flex é usando <code>gap</code>.</p>
                <p>Não precisa mais ficar usando margin-right em cada item.</p>
                <p>Ex: <code>gap: 20px;</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Espaço",
            instrucao: "Dê 10px de espaço entre os botões.",
            blocos: [".botoes {", "display: flex;", "gap: 10px;", "}"],
            respostaCerta: [".botoes {", "display: flex;", "gap: 10px;", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Confusão",
            instrucao: "Justify-content mexe em qual eixo (no padrão row)?",
            opcoes: ["Horizontal (X)", "Vertical (Y)", "Profundidade (Z)"],
            respostaIndex: 0
        }
    ],

    // --- 23. FLEXBOX: QUEBRAS (8 Páginas) ---
    "css_flex_wrap": [
        {
            tipo: "teoria",
            titulo: "1. Flex Wrap",
            conteudo: `
                <p>Por padrão, o Flexbox tenta espremer tudo numa linha só (<code>nowrap</code>).</p>
                <p>Para permitir que os itens caiam para a linha de baixo se faltar espaço, usamos <code>flex-wrap: wrap;</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Galeria de Fotos",
            instrucao: "Permita que as fotos quebrem linha.",
            blocos: [".galeria {", "display: flex;", "flex-wrap: wrap;", "}"],
            respostaCerta: [".galeria {", "display: flex;", "flex-wrap: wrap;", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Responsivo",
            instrucao: "O wrap é importante para celulares?",
            opcoes: ["Sim, para o conteúdo não vazar da tela", "Não, celular tem tela infinita", "Só para tablets"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "2. Align Content",
            conteudo: `
                <p>Quando temos VÁRIAS linhas (por causa do wrap), usamos <code>align-content</code> para alinhar essas linhas em bloco.</p>
                <p>Diferente de <code>align-items</code> que alinha item a item.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Linhas no Centro",
            instrucao: "Junte todas as linhas no centro vertical.",
            blocos: ["align-content:", "center;", "space-between;", "item"],
            respostaCerta: ["align-content:", "center;"]
        },
        {
            tipo: "teoria",
            titulo: "3. Flex Grow (Crescer)",
            conteudo: `
                <p>Define se um item pode crescer para ocupar o espaço vazio.</p>
                <p><code>flex-grow: 1;</code> faz o item esticar o máximo possível.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Barra de Pesquisa",
            instrucao: "Faça o input ocupar todo o espaço sobrando.",
            blocos: ["input {", "flex-grow: 1;", "}", "width"],
            respostaCerta: ["input {", "flex-grow: 1;", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Proporção",
            instrucao: "Item A tem grow:1, Item B tem grow:2. Quem é maior?",
            opcoes: ["Item B (Cresce o dobro)", "Item A", "São iguais"],
            respostaIndex: 0
        }
    ],

    // --- 24. PROJETO: LAYOUT FLEX (8 Páginas) ---
    "css_projeto_layout": [
        {
            tipo: "teoria",
            titulo: "24. Desafio: Site Completo",
            conteudo: `
                <p>Vamos usar Flexbox para montar a estrutura clássica de um site: Cabeçalho, Conteúdo e Rodapé.</p>
                <p>O objetivo é fazer o rodapé ficar sempre no final.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "1. Estrutura Base",
            instrucao: "O corpo do site será uma coluna flexível.",
            blocos: ["body {", "display: flex;", "flex-direction: column;", "}"],
            respostaCerta: ["body {", "display: flex;", "flex-direction: column;", "}"]
        },
        {
            tipo: "montagem",
            titulo: "2. Altura Total",
            instrucao: "Garanta que o body ocupe 100% da altura da tela (vh).",
            blocos: ["min-height:", "100vh;", "100%;", "px"],
            respostaCerta: ["min-height:", "100vh;"]
        },
        {
            tipo: "montagem",
            titulo: "3. Cabeçalho",
            instrucao: "O header tem logo e menu separados.",
            blocos: ["header {", "display: flex;", "justify-content: space-between;", "}"],
            respostaCerta: ["header {", "display: flex;", "justify-content: space-between;", "}"]
        },
        {
            tipo: "montagem",
            titulo: "4. Conteúdo Principal",
            instrucao: "O Main deve crescer para empurrar o footer.",
            blocos: ["main {", "flex-grow: 1;", "}", "shrink"],
            respostaCerta: ["main {", "flex-grow: 1;", "}"]
        },
        {
            tipo: "montagem",
            titulo: "5. Centralizar Hero",
            instrucao: "Dentro do Main, centralize o texto de boas-vindas.",
            blocos: ["display: flex;", "justify-content: center;", "align-items: center;", "center"],
            respostaCerta: ["display: flex;", "justify-content: center;", "align-items: center;"]
        },
        {
            tipo: "montagem",
            titulo: "6. Rodapé",
            instrucao: "O footer apenas centraliza o texto.",
            blocos: ["footer {", "text-align: center;", "}", "flex"],
            respostaCerta: ["footer {", "text-align: center;", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Conquista",
            instrucao: "Você acabou de criar o 'Sticky Footer' (Rodapé fixo). Isso é...",
            opcoes: ["Essencial para sites com pouco conteúdo", "Um erro", "Feio"],
            respostaIndex: 0
        }
    ],
    // --- 25. CSS GRID LAYOUT (8 Páginas) ---
    "css_grid": [
        {
            tipo: "teoria",
            titulo: "1. Grid vs Flexbox",
            conteudo: `
                <p>O Flexbox é para <strong>uma dimensão</strong> (linha OU coluna).</p>
                <p>O <strong>CSS Grid</strong> é para <strong>duas dimensões</strong> (linhas E colunas ao mesmo tempo).</p>
                <p>É perfeito para criar galerias e layouts complexos.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Ativando a Grade",
            instrucao: "Defina o container como grade.",
            blocos: [".container {", "display: grid;", "}", "flex"],
            respostaCerta: [".container {", "display: grid;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "2. Colunas (Template)",
            conteudo: `<p>Você define quantas colunas quer com <code>grid-template-columns</code>.</p><p>A unidade <code>fr</code> (fraction) é mágica: ela divide o espaço disponível.</p><p>Ex: <code>1fr 1fr</code> cria duas colunas iguais.</p>`
        },
        {
            tipo: "montagem",
            titulo: "Três Colunas",
            instrucao: "Crie 3 colunas de tamanhos iguais.",
            blocos: ["grid-template-columns:", "1fr 1fr 1fr;", "auto;", "300px"],
            respostaCerta: ["grid-template-columns:", "1fr 1fr 1fr;"]
        },
        {
            tipo: "quiz",
            titulo: "Matemática",
            instrucao: "Se tenho 'grid-template-columns: 1fr 2fr', qual é maior?",
            opcoes: ["A segunda (dobro do tamanho)", "A primeira", "São iguais"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. Gap (O Espaço)",
            conteudo: `<p>Assim como no Flexbox, o <code>gap</code> cria os corredores entre as células.</p><p>Não use margens nos itens, use gap no pai!</p>`
        },
        {
            tipo: "montagem",
            titulo: "Corredores",
            instrucao: "Dê 20px de espaço entre as células.",
            blocos: ["gap: 20px;", "margin: 20px;", "padding: 20px;", "space"],
            respostaCerta: ["gap: 20px;"]
        },
        {
            tipo: "teoria",
            titulo: "4. Grid Template Areas",
            conteudo: `<p>Você pode desenhar o site usando nomes!</p><p>Ex: <code>'header header' 'menu conteudo'</code>.</p><p>É a forma mais visual de criar layouts.</p>`
        }
    ],

    // --- 26. RESPONSIVIDADE (8 Páginas) ---
    "css_responsivo": [
        {
            tipo: "teoria",
            titulo: "1. O que é Responsividade?",
            conteudo: `
                <p>É fazer o site se adaptar a celulares, tablets e monitores gigantes.</p>
                <p>O segredo é usar porcentagens (<code>%</code>) em vez de pixels fixos (<code>px</code>) e usar <strong>Media Queries</strong>.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Viewport",
            instrucao: "O que acontece se eu não configurar o viewport no HTML?",
            opcoes: ["O site fica minúsculo no celular (zoom out)", "Nada", "O site quebra"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "2. Media Queries",
            conteudo: `<p>São regras condicionais: 'SE a tela for menor que X, faça isso'.</p><p>Sintaxe: <code>@media (max-width: 600px) { ... }</code></p>`
        },
        {
            tipo: "montagem",
            titulo: "Modo Mobile",
            instrucao: "Crie uma regra para telas menores que 500px.",
            blocos: ["@media", "(max-width: 500px)", "{ ... }", "if mobile"],
            respostaCerta: ["@media", "(max-width: 500px)", "{ ... }"]
        },
        {
            tipo: "teoria",
            titulo: "3. Adaptando o Layout",
            conteudo: `<p>No celular, geralmente empilhamos tudo.</p><p>Se você usou <code>flex-direction: row</code> no PC, mude para <code>column</code> no celular.</p>`
        },
        {
            tipo: "montagem",
            titulo: "Empilhar",
            instrucao: "Mude a direção para coluna dentro da media query.",
            blocos: [".menu {", "flex-direction: column;", "}", "row"],
            respostaCerta: [".menu {", "flex-direction: column;", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Mobile First",
            instrucao: "O que é 'Mobile First'?",
            opcoes: ["Criar o site para celular primeiro, depois ampliar", "Criar para PC primeiro", "Só criar app"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Esconder Elementos",
            instrucao: "Esconda a barra lateral (sidebar) no celular.",
            blocos: [".sidebar {", "display: none;", "}", "visible"],
            respostaCerta: [".sidebar {", "display: none;", "}"]
        }
    ],

    // --- 27. EFEITOS E ANIMAÇÕES (8 Páginas) ---
    "css_animacoes": [
        {
            tipo: "teoria",
            titulo: "1. Transition (Suavidade)",
            conteudo: `
                <p>O CSS pode animar mudanças!</p>
                <p>Em vez de o botão mudar de cor instantaneamente, usamos <code>transition: 0.3s;</code> para criar um efeito suave.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Suavizar",
            instrucao: "Adicione uma transição de meio segundo (0.5s).",
            blocos: ["button {", "transition: 0.5s;", "}", "animate"],
            respostaCerta: ["button {", "transition: 0.5s;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "2. Transform (Transformar)",
            conteudo: `<p>Podemos girar, escalar e mover elementos sem afetar o layout.</p><ul><li><code>scale(1.1)</code>: Aumenta.</li><li><code>rotate(45deg)</code>: Gira.</li><li><code>translateY(-10px)</code>: Move pra cima.</li></ul>`
        },
        {
            tipo: "montagem",
            titulo: "Hover (Mouse em cima)",
            instrucao: "Quando passar o mouse, aumente o botão.",
            blocos: ["button:hover {", "transform: scale(1.1);", "}", "big"],
            respostaCerta: ["button:hover {", "transform: scale(1.1);", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Interação",
            instrucao: "A pseudo-classe :hover funciona quando...",
            opcoes: ["O usuário passa o mouse", "O usuário clica", "A página carrega"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. Keyframes (Animação Real)",
            conteudo: `<p>Para animações complexas (como a do mascote flutuando), criamos um filme.</p><p><code>@keyframes voar { 0% {top:0} 100% {top:10px} }</code></p>`
        },
        {
            tipo: "montagem",
            titulo: "Criando a Cena",
            instrucao: "Defina a animação 'girar'.",
            blocos: ["@keyframes girar {", "to { transform: rotate(360deg); }", "}", "movie"],
            respostaCerta: ["@keyframes girar {", "to { transform: rotate(360deg); }", "}"]
        },
        {
            tipo: "montagem",
            titulo: "Ação!",
            instrucao: "Aplique a animação 'girar' infinitamente.",
            blocos: ["animation:", "girar 2s infinite;", "loop", "play"],
            respostaCerta: ["animation:", "girar 2s infinite;"]
        }
    ],

    // --- 28. PROJETO FINAL CSS (8 Páginas) ---
    "css_projeto_final": [
        {
            tipo: "teoria",
            titulo: "28. O Mestre do Estilo",
            conteudo: `
                <p>Parabéns, Dev! Você dominou o CSS básico.</p>
                <p>Sua missão final: Estilizar a página de perfil que criamos no HTML, usando tudo que aprendeu.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "1. O Card (Box Model)",
            instrucao: "Dê fundo branco, bordas redondas e sombra ao card.",
            blocos: [".card {", "background: white;", "border-radius: 20px;", "box-shadow: 0 5px 15px rgba(0,0,0,0.1);", "}"],
            respostaCerta: [".card {", "background: white;", "border-radius: 20px;", "box-shadow: 0 5px 15px rgba(0,0,0,0.1);", "}"]
        },
        {
            tipo: "montagem",
            titulo: "2. Centralizando (Flex)",
            instrucao: "Alinhe tudo no centro do card.",
            blocos: [".card {", "display: flex;", "flex-direction: column;", "align-items: center;", "}"],
            respostaCerta: [".card {", "display: flex;", "flex-direction: column;", "align-items: center;", "}"]
        },
        {
            tipo: "montagem",
            titulo: "3. A Foto (Forma)",
            instrucao: "Deixe a foto redonda e com borda.",
            blocos: ["img {", "border-radius: 50%;", "border: 4px solid #2196F3;", "}", "circle"],
            respostaCerta: ["img {", "border-radius: 50%;", "border: 4px solid #2196F3;", "}"]
        },
        {
            tipo: "montagem",
            titulo: "4. Tipografia",
            instrucao: "Estilize o nome (H2).",
            blocos: ["h2 {", "color: #333;", "margin-top: 10px;", "font-family: sans-serif;", "}"],
            respostaCerta: ["h2 {", "color: #333;", "margin-top: 10px;", "font-family: sans-serif;", "}"]
        },
        {
            tipo: "montagem",
            titulo: "5. Botão Interativo",
            instrucao: "Botão com gradiente e efeito hover.",
            blocos: ["button { background: linear-gradient(blue, purple); }", "button:hover { transform: scale(1.05); }", "click", "fx"],
            respostaCerta: ["button { background: linear-gradient(blue, purple); }", "button:hover { transform: scale(1.05); }"]
        },
        {
            tipo: "montagem",
            titulo: "6. Responsivo",
            instrucao: "Se a tela for pequena, diminua o card.",
            blocos: ["@media (max-width: 400px) {", ".card { width: 100%; }", "}", "mobile"],
            respostaCerta: ["@media (max-width: 400px) {", ".card { width: 100%; }", "}"]
        },
        {
            tipo: "quiz",
            titulo: "FIM",
            instrucao: "Você agora é um Front-End Dev Junior. Qual o próximo passo?",
            opcoes: ["Aprender JavaScript (Cérebro)", "Parar de estudar", "Voltar pro Paint"],
            respostaIndex: 0
        }
    ],
    // ==========================================
    // CURSO: JAVASCRIPT (MÓDULO 1 - EXTENDIDO 8 PÁGINAS)
    // ==========================================

    // --- 1. HELLO WORLD (8 Páginas) ---
    "js_intro": [
        {
            tipo: "teoria",
            titulo: "1. O Cérebro da Página",
            conteudo: `
                <p>O <strong>JavaScript</strong> (JS) é a linguagem de programação da Web.</p>
                <p>HTML é o esqueleto, CSS é a roupa, e JS é o <strong>cérebro</strong> (comportamento).</p>
                <p>Ele faz as coisas se mexerem, calcula valores e responde a cliques.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Confusão Comum",
            instrucao: "JavaScript tem algo a ver com a linguagem Java?",
            opcoes: ["Sim, são a mesma coisa", "Não! São totalmente diferentes (só o nome parece)", "O JS é o filho do Java"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "2. A Tag Script",
            conteudo: `
                <p>Para escrever JS dentro do HTML, usamos a tag <code>&lt;script&gt;</code>.</p>
                <p>O navegador sabe que tudo que estiver ali dentro é código para executar, não texto para mostrar.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Abrindo o Código",
            instrucao: "Monte a tag que guarda o JavaScript.",
            blocos: ["<script>", "</script>", "<js>", "<code>"],
            respostaCerta: ["<script>", "</script>"]
        },
        {
            tipo: "teoria",
            titulo: "3. Onde colocar?",
            conteudo: `
                <p>Podemos colocar no <code>&lt;head&gt;</code> ou no <code>&lt;body&gt;</code>.</p>
                <p>A melhor prática é colocar <strong>antes de fechar o body</strong> <code>&lt;/body&gt;</code>.</p>
                <p>Isso faz o site carregar o visual primeiro e a lógica depois (fica mais rápido).</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Performance",
            instrucao: "Por que colocamos o script no final da página?",
            opcoes: ["Para esconder o código", "Para não travar o carregamento visual do site", "É obrigatório por lei"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "4. Instruções",
            conteudo: `
                <p>Um programa é uma lista de instruções.</p>
                <p>Em JS, é boa prática terminar cada instrução com <strong>ponto e vírgula (;)</strong>.</p>
                <p>Ex: <code>comando();</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Primeiro Comando",
            instrucao: "Execute o comando 'alert' para mostrar um alerta.",
            blocos: ["alert", "('Oi');", "print", "msg"],
            respostaCerta: ["alert", "('Oi');"]
        }
    ],

    // --- 2. O CONSOLE (8 Páginas) ---
    "js_console": [
        {
            tipo: "teoria",
            titulo: "1. O Console do Dev",
            conteudo: `
                <p>Programadores não usam <code>alert()</code> toda hora, pois é chato.</p>
                <p>Usamos o <strong>Console</strong> do navegador (F12) para enviar mensagens secretas que só nós vemos.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Logando",
            instrucao: "Escreva 'Oi' no console.",
            blocos: ["console.log", "('Oi');", "print", "write"],
            respostaCerta: ["console.log", "('Oi');"]
        },
        {
            tipo: "teoria",
            titulo: "2. Strings (Texto)",
            conteudo: `
                <p>Em programação, chamamos texto de <strong>String</strong> (Cordão de caracteres).</p>
                <p>Strings PRECISAM de aspas: <code>'Texto'</code> ou <code>"Texto"</code>.</p>
                <p>Sem aspas, o computador acha que é uma variável.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Erro de Sintaxe",
            instrucao: "O que acontece se eu escrever: console.log(Olá); (sem aspas)?",
            opcoes: ["Imprime Olá", "Dá erro (Variável não definida)", "Nada acontece"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Números",
            conteudo: `
                <p>Números <strong>NÃO</strong> usam aspas.</p>
                <p><code>console.log(10);</code> imprime o valor matemático 10.</p>
                <p><code>console.log('10');</code> imprime o texto "10".</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Matemática",
            instrucao: "Imprima o número 500 (sem ser texto).",
            blocos: ["console.log", "(500);", "('500');", "num"],
            respostaCerta: ["console.log", "(500);"]
        },
        {
            tipo: "teoria",
            titulo: "4. Múltiplos Argumentos",
            conteudo: `
                <p>O console aceita várias coisas separadas por vírgula.</p>
                <p>Ex: <code>console.log('A idade é', 25);</code></p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Debugar",
            instrucao: "Para que serve o console.log principalmente?",
            opcoes: ["Para hackear sites", "Para testar o código e encontrar erros (Debug)", "Para criar design"],
            respostaIndex: 1
        }
    ],

    // --- 3. VARIÁVEIS (8 Páginas) ---
    "js_variaveis": [
        {
            tipo: "teoria",
            titulo: "1. O que são Variáveis?",
            conteudo: `
                <p>São caixinhas na memória do computador onde guardamos dados.</p>
                <p>Cada caixa tem um <strong>nome</strong> e um <strong>valor</strong>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Criando (Declarando)",
            instrucao: "Crie uma variável 'nome' que guarda 'Codin'.",
            blocos: ["let", "nome", "=", "'Codin';", "var"],
            respostaCerta: ["let", "nome", "=", "'Codin';"]
        },
        {
            tipo: "teoria",
            titulo: "2. Var, Let e Const",
            conteudo: `
                <p>Antigamente só existia <code>var</code>. Hoje usamos:</p>
                <ul>
                    <li><code>let</code>: Para valores que podem mudar.</li>
                    <li><code>const</code>: Para valores fixos (constantes).</li>
                </ul>
            `
        },
        {
            tipo: "quiz",
            titulo: "Constante",
            instrucao: "Qual variável gera erro se eu tentar mudar o valor dela depois?",
            opcoes: ["let", "const", "var"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Regras de Nome",
            conteudo: `
                <p>Nomes de variáveis não podem ter espaço nem começar com número.</p>
                <p>Usamos <strong>camelCase</strong>: primeira minúscula, resto maiúscula.</p>
                <p>Ex: <code>nomeDoUsuario</code>, <code>pontosDeVida</code>.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Nome Válido",
            instrucao: "Qual nome está correto no padrão JS?",
            opcoes: ["meu nome", "1nome", "meuNome"],
            respostaIndex: 2
        },
        {
            tipo: "teoria",
            titulo: "4. Atribuição",
            conteudo: `
                <p>O sinal de igual <code>=</code> não é "igualdade". É <strong>ATRIBUIÇÃO</strong>.</p>
                <p>Lê-se: "A variável X RECEBE o valor Y".</p>
                <p>Para mudar o valor depois, não precisa repetir o <code>let</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Atualizando",
            instrucao: "Mude o valor de 'score' para 50.",
            blocos: ["score", "=", "50;", "let", "=="],
            respostaCerta: ["score", "=", "50;"]
        }
    ],

    // --- 4. TIPOS DE DADOS (8 Páginas) ---
    "js_tipos": [
        {
            tipo: "teoria",
            titulo: "1. Os Tipos Primitivos",
            conteudo: `
                <p>No JS, tudo tem um tipo. Os 3 principais são:</p>
                <ul>
                    <li><strong>String</strong>: Texto ("A").</li>
                    <li><strong>Number</strong>: Número (10).</li>
                    <li><strong>Boolean</strong>: Lógica (true/false).</li>
                </ul>
            `
        },
        {
            tipo: "montagem",
            titulo: "String",
            instrucao: "Crie uma variável texto.",
            blocos: ["let", "dia", "=", "'Segunda';", "10"],
            respostaCerta: ["let", "dia", "=", "'Segunda';"]
        },
        {
            tipo: "teoria",
            titulo: "2. Boolean (Lógica)",
            conteudo: `
                <p>O tipo <strong>Boolean</strong> só aceita dois valores: <code>true</code> (verdadeiro) ou <code>false</code> (falso).</p>
                <p>Eles NÃO usam aspas. É usado para tomar decisões (Sim/Não).</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Identifique",
            instrucao: "Qual destes é um Boolean?",
            opcoes: ["'true'", "true", "TRUE"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Typeof",
            conteudo: `
                <p>O operador <code>typeof</code> diz qual é o tipo de um dado.</p>
                <p>Ex: <code>typeof 'Ola'</code> retorna "string".</p>
                <p>Ex: <code>typeof 50</code> retorna "number".</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Detetive",
            instrucao: "Descubra o tipo da variável x.",
            blocos: ["typeof", "x;", "check", "var"],
            respostaCerta: ["typeof", "x;"]
        },
        {
            tipo: "teoria",
            titulo: "4. Tipagem Dinâmica",
            conteudo: `
                <p>O JS é "dinâmico". Uma variável pode começar sendo texto e virar número depois.</p>
                <p>Isso é flexível, mas perigoso!</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Confusão",
            instrucao: "Qual o tipo de: let x = '10' (com aspas)?",
            opcoes: ["Number", "String", "Boolean"],
            respostaIndex: 1
        }
    ],

    // --- 5. OPERADORES (8 Páginas) ---
    "js_operadores": [
        {
            tipo: "teoria",
            titulo: "1. Calculadora",
            conteudo: `
                <p>Podemos fazer matemática com variáveis:</p>
                <p><code>+</code> (Soma), <code>-</code> (Subtração), <code>*</code> (Multiplicação), <code>/</code> (Divisão).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Soma Simples",
            instrucao: "Quanto é 10 mais 5?",
            blocos: ["10", "+", "5;", "x", "&"],
            respostaCerta: ["10", "+", "5;"]
        },
        {
            tipo: "teoria",
            titulo: "2. Concatenação (+)",
            conteudo: `
                <p>O sinal <code>+</code> é mágico. Se usado com texto, ele <strong>junta</strong> (concatena).</p>
                <p><code>'Oi' + 'Dev'</code> vira <code>'OiDev'</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Juntando Nomes",
            instrucao: "Junte 'Sr.' com 'Codin'.",
            blocos: ["'Sr.'", "+", "'Codin';", "-", "join"],
            respostaCerta: ["'Sr.'", "+", "'Codin';"]
        },
        {
            tipo: "quiz",
            titulo: "Pegadinha Matemática",
            instrucao: "Quanto é '10' + 5 (Texto mais Número)?",
            opcoes: ["15 (Soma)", "'105' (Junta)", "Erro"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Módulo (%)",
            conteudo: `
                <p>O operador <code>%</code> mostra o <strong>Resto da Divisão</strong>.</p>
                <p><code>10 % 3</code> é igual a 1. (Porque 10 dividido por 3 dá 3 e sobra 1).</p>
                <p>Usamos para saber se um número é Par ou Ímpar.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Sobra",
            instrucao: "Pegue o resto de 5 dividido por 2.",
            blocos: ["5", "%", "2;", "/", "mod"],
            respostaCerta: ["5", "%", "2;"]
        },
        {
            tipo: "quiz",
            titulo: "Par ou Ímpar",
            instrucao: "Se 'Numero % 2' for zero, o número é...",
            opcoes: ["Par", "Ímpar", "Quebrado"],
            respostaIndex: 0
        }
    ],
    // --- 6. COMPARADORES (8 Páginas) ---
    "js_comparadores": [
        {
            tipo: "teoria",
            titulo: "1. Maior e Menor",
            conteudo: `
                <p>Para programar, precisamos comparar valores.</p>
                <p><code>&gt;</code> (Maior que) e <code>&lt;</code> (Menor que).</p>
                <p>O resultado é sempre um Boolean: <strong>true</strong> ou <strong>false</strong>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Verificando Idade",
            instrucao: "Verifique se 18 é maior que 10.",
            blocos: ["18", ">", "10;", "<", "="],
            respostaCerta: ["18", ">", "10;"]
        },
        {
            tipo: "teoria",
            titulo: "2. Igualdade Dupla (==)",
            conteudo: `
                <p>Para saber se dois valores são iguais, usamos <code>==</code>.</p>
                <p>Cuidado: Um <code>=</code> sozinho cria variável. Dois <code>==</code> comparam.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Confusão Clássica",
            instrucao: "O que faz o código: x = 10 ?",
            opcoes: ["Compara se x é 10", "Define x como 10 (Atribuição)", "Dá erro"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Igualdade Estrita (===)",
            conteudo: `
                <p>O <code>==</code> é meio "burro". Ele acha que <code>5 == '5'</code> é verdade (ignora o tipo).</p>
                <p>O <strong>Triplo Igual (===)</strong> é rigoroso. Ele confere o valor E o tipo.</p>
                <p>Sempre prefira usar <code>===</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Comparação Segura",
            instrucao: "Verifique se A é estritamente igual a B.",
            blocos: ["A", "===", "B;", "==", "="],
            respostaCerta: ["A", "===", "B;"]
        },
        {
            tipo: "teoria",
            titulo: "4. Diferente (!=)",
            conteudo: `
                <p>Para saber se é diferente, usamos <code>!=</code> ou o estrito <code>!==</code>.</p>
                <p>O sinal de exclamação <code>!</code> em programação significa <strong>NÃO</strong>.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Lógica",
            instrucao: "Se x vale 10. A expressão (x !== 10) retorna...",
            opcoes: ["true", "false", "undefined"],
            respostaIndex: 1
        }
    ],

    // --- 7. LÓGICA BOOLEANA (E, OU, NÃO) (8 Páginas) ---
    "js_logica": [
        {
            tipo: "teoria",
            titulo: "1. Operador AND (&&)",
            conteudo: `
                <p>Às vezes precisamos de DUAS condições verdadeiras.</p>
                <p>O operador <strong>&&</strong> (E) só retorna <code>true</code> se <strong>TUDO</strong> for verdade.</p>
                <p>Ex: Tenho ingresso <strong>&&</strong> Tenho RG.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Exigente",
            instrucao: "Verifique se A e B são verdadeiros.",
            blocos: ["A", "&&", "B;", "&", "AND"],
            respostaCerta: ["A", "&&", "B;"]
        },
        {
            tipo: "teoria",
            titulo: "2. Operador OR (||)",
            conteudo: `
                <p>O operador <strong>||</strong> (OU) é mais legal. Ele retorna <code>true</code> se <strong>PELO MENOS UM</strong> for verdade.</p>
                <p>Ex: Dinheiro <strong>||</strong> Cartão. (Qualquer um serve).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Flexível",
            instrucao: "Aceite dinheiro OU crédito.",
            blocos: ["dinheiro", "||", "credito;", "OR", "&&"],
            respostaCerta: ["dinheiro", "||", "credito;"]
        },
        {
            tipo: "quiz",
            titulo: "Teste de Mesa",
            instrucao: "true || false = ?",
            opcoes: ["true", "false", "erro"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. Operador NOT (!)",
            conteudo: `
                <p>O <strong>!</strong> (NÃO) inverte as coisas.</p>
                <p><code>!true</code> vira <code>false</code>.</p>
                <p><code>!false</code> vira <code>true</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Inversão",
            instrucao: "Inverta a variável 'ligado'.",
            blocos: ["!", "ligado;", "not", "-"],
            respostaCerta: ["!", "ligado;"]
        },
        {
            tipo: "quiz",
            titulo: "Dupla Negação",
            instrucao: "Quanto vale !!true ?",
            opcoes: ["false", "true", "null"],
            respostaIndex: 1
        }
    ],

    // --- 8. TEMPLATE STRINGS (8 Páginas) ---
    "js_templates": [
        {
            tipo: "teoria",
            titulo: "1. O jeito antigo (+)",
            conteudo: `
                <p>Antes, para juntar variáveis no texto era um caos:</p>
                <p><code>'Oi ' + nome + ', tudo bem?'</code></p>
                <p>Cheio de aspas e sinais de mais.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. O jeito novo (Backticks)",
            conteudo: `
                <p>Agora usamos a <strong>Crase</strong> (Backticks): <strong>\` \`</strong>.</p>
                <p>Isso permite escrever textos longos sem ficar fechando aspas.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Usando Crase",
            instrucao: "Crie uma string moderna.",
            blocos: ["`Texto`;", "'Texto';", "\"Texto\";"],
            respostaCerta: ["`Texto`;"]
        },
        {
            tipo: "teoria",
            titulo: "3. Interpolação ${}",
            conteudo: `
                <p>Dentro da crase, podemos colocar variáveis usando <code>\${}</code>.</p>
                <p>Ex: <code>\`Oi \${nome}\`</code>.</p>
                <p>Isso se chama <strong>Template String</strong>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Injetando Variável",
            instrucao: "Coloque a variável 'score' no texto.",
            blocos: ["`Pontos:", "${score}`", "$score", "{score}"],
            respostaCerta: ["`Pontos:", "${score}`"]
        },
        {
            tipo: "quiz",
            titulo: "Sintaxe",
            instrucao: "O código `${x}` funciona com aspas simples ' '?",
            opcoes: ["Sim", "Não, só com crase ` `", "Sim, mas precisa de +"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "4. Multilinha",
            conteudo: `
                <p>Com Template Strings, você pode pular linha no código que ela pula na tela também!</p>
                <p>Não precisa mais usar <code>\\n</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Lista de Compras",
            instrucao: "Crie um texto com quebra de linha.",
            blocos: ["`Pão", "Leite`", "'Pão", "+"],
            respostaCerta: ["`Pão", "Leite`"]
        }
    ],

    // --- 9. NULL E UNDEFINED (8 Páginas) ---
    "js_null": [
        {
            tipo: "teoria",
            titulo: "1. O Vazio",
            conteudo: `
                <p>Em JS, existem dois tipos de "nada": <strong>undefined</strong> e <strong>null</strong>.</p>
                <p>Eles parecem iguais, mas têm significados diferentes.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. Undefined (Indefinido)",
            conteudo: `
                <p>Significa: "Essa variável existe, mas <strong>ninguém colocou valor nela ainda</strong>".</p>
                <p>É o estado padrão de uma variável vazia.</p>
                <p>Ex: <code>let caixa;</code> (O valor de caixa é undefined).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Vazio Inicial",
            instrucao: "Crie uma variável sem valor.",
            blocos: ["let", "teste;", "undefined;", "="],
            respostaCerta: ["let", "teste;"]
        },
        {
            tipo: "teoria",
            titulo: "3. Null (Nulo)",
            conteudo: `
                <p>Significa: "Essa variável está vazia <strong>de propósito</strong>".</p>
                <p>É quando você, programador, diz: "Limpe essa variável".</p>
                <p>Ex: <code>usuario = null;</code> (O usuário deslogou).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Limpando",
            instrucao: "Defina o valor como nulo.",
            blocos: ["saldo", "=", "null;", "undefined", "0"],
            respostaCerta: ["saldo", "=", "null;"]
        },
        {
            tipo: "quiz",
            titulo: "Diferença",
            instrucao: "Quem define o 'undefined'?",
            opcoes: ["O Programador", "O JavaScript (Automaticamente)", "O Usuário"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "4. O Bug do Typeof",
            conteudo: `
                <p>Curiosidade: O JS tem um erro histórico.</p>
                <p>Se você fizer <code>typeof null</code>, ele diz que é "object". Isso é um bug que nunca foi corrigido para não quebrar a internet.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Verdadeiro ou Falso",
            instrucao: "null === undefined ?",
            opcoes: ["True (São iguais)", "False (Tipos diferentes)", "Erro"],
            respostaIndex: 1
        }
    ],

    // --- 10. DESAFIO: CALCULADORA DE MÉDIA (8 Páginas) ---
    "js_desafio_1": [
        {
            tipo: "teoria",
            titulo: "10. Desafio Prático",
            conteudo: `
                <p>Vamos juntar tudo que aprendemos!</p>
                <p>Sua missão é criar um script que calcula a média de um aluno e diz se ele passou.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "1. As Notas",
            instrucao: "Crie duas variáveis para as notas 8 e 6.",
            blocos: ["let n1 = 8;", "let n2 = 6;", "var", "const"],
            respostaCerta: ["let n1 = 8;", "let n2 = 6;"]
        },
        {
            tipo: "montagem",
            titulo: "2. A Soma",
            instrucao: "Some as duas notas (use parênteses!).",
            blocos: ["let soma", "=", "(n1 + n2);", "n1 + n2;"],
            respostaCerta: ["let soma", "=", "(n1 + n2);"]
        },
        {
            tipo: "quiz",
            titulo: "Precedência",
            instrucao: "Por que usamos parênteses na soma?",
            opcoes: ["Para ficar bonito", "Para somar antes de dividir (Matemática)", "O JS obriga"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "3. A Média",
            instrucao: "Divida a soma por 2.",
            blocos: ["let media", "=", "soma / 2;", "* 2"],
            respostaCerta: ["let media", "=", "soma / 2;"]
        },
        {
            tipo: "montagem",
            titulo: "4. Resultado no Console",
            instrucao: "Mostre a média usando Template String.",
            blocos: ["console.log", "(`Média: ${media}`);", "('Média: ' + media);"],
            respostaCerta: ["console.log", "(`Média: ${media}`);"]
        },
        {
            tipo: "montagem",
            titulo: "5. Passou?",
            instrucao: "Verifique se a média é maior ou igual a 6.",
            blocos: ["let passou", "=", "media >= 6;", ">", "=="],
            respostaCerta: ["let passou", "=", "media >= 6;"]
        },
        {
            tipo: "quiz",
            titulo: "Resultado Final",
            instrucao: "Se n1=8 e n2=6, a média é 7. A variável 'passou' será...",
            opcoes: ["true", "false", "7"],
            respostaIndex: 0
        }
    ],
    // --- 11. DECISÕES (IF/ELSE) (8 Páginas) ---
    "js_condicionais": [
        {
            tipo: "teoria",
            titulo: "1. Tomando Decisões",
            conteudo: `
                <p>Até agora, nosso código executava tudo de cima para baixo.</p>
                <p>O <code>if</code> (SE) permite executar um bloco de código <strong>apenas se</strong> uma condição for verdadeira.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Estrutura Básica",
            instrucao: "Monte: Se (idade maior que 18) { ... }",
            blocos: ["if", "(idade > 18)", "{ ... }", "else"],
            respostaCerta: ["if", "(idade > 18)", "{ ... }"]
        },
        {
            tipo: "teoria",
            titulo: "2. O Else (Senão)",
            conteudo: `
                <p>E se a condição for falsa? Usamos o <code>else</code> (SENÃO).</p>
                <p>É o plano B. Se não entrou no IF, cai no ELSE automaticamente.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Caminho Alternativo",
            instrucao: "Crie um bloco else.",
            blocos: ["else", "{", "console.log('Menor');", "}", "if"],
            respostaCerta: ["else", "{", "console.log('Menor');", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Lógica",
            instrucao: "Se a condição do IF for TRUE, o ELSE é executado?",
            opcoes: ["Sim, executa os dois", "Não, o ELSE é ignorado", "Dá erro"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Blocos de Código",
            conteudo: `
                <p>O código que será executado deve estar dentro de chaves <code>{ }</code>.</p>
                <p>Isso define o escopo da decisão.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Código Protegido",
            instrucao: "Coloque o comando dentro das chaves.",
            blocos: ["if (true)", "{", "alert('Oi');", "}", ";"],
            respostaCerta: ["if (true)", "{", "alert('Oi');", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Sem Chaves",
            instrucao: "Posso usar IF sem chaves?",
            opcoes: ["Nunca", "Sim, mas só se tiver apenas 1 linha de comando (não recomendado)", "Sim, sempre"],
            respostaIndex: 1
        }
    ],

    // --- 12. ELSE IF E TERNÁRIO (8 Páginas) ---
    "js_ternario": [
        {
            tipo: "teoria",
            titulo: "1. Várias Opções",
            conteudo: `
                <p>E se tivermos 3 opções? (Criança, Adulto, Idoso).</p>
                <p>Usamos o <code>else if</code> (SENÃO SE) para encadear verificações.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Checando de Novo",
            instrucao: "Se idade < 12 (Criança), senão se idade < 60 (Adulto).",
            blocos: ["if (id < 12) {}", "else if", "(id < 60) {}", "else"],
            respostaCerta: ["if (id < 12) {}", "else if", "(id < 60) {}"]
        },
        {
            tipo: "teoria",
            titulo: "2. Operador Ternário (?)",
            conteudo: `
                <p>Existe um jeito de escrever IF/ELSE em uma única linha!</p>
                <p>Sintaxe: <code>condição ? valor_true : valor_false</code></p>
                <p>Chamamos de "If de uma linha".</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "If Rápido",
            instrucao: "Converta: idade >= 18 ? 'Pode' : 'Não'.",
            blocos: ["idade >= 18", "?", "'Pode'", ":", "'Não';"],
            respostaCerta: ["idade >= 18", "?", "'Pode'", ":", "'Não';"]
        },
        {
            tipo: "quiz",
            titulo: "Símbolos",
            instrucao: "Quais símbolos formam o ternário?",
            opcoes: ["! e =", "? e :", "& e %"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Quando usar Ternário?",
            conteudo: `
                <p>Use para coisas simples, como definir uma cor ou texto.</p>
                <p>Ex: <code>let status = online ? 'Verde' : 'Cinza';</code></p>
                <p>Não use para lógicas complexas, fica difícil de ler.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Atribuição Inteligente",
            instrucao: "Defina a taxa: vip paga 10, outros 20.",
            blocos: ["let taxa =", "vip ?", "10 : 20;", "if"],
            respostaCerta: ["let taxa =", "vip ?", "10 : 20;"]
        },
        {
            tipo: "quiz",
            titulo: "Ordem",
            instrucao: "No ternário, o que vem depois dos dois pontos (:)?",
            opcoes: ["O resultado Verdadeiro", "O resultado Falso (Else)", "A condição"],
            respostaIndex: 1
        }
    ],

    // --- 13. SWITCH CASE (8 Páginas) ---
    "js_switch": [
        {
            tipo: "teoria",
            titulo: "1. O Menu de Opções",
            conteudo: `
                <p>Se você tem muitos <code>else if</code> verificando a mesma variável, use <code>switch</code>.</p>
                <p>É como um cardápio: você escolhe pelo número ou nome.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Estrutura",
            instrucao: "Abra um switch avaliando a variável 'fruta'.",
            blocos: ["switch", "(fruta)", "{ ... }", "case"],
            respostaCerta: ["switch", "(fruta)", "{ ... }"]
        },
        {
            tipo: "teoria",
            titulo: "2. Case e Break",
            conteudo: `
                <p>Cada opção é um <code>case</code>.</p>
                <p>Importante: Você PRECISA colocar <code>break;</code> no final de cada caso, senão ele executa os de baixo também!</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Caso Banana",
            instrucao: "Se for 'Banana', imprima e pare.",
            blocos: ["case 'Banana':", "console.log('Amarela');", "break;", "stop"],
            respostaCerta: ["case 'Banana':", "console.log('Amarela');", "break;"]
        },
        {
            tipo: "quiz",
            titulo: "Esquecimento",
            instrucao: "O que acontece se esquecer o 'break'?",
            opcoes: ["O código trava", "Ele continua executando os próximos cases (vazamento)", "Ele sai do switch"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Default",
            conteudo: `
                <p>O <code>default</code> é como o <code>else</code> final.</p>
                <p>Se nenhum caso for aceito, ele executa o default.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Opção Inválida",
            instrucao: "Crie o caso padrão.",
            blocos: ["default:", "console.log('Erro');", "break", "case"],
            respostaCerta: ["default:", "console.log('Erro');"]
        },
        {
            tipo: "quiz",
            titulo: "Comparação",
            instrucao: "O switch usa qual tipo de comparação?",
            opcoes: ["Estrita (===)", "Solta (==)", "Maior ou igual"],
            respostaIndex: 0
        }
    ],

    // --- 14. LOOP WHILE (8 Páginas) ---
    "js_while": [
        {
            tipo: "teoria",
            titulo: "1. Repetição",
            conteudo: `
                <p>Computadores amam repetir tarefas. Chamamos isso de <strong>Loop</strong>.</p>
                <p>O <code>while</code> (ENQUANTO) repete o código enquanto a condição for verdadeira.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Loop Simples",
            instrucao: "Enquanto 'energia' for maior que 0...",
            blocos: ["while", "(energia > 0)", "{ ... }", "if"],
            respostaCerta: ["while", "(energia > 0)", "{ ... }"]
        },
        {
            tipo: "teoria",
            titulo: "2. O Perigo do Infinito",
            conteudo: `
                <p>Se a condição NUNCA ficar falsa, o loop roda pra sempre e trava o navegador.</p>
                <p>Chamamos isso de <strong>Loop Infinito</strong>.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Trava Zap",
            instrucao: "Qual loop é infinito?",
            opcoes: ["while(false) {}", "while(true) {}", "while(x < 10)"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Incremento",
            conteudo: `
                <p>Para o loop parar, precisamos mudar a variável de controle dentro dele.</p>
                <p><code>i++</code> aumenta 1. <code>i--</code> diminui 1.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Contador",
            instrucao: "Aumente o contador 'i' em 1.",
            blocos: ["i++;", "i = i + 1;", "++i", "plus"],
            respostaCerta: ["i++;"]
        },
        {
            tipo: "teoria",
            titulo: "4. Do While",
            conteudo: `
                <p>Existe o <code>do...while</code>. A diferença é que ele executa <strong>pelo menos uma vez</strong> antes de checar a condição.</p>
                <p>Primeiro FAZ (do), depois checa (while).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Fazer Primeiro",
            instrucao: "Faça { ... } enquanto x < 5.",
            blocos: ["do { ... }", "while (x < 5);", "if", "loop"],
            respostaCerta: ["do { ... }", "while (x < 5);"]
        }
    ],

    // --- 15. LOOP FOR (8 Páginas) ---
    "js_for": [
        {
            tipo: "teoria",
            titulo: "1. O Clássico For",
            conteudo: `
                <p>O <code>for</code> é o loop mais usado. Ele tem tudo que precisamos numa linha só.</p>
                <p>Sintaxe: <code>for (inicio; condição; passo)</code>.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. Passo a Passo",
            conteudo: `
                <p>1. <strong>Início:</strong> Cria a variável (let i = 0).</p>
                <p>2. <strong>Condição:</strong> Checa se continua (i < 10).</p>
                <p>3. <strong>Passo:</strong> Aumenta o contador (i++).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Montando o For",
            instrucao: "Crie um loop que vai de 0 a 9.",
            blocos: ["for", "(let i=0; i<10; i++)", "{ }", "while"],
            respostaCerta: ["for", "(let i=0; i<10; i++)", "{ }"]
        },
        {
            tipo: "quiz",
            titulo: "Contagem",
            instrucao: "Quantas vezes o loop 'for(let i=0; i<5; i++)' roda?",
            opcoes: ["4 vezes", "5 vezes (0,1,2,3,4)", "6 vezes"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Variável i",
            conteudo: `
                <p>Por tradição, usamos a letra <code>i</code> (índice) como contador.</p>
                <p>Mas você pode usar qualquer nome.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Contagem Regressiva",
            instrucao: "Loop diminuindo: comece em 10, pare no 0.",
            blocos: ["for", "(let i=10; i>=0; i--)", "i++", "{}"],
            respostaCerta: ["for", "(let i=10; i>=0; i--)"]
        },
        {
            tipo: "teoria",
            titulo: "4. Escopo",
            conteudo: `
                <p>Se você declarar <code>let i = 0</code> dentro do for, a variável <code>i</code> só existe dentro do loop.</p>
                <p>Fora dele, ela some (dá erro se tentar acessar). Isso é bom para segurança.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Utilidade",
            instrucao: "Para que o loop FOR é mais usado?",
            opcoes: ["Para criar variáveis", "Para percorrer listas (Arrays) ou repetir algo N vezes", "Para tratar erros"],
            respostaIndex: 1
        }
    ],
    // --- 16. O QUE É DOM? (8 Páginas) ---
    "js_dom_intro": [
        {
            tipo: "teoria",
            titulo: "1. A Árvore da Página",
            conteudo: `
                <p><strong>DOM</strong> significa <em>Document Object Model</em>.</p>
                <p>O navegador transforma seu HTML em uma árvore de objetos que o JS pode controlar.</p>
                <p>Para o JS, a página inteira é um objeto chamado <code>document</code>.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Significado",
            instrucao: "O que significa a sigla DOM?",
            opcoes: ["Dados Organizados em Memória", "Document Object Model", "Dominó"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "2. O Objeto Document",
            conteudo: `
                <p>Tudo começa com a palavra <code>document</code>.</p>
                <p>Se você digitar <code>document.title</code> no console, ele mostra o título da aba do navegador.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Acessando",
            instrucao: "Acesse o corpo do site via JS.",
            blocos: ["document", ".body", ".html", "dom"],
            respostaCerta: ["document", ".body"]
        },
        {
            tipo: "teoria",
            titulo: "3. Conexão",
            conteudo: `
                <p>Imagine o DOM como uma ponte.</p>
                <p>De um lado está o HTML (Visual). Do outro o JS (Lógica).</p>
                <p>O DOM permite que o JS atravesse a ponte e mude o HTML.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Poderes",
            instrucao: "O que o JS pode fazer com o DOM?",
            opcoes: ["Apenas ler o texto", "Mudar tudo (texto, cor, criar elementos)", "Nada, só o CSS muda coisas"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "4. Hierarquia",
            conteudo: `
                <p>Assim como no HTML, existe Pai (Parent) e Filho (Child).</p>
                <p>O <code>&lt;body&gt;</code> é filho do <code>&lt;html&gt;</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Título da Página",
            instrucao: "Mude o título da aba para 'Loja'.",
            blocos: ["document.title", "=", "'Loja';", "head"],
            respostaCerta: ["document.title", "=", "'Loja';"]
        }
    ],

    // --- 17. SELECIONANDO ELEMENTOS (8 Páginas) ---
    "js_seletores": [
        {
            tipo: "teoria",
            titulo: "1. Buscando Elementos",
            conteudo: `
                <p>Para mexer em um botão, primeiro precisamos encontrá-lo.</p>
                <p>O método mais famoso é o <code>getElementById</code> (Pegar elemento pelo ID).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Pegando pelo ID",
            instrucao: "Selecione o elemento com id 'titulo'.",
            blocos: ["document", ".getElementById", "('titulo');", "#"],
            respostaCerta: ["document", ".getElementById", "('titulo');"]
        },
        {
            tipo: "teoria",
            titulo: "2. Guardando em Variável",
            conteudo: `
                <p>Geralmente, buscamos o elemento e guardamos numa variável para usar depois.</p>
                <p><code>let botao = document.getElementById('btn1');</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Armazenando",
            instrucao: "Guarde o elemento 'menu' na variável 'nav'.",
            blocos: ["let nav =", "document.getElementById", "('menu');", "var"],
            respostaCerta: ["let nav =", "document.getElementById", "('menu');"]
        },
        {
            tipo: "teoria",
            titulo: "3. Query Selector (Moderno)",
            conteudo: `
                <p>O <code>querySelector</code> é mais poderoso. Ele usa os mesmos seletoras do CSS.</p>
                <p><code>('#id')</code> para IDs.</p>
                <p><code>('.classe')</code> para Classes.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Seleção CSS",
            instrucao: "Selecione a classe '.card'.",
            blocos: ["document.querySelector", "('.card');", "('card');", "get"],
            respostaCerta: ["document.querySelector", "('.card');"]
        },
        {
            tipo: "quiz",
            titulo: "Diferença",
            instrucao: "O querySelector pega quantos elementos?",
            opcoes: ["Todos que achar", "Apenas o PRIMEIRO que encontrar", "Aleatório"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Selector All",
            instrucao: "Para pegar TODOS, usamos o All.",
            blocos: ["document", ".querySelectorAll", "('p');", "list"],
            respostaCerta: ["document", ".querySelectorAll", "('p');"]
        }
    ],

    // --- 18. MUDANDO TEXTO (8 Páginas) ---
    "js_conteudo": [
        {
            tipo: "teoria",
            titulo: "1. Inner Text",
            conteudo: `
                <p>Depois de selecionar, podemos mudar o texto.</p>
                <p>Usamos a propriedade <code>.innerText</code>.</p>
                <p>Ex: <code>titulo.innerText = 'Novo Texto';</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Mudando o Título",
            instrucao: "Mude o texto do h1 para 'Bem-vindo'.",
            blocos: ["h1.innerText", "=", "'Bem-vindo';", "text"],
            respostaCerta: ["h1.innerText", "=", "'Bem-vindo';"]
        },
        {
            tipo: "teoria",
            titulo: "2. Inner HTML",
            conteudo: `
                <p>O <code>.innerHTML</code> é mais perigoso/poderoso.</p>
                <p>Ele permite colocar tags HTML dentro do elemento.</p>
                <p>Ex: <code>box.innerHTML = '&lt;b&gt;Negrito&lt;/b&gt;';</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Injetando HTML",
            instrucao: "Coloque um parágrafo dentro da div.",
            blocos: ["div.innerHTML", "=", "'<p>Oi</p>';", "innerText"],
            respostaCerta: ["div.innerHTML", "=", "'<p>Oi</p>';"]
        },
        {
            tipo: "quiz",
            titulo: "Segurança",
            instrucao: "Qual propriedade interpreta tags HTML?",
            opcoes: ["innerText", "innerHTML", "textContent"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Value (Inputs)",
            conteudo: `
                <p>Para caixas de texto (inputs), não usamos innerText.</p>
                <p>Usamos <code>.value</code> para pegar o que o usuário digitou.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Pegando Dados",
            instrucao: "Pegue o valor do campo de nome.",
            blocos: ["let texto =", "inputNome.value;", "innerText", "html"],
            respostaCerta: ["let texto =", "inputNome.value;"]
        },
        {
            tipo: "quiz",
            titulo: "Resumo",
            instrucao: "Quero mudar o texto de um <p>. Uso...",
            opcoes: [".value", ".innerText", ".src"],
            respostaIndex: 1
        }
    ],

    // --- 19. MUDANDO CSS (ESTILO) (8 Páginas) ---
    "js_estilo": [
        {
            tipo: "teoria",
            titulo: "1. O Objeto Style",
            conteudo: `
                <p>Podemos mudar o CSS direto pelo JS usando <code>.style</code>.</p>
                <p>Ex: <code>elemento.style.color = 'red';</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Pintando",
            instrucao: "Mude a cor do texto para azul.",
            blocos: ["p.style.color", "=", "'blue';", "css"],
            respostaCerta: ["p.style.color", "=", "'blue';"]
        },
        {
            tipo: "teoria",
            titulo: "2. CamelCase no CSS",
            conteudo: `
                <p>No CSS usamos traço (background-color).</p>
                <p>No JS, traço é subtração! Então usamos <strong>camelCase</strong>.</p>
                <p><code>background-color</code> vira <code>backgroundColor</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Cor de Fundo",
            instrucao: "Mude o fundo para preto.",
            blocos: ["body.style.backgroundColor", "=", "'black';", "background-color"],
            respostaCerta: ["body.style.backgroundColor", "=", "'black';"]
        },
        {
            tipo: "quiz",
            titulo: "Tradução",
            instrucao: "Como fica 'font-size' no JavaScript?",
            opcoes: ["font-size", "fontSize", "FontSize"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Escondendo Coisas",
            conteudo: `
                <p>Podemos esconder elementos alterando o display.</p>
                <p><code>el.style.display = 'none';</code> faz sumir.</p>
                <p><code>el.style.display = 'block';</code> faz aparecer.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Sumindo",
            instrucao: "Esconda a propaganda.",
            blocos: ["ad.style.display", "=", "'none';", "hidden"],
            respostaCerta: ["ad.style.display", "=", "'none';"]
        },
        {
            tipo: "quiz",
            titulo: "Prática",
            instrucao: "É recomendado escrever TODO o CSS no JavaScript?",
            opcoes: ["Sim, delete o arquivo .css", "Não, use JS só para mudanças dinâmicas", "Tanto faz"],
            respostaIndex: 1
        }
    ],

    // --- 20. EVENTOS (8 Páginas) ---
    "js_eventos": [
        {
            tipo: "teoria",
            titulo: "1. O que são Eventos?",
            conteudo: `
                <p>Eventos são coisas que acontecem na página: cliques, movimento do mouse, teclas apertadas.</p>
                <p>O JS fica 'ouvindo' esses eventos para reagir.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. OnClick",
            conteudo: `
                <p>O jeito mais simples é atribuir uma função ao evento <code>onclick</code>.</p>
                <p><code>botao.onclick = minhaFuncao;</code></p>
                <p>Quando clicar, a função roda.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Reagindo ao Clique",
            instrucao: "Ao clicar no botão, rode a função 'salvar'.",
            blocos: ["btn.onclick", "=", "salvar;", "()", "click"],
            respostaCerta: ["btn.onclick", "=", "salvar;"]
        },
        {
            tipo: "teoria",
            titulo: "3. AddEventListener",
            conteudo: `
                <p>O jeito profissional é usar o <strong>Escutador de Eventos</strong>.</p>
                <p><code>elemento.addEventListener('click', funcao);</code></p>
                <p>Ele permite adicionar vários eventos no mesmo botão.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Escutando",
            instrucao: "Adicione um evento de 'click'.",
            blocos: ["btn.addEventListener", "('click', acao);", "onclick", "="],
            respostaCerta: ["btn.addEventListener", "('click', acao);"]
        },
        {
            tipo: "quiz",
            titulo: "Vantagem",
            instrucao: "Por que addEventListener é melhor?",
            opcoes: ["É mais curto", "Permite múltiplos eventos no mesmo elemento", "É mais antigo"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "4. Função Anônima",
            conteudo: `
                <p>Podemos criar a função direto no evento (Arrow Function).</p>
                <p><code>btn.onclick = () => { alert('Oi'); }</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Função Rápida",
            instrucao: "Crie uma função de clique vazia.",
            blocos: ["btn.onclick", "=", "() => { }", "function"],
            respostaCerta: ["btn.onclick", "=", "() => { }"]
        }
    ],
    // --- 21. ARRAYS (LISTAS) (8 Páginas) ---
    "js_arrays": [
        {
            tipo: "teoria",
            titulo: "1. O que é um Array?",
            conteudo: `
                <p>Imagine uma variável que pode guardar <strong>várias coisas</strong> ao mesmo tempo.</p>
                <p>Isso é um <strong>Array</strong> (Lista).</p>
                <p>Usamos colchetes <code>[]</code> para criar.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Criando Lista",
            instrucao: "Crie uma lista com 1, 2 e 3.",
            blocos: ["let n =", "[1, 2, 3];", "{1, 2}", "()"],
            respostaCerta: ["let n =", "[1, 2, 3];"]
        },
        {
            tipo: "teoria",
            titulo: "2. O Índice (Index)",
            conteudo: `
                <p>Cada item tem um endereço chamado <strong>índice</strong>.</p>
                <p>A contagem SEMPRE começa no <strong>ZERO</strong>.</p>
                <p>O primeiro item é o índice 0. O segundo é o 1.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Pegadinha",
            instrucao: "Em ['A', 'B', 'C'], qual o índice do 'B'?",
            opcoes: ["1", "2", "0"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. Acessando Dados",
            conteudo: `
                <p>Para pegar um item, usamos colchetes com o número.</p>
                <p>Ex: <code>lista[0]</code> pega o primeiro item.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Pegando Fruta",
            instrucao: "Pegue a primeira fruta da lista 'f'.",
            blocos: ["let fruta =", "f[0];", "f(1);", "f.1"],
            respostaCerta: ["let fruta =", "f[0];"]
        },
        {
            tipo: "teoria",
            titulo: "4. Tamanho da Lista",
            conteudo: `
                <p>Para saber quantos itens tem na lista, usamos a propriedade <code>.length</code>.</p>
                <p>Ex: <code>lista.length</code> retorna o total.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Contando",
            instrucao: "Imprima o tamanho da lista 'users'.",
            blocos: ["console.log", "(users.length);", ".count", ".size"],
            respostaCerta: ["console.log", "(users.length);"]
        }
    ],

    // --- 22. MANIPULANDO LISTAS (8 Páginas) ---
    "js_arrays_metodos": [
        {
            tipo: "teoria",
            titulo: "1. Adicionar no Final (Push)",
            conteudo: `
                <p>Para colocar um item novo no final da lista, usamos o método <code>.push()</code>.</p>
                <p>É como 'empurrar' algo para dentro.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Adicionando",
            instrucao: "Adicione 'Uva' na lista 'frutas'.",
            blocos: ["frutas.push", "('Uva');", ".add", ".insert"],
            respostaCerta: ["frutas.push", "('Uva');"]
        },
        {
            tipo: "teoria",
            titulo: "2. Remover do Final (Pop)",
            conteudo: `
                <p>Para remover o último item, usamos <code>.pop()</code>.</p>
                <p>Ele estoura o último balão.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Removendo",
            instrucao: "Remova o último item.",
            blocos: ["lista.pop();", "lista.remove();", "delete"],
            respostaCerta: ["lista.pop();"]
        },
        {
            tipo: "quiz",
            titulo: "Retorno",
            instrucao: "O que o .pop() retorna?",
            opcoes: ["O item que foi removido", "A nova lista", "Nada"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. Shift e Unshift",
            conteudo: `
                <p><code>.shift()</code>: Remove o PRIMEIRO.</p>
                <p><code>.unshift()</code>: Adiciona no COMEÇO.</p>
                <p>São o oposto de pop/push.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Fura Fila",
            instrucao: "Adicione 'Eu' no começo da fila.",
            blocos: ["fila.unshift", "('Eu');", ".push", ".first"],
            respostaCerta: ["fila.unshift", "('Eu');"]
        },
        {
            tipo: "quiz",
            titulo: "Memória",
            instrucao: "Qual método adiciona no final?",
            opcoes: ["push", "pop", "unshift"],
            respostaIndex: 0
        }
    ],

    // --- 23. LOOP FOR..OF (8 Páginas) ---
    "js_for_of": [
        {
            tipo: "teoria",
            titulo: "1. Percorrendo Listas",
            conteudo: `
                <p>Usar o <code>for</code> clássico (i=0; i<10...) é chato para listas.</p>
                <p>O jeito moderno é o <code>for...of</code>.</p>
                <p>Lê-se: 'Para cada ITEM da LISTA'.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Estrutura",
            instrucao: "Para cada 'item' da 'lista'...",
            blocos: ["for", "(let item of lista)", "{ }", "in"],
            respostaCerta: ["for", "(let item of lista)", "{ }"]
        },
        {
            tipo: "teoria",
            titulo: "2. Como funciona?",
            conteudo: `
                <p>Ele pega automaticamente o primeiro item, executa o bloco, depois pega o segundo...</p>
                <p>Não precisa de contador (i) nem de .length.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Imprimindo Tudo",
            instrucao: "Imprima cada nome da lista 'nomes'.",
            blocos: ["for (let n of nomes)", "{", "console.log(n);", "}"],
            respostaCerta: ["for (let n of nomes)", "{", "console.log(n);", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Diferença",
            instrucao: "Existe o 'for...in' e o 'for...of'. Para listas (valores), qual usamos?",
            opcoes: ["for...of", "for...in (é para objetos)", "while"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. Prática",
            conteudo: `
                <p>Podemos usar o for..of para somar valores de uma lista de preços, por exemplo.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Somando",
            instrucao: "Para cada preço, adicione ao total.",
            blocos: ["for (let p of precos)", "total += p;", "total = p", "loop"],
            respostaCerta: ["for (let p of precos)", "total += p;"]
        },
        {
            tipo: "quiz",
            titulo: "Vantagem",
            instrucao: "O for..of funciona com strings (texto)?",
            opcoes: ["Sim, percorre letra por letra", "Não, só arrays", "Dá erro"],
            respostaIndex: 0
        }
    ],

    // --- 24. OBJETOS (8 Páginas) ---
    "js_objetos": [
        {
            tipo: "teoria",
            titulo: "1. O que é um Objeto?",
            conteudo: `
                <p>Arrays guardam listas. Objetos guardam <strong>coisas complexas</strong>.</p>
                <p>Um Objeto descreve algo com <strong>Chave</strong> e <strong>Valor</strong>.</p>
                <p>Ex: Um carro tem cor, modelo e ano.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Criando Objeto",
            instrucao: "Crie um objeto vazio usando chaves.",
            blocos: ["let carro =", "{ };", "[ ];", "( );"],
            respostaCerta: ["let carro =", "{ };"]
        },
        {
            tipo: "teoria",
            titulo: "2. Propriedades",
            conteudo: `
                <p>Dentro das chaves, colocamos as características.</p>
                <p><code>{ nome: 'Codin', nivel: 10 }</code></p>
                <p>Separamos por vírgula.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Preenchendo",
            instrucao: "Objeto com nome 'Leo'.",
            blocos: ["let user =", "{ nome: 'Leo' };", "nome = Leo", "[]"],
            respostaCerta: ["let user =", "{ nome: 'Leo' };"]
        },
        {
            tipo: "teoria",
            titulo: "3. Acessando com Ponto",
            conteudo: `
                <p>Para pegar um valor, usamos o <strong>Ponto</strong>.</p>
                <p><code>usuario.nome</code> retorna o nome.</p>
                <p><code>carro.cor</code> retorna a cor.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Pegando Valor",
            instrucao: "Imprima a idade do 'aluno'.",
            blocos: ["console.log", "(aluno.idade);", "aluno[idade]", ".get"],
            respostaCerta: ["console.log", "(aluno.idade);"]
        },
        {
            tipo: "quiz",
            titulo: "Sintaxe",
            instrucao: "Qual símbolo separa a chave do valor? (chave: valor)",
            opcoes: ["Dois pontos (:)", "Igual (=)", "Seta (=>)"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "4. Alterando",
            conteudo: `
                <p>Podemos mudar valores ou criar novos usando o ponto.</p>
                <p><code>hero.vida = 100;</code> (Atualiza ou cria se não existir).</p>
            `
        }
    ],

    // --- 25. MÉTODOS E 'THIS' (8 Páginas) ---
    "js_objetos_metodos": [
        {
            tipo: "teoria",
            titulo: "1. Métodos",
            conteudo: `
                <p>Um objeto pode ter funções dentro dele!</p>
                <p>Chamamos essas funções de <strong>Métodos</strong>.</p>
                <p>Ex: <code>console</code> é um objeto e <code>.log()</code> é um método.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Criando Método",
            instrucao: "Crie um objeto com função 'falar'.",
            blocos: ["let dog =", "{ falar: function() {} };", "func", "[]"],
            respostaCerta: ["let dog =", "{ falar: function() {} };"]
        },
        {
            tipo: "teoria",
            titulo: "2. A Palavra 'this'",
            conteudo: `
                <p>Como o método acessa os dados do próprio objeto?</p>
                <p>Usamos o <strong>this</strong> (este).</p>
                <p><code>this.nome</code> significa 'o nome DESTE objeto'.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Usando this",
            instrucao: "Retorne o nome deste objeto.",
            blocos: ["return", "this.nome;", "nome;", "self"],
            respostaCerta: ["return", "this.nome;"]
        },
        {
            tipo: "quiz",
            titulo: "Confusão",
            instrucao: "Se eu usar 'nome' sem o 'this' dentro do método...",
            opcoes: ["O JS procura uma variável global (erro)", "Funciona igual", "O JS adivinha"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. Sintaxe Curta",
            conteudo: `
                <p>No JS moderno, não precisamos escrever <code>: function</code>.</p>
                <p>Basta escrever <code>falar() { ... }</code> dentro do objeto.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Método Moderno",
            instrucao: "Crie o método 'correr' simplificado.",
            blocos: ["{", "correr() { }", "}", "run:"],
            respostaCerta: ["{", "correr() { }", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Arrow Function",
            instrucao: "Cuidado: Arrow Functions (=>) mudam o comportamento do 'this'.",
            opcoes: ["Verdade, evite usar em métodos de objetos", "Mentira, funciona igual", "Arrow Function não existe"],
            respostaIndex: 0
        }
    ],
    // --- 26. ARROW FUNCTIONS (8 Páginas) ---
    "js_arrow": [
        {
            tipo: "teoria",
            titulo: "1. Função Seta (=>)",
            conteudo: `
                <p>O jeito moderno de escrever funções é usando a <strong>Arrow Function</strong>.</p>
                <p>Ela é mais curta e elegante.</p>
                <p>Sinal: <code>=></code> (igual e maior).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Sintaxe",
            instrucao: "Crie uma função soma.",
            blocos: ["const soma =", "(a, b) =>", "{ return a + b }", "function"],
            respostaCerta: ["const soma =", "(a, b) =>", "{ return a + b }"]
        },
        {
            tipo: "teoria",
            titulo: "2. Retorno Implícito",
            conteudo: `
                <p>Se a função tiver apenas <strong>uma linha</strong>, você pode tirar as chaves <code>{}</code> e o <code>return</code>.</p>
                <p><code>const dobro = n => n * 2;</code></p>
                <p>Isso deixa o código super limpo.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "One Liner",
            instrucao: "Função que retorna 'Oi'.",
            blocos: ["const oi =", "() => 'Oi';", "return", "{}"],
            respostaCerta: ["const oi =", "() => 'Oi';"]
        },
        {
            tipo: "quiz",
            titulo: "Simplificação",
            instrucao: "Se tenho apenas 1 parâmetro (ex: x), preciso de parênteses (x)?",
            opcoes: ["Não, é opcional: x => x * 2", "Sim, sempre: (x) => ...", "Dá erro"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. Onde usar?",
            conteudo: `
                <p>Usamos muito em <strong>Callbacks</strong> (funções passadas para outras funções).</p>
                <p>Ex: Ao clicar num botão.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Clique Rápido",
            instrucao: "Use arrow function no clique.",
            blocos: ["btn.onclick =", "() => alert('A');", "function", "return"],
            respostaCerta: ["btn.onclick =", "() => alert('A');"]
        },
        {
            tipo: "quiz",
            titulo: "Limitação",
            instrucao: "Arrow functions têm seu próprio 'this'?",
            opcoes: ["Não, elas herdam o this de fora", "Sim, igual function normal", "Depende"],
            respostaIndex: 0
        }
    ],

    // --- 27. DESESTRUTURAÇÃO (8 Páginas) ---
    "js_destructuring": [
        {
            tipo: "teoria",
            titulo: "1. Desempacotando Objetos",
            conteudo: `
                <p>Imagine que você tem <code>user = { nome: 'Leo', idade: 20 }</code>.</p>
                <p>Em vez de escrever <code>user.nome</code> toda hora, podemos extrair direto para uma variável.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Extraindo",
            instrucao: "Tire 'nome' de dentro de 'user'.",
            blocos: ["const { nome }", "=", "user;", "user.nome"],
            respostaCerta: ["const { nome }", "=", "user;"]
        },
        {
            tipo: "teoria",
            titulo: "2. Desempacotando Arrays",
            conteudo: `
                <p>Funciona com listas também!</p>
                <p><code>const [primeiro, segundo] = lista;</code></p>
                <p>A ordem importa aqui.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Pódio",
            instrucao: "Pegue o campeão da lista 'vencedores'.",
            blocos: ["const [campeao]", "=", "vencedores;", "{campeao}"],
            respostaCerta: ["const [campeao]", "=", "vencedores;"]
        },
        {
            tipo: "quiz",
            titulo: "Sintaxe",
            instrucao: "Para desestruturar Objetos usamos {} e para Arrays usamos []?",
            opcoes: ["Correto", "Inverso", "Sempre usa {}"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. Renomeando",
            conteudo: `
                <p>Podemos mudar o nome da variável ao extrair.</p>
                <p><code>const { nome: apelido } = user;</code></p>
                <p>Agora a variável se chama <code>apelido</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Mudando Nome",
            instrucao: "Extraia 'id' mas chame de 'codigo'.",
            blocos: ["const { id: codigo }", "=", "produto;", "id"],
            respostaCerta: ["const { id: codigo }", "=", "produto;"]
        },
        {
            tipo: "quiz",
            titulo: "Utilidade",
            instrucao: "Isso ajuda a deixar o código...",
            opcoes: ["Mais limpo e legível", "Mais lento", "Mais confuso"],
            respostaIndex: 0
        }
    ],

    // --- 28. MAP E FILTER (8 Páginas) ---
    "js_map_filter": [
        {
            tipo: "teoria",
            titulo: "1. Adeus Loop For",
            conteudo: `
                <p>Para transformar listas, não usamos mais <code>for</code>.</p>
                <p>Usamos métodos inteligentes como <code>.map()</code> e <code>.filter()</code>.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. O Método Map",
            conteudo: `
                <p>O <code>.map()</code> cria uma <strong>NOVA lista</strong> transformando item por item.</p>
                <p>Ex: Pegar uma lista de números e dobrar todos eles.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Dobrando",
            instrucao: "Multiplique cada 'n' por 2.",
            blocos: ["numeros.map", "(n => n * 2);", ".filter", ".for"],
            respostaCerta: ["numeros.map", "(n => n * 2);"]
        },
        {
            tipo: "quiz",
            titulo: "Resultado",
            instrucao: "Se a lista tem 5 itens, quantos itens terá o resultado do map?",
            opcoes: ["5 (Sempre o mesmo tamanho)", "Menos de 5", "Varia"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. O Método Filter",
            conteudo: `
                <p>O <code>.filter()</code> cria uma lista nova apenas com os itens que passaram no teste.</p>
                <p>Ex: Filtrar apenas os maiores de idade.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Filtrando VIPs",
            instrucao: "Pegue quem tem idade maior que 18.",
            blocos: ["lista.filter", "(p => p.idade > 18);", ".map", ">"],
            respostaCerta: ["lista.filter", "(p => p.idade > 18);"]
        },
        {
            tipo: "quiz",
            titulo: "Filtro",
            instrucao: "O filter altera a lista original?",
            opcoes: ["Não, cria uma cópia nova", "Sim, apaga os dados originais", "Depende"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Encadeando",
            instrucao: "Podemos usar um seguido do outro.",
            blocos: ["lista.filter(...)", ".map(...);", ";", "end"],
            respostaCerta: ["lista.filter(...)", ".map(...);"]
        }
    ],

    // --- 29. O QUE É JSON? (8 Páginas) ---
    "js_json": [
        {
            tipo: "teoria",
            titulo: "1. A Linguagem da Web",
            conteudo: `
                <p><strong>JSON</strong> (JavaScript Object Notation) é o formato padrão para trocar dados na internet.</p>
                <p>Parece um objeto JS, mas é Texto puro.</p>
                <p>Regra: As chaves precisam de aspas duplas. <code>{ "nome": "Leo" }</code>.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Aspas",
            instrucao: "Qual é um JSON válido?",
            opcoes: ["{ 'nome': 'A' }", "{ \"nome\": \"A\" }", "{ nome: A }"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "2. Stringify (Empacotar)",
            conteudo: `
                <p>Para enviar um objeto JS para um servidor (ou salvar), precisamos transformá-lo em texto JSON.</p>
                <p>Usamos <code>JSON.stringify(objeto)</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Convertendo",
            instrucao: "Transforme 'dados' em texto JSON.",
            blocos: ["JSON.stringify", "(dados);", ".parse", ".text"],
            respostaCerta: ["JSON.stringify", "(dados);"]
        },
        {
            tipo: "teoria",
            titulo: "3. Parse (Desempacotar)",
            conteudo: `
                <p>Quando recebemos um JSON do servidor, ele vem como texto.</p>
                <p>Precisamos converter de volta para Objeto JS para poder usar.</p>
                <p>Usamos <code>JSON.parse(texto)</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Lendo",
            instrucao: "Converta o texto de volta para objeto.",
            blocos: ["JSON.parse", "(texto);", ".object", ".string"],
            respostaCerta: ["JSON.parse", "(texto);"]
        },
        {
            tipo: "quiz",
            titulo: "Erro Comum",
            instrucao: "Se o texto JSON estiver mal formatado (ex: vírgula sobrando), o que acontece?",
            opcoes: ["O site explode", "JSON.parse solta um Erro", "Ele arruma sozinho"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "4. Uso Real",
            conteudo: `
                <p>APIs (Google, Facebook, Weather) sempre respondem em JSON.</p>
                <p>É a língua universal dos sistemas.</p>
            `
        }
    ],

    // --- 30. LOCALSTORAGE (8 Páginas) ---
    "js_localstorage": [
        {
            tipo: "teoria",
            titulo: "1. Memória do Navegador",
            conteudo: `
                <p>Variáveis perdem o valor quando atualizamos a página.</p>
                <p>O <strong>localStorage</strong> permite salvar dados no navegador do usuário que ficam lá para sempre (até limpar).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Salvando",
            instrucao: "Salve o nome 'Leo'.",
            blocos: ["localStorage.setItem", "('nome', 'Leo');", ".save", ".get"],
            respostaCerta: ["localStorage.setItem", "('nome', 'Leo');"]
        },
        {
            tipo: "teoria",
            titulo: "2. Recuperando",
            conteudo: `
                <p>Para ler um dado salvo, usamos <code>getItem</code>.</p>
                <p>Se o dado não existir, ele retorna <code>null</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Lendo",
            instrucao: "Recupere o 'tema' salvo.",
            blocos: ["localStorage.getItem", "('tema');", ".set", ".read"],
            respostaCerta: ["localStorage.getItem", "('tema');"]
        },
        {
            tipo: "teoria",
            titulo: "3. Salvando Objetos",
            conteudo: `
                <p>O LocalStorage SÓ ACEITA TEXTO (Strings).</p>
                <p>Para salvar um objeto ou array, precisamos converter para JSON antes!</p>
                <p><code>setItem('user', JSON.stringify(user))</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Combo",
            instrucao: "Salve a lista convertida em JSON.",
            blocos: ["localStorage.setItem", "('lista',", "JSON.stringify(lista));", "lista);"],
            respostaCerta: ["localStorage.setItem", "('lista',", "JSON.stringify(lista));"]
        },
        {
            tipo: "quiz",
            titulo: "Limpeza",
            instrucao: "Como apago tudo do localStorage?",
            opcoes: ["localStorage.clear()", "localStorage.delete()", "Jogando o PC fora"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "4. Projeto Codin",
            conteudo: `
                <p>Curiosidade: O progresso deste curso está salvo no seu navegador usando LocalStorage!</p>
                <p>É por isso que você pode fechar a aba e voltar depois.</p>
            `
        }
    ],
    // --- 31. ASSINCRONISMO (8 Páginas) ---
    "js_async_intro": [
        {
            tipo: "teoria",
            titulo: "1. O problema da fila",
            conteudo: `
                <p>O JavaScript executa uma linha por vez (Síncrono).</p>
                <p>Se uma linha demorar 10 segundos (ex: baixar uma imagem), o site inteiro TRAVA e congela.</p>
                <p>Isso é ruim.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. A Solução: Assíncrono",
            conteudo: `
                <p>Código <strong>Assíncrono</strong> é aquele que começa agora, mas termina depois, <strong>sem travar</strong> o resto.</p>
                <p>O JS diz: 'Pode continuar lendo o código, quando essa imagem terminar de baixar eu te aviso'.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Conceito",
            instrucao: "O que acontece se eu rodar um código pesado de forma Síncrona?",
            opcoes: ["O site fica mais rápido", "O site congela/trava até terminar", "O computador desliga"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. SetTimeout",
            conteudo: `
                <p>A função <code>setTimeout</code> é o exemplo clássico.</p>
                <p>Ela agenda uma função para rodar depois de X milissegundos.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Agendando",
            instrucao: "Mostre 'Oi' depois de 2 segundos (2000ms).",
            blocos: ["setTimeout", "(() => alert('Oi'), 2000);", "wait", "delay"],
            respostaCerta: ["setTimeout", "(() => alert('Oi'), 2000);"]
        },
        {
            tipo: "teoria",
            titulo: "4. Ordem de Execução",
            conteudo: `
                <p>Se você tem: Passo A, setTimeout(Passo B), Passo C.</p>
                <p>A ordem será: A -> C -> B.</p>
                <p>O JS não espera o tempo acabar, ele segue para o próximo comando.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Previsão",
            instrucao: "console.log(1); setTimeout(() => console.log(2), 0); console.log(3); Qual a ordem?",
            opcoes: ["1, 2, 3", "1, 3, 2 (O timeout sempre vai pro final da fila)", "3, 2, 1"],
            respostaIndex: 1
        },
        {
            tipo: "montagem",
            titulo: "Callback",
            instrucao: "Passe uma função para rodar depois.",
            blocos: ["function fim() {}", "setTimeout(fim, 1000);", "run", "now"],
            respostaCerta: ["function fim() {}", "setTimeout(fim, 1000);"]
        }
    ],

    // --- 32. PROMISES (8 Páginas) ---
    "js_promises": [
        {
            tipo: "teoria",
            titulo: "1. A Promessa",
            conteudo: `
                <p>Uma <strong>Promise</strong> é um objeto que representa um valor que pode estar disponível agora, no futuro ou nunca.</p>
                <p>É como pedir uma pizza: você ganha um recibo (Promessa). A pizza vem depois.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. Estados",
            conteudo: `
                <p>A Promise tem 3 estados:</p>
                <ul>
                    <li><strong>Pending:</strong> Pendente (Fazendo a pizza).</li>
                    <li><strong>Resolved:</strong> Sucesso (Pizza chegou).</li>
                    <li><strong>Rejected:</strong> Erro (Acabou o queijo).</li>
                </ul>
            `
        },
        {
            tipo: "quiz",
            titulo: "Status",
            instrucao: "Quando a operação dá erro, a Promise fica...",
            opcoes: ["Resolved", "Rejected", "Pending"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Then (Então)",
            conteudo: `
                <p>Usamos <code>.then()</code> para dizer o que fazer quando der certo.</p>
                <p><code>baixarFoto().then(mostrarFoto);</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Sucesso",
            instrucao: "Quando carregar, mostre 'Pronto'.",
            blocos: ["carregar()", ".then(() =>", "console.log('Pronto'));", "if"],
            respostaCerta: ["carregar()", ".then(() =>", "console.log('Pronto'));"]
        },
        {
            tipo: "teoria",
            titulo: "4. Catch (Pegar Erro)",
            conteudo: `
                <p>E se der erro? Usamos o <code>.catch()</code>.</p>
                <p>Ele captura qualquer falha na promessa.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Falha",
            instrucao: "Se der erro, avise 'Falhou'.",
            blocos: [".catch(() =>", "alert('Falhou'));", "else", "try"],
            respostaCerta: [".catch(() =>", "alert('Falhou'));"]
        },
        {
            tipo: "montagem",
            titulo: "Completo",
            instrucao: "Conecte o then e o catch.",
            blocos: ["api.buscar()", ".then(dados)", ".catch(erro);", "finally"],
            respostaCerta: ["api.buscar()", ".then(dados)", ".catch(erro);"]
        }
    ],

    // --- 33. ASYNC / AWAIT (8 Páginas) ---
    "js_async_await": [
        {
            tipo: "teoria",
            titulo: "1. Açúcar Sintático",
            conteudo: `
                <p>Escrever vários <code>.then()</code> pode ficar confuso.</p>
                <p>O JS moderno criou o <strong>Async/Await</strong> para escrever código assíncrono parecendo síncrono.</p>
                <p>Fica muito mais limpo.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. Async",
            conteudo: `
                <p>Para usar essa mágica, a função precisa ser marcada como <code>async</code>.</p>
                <p><code>async function carregar() { ... }</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Marcando a Função",
            instrucao: "Crie uma função assíncrona 'start'.",
            blocos: ["async function", "start() { }", "await", "sync"],
            respostaCerta: ["async function", "start() { }"]
        },
        {
            tipo: "teoria",
            titulo: "3. Await (Espere)",
            conteudo: `
                <p>Dentro da função, usamos <code>await</code> antes da promessa.</p>
                <p>Isso diz pro JS: 'PAUSE aqui e espere a promessa terminar antes de ir para a próxima linha'.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Pausando",
            instrucao: "Espere o download terminar.",
            blocos: ["let foto =", "await download();", "then", "wait"],
            respostaCerta: ["let foto =", "await download();"]
        },
        {
            tipo: "quiz",
            titulo: "Regra",
            instrucao: "Posso usar 'await' fora de uma função 'async'?",
            opcoes: ["Sim, em qualquer lugar", "Não, dá erro (exceto em módulos novos)", "Só em loops"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "4. Comparação",
            conteudo: `
                <p>Com Then: <code>api().then(d => console.log(d))</code></p>
                <p>Com Await: <code>let d = await api(); console.log(d)</code></p>
                <p>O segundo é mais fácil de ler.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Código Limpo",
            instrucao: "Busque o usuário e depois o endereço.",
            blocos: ["let user = await buscarUser();", "let end = await buscarEnd(user);", "then", "next"],
            respostaCerta: ["let user = await buscarUser();", "let end = await buscarEnd(user);"]
        }
    ],

    // --- 34. FETCH API (8 Páginas) ---
    "js_fetch": [
        {
            tipo: "teoria",
            titulo: "1. Buscando Dados",
            conteudo: `
                <p>Para pegar dados de outro site (API), usamos o <code>fetch()</code>.</p>
                <p>O fetch retorna uma Promise.</p>
                <p>É assim que front-ends conversam com back-ends.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Requisição",
            instrucao: "Faça um pedido para 'api.com'.",
            blocos: ["await", "fetch('api.com');", "get", "request"],
            respostaCerta: ["await", "fetch('api.com');"]
        },
        {
            tipo: "teoria",
            titulo: "2. Convertendo JSON",
            conteudo: `
                <p>O fetch traz um pacote bruto. Precisamos converter para JSON.</p>
                <p>Isso também é uma promessa!</p>
                <p><code>let dados = await resposta.json();</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Lendo Resposta",
            instrucao: "Converta a resposta para JSON.",
            blocos: ["let json =", "await resposta.json();", "JSON.parse", ".text()"],
            respostaCerta: ["let json =", "await resposta.json();"]
        },
        {
            tipo: "quiz",
            titulo: "Fluxo",
            instrucao: "Quantos 'awaits' geralmente usamos num fetch básico?",
            opcoes: ["Nenhum", "Dois (Um pro fetch, um pro .json)", "Dez"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Métodos HTTP",
            conteudo: `
                <p>O fetch padrão faz um GET (Leitura).</p>
                <p>Podemos configurar para fazer POST (Enviar dados), PUT, DELETE.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Configuração",
            instrucao: "Envie um método POST.",
            blocos: ["fetch(url,", "{ method: 'POST' });", "send", "get"],
            respostaCerta: ["fetch(url,", "{ method: 'POST' });"]
        },
        {
            tipo: "quiz",
            titulo: "Segurança",
            instrucao: "Posso fazer fetch para qualquer site?",
            opcoes: ["Sim, a internet é livre", "Não, existe bloqueio CORS se o site não permitir", "Só sites .com"],
            respostaIndex: 1
        }
    ],

    // --- 35. TRATANDO ERROS (8 Páginas) ---
    "js_try_catch": [
        {
            tipo: "teoria",
            titulo: "1. Quando tudo dá errado",
            conteudo: `
                <p>Se a internet cair durante o fetch, o código quebra e para de rodar.</p>
                <p>Para evitar que o site 'morra', usamos o bloco <strong>try...catch</strong>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Tentativa",
            instrucao: "Tente rodar o código perigoso.",
            blocos: ["try {", "codigoPerigoso();", "}", "catch"],
            respostaCerta: ["try {", "codigoPerigoso();", "}"]
        },
        {
            tipo: "teoria",
            titulo: "2. Capturando o Erro",
            conteudo: `
                <p>Se der erro no bloco <code>try</code>, o JS pula imediatamente para o bloco <code>catch</code>.</p>
                <p>Lá você pode avisar o usuário amigavelmente.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Segurança",
            instrucao: "Se der erro, mostre o alerta.",
            blocos: ["catch (erro) {", "alert('Ops!');", "}", "else"],
            respostaCerta: ["catch (erro) {", "alert('Ops!');", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Comportamento",
            instrucao: "Se o código no 'try' funcionar, o 'catch' roda?",
            opcoes: ["Sim, sempre", "Não, o catch é ignorado", "Depende"],
            respostaIndex: 1
        },
        {
            tipo: "teoria",
            titulo: "3. Finally",
            conteudo: `
                <p>Existe um terceiro bloco: <code>finally</code>.</p>
                <p>Ele roda <strong>SEMPRE</strong>, dando certo ou errado.</p>
                <p>Útil para esconder o ícone de 'Carregando...'.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Finalizando",
            instrucao: "Sempre feche o carregamento.",
            blocos: ["finally {", "loading = false;", "}", "end"],
            respostaCerta: ["finally {", "loading = false;", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Prática",
            instrucao: "Onde devo colocar o fetch para ser seguro?",
            opcoes: ["Solto no código", "Dentro de um bloco try...catch", "Dentro de um loop"],
            respostaIndex: 1
        }
    ],
    // --- 36. CLASSES (POO) (8 Páginas) ---
    "js_classes": [
        {
            tipo: "teoria",
            titulo: "1. Orientação a Objetos",
            conteudo: `
                <p>Imagine que você quer criar 100 inimigos pro seu jogo. Criar 100 objetos na mão é chato.</p>
                <p>Uma <strong>Classe</strong> é uma 'fôrma de bolo'. Ela define como o objeto deve ser.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Criando a Classe",
            instrucao: "Defina a classe Heroi.",
            blocos: ["class", "Heroi {", "}", "function"],
            respostaCerta: ["class", "Heroi {", "}"]
        },
        {
            tipo: "teoria",
            titulo: "2. Constructor",
            conteudo: `
                <p>O <code>constructor</code> é uma função especial que roda assim que criamos o objeto.</p>
                <p>É onde definimos os valores iniciais (vida, nome).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Construtor",
            instrucao: "Receba o nome e salve no 'this'.",
            blocos: ["constructor(nome) {", "this.nome = nome;", "}", "return"],
            respostaCerta: ["constructor(nome) {", "this.nome = nome;", "}"]
        },
        {
            tipo: "teoria",
            titulo: "3. Instanciando (Criando)",
            conteudo: `
                <p>Para usar a fôrma e criar um objeto real, usamos a palavra <strong>new</strong>.</p>
                <p><code>let p1 = new Heroi('Batman');</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Novo Herói",
            instrucao: "Crie um novo herói chamado 'Flash'.",
            blocos: ["let h1 =", "new Heroi('Flash');", "Heroi('Flash');", "class"],
            respostaCerta: ["let h1 =", "new Heroi('Flash');"]
        },
        {
            tipo: "teoria",
            titulo: "4. Métodos",
            conteudo: `
                <p>Podemos criar funções dentro da classe. Elas não precisam da palavra 'function'.</p>
                <p>Ex: <code>atacar() { ... }</code></p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Herança",
            instrucao: "Para criar uma classe 'Mago' que copia tudo de 'Heroi', usamos...",
            opcoes: ["class Mago extends Heroi", "class Mago copy Heroi", "class Mago implements Heroi"],
            respostaIndex: 0
        }
    ],

    // --- 37. MÓDULOS (8 Páginas) ---
    "js_modulos": [
        {
            tipo: "teoria",
            titulo: "1. Dividir para Conquistar",
            conteudo: `
                <p>Em projetos grandes, não escrevemos tudo em um arquivo só.</p>
                <p>Dividimos em vários arquivos <code>.js</code> e conectamos eles.</p>
                <p>Chamamos esses arquivos de <strong>Módulos</strong>.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. Export",
            conteudo: `
                <p>Para permitir que uma função seja usada em outro arquivo, precisamos exportá-la.</p>
                <p><code>export const soma = (a,b) => a+b;</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Exportando",
            instrucao: "Exporte a função 'login'.",
            blocos: ["export", "function login() {}", "import", "def"],
            respostaCerta: ["export", "function login() {}"]
        },
        {
            tipo: "teoria",
            titulo: "3. Import",
            conteudo: `
                <p>No outro arquivo, importamos o que precisamos.</p>
                <p><code>import { soma } from './math.js';</code></p>
                <p>As chaves <code>{}</code> são obrigatórias para exportações nomeadas.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Importando",
            instrucao: "Importe 'User' do arquivo 'model.js'.",
            blocos: ["import { User }", "from './model.js';", "include", "require"],
            respostaCerta: ["import { User }", "from './model.js';"]
        },
        {
            tipo: "teoria",
            titulo: "4. Export Default",
            conteudo: `
                <p>Se o arquivo só tem UMA coisa principal, usamos <code>export default</code>.</p>
                <p>Na hora de importar, não precisa de chaves <code>{}</code> e pode usar qualquer nome.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "HTML",
            instrucao: "Para usar módulos, a tag script no HTML precisa de um atributo:",
            opcoes: ["type='module'", "src='module'", "mode='import'"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Padrão",
            instrucao: "Importe o padrão do arquivo 'config'.",
            blocos: ["import Config", "from './config.js';", "{ Config }", "get"],
            respostaCerta: ["import Config", "from './config.js';"]
        }
    ],

    // --- 38. DATAS E TEMPO (8 Páginas) ---
    "js_datas": [
        {
            tipo: "teoria",
            titulo: "1. Objeto Date",
            conteudo: `
                <p>Para lidar com tempo, usamos <code>new Date()</code>.</p>
                <p>Ele pega a data e hora exata do momento da criação.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Data Atual",
            instrucao: "Crie uma variável com a data de agora.",
            blocos: ["const agora =", "new Date();", "Date.now();", "Today()"],
            respostaCerta: ["const agora =", "new Date();"]
        },
        {
            tipo: "teoria",
            titulo: "2. Pegando Informações",
            conteudo: `
                <p>Podemos extrair partes da data:</p>
                <ul>
                    <li><code>.getFullYear()</code>: Ano (2025).</li>
                    <li><code>.getMonth()</code>: Mês (0 a 11 - Cuidado!).</li>
                    <li><code>.getDay()</code>: Dia da semana (0=Dom, 6=Sáb).</li>
                </ul>
            `
        },
        {
            tipo: "quiz",
            titulo: "Pegadinha do Mês",
            instrucao: "Se estamos em Janeiro, o getMonth() retorna...",
            opcoes: ["0", "1", "Jan"],
            respostaIndex: 0
        },
        {
            tipo: "teoria",
            titulo: "3. Formatando (Brasil)",
            conteudo: `
                <p>Para mostrar a data bonitinha no padrão brasileiro (DD/MM/AAAA):</p>
                <p><code>data.toLocaleDateString('pt-BR');</code></p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Formatando",
            instrucao: "Formate a data para pt-BR.",
            blocos: ["data.toLocaleDateString", "('pt-BR');", "('br');", ".format"],
            respostaCerta: ["data.toLocaleDateString", "('pt-BR');"]
        },
        {
            tipo: "teoria",
            titulo: "4. Intervalos (Timer)",
            conteudo: `
                <p>Para repetir algo a cada X segundos (como um relógio), usamos <code>setInterval</code>.</p>
                <p><code>setInterval(funcao, 1000)</code> roda a cada 1 segundo.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Relógio",
            instrucao: "Rode 'tick' a cada 1000ms.",
            blocos: ["setInterval", "(tick, 1000);", "setTimeout", "loop"],
            respostaCerta: ["setInterval", "(tick, 1000);"]
        }
    ],

    // --- 39. MATH E ALEATÓRIO (8 Páginas) ---
    "js_math": [
        {
            tipo: "teoria",
            titulo: "1. Objeto Math",
            conteudo: `
                <p>O JS tem uma calculadora científica embutida: o objeto <strong>Math</strong>.</p>
                <p>Não precisa de 'new', ele já existe.</p>
            `
        },
        {
            tipo: "teoria",
            titulo: "2. Arredondando",
            conteudo: `
                <p><code>Math.round(4.7)</code> -> 5 (Mais próximo).</p>
                <p><code>Math.floor(4.9)</code> -> 4 (Chão/Baixo).</p>
                <p><code>Math.ceil(4.1)</code> -> 5 (Teto/Cima).</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Piso",
            instrucao: "Arredonde 5.9 para baixo (5).",
            blocos: ["Math.floor", "(5.9);", "round", "ceil"],
            respostaCerta: ["Math.floor", "(5.9);"]
        },
        {
            tipo: "teoria",
            titulo: "3. Maior e Menor",
            conteudo: `
                <p>Para achar o maior número de uma lista: <code>Math.max(10, 5, 20)</code>.</p>
                <p>Para o menor: <code>Math.min(...)</code>.</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "Vencedor",
            instrucao: "Ache o maior valor.",
            blocos: ["Math.max", "(10, 50, 5);", "high", "top"],
            respostaCerta: ["Math.max", "(10, 50, 5);"]
        },
        {
            tipo: "teoria",
            titulo: "4. Aleatório (Random)",
            conteudo: `
                <p><code>Math.random()</code> gera um número quebrado entre 0 e 1 (ex: 0.543).</p>
                <p>Para simular um dado (1 a 6), precisamos fazer contas com ele.</p>
            `
        },
        {
            tipo: "quiz",
            titulo: "Random",
            instrucao: "O Math.random() pode retornar o número 1 exato?",
            opcoes: ["Não, o máximo é 0.999...", "Sim", "Às vezes"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "Dado D6",
            instrucao: "Gere um número inteiro aleatório.",
            blocos: ["Math.floor", "(Math.random() * 6);", "random()", "int"],
            respostaCerta: ["Math.floor", "(Math.random() * 6);"]
        }
    ],

    // --- 40. PROJETO MASTER: TODO LIST (8 Páginas) ---
    "js_projeto_master": [
        {
            tipo: "teoria",
            titulo: "40. O Desafio Final",
            conteudo: `
                <p>Chegou a hora de provar seu valor. Vamos montar a lógica de um <strong>App de Tarefas</strong>.</p>
                <p>Você vai usar Arrays, Objetos, Métodos e Filtros.</p>
                <p>Respire fundo. Você consegue!</p>
            `
        },
        {
            tipo: "montagem",
            titulo: "1. O Banco de Dados",
            instrucao: "Crie um Array vazio para guardar as tarefas.",
            blocos: ["let tarefas =", "[ ];", "{ };", "new Array"],
            respostaCerta: ["let tarefas =", "[ ];"]
        },
        {
            tipo: "montagem",
            titulo: "2. Adicionar Tarefa",
            instrucao: "Crie uma função que recebe texto e adiciona um objeto no array.",
            blocos: ["function add(txt) {", "tarefas.push({ texto: txt, feita: false });", "}", "pop"],
            respostaCerta: ["function add(txt) {", "tarefas.push({ texto: txt, feita: false });", "}"]
        },
        {
            tipo: "quiz",
            titulo: "Status Inicial",
            instrucao: "Por que 'feita: false'?",
            opcoes: ["Porque a tarefa começa pendente", "Porque o JS exige", "Erro de digitação"],
            respostaIndex: 0
        },
        {
            tipo: "montagem",
            titulo: "3. Deletar Tarefa",
            instrucao: "Use splice para remover a tarefa pelo índice (i).",
            blocos: ["function del(i) {", "tarefas.splice(i, 1);", "}", "slice"],
            respostaCerta: ["function del(i) {", "tarefas.splice(i, 1);", "}"]
        },
        {
            tipo: "montagem",
            titulo: "4. Marcar como Feita",
            instrucao: "Acesse o item 'i' e inverta o valor de 'feita'.",
            blocos: ["tarefas[i].feita", "=", "!tarefas[i].feita;", "true", "false"],
            respostaCerta: ["tarefas[i].feita", "=", "!tarefas[i].feita;"]
        },
        {
            tipo: "montagem",
            titulo: "5. Salvar Tudo",
            instrucao: "Converta para JSON e salve no LocalStorage.",
            blocos: ["localStorage.setItem", "('db', JSON.stringify(tarefas));", "save", "data"],
            respostaCerta: ["localStorage.setItem", "('db', JSON.stringify(tarefas));"]
        },
        {
            tipo: "quiz",
            titulo: "CONCLUÍDO",
            instrucao: "Você completou o curso de JavaScript! O que você é agora?",
            opcoes: ["Um Programador Iniciante pronto para criar!", "Um Mago", "Um Hacker"],
            respostaIndex: 0
        }
    ],
    // ==========================================
    // CURSO AVANÇADO: CSS PRO (80 ATIVIDADES)
    // ==========================================

    // --- MISSÃO 1: A MAGIA DAS CORES (Refeita) ---
    // --- MISSÃO 1: A MAGIA DAS CORES (Correção REAL 4.0) ---
    "css_adv_1": [
        {
            tipo: "editor",
            titulo: "1. A Cor do Texto",
            conteudo: `
                <p>O Mago está sem cor. Vamos dar vida a ele.</p>
                <p>Use a propriedade <code>color</code> com o valor <code>blue</code>.</p>
            `,
            seletor: ".nome-mago",
            // Mantive limpo
            htmlInicial: '<div style="text-align:center; font-size:50px;">🧙‍♂️</div> <div class="nome-mago" style="font-size:40px; text-align:center; font-weight:bold;">Gandalf</div>',
            respostasCertas: ["color: blue;", "color:blue"]
        },
        {
            tipo: "editor",
            titulo: "2. O Fundo (Background)",
            conteudo: `
                <p>Agora vamos apagar a luz.</p>
                <p>Use <code>background-color: black;</code> para pintar o fundo do palco.</p>
            `,
            seletor: "#palco",
            htmlInicial: '<div style="text-align:center; font-size:50px;">🧙‍♂️</div> <div style="font-size:40px; text-align:center; font-weight:bold; color:blue;">Gandalf</div>',
            respostasCertas: ["background-color: black;", "background: black;", "background-color:black"]
        },
        {
            tipo: "editor",
            titulo: "3. Pintando Botões",
            conteudo: `
                <p>Agora vai! Botões são caixas. Mude a cor deles.</p>
                <p>Pinte os botões de <code>red</code>.</p>
            `,
            seletor: "button",
            // AGORA SIM: Removi o background-color: gray DE VERDADE.
            // O botão vai aparecer feio (cinza claro padrão do windows/mac), mas vai obedecer o vermelho.
            htmlInicial: '<div style="display:flex; gap:10px; justify-content:center; margin-top:50px; width:100%;"><button style="padding:10px 20px; font-size:20px; cursor:pointer;">Ataque</button> <button style="padding:10px 20px; font-size:20px; cursor:pointer;">Fugir</button></div>',
            respostasCertas: ["background-color: red;", "background: red;", "background-color:red"]
        },
        {
            tipo: "editor",
            titulo: "4. Alinhando Texto",
            conteudo: `
                <p>O exército está bagunçado à esquerda.</p>
                <p>Use <code>text-align: center;</code> para centralizar os soldados.</p>
            `,
            seletor: ".exercito",
            // CORREÇÃO: Adicionei width: 100% para a caixa ocupar a tela toda.
            // Sem isso, ela ficava encolhida e o center não funcionava.
            htmlInicial: '<div class="exercito" style="background:#eee; padding:20px; border:2px solid #ccc; font-size:30px; width: 100%;">💂 💂 💂</div>',
            respostasCertas: ["text-align: center;", "text-align:center"]
        },
        {
            tipo: "editor",
            titulo: "5. Hexadecimais",
            conteudo: `
                <p>Use o código hexadecimal do vermelho puro: <code>#ff0000</code>.</p>
                <p>Aplique na propriedade <code>color</code> do aviso.</p>
            `,
            seletor: "h1",
            // Removi qualquer cor pré-definida
            htmlInicial: '<h1 style="text-align:center; font-family:sans-serif; width:100%;">PERIGO ⚠️</h1>',
            respostasCertas: ["color: #ff0000;", "color:#ff0000"]
        },
        {
            tipo: "editor",
            titulo: "6. RGB",
            conteudo: `
                <p>Agora use RGB para encher a vida de verde: <code>rgb(0, 255, 0)</code>.</p>
                <p>Aplique no <code>background-color</code>.</p>
            `,
            seletor: ".vida",
            htmlInicial: '<div style="border:2px solid black; width:200px; height:30px; margin:auto; background:white;"><div class="vida" style="width:50%; height:100%; border-right:1px solid #333;"></div></div>',
            respostasCertas: ["background-color: rgb(0, 255, 0);", "background: rgb(0, 255, 0);"]
        },
        {
            tipo: "editor",
            titulo: "7. Tamanho da Fonte",
            conteudo: `
                <p>O grito precisa ser alto! Aumente para <code>50px</code> usando <code>font-size</code>.</p>
            `,
            seletor: ".grito",
            htmlInicial: '<div class="grito" style="text-align:center; font-family:sans-serif; margin-top:20px; width:100%;">ROAAAR!</div>',
            respostasCertas: ["font-size: 50px;", "font-size:50px"]
        },
        {
            tipo: "editor",
            titulo: "8. Transparência",
            conteudo: `
                <p>Pinte o fundo da caixa misteriosa de roxo (<code>purple</code>).</p>
            `,
            seletor: ".caixa-misteriosa",
            htmlInicial: '<div class="caixa-misteriosa" style="border:2px dashed black; padding:20px; text-align:center; font-weight:bold; margin-top:20px; width:100%;">Mistério</div>',
            respostasCertas: ["background-color: purple;", "background: purple;"]
        }
    ],

    // --- MISSÃO 2: CLASSES E GRUPOS (Modo Hardcore + Layout Arrumado) ---
    "css_adv_2": [
        {
            tipo: "editor",
            titulo: "1. Criando Classes",
            conteudo: `
                <p>Para selecionar um grupo, usamos o <strong>Ponto (.)</strong> antes do nome.</p>
                <p>Digite o código completo para pintar os heróis de azul.</p>
                <p>Modelo: <code>.heroi { color: blue; }</code></p>
            `,
            esconderSeletor: true, // <--- LIGA O MODO LIVRE
            seletor: "", // Deixa vazio pro JS saber que é livre
            // Layout flex espaçado e alinhado
            htmlInicial: `
                <div style="display:flex; justify-content:space-around; align-items:center; width:100%; height:100%; font-size:24px; font-weight:bold;">
                    <div class="heroi">🧙‍♂️ Arthur</div>
                    <div class="vilao">👹 Zorg</div>
                    <div class="heroi">🧚‍♀️ Merlin</div>
                </div>`,
            // O aluno tem que acertar tudo (removemos espaços na validação, então a formatação dele não importa tanto)
            respostasCertas: [".heroi{color:blue;}", ".heroi{color:blue}", ".heroi { color: blue; }"]
        },
        {
            tipo: "editor",
            titulo: "2. Os Vilões",
            conteudo: `
                <p>Agora vamos destacar os inimigos.</p>
                <p>Crie uma regra para a classe <code>.vilao</code> e mude a cor para <code>red</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; justify-content:space-around; align-items:center; width:100%; height:100%; font-size:24px; font-weight:bold;">
                    <div class="heroi" style="color:blue">🧙‍♂️ Arthur</div>
                    <div class="vilao">👹 Zorg</div>
                    <div class="vilao">💀 Voldemort</div>
                </div>`,
            respostasCertas: [".vilao{color:red;}", ".vilao{color:red}"]
        },
        {
            tipo: "editor",
            titulo: "3. Background em Classes",
            conteudo: `
                <p>Temos poções mágicas. Use a classe <code>.pocao</code>.</p>
                <p>Pinte o fundo delas (<code>background-color</code>) de <code>pink</code>.</p>
                <p>Não esqueça das chaves <code>{ }</code>!</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; gap:20px; justify-content:center; align-items:center; width:100%; height:100%;">
                    <div class="pocao" style="width:60px; height:80px; border:3px solid #333; border-radius:50% 50% 10% 10%; display:flex; align-items:center; justify-content:center; font-size:30px;">🧪</div>
                    <div class="pocao" style="width:60px; height:80px; border:3px solid #333; border-radius:50% 50% 10% 10%; display:flex; align-items:center; justify-content:center; font-size:30px;">🧪</div>
                </div>`,
            respostasCertas: [".pocao{background-color:pink;}", ".pocao{background:pink;}", ".pocao { background-color: pink; }"]
        },
        {
            tipo: "editor",
            titulo: "4. Botão de Perigo",
            conteudo: `
                <p>Precisamos estilizar o botão de deletar.</p>
                <p>Selecione a classe <code>.btn-perigo</code> e mude o fundo para <code>orange</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; gap:20px; justify-content:center; align-items:center; width:100%; height:100%;">
                    <button style="padding:10px 20px; font-size:18px;">Salvar</button>
                    <button class="btn-perigo" style="padding:10px 20px; font-size:18px;">🗑️ Deletar</button>
                </div>`,
            respostasCertas: [".btn-perigo{background-color:orange;}"]
        },
        {
            tipo: "editor",
            titulo: "5. Cards (Bordas)",
            conteudo: `
                <p>Vamos dar estilo às cartas.</p>
                <p>Na classe <code>.card</code>, adicione uma borda preta sólida: <code>border: 2px solid black;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; gap:20px; justify-content:center; align-items:center; width:100%; height:100%;">
                    <div class="card" style="padding:20px; background:#eee; font-size:20px;">🃏 Goblin</div>
                    <div class="card" style="padding:20px; background:#eee; font-size:20px;">🃏 Orc</div>
                </div>`,
            respostasCertas: [".card{border:2px solid black;}", ".card{border:2px solid black}"]
        },
        {
            tipo: "editor",
            titulo: "6. Arredondando",
            conteudo: `
                <p>Agora vamos arredondar as pontas desses cards.</p>
                <p>Use a classe <code>.card</code> com <code>border-radius: 15px;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; gap:20px; justify-content:center; align-items:center; width:100%; height:100%;">
                    <div class="card" style="padding:20px; background:#eee; border:2px solid black; font-size:20px;">🃏 Goblin</div>
                    <div class="card" style="padding:20px; background:#eee; border:2px solid black; font-size:20px;">🃏 Orc</div>
                </div>`,
            respostasCertas: [".card{border-radius:15px;}", ".card{border-radius:15px}"]
        },
        {
            tipo: "editor",
            titulo: "7. Itens Raros",
            conteudo: `
                <p>Temos uma lista de itens. Destaque apenas os raros.</p>
                <p>Use <code>.raro</code> e mude o fundo para <code>gold</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <ul style="list-style:none; padding:0; width:100%; text-align:center; font-size:20px;">
                    <li style="border:1px solid #ccc; margin:10px auto; padding:10px; width:80%;">🗡️ Adaga</li>
                    <li class="raro" style="border:1px solid #ccc; margin:10px auto; padding:10px; width:80%;">✨ Excalibur</li>
                    <li style="border:1px solid #ccc; margin:10px auto; padding:10px; width:80%;">🛡️ Escudo</li>
                </ul>`,
            respostasCertas: [".raro{background-color:gold;}", ".raro{background:gold;}"]
        },
        {
            tipo: "editor",
            titulo: "8. Sumir com Armadilhas",
            conteudo: `
                <p>Esconda as armadilhas do mapa!</p>
                <p>Use a classe <code>.trap</code> e <code>display: none;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; justify-content:space-evenly; align-items:center; width:100%; height:100%; font-size:40px;">
                    <div>🌳</div>
                    <div class="trap">💣</div>
                    <div>🌲</div>
                    <div class="trap">💣</div>
                    <div>🌳</div>
                </div>`,
            respostasCertas: [".trap{display:none;}", ".trap{display:none}"]
        }
    ],

    // --- MISSÃO 3: O PODER DO ID (Visual RPG + Modo Livre) ---
    "css_adv_3": [
        {
            tipo: "editor",
            titulo: "1. O Rei (ID)",
            conteudo: `
                <p>Classes são para grupos (soldados). <strong>IDs</strong> são para únicos (o Rei).</p>
                <p>No CSS, usamos a <strong>Hashtag (#)</strong>.</p>
                <p>Selecione o <code>#rei</code> e pinte o texto de <code>gold</code> (dourado).</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; justify-content:space-around; align-items:center; width:100%; height:100%; font-size:20px; font-weight:bold;">
                    <div class="soldado">💂 Soldado 1</div>
                    <div id="rei" style="font-size:24px;">👑 Rei Arthur</div>
                    <div class="soldado">💂 Soldado 2</div>
                </div>`,
            respostasCertas: ["#rei{color:gold;}", "#rei{color:gold}"]
        },
        {
            tipo: "editor",
            titulo: "2. O Chefão (Especificidade)",
            conteudo: `
                <p>O ID é mais forte que a Classe. Mesmo se ele for um monstro (azul), o ID manda.</p>
                <p>Use o ID <code>#boss</code> para mudar o fundo dele para <code>red</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; gap:20px; justify-content:center; align-items:center; width:100%; height:100%;">
                    <div class="monstro" style="padding:20px; background:lightblue; border:2px solid #333; border-radius:10px;">Goblin</div>
                    <div id="boss" class="monstro" style="padding:20px; background:lightblue; border:4px solid #333; border-radius:10px; font-weight:bold; font-size:22px;">👹 DRAGÃO</div>
                </div>`,
            respostasCertas: ["#boss{background-color:red;}", "#boss{background:red;}"]
        },
        {
            tipo: "editor",
            titulo: "3. Largura (Width)",
            conteudo: `
                <p>O portão do castelo está quase fechado!</p>
                <p>Use o ID <code>#portao</code> e defina a largura (<code>width</code>) como <code>100%</code> para abrir.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="width:100%; padding:10px; border:4px solid #555; background:#333;">
                    <div id="portao" style="height:40px; width:10%; background:brown; color:white; display:flex; align-items:center; justify-content:center; white-space:nowrap; overflow:hidden; transition: width 0.5s;">
                        🚪 PORTÃO
                    </div>
                </div>`,
            respostasCertas: ["#portao{width:100%;}", "#portao{width:100%}"]
        },
        {
            tipo: "editor",
            titulo: "4. Altura (Height)",
            conteudo: `
                <p>A torre de vigia está muito baixa.</p>
                <p>Selecione <code>#torre</code> e aumente a altura (<code>height</code>) para <code>200px</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; align-items:flex-end; justify-content:center; height:100%; padding-bottom:10px;">
                    <div style="width:50px; height:50px; background:#aaa; margin-right:5px;">🏠</div>
                    <div id="torre" style="width:60px; height:50px; background:#777; border:2px solid #444; display:flex; justify-content:center; align-items:flex-start; color:white; transition: height 0.5s;">🏰</div>
                    <div style="width:50px; height:50px; background:#aaa; margin-left:5px;">🏠</div>
                </div>`,
            respostasCertas: ["#torre{height:200px;}", "#torre{height:200px}"]
        },
        {
            tipo: "editor",
            titulo: "5. Invisibilidade",
            conteudo: `
                <p>O fantasma precisa ficar translúcido.</p>
                <p>Use o ID <code>#fantasma</code> com <code>opacity: 0.5;</code> (50% visível).</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; justify-content:center; align-items:center; height:100%; background:#222;">
                    <div id="fantasma" style="font-size:80px; filter: drop-shadow(0 0 10px white);">👻</div>
                </div>`,
            respostasCertas: ["#fantasma{opacity:0.5;}", "#fantasma{opacity:0.5}"]
        },
        {
            tipo: "editor",
            titulo: "6. Placa de Perigo",
            conteudo: `
                <p>O aviso está em minúsculas e ninguém lê.</p>
                <p>Use <code>#aviso</code> e a propriedade <code>text-transform: uppercase;</code> para gritar!</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; justify-content:center; align-items:center; height:100%;">
                    <div id="aviso" style="background:yellow; color:black; padding:20px; border:4px solid black; font-weight:bold; font-family:sans-serif;">
                        ⚠️ cuidado com o dragão
                    </div>
                </div>`,
            respostasCertas: ["#aviso{text-transform:uppercase;}", "#aviso{text-transform:uppercase}"]
        },
        {
            tipo: "editor",
            titulo: "7. Botão Start",
            conteudo: `
                <p>O botão de jogar não parece clicável (o mouse continua uma setinha).</p>
                <p>Use <code>#play</code> e mude o cursor para <code>pointer</code> (mãozinha).</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; justify-content:center; align-items:center; height:100%;">
                    <button id="play" style="padding:15px 40px; font-size:20px; background:#4CAF50; color:white; border:none; border-radius:5px;">
                        ▶ START GAME
                    </button>
                </div>`,
            respostasCertas: ["#play{cursor:pointer;}", "#play{cursor:pointer}"]
        },
        {
            tipo: "editor",
            titulo: "8. O Baú Lendário",
            conteudo: `
                <p>O baú está trancado (vermelho). Para abrir, ele precisa brilhar.</p>
                <p>Mude o fundo do <code>#bau</code> para <code>gold</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <div style="display:flex; justify-content:center; align-items:center; height:100%;">
                    <div id="bau" style="width:100px; height:80px; background:brown; border:4px solid #3e2723; border-radius:10px 10px 0 0; display:flex; justify-content:center; align-items:center; font-size:40px;">
                        🔒
                    </div>
                </div>`,
            respostasCertas: ["#bau{background-color:gold;}", "#bau{background:gold;}"]
        }
    ],
    // --- MISSÃO 4: O TERRITÓRIO ---
    "css_adv_4": [
        {
            tipo: "editor",
            titulo: "1. Espaço Interno (Padding)",
            conteudo: `
                <p>O <strong>padding</strong> cria espaço <em>dentro</em> da caixa.</p>
                <p>Adicione <code>padding: 20px;</code> na classe <code>.caixa</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 20, 
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; font-family: 'Segoe UI', sans-serif; }
                    .caixa { background-color: #2c3e50; color: #ecf0f1; border: 2px solid #f1c40f; font-size: 18px; }
                </style>
                <div class="palco">
                    <div class="caixa">📦 Conteúdo</div>
                </div>`,
            respostasCertas: [".caixa{padding:20px;}", ".caixa{padding:20px}"]
        },
        {
            tipo: "editor",
            titulo: "2. Espaço Externo (Margin)",
            conteudo: `
                <p>O <strong>margin</strong> cria espaço <em>fora</em> da caixa.</p>
                <p>Use a classe <code>.bloco</code> e aplique <code>margin: 15px;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 15,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background-color: #ecf0f1; }
                    .bloco { width: 60px; height: 60px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-family: sans-serif; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
                    .b1 { background-color: #e74c3c; }
                    .b2 { background-color: #f39c12; }
                    .b3 { background-color: #27ae60; }
                </style>
                <div class="palco">
                    <div class="bloco b1">1</div>
                    <div class="bloco b2">2</div>
                    <div class="bloco b3">3</div>
                </div>`,
            respostasCertas: [".bloco{margin:15px;}", ".bloco{margin:15px}"]
        },
        {
            tipo: "editor",
            titulo: "3. Padding Individual",
            conteudo: `
                <p>Vamos alargar o botão.</p>
                <p>No id <code>#btn</code>, adicione <code>padding-left: 40px;</code> e <code>padding-right: 40px;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px", 
            limite: 40,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    #btn { background-color: #3498db; color: white; border: none; padding-top: 12px; padding-bottom: 12px; font-size: 16px; border-radius: 4px; cursor: pointer; transition: 0.3s; font-family: sans-serif; }
                    #btn:hover { background-color: #2980b9; }
                </style>
                <div class="palco">
                    <button id="btn">Botão</button>
                </div>`,
            respostasCertas: [
                "#btn{padding-left:40px;padding-right:40px;}", 
                "#btn{padding-right:40px;padding-left:40px;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "4. Centralizar (Margin Auto)",
            conteudo: `
                <p>Para centralizar, use <code>margin: auto;</code> na classe <code>.quadrado</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
                    .trilho { width: 100%; background-color: #bdc3c7; padding: 10px; border-radius: 4px; }
                    .quadrado { width: 50px; height: 50px; background-color: #9b59b6; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
                </style>
                <div class="palco">
                    <div class="trilho">
                        <div class="quadrado"></div>
                    </div>
                </div>`,
            respostasCertas: [".quadrado{margin:auto;}", ".quadrado{margin:auto}"]
        },
        {
            tipo: "editor",
            titulo: "5. Bordas (Border)",
            conteudo: `
                <p>Adicione <code>border: 4px solid #2c3e50;</code> na classe <code>.card</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 4,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background-color: #f5f6fa; }
                    .card { padding: 40px; background-color: white; color: #2c3e50; font-family: sans-serif; font-weight: bold; letter-spacing: 1px; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
                </style>
                <div class="palco">
                    <div class="card">MINIMAL</div>
                </div>`,
            respostasCertas: [".card{border:4px solid #2c3e50;}", ".card{border:4px solid #2c3e50}"]
        },
        {
            tipo: "editor",
            titulo: "6. Círculo Perfeito",
            conteudo: `
                <p>Transforme o quadrado em círculo.</p>
                <p>Aplique <code>border-radius: 50%;</code> na classe <code>.forma</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "%", // Porcentagem
            limite: 50,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .forma { width: 100px; height: 100px; background: linear-gradient(135deg, #e74c3c, #c0392b); box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
                </style>
                <div class="palco">
                    <div class="forma"></div>
                </div>`,
            respostasCertas: [".forma{border-radius:50%;}", ".forma{border-radius:50%}"]
        },
        {
            tipo: "editor",
            titulo: "7. Box Sizing (A Correção)",
            conteudo: `
                <p>A caixa azul está vazando.</p>
                <p>Use <code>box-sizing: border-box;</code> na classe <code>.azul</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .limite { width: 250px; height: 100px; border: 2px dashed #e74c3c; padding: 2px; }
                    .azul { width: 100%; height: 100%; background-color: #3498db; color: white; padding: 20px; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-size: 14px; }
                </style>
                <div class="palco">
                    <div class="limite">
                        <div class="azul">Sem border-box eu vazo!</div>
                    </div>
                </div>`,
            respostasCertas: [".azul{box-sizing:border-box;}", ".azul{box-sizing:border-box}"]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: Botão Ghost",
            conteudo: `
                <p>Crie o botão Ghost (use o id <code>#ghost</code>):</p>
                <ul style="font-size:0.9em; margin-left:15px; margin-bottom: 10px;">
                    <li><code>background-color: transparent;</code></li>
                    <li><code>border: 2px solid white;</code></li>
                    <li><code>padding: 10px;</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 10,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #2c3e50; }
                    #ghost { color: white; font-size: 18px; cursor: pointer; border: none; background: #95a5a6; border-radius: 4px; font-family: sans-serif; transition: 0.3s; }
                    #ghost:hover { background: rgba(255,255,255,0.1); }
                </style>
                <div class="palco">
                    <button id="ghost">GHOST BUTTON</button>
                </div>`,
            respostasCertas: [
                "#ghost{background-color:transparent;border:2px solid white;padding:10px;}",
                "#ghost{background:transparent;border:2px solid white;padding:10px;}"
            ]
        }
    ],
    // --- MISSÃO 5: ESTRUTURA (Display & Visibilidade) ---
    "css_adv_5": [
        {
            tipo: "editor",
            titulo: "1. Blocos vs Linha",
            conteudo: `
                <p>Elementos de bloco (<code>div</code>, <code>p</code>) ocupam a linha toda.</p>
                <p>Para colocar um ao lado do outro, podemos mudar seu comportamento.</p>
                <p>Na classe <code>.bloco</code>, use <code>display: inline-block;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%; font-family: sans-serif; }
                    .container { width: 100%; text-align: center; background: #ecf0f1; padding: 20px; }
                    .bloco { background: #3498db; color: white; padding: 10px 20px; margin: 5px; text-align: center; }
                    /* Por padrão div é block, então ficam um embaixo do outro */
                </style>
                <div class="palco">
                    <div class="container">
                        <div class="bloco">Item 1</div>
                        <div class="bloco">Item 2</div>
                        <div class="bloco">Item 3</div>
                    </div>
                </div>`,
            respostasCertas: [".bloco{display:inline-block;}", ".bloco{display:inline-block}"]
        },
        {
            tipo: "editor",
            titulo: "2. Links como Botões",
            conteudo: `
                <p>Links (<code>a</code>) são elementos de linha e ignoram largura/altura.</p>
                <p>Para que o link aceite tamanho e pareça um botão, mude o display.</p>
                <p>Use a classe <code>.botao</code> e aplique <code>display: block;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .botao { background: #e74c3c; color: white; padding: 15px; text-decoration: none; font-family: sans-serif; width: 200px; text-align: center; border-radius: 5px; }
                    /* Como é inline, o width: 200px está sendo ignorado! */
                </style>
                <div class="palco">
                    <a href="#" class="botao">Clique Aqui</a>
                </div>`,
            respostasCertas: [".botao{display:block;}", ".botao{display:block}"]
        },
        {
            tipo: "editor",
            titulo: "3. Magia do Desaparecimento",
            conteudo: `
                <p>Para remover um elemento completamente da página (como se nunca existisse).</p>
                <p>Use a classe <code>.secreto</code> e aplique <code>display: none;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; gap: 10px; font-family: sans-serif; }
                    .card { width: 80px; height: 80px; background: #ddd; display: flex; align-items: center; justify-content: center; font-weight: bold; }
                    .secreto { background: #e74c3c; color: white; }
                </style>
                <div class="palco">
                    <div class="card">1</div>
                    <div class="card secreto">ERRO</div>
                    <div class="card">2</div>
                </div>`,
            respostasCertas: [".secreto{display:none;}", ".secreto{display:none}"]
        },
        {
            tipo: "editor",
            titulo: "4. Invisibilidade (Fantasma)",
            conteudo: `
                <p>Diferente do <code>display: none</code>, a visibilidade apenas esconde, mas <strong>mantém o espaço</strong> ocupado.</p>
                <p>Na classe <code>.fantasma</code>, use <code>visibility: hidden;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; gap: 10px; font-family: sans-serif; }
                    .card { width: 80px; height: 80px; background: #ddd; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 2px solid #bbb; }
                    .fantasma { background: #9b59b6; color: white; }
                </style>
                <div class="palco">
                    <div class="card">A</div>
                    <div class="card fantasma">👻</div>
                    <div class="card">B</div>
                </div>`,
            respostasCertas: [".fantasma{visibility:hidden;}", ".fantasma{visibility:hidden}"]
        },
        {
            tipo: "editor",
            titulo: "5. Opacidade",
            conteudo: `
                <p>Podemos deixar um elemento semitransparente.</p>
                <p>No id <code>#vidro</code>, aplique <code>opacity: 0.5;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: url('https://www.transparenttextures.com/patterns/cubes.png'); background-color: #2c3e50; }
                    #vidro { width: 150px; height: 150px; background: white; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-weight: bold; font-size: 20px; }
                </style>
                <div class="palco">
                    <div id="vidro">50%</div>
                </div>`,
            respostasCertas: ["#vidro{opacity:0.5;}", "#vidro{opacity:0.5}"]
        },
        {
            tipo: "editor",
            titulo: "6. Overflow (Cortando)",
            conteudo: `
                <p>Quando o conteúdo é maior que a caixa, ele vaza.</p>
                <p>Para esconder o excesso, use <code>overflow: hidden;</code> na classe <code>.caixa</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .caixa { width: 200px; height: 60px; border: 4px solid #333; background: #f1c40f; font-family: sans-serif; padding: 10px; line-height: 1.5; }
                </style>
                <div class="palco">
                    <div class="caixa">
                        Este texto é muito grande para caber nesta pequena caixa amarela e vai acabar vazando para fora dela.
                    </div>
                </div>`,
            respostasCertas: [".caixa{overflow:hidden;}", ".caixa{overflow:hidden}"]
        },
        {
            tipo: "editor",
            titulo: "7. Cursor do Mouse",
            conteudo: `
                <p>Podemos mudar o ponteiro do mouse para indicar ações.</p>
                <p>No botão <code>.btn</code>, use <code>cursor: pointer;</code> (mãozinha).</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .btn { padding: 15px 30px; background: #27ae60; color: white; font-size: 18px; border: none; font-family: sans-serif; }
                </style>
                <div class="palco">
                    <button class="btn">Passe o mouse</button>
                </div>`,
            respostasCertas: [".btn{cursor:pointer;}", ".btn{cursor:pointer}"]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: Menu Horizontal",
            conteudo: `
                <p>Transforme a lista vertical em um menu horizontal.</p>
                <p>Na classe <code>.item</code>, aplique <code>display: inline-block;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; font-family: sans-serif; }
                    ul { padding: 0; text-align: center; }
                    .item { background: #333; color: white; padding: 10px 20px; margin: 2px; list-style: none; }
                </style>
                <div class="palco">
                    <ul>
                        <li class="item">Home</li>
                        <li class="item">Sobre</li>
                        <li class="item">Contato</li>
                    </ul>
                </div>`,
            respostasCertas: [".item{display:inline-block;}", ".item{display:inline-block}"]
        }
    ],

    // --- MISSÃO 6: POSICIONAMENTO (Sistema de Container Isolado) ---
    "css_adv_6": [
        {
            tipo: "editor",
            titulo: "1. A Regra do Relativo",
            conteudo: `
                <p>O <code>position: relative</code> move o elemento a partir de onde ele nasce.</p>
                <p>Mova a caixa vermelha para cima da sombra cinza.</p>
                <p>Na classe <code>.box</code>, digite:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li><code>position: relative;</code></li>
                    <li><code>top: 50px;</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 100,
            htmlInicial: `
                <style>
                    /* Palco apenas centraliza o Cenario */
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #f5f6fa; }
                    
                    /* Cenario: O mundo fixo onde as coisas acontecem. */
                    .cenario { width: 200px; height: 200px; background: white; border: 2px solid #dcdde1; position: relative; border-radius: 8px; }
                    
                    /* Sombra (Alvo): Fica na posição 50px DO CENARIO */
                    .sombra { width: 60px; height: 60px; background: #bdc3c7; position: absolute; top: 50px; left: 0; border-radius: 8px; border: 2px dashed #7f8c8d; box-sizing: border-box; }

                    /* Box: Nasce no topo (0,0) DO CENARIO. Se der top:50px, cai exatamente na sombra */
                    .box { width: 60px; height: 60px; background: #e74c3c; border-radius: 8px; z-index: 2; box-shadow: 0 4px 6px rgba(0,0,0,0.2); }
                </style>
                <div class="palco">
                    <div class="cenario">
                        <div class="sombra"></div>
                        <div class="box"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".box{position:relative;top:50px;}", 
                ".box{top:50px;position:relative;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "2. Movimento Lateral",
            conteudo: `
                <p>Agora mova para a direita até o alvo.</p>
                <p>Na classe <code>.box</code>, defina:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li><code>position: relative;</code></li>
                    <li><code>left: 80px;</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 100,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #f5f6fa; }
                    .cenario { width: 200px; height: 100px; background: white; border: 2px solid #dcdde1; position: relative; border-radius: 8px; display: flex; align-items: center; padding-left: 20px; box-sizing: border-box; }
                    
                    /* Alvo: 20px (padding) + 80px (movimento) = 100px */
                    .meta { width: 50px; height: 50px; border: 3px dashed #3498db; position: absolute; left: 100px; border-radius: 8px; box-sizing: border-box; opacity: 0.5; }
                    
                    /* Box começa no fluxo normal (após o padding de 20px) */
                    .box { width: 50px; height: 50px; background: #3498db; border-radius: 8px; z-index: 2; box-shadow: 0 4px 6px rgba(0,0,0,0.2); }
                </style>
                <div class="palco">
                    <div class="cenario">
                        <div class="meta"></div>
                        <div class="box"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".box{position:relative;left:80px;}", 
                ".box{left:80px;position:relative;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "3. Posição Absoluta",
            conteudo: `
                <p>O <code>position: absolute;</code> ignora o fluxo e flutua sobre o texto.</p>
                <p>Aplique <code>position: absolute;</code> no id <code>#solto</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #eee; }
                    .cenario { width: 250px; height: 150px; background: white; position: relative; padding: 15px; box-sizing: border-box; overflow: hidden; border: 1px solid #ccc; }
                    .texto { font-family: sans-serif; color: #aaa; font-size: 13px; text-align: justify; }
                    #solto { width: 60px; height: 60px; background: rgba(230, 126, 34, 0.9); border: 2px solid #d35400; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; }
                </style>
                <div class="palco">
                    <div class="cenario">
                        <div class="texto">
                            Lorem ipsum dolor sit amet. O elemento absoluto não respeita o texto e vai parar em cima dele ou no canto.
                        </div>
                        <div id="solto">BLOCK</div>
                    </div>
                </div>`,
            respostasCertas: ["#solto{position:absolute;}", "#solto{position:absolute}"]
        },
        {
            tipo: "editor",
            titulo: "4. Fixando nos Cantos",
            conteudo: `
                <p>Cole o selo no canto superior direito do cartão.</p>
                <p>Na classe <code>.selo</code>, digite:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li><code>position: absolute;</code></li>
                    <li><code>top: 0;</code></li>
                    <li><code>right: 0;</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 10,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    /* O Cartão é o "cenário" relativo aqui */
                    .cartao { width: 200px; height: 140px; background: white; border: 1px solid #dfe6e9; position: relative; box-shadow: 0 10px 20px rgba(0,0,0,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #b2bec3; font-family: sans-serif; }
                    .selo { width: 50px; height: 50px; background: #2ecc71; color: white; font-size: 12px; font-weight: bold; display: flex; align-items: center; justify-content: center; border-radius: 0 8px 0 10px; box-shadow: -2px 2px 5px rgba(0,0,0,0.1); }
                </style>
                <div class="palco">
                    <div class="cartao">
                        Produto
                        <div class="selo">NOVO</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".selo{position:absolute;top:0;right:0;}", 
                ".selo{position:absolute;right:0;top:0;}",
                ".selo{top:0;right:0;position:absolute;}",
                ".selo{top:0;position:absolute;right:0;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "5. Z-Index (Camadas)",
            conteudo: `
                <p>O quadrado vermelho está preso atrás do azul.</p>
                <p>Traga ele para frente! Na classe <code>.red</code>:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li><code>position: relative;</code></li>
                    <li><code>z-index: 10;</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .cenario { position: relative; width: 200px; height: 200px; display: flex; justify-content: center; align-items: center; }
                    .box { width: 80px; height: 80px; position: absolute; border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.2); border-radius: 12px; }
                    .blue { background: #3498db; z-index: 1; left: 40px; }
                    .red { background: #e74c3c; left: 80px; top: 80px; /* Sem z-index, fica atrás porque vem depois no HTML mas o blue tem z-index explícito */ }
                </style>
                <div class="palco">
                    <div class="cenario">
                        <div class="box blue"></div>
                        <div class="box red"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".red{position:relative;z-index:10;}", 
                ".red{z-index:10;position:relative;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "6. Centralização Absoluta",
            conteudo: `
                <p>Centralize o alvo amarelo no eixo X.</p>
                <p>Na classe <code>.alvo</code>, use:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li><code>position: absolute;</code></li>
                    <li><code>left: 50%;</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "%",
            limite: 50,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #2d3436; }
                    /* O cenario aqui é a linha */
                    .linha { width: 80%; height: 2px; background: #636e72; position: relative; }
                    .marca { width: 2px; height: 20px; background: #636e72; position: absolute; left: 50%; top: -9px; }
                    .alvo { width: 24px; height: 24px; background: #f1c40f; border-radius: 50%; transition: 0.5s; border: 2px solid #fff; box-sizing: border-box; top: -11px; }
                </style>
                <div class="palco">
                    <div class="linha">
                        <div class="marca"></div>
                        <div class="alvo"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".alvo{position:absolute;left:50%;}", 
                ".alvo{left:50%;position:absolute;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "7. Rodapé Absoluto",
            conteudo: `
                <p>Fixe o botão no rodapé do card.</p>
                <p>Na classe <code>.btn</code>, digite:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li><code>position: absolute;</code></li>
                    <li><code>bottom: 0;</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 20,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .card { width: 180px; height: 160px; background: white; border: 1px solid #dfe6e9; position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
                    .conteudo { padding: 20px; color: #b2bec3; font-family: sans-serif; font-size: 14px; }
                    .btn { width: 100%; height: 40px; background: #0984e3; color: white; border: none; font-family: sans-serif; font-weight: bold; cursor: pointer; transition: 0.3s; }
                    .btn:hover { background: #74b9ff; }
                </style>
                <div class="palco">
                    <div class="card">
                        <div class="conteudo">Plano Pro<br>R$ 29,90</div>
                        <button class="btn">ASSINAR</button>
                    </div>
                </div>`,
            respostasCertas: [
                ".btn{position:absolute;bottom:0;}", 
                ".btn{bottom:0;position:absolute;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: Notificação",
            conteudo: `
                <p>Crie a notificação no topo direito.</p>
                <p>Na classe <code>.badge</code>:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li><code>position: absolute;</code></li>
                    <li><code>top: 0;</code></li>
                    <li><code>right: 0;</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 10,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .icone { width: 60px; height: 60px; background: #dfe6e9; position: relative; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 30px; color: #636e72; }
                    .badge { width: 18px; height: 18px; background: #ff7675; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
                </style>
                <div class="palco">
                    <div class="icone">
                        🔔
                        <div class="badge"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".badge{position:absolute;top:0;right:0;}", 
                ".badge{position:absolute;right:0;top:0;}",
                ".badge{top:0;right:0;position:absolute;}",
                ".badge{right:0;top:0;position:absolute;}"
            ]
        }
    ],
    // --- MISSÃO 7: TIPOGRAFIA (A Voz do Texto) ---
    "css_adv_7": [
        {
            tipo: "editor",
            titulo: "1. Tamanho da Fonte",
            conteudo: `
                <p>O texto está muito pequeno. Vamos aumentar.</p>
                <p>Na classe <code>.texto</code>, digite <code>font-size: 24px;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 40,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #f5f6fa; }
                    .texto { font-family: 'Segoe UI', sans-serif; color: #2c3e50; font-size: 12px; }
                </style>
                <div class="palco">
                    <div class="texto">Aumente minha voz!</div>
                </div>`,
            respostasCertas: [".texto{font-size:24px;}", ".texto{font-size:24px}"]
        },
        {
            tipo: "editor",
            titulo: "2. Alinhamento",
            conteudo: `
                <p>Textos de título geralmente ficam no centro.</p>
                <p>Use a classe <code>.titulo</code> e aplique <code>text-align: center;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .cartao { width: 250px; padding: 20px; background: white; border: 1px solid #ddd; border-radius: 8px; font-family: sans-serif; }
                    .titulo { color: #e74c3c; margin-bottom: 10px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
                </style>
                <div class="palco">
                    <div class="cartao">
                        <h2 class="titulo">Notícia Urgente</h2>
                        <p>O texto do corpo está alinhado à esquerda, mas o título precisa de destaque.</p>
                    </div>
                </div>`,
            respostasCertas: [".titulo{text-align:center;}", ".titulo{text-align:center}"]
        },
        {
            tipo: "editor",
            titulo: "3. Peso (Negrito)",
            conteudo: `
                <p>Palavras importantes precisam de peso.</p>
                <p>Na classe <code>.destaque</code>, mude o peso da fonte (<code>font-weight</code>) para <code>bold</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; font-family: sans-serif; font-size: 20px; color: #333; }
                    .frase { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                    .destaque { color: #e74c3c; }
                </style>
                <div class="palco">
                    <div class="frase">
                        CSS é <span class="destaque">incrível</span>
                    </div>
                </div>`,
            respostasCertas: [".destaque{font-weight:bold;}", ".destaque{font-weight:bold}"]
        },
        {
            tipo: "editor",
            titulo: "4. Caixa Alta (Gritando)",
            conteudo: `
                <p>Botões e avisos costumam usar letras maiúsculas.</p>
                <p>No id <code>#aviso</code>, use a propriedade <code>text-transform: uppercase;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    #aviso { background: #f1c40f; color: #2c3e50; padding: 15px 30px; font-family: sans-serif; font-weight: bold; border-radius: 4px; border: 2px solid #f39c12; }
                </style>
                <div class="palco">
                    <div id="aviso">cuidado: zona de obras</div>
                </div>`,
            respostasCertas: ["#aviso{text-transform:uppercase;}", "#aviso{text-transform:uppercase}"]
        },
        {
            tipo: "editor",
            titulo: "5. Estilo Itálico",
            conteudo: `
                <p>Citações ficam elegantes em itálico.</p>
                <p>Na classe <code>.citacao</code>, aplique <code>font-style: italic;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #eee; }
                    .box { background: white; padding: 30px; border-left: 5px solid #3498db; font-family: serif; font-size: 18px; color: #555; width: 300px; }
                </style>
                <div class="palco">
                    <div class="box">
                        <span class="citacao">"A simplicidade é o último grau de sofisticação."</span>
                        <br><br>- Leonardo da Vinci
                    </div>
                </div>`,
            respostasCertas: [".citacao{font-style:italic;}", ".citacao{font-style:italic}"]
        },
        {
            tipo: "editor",
            titulo: "6. Espaçamento de Linha",
            conteudo: `
                <p>O texto está muito apertado.</p>
                <p>Na classe <code>.texto</code>, aumente a altura da linha com <code>line-height: 1.8;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .texto { width: 300px; font-family: sans-serif; font-size: 16px; background: white; padding: 20px; border: 1px solid #ccc; line-height: 1; }
                </style>
                <div class="palco">
                    <div class="texto">
                        O espaçamento entre linhas (line-height) é crucial para a legibilidade. Quando as linhas estão muito próximas, o olho humano se perde. Vamos dar um respiro para esse parágrafo.
                    </div>
                </div>`,
            respostasCertas: [".texto{line-height:1.8;}", ".texto{line-height:1.8}"]
        },
        {
            tipo: "editor",
            titulo: "7. Sombra no Texto",
            conteudo: `
                <p>Podemos dar um efeito 3D simples.</p>
                <p>No id <code>#titulo</code>, adicione <code>text-shadow: 2px 2px #ccc;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 10,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #f5f6fa; }
                    #titulo { font-family: 'Arial Black', sans-serif; font-size: 40px; color: #333; text-transform: uppercase; }
                </style>
                <div class="palco">
                    <div id="titulo">Impacto</div>
                </div>`,
            respostasCertas: [
                "#titulo{text-shadow:2px 2px #ccc;}", 
                "#titulo{text-shadow:2px 2px #cccccc;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: Tipografia Completa",
            conteudo: `
                <p>Vamos formatar o botão final. Na classe <code>.btn</code>, aplique:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li><code>text-transform: uppercase;</code></li>
                    <li><code>font-weight: bold;</code></li>
                    <li><code>letter-spacing: 2px;</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 10,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .btn { padding: 15px 40px; background: #2c3e50; color: white; border: none; font-family: sans-serif; font-size: 16px; cursor: pointer; }
                </style>
                <div class="palco">
                    <button class="btn">finalizar</button>
                </div>`,
            respostasCertas: [
                ".btn{text-transform:uppercase;font-weight:bold;letter-spacing:2px;}",
                ".btn{font-weight:bold;text-transform:uppercase;letter-spacing:2px;}",
                ".btn{letter-spacing:2px;font-weight:bold;text-transform:uppercase;}"
            ]
        }
    ],
    // --- MISSÃO 8: INTERAÇÃO (Revisada e Sem Bugs) ---
    "css_adv_8": [
        {
            tipo: "editor",
            titulo: "1. O Estado Hover",
            conteudo: `
                <p>Mude a cor do botão ao passar o mouse.</p>
                <p>Digite: <code>.btn:hover { background: blue; }</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .btn { padding: 15px 30px; background: #333; color: white; border: none; font-family: sans-serif; font-size: 18px; cursor: pointer; transition: 0.3s; }
                </style>
                <div class="palco">
                    <button class="btn">Passe o Mouse</button>
                </div>`,
            respostasCertas: [".btn:hover{background:blue;}", ".btn:hover{background-color:blue;}"]
        },
        {
            tipo: "editor",
            titulo: "2. Efeito de Escala",
            conteudo: `
                <p>Vamos fazer o card crescer ao passar o mouse.</p>
                <p>Use o seletor <code>.card:hover</code> e defina a largura para <code>120px</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 150,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .card { width: 100px; height: 100px; background: #e74c3c; transition: 0.3s; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: white; font-family: sans-serif; font-weight: bold; }
                </style>
                <div class="palco">
                    <div class="card">HOVER</div>
                </div>`,
            respostasCertas: [".card:hover{width:120px;}"]
        },
        {
            tipo: "editor",
            titulo: "3. Links sem Sublinhado",
            conteudo: `
                <p>Remova o sublinhado padrão do link.</p>
                <p>Na classe <code>.link</code>, use <code>text-decoration: none;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #f5f6fa; }
                    .link { font-family: sans-serif; font-size: 24px; color: #3498db; }
                </style>
                <div class="palco">
                    <a href="#" class="link">Link Feio</a>
                </div>`,
            respostasCertas: [".link{text-decoration:none;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Sublinhado no Hover",
            conteudo: `
                <p>Faça o sublinhado aparecer só quando passar o mouse.</p>
                <p>Use <code>.menu:hover</code> e aplique <code>text-decoration: underline;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .menu { font-family: sans-serif; font-size: 20px; color: #333; text-decoration: none; cursor: pointer; padding: 10px; }
                </style>
                <div class="palco">
                    <span class="menu">Menu Item</span>
                </div>`,
            respostasCertas: [".menu:hover{text-decoration:underline;}"]
        },
        {
            tipo: "editor",
            titulo: "5. Botão 3D (Active)",
            conteudo: `
                <p>O estado <code>:active</code> acontece durante o clique.</p>
                <p>Use <code>.btn:active</code> e mude a escala: <code>transform: scale(0.95);</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .btn { width: 150px; height: 50px; background: #27ae60; color: white; border: none; border-radius: 8px; font-size: 18px; font-family: sans-serif; cursor: pointer; transition: 0.1s; box-shadow: 0 4px 0 #219150; }
                </style>
                <div class="palco">
                    <button class="btn">CLIQUE</button>
                </div>`,
            respostasCertas: [".btn:active{transform:scale(0.95);}"]
        },
        {
            tipo: "editor",
            titulo: "6. Cursor Personalizado",
            conteudo: `
                <p>Mude o ponteiro para a "mãozinha".</p>
                <p>Na classe <code>.clicavel</code>, use <code>cursor: pointer;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .clicavel { padding: 20px; background: #eee; border: 1px solid #ccc; font-family: sans-serif; }
                </style>
                <div class="palco">
                    <div class="clicavel">Eu pareço texto, mas sou botão</div>
                </div>`,
            respostasCertas: [".clicavel{cursor:pointer;}"]
        },
        {
            tipo: "editor",
            titulo: "7. Transição Suave",
            conteudo: `
                <p>Suavize a animação.</p>
                <p>Na classe <code>.suave</code>, adicione <code>transition: 1s;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "s",
            limite: 5,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .suave { width: 80px; height: 80px; background: #8e44ad; border-radius: 50%; cursor: pointer; }
                    .suave:hover { background: #e74c3c; transform: scale(1.2); }
                </style>
                <div class="palco">
                    <div class="suave"></div>
                </div>`,
            respostasCertas: [".suave{transition:1s;}"]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: Ícone Giratório",
            conteudo: `
                <p>Vamos fazer o ícone girar ao passar o mouse.</p>
                <p>No seletor <code>.icone:hover</code>, aplique:</p>
                <p><code>transform: rotate(180deg);</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            // Unidade 'deg' para graus. O regex [a-z] aceita.
            unidade: "deg",
            limite: 360,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #f5f6fa; }
                    .icone { width: 60px; height: 60px; background: #3498db; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 30px; transition: 0.5s; cursor: pointer; box-shadow: 0 4px 0 #2980b9; }
                </style>
                <div class="palco">
                    <div class="icone">⚙️</div>
                </div>`,
            // Resposta única, simples e impossível de errar a sintaxe
            respostasCertas: [".icone:hover{transform:rotate(180deg);}"]
        }
    ],
    // --- MISSÃO 9: O FUNDO DO MUNDO (Escada de Aprendizado) ---
    "css_adv_9": [
        {
            tipo: "editor",
            titulo: "1. Cor de Fundo (Introdução)",
            conteudo: `
                <p>Vamos começar pintando o fundo. A propriedade é <code>background-color</code>.</p>
                <p>Na classe <code>.card</code>, digite:</p>
                <p><code>background-color: #3498db;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .card { width: 200px; height: 120px; border: 2px solid #333; border-radius: 8px; color: white; display: flex; align-items: center; justify-content: center; font-family: sans-serif; }
                </style>
                <div class="palco">
                    <div class="card">Azul</div>
                </div>`,
            respostasCertas: [".card{background-color:#3498db;}", ".card{background:#3498db;}"]
        },
        {
            tipo: "editor",
            titulo: "2. Imagem de Fundo (Introdução)",
            conteudo: `
                <p>Para colocar uma imagem, usamos <code>background-image</code> e a função <code>url()</code>.</p>
                <p>No id <code>#tela</code>, digite:</p>
                <p><code>background-image: url('https://placehold.co/100');</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    #tela { width: 150px; height: 150px; border: 4px solid #2c3e50; background-color: #ecf0f1; border-radius: 10px; }
                </style>
                <div class="palco">
                    <div id="tela"></div>
                </div>`,
            respostasCertas: ["#tela{background-image:url('https://placehold.co/100');}"]
        },
        {
            tipo: "editor",
            titulo: "3. Repetição (Prática)",
            conteudo: `
                <p>A imagem está se repetindo. Vamos corrigir.</p>
                <p>Você já viu propriedades de fundo. Agora use <code>background-repeat</code> com o valor <code>no-repeat</code> na classe <code>.fundo</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .fundo { width: 200px; height: 200px; border: 1px solid #ccc; background-image: url('https://placehold.co/50'); background-color: #eee; }
                </style>
                <div class="palco">
                    <div class="fundo"></div>
                </div>`,
            respostasCertas: [".fundo{background-repeat:no-repeat;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Posição (Prática)",
            conteudo: `
                <p>A imagem está no canto. Vamos centralizar.</p>
                <p>Use a propriedade <code>background-position</code> com o valor <code>center</code> na classe <code>.fundo</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .fundo { width: 200px; height: 200px; border: 1px solid #ccc; background-image: url('https://placehold.co/50'); background-repeat: no-repeat; background-color: #eee; }
                </style>
                <div class="palco">
                    <div class="fundo"></div>
                </div>`,
            respostasCertas: [".fundo{background-position:center;}"]
        },
        {
            tipo: "editor",
            titulo: "5. Tamanho Cover (Introdução)",
            conteudo: `
                <p>Para a imagem cobrir todo o espaço sem distorcer, usamos uma propriedade especial.</p>
                <p>No id <code>#banner</code>, digite:</p>
                <p><code>background-size: cover;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    #banner { width: 250px; height: 150px; background-image: url('https://placehold.co/100'); background-repeat: no-repeat; background-position: center; border: 2px solid #333; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; text-shadow: 1px 1px 0 #000; }
                </style>
                <div class="palco">
                    <div id="banner">BANNER</div>
                </div>`,
            respostasCertas: ["#banner{background-size:cover;}"]
        },
        {
            tipo: "editor",
            titulo: "6. Gradiente Linear (Introdução)",
            conteudo: `
                <p>Degradês são criados como se fossem imagens.</p>
                <p>Na classe <code>.gradiente</code>, digite:</p>
                <p><code>background: linear-gradient(to right, black, white);</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .gradiente { width: 200px; height: 100px; border: 1px solid #ddd; border-radius: 8px; }
                </style>
                <div class="palco">
                    <div class="gradiente"></div>
                </div>`,
            respostasCertas: [
                ".gradiente{background:linear-gradient(to right,black,white);}",
                ".gradiente{background:linear-gradient(to right, black, white);}"
            ]
        },
        {
            tipo: "editor",
            titulo: "7. Gradiente Radial (Prática)",
            conteudo: `
                <p>Agora um gradiente circular. A sintaxe é parecida.</p>
                <p>Use <code>background</code> com o valor <code>radial-gradient(circle, white, black);</code> na classe <code>.esfera</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #555; }
                    .esfera { width: 100px; height: 100px; border-radius: 50%; }
                </style>
                <div class="palco">
                    <div class="esfera"></div>
                </div>`,
            respostasCertas: [
                ".esfera{background:radial-gradient(circle,white,black);}",
                ".esfera{background:radial-gradient(circle, white, black);}"
            ]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: Hero Section",
            conteudo: `
                <p>Combine o que aprendeu!</p>
                <p>Na classe <code>.hero</code>, defina duas propriedades:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li>Cor de fundo (<code>background-color</code>) para <code>#2c3e50</code>.</li>
                    <li>Tamanho do fundo (<code>background-size</code>) para <code>cover</code>.</li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .hero { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-family: sans-serif; font-size: 20px; }
                </style>
                <div class="palco">
                    <div class="hero">Bem-vindo</div>
                </div>`,
            respostasCertas: [
                ".hero{background-color:#2c3e50;background-size:cover;}",
                ".hero{background-size:cover;background-color:#2c3e50;}"
            ]
        }
    ],

    // --- MISSÃO 10: DECORAÇÃO (Escada de Aprendizado) ---
    "css_adv_10": [
        {
            tipo: "editor",
            titulo: "1. Cantos Arredondados (Introdução)",
            conteudo: `
                <p>Vamos suavizar as pontas. A propriedade é <code>border-radius</code>.</p>
                <p>Na classe <code>.box</code>, digite:</p>
                <p><code>border-radius: 10px;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 50,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #f5f6fa; }
                    .box { width: 100px; height: 100px; background: #e74c3c; border: 2px solid #c0392b; }
                </style>
                <div class="palco">
                    <div class="box"></div>
                </div>`,
            respostasCertas: [".box{border-radius:10px;}"]
        },
        {
            tipo: "editor",
            titulo: "2. Formato de Pílula (Prática)",
            conteudo: `
                <p>Para botões redondinhos, usamos um valor alto.</p>
                <p>No id <code>#btn</code>, aplique <code>border-radius</code> com valor de <code>50px</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 100,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    #btn { padding: 15px 40px; background: #3498db; color: white; border: none; font-family: sans-serif; font-size: 16px; cursor: pointer; }
                </style>
                <div class="palco">
                    <button id="btn">Click Me</button>
                </div>`,
            respostasCertas: ["#btn{border-radius:50px;}"]
        },
        {
            tipo: "editor",
            titulo: "3. Círculo Perfeito (Prática)",
            conteudo: `
                <p>Se o elemento é quadrado, usar porcentagem o torna um círculo.</p>
                <p>Na classe <code>.avatar</code>, defina o arredondamento como <code>50%</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "%",
            limite: 50,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .avatar { width: 80px; height: 80px; background: url('https://placehold.co/80'); background-size: cover; border: 3px solid #333; }
                </style>
                <div class="palco">
                    <div class="avatar"></div>
                </div>`,
            respostasCertas: [".avatar{border-radius:50%;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Sombra Simples (Introdução)",
            conteudo: `
                <p>Vamos dar profundidade. A sintaxe é: X Y Blur Cor.</p>
                <p>Na classe <code>.card</code>, digite:</p>
                <p><code>box-shadow: 5px 5px 0px black;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 50,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #eee; }
                    .card { width: 120px; height: 120px; background: white; border: 2px solid black; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-weight: bold; }
                </style>
                <div class="palco">
                    <div class="card">Card</div>
                </div>`,
            respostasCertas: [
                ".card{box-shadow:5px 5px 0px black;}",
                ".card{box-shadow:5px 5px 0 black;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "5. Opacidade (Introdução)",
            conteudo: `
                <p>Para deixar transparente, usamos <code>opacity</code> (0 a 1).</p>
                <p>No id <code>#fantasma</code>, digite:</p>
                <p><code>opacity: 0.5;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: #2c3e50; }
                    #fantasma { width: 100px; height: 100px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 30px; }
                </style>
                <div class="palco">
                    <div id="fantasma">👻</div>
                </div>`,
            respostasCertas: ["#fantasma{opacity:0.5;}"]
        },
        {
            tipo: "editor",
            titulo: "6. Filtro Blur (Introdução)",
            conteudo: `
                <p>Filtros aplicam efeitos visuais.</p>
                <p>Na classe <code>.borrado</code>, digite:</p>
                <p><code>filter: blur(2px);</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 10,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .borrado { font-family: sans-serif; font-size: 40px; font-weight: bold; color: #e74c3c; }
                </style>
                <div class="palco">
                    <div class="borrado">SEGREDO</div>
                </div>`,
            respostasCertas: [".borrado{filter:blur(2px);}"]
        },
        {
            tipo: "editor",
            titulo: "7. Filtro Cinza (Prática)",
            conteudo: `
                <p>Transforme cores em preto e branco. A propriedade é a mesma da anterior.</p>
                <p>Use <code>filter</code> com o valor <code>grayscale(100%)</code> na classe <code>.img</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "%",
            limite: 100,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .img { width: 100px; height: 100px; background: linear-gradient(45deg, red, blue); border-radius: 8px; }
                </style>
                <div class="palco">
                    <div class="img"></div>
                </div>`,
            respostasCertas: [".img{filter:grayscale(100%);}"]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: Efeito Vidro",
            conteudo: `
                <p>Agora é com você!</p>
                <p>No seletor <code>.vidro</code>, aplique:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li><code>backdrop-filter</code> com <code>blur(5px)</code>.</li>
                    <li><code>background-color</code> com <code>rgba(255,255,255,0.2)</code>.</li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 10,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background: linear-gradient(135deg, #8e44ad, #3498db); }
                    .vidro { width: 200px; height: 100px; border: 1px solid rgba(255,255,255,0.3); border-radius: 10px; color: white; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-weight: bold; }
                </style>
                <div class="palco">
                    <div class="vidro">Glassmorphism</div>
                </div>`,
            respostasCertas: [
                ".vidro{background-color:rgba(255,255,255,0.2);backdrop-filter:blur(5px);}",
                ".vidro{backdrop-filter:blur(5px);background-color:rgba(255,255,255,0.2);}"
            ]
        }
    ],
    // --- MISSÃO 11: A GUILDA (Flex Container) ---
    "css_adv_11": [
        {
            tipo: "editor",
            titulo: "1. Formar Grupo (Introdução)",
            conteudo: `
                <p>Para organizar a guilda, precisamos ativar o poder do Flexbox.</p>
                <p>Na classe <code>.guilda</code>, digite:</p>
                <p><code>display: flex;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; }
                    .guilda { background: #3e2723; padding: 10px; border: 4px solid #5d4037; border-radius: 8px; }
                    .heroi { width: 50px; height: 50px; background: #f1c40f; margin: 5px; border: 2px solid #fff; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 24px; }
                    /* Sem flex, os heróis ficam um embaixo do outro */
                </style>
                <div class="palco">
                    <div class="guilda">
                        <div class="heroi">🛡️</div>
                        <div class="heroi">⚔️</div>
                        <div class="heroi">🏹</div>
                    </div>
                </div>`,
            respostasCertas: [".guilda{display:flex;}"]
        },
        {
            tipo: "editor",
            titulo: "2. A Torre (Introdução)",
            conteudo: `
                <p>Os magos precisam subir a torre em fila única.</p>
                <p>Mude a direção para coluna. Na classe <code>.torre</code>, digite:</p>
                <p><code>flex-direction: column;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; }
                    .torre { display: flex; background: #2c3e50; padding: 10px; border: 4px solid #34495e; width: 80px; margin: 0 auto; }
                    .mago { width: 60px; height: 60px; background: #8e44ad; margin: 5px; border-radius: 50%; border: 2px solid #9b59b6; display: flex; align-items: center; justify-content: center; font-size: 30px; }
                </style>
                <div class="palco">
                    <div class="torre">
                        <div class="mago">🧙‍♂️</div>
                        <div class="mago">🧙‍♀️</div>
                        <div class="mago">✨</div>
                    </div>
                </div>`,
            respostasCertas: [".torre{flex-direction:column;}"]
        },
        {
            tipo: "editor",
            titulo: "3. Emboscada (Prática)",
            conteudo: `
                <p>Inimigos à direita! Inverta a ordem da linha para atacar.</p>
                <p>Use <code>flex-direction</code> com o valor <code>row-reverse</code> na classe <code>.grupo</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; }
                    .grupo { display: flex; background: #27ae60; padding: 10px; border: 2px solid #2ecc71; border-radius: 8px; }
                    .unidade { width: 50px; height: 50px; background: #c0392b; margin: 5px; border-radius: 4px; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-family: sans-serif; }
                </style>
                <div class="palco">
                    <div class="grupo">
                        <div class="unidade">1</div>
                        <div class="unidade">2</div>
                        <div class="unidade">3</div>
                    </div>
                </div>`,
            respostasCertas: [".grupo{flex-direction:row-reverse;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Pilha de Poções (Prática)",
            conteudo: `
                <p>A poção mais importante (1) ficou no fundo. Inverta a coluna.</p>
                <p>Use <code>flex-direction</code> com o valor <code>column-reverse</code> na classe <code>.prateleira</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; }
                    .prateleira { display: flex; background: #d35400; padding: 10px; border: 4px solid #e67e22; width: 80px; margin: 0 auto; height: 200px; }
                    .pocao { width: 60px; height: 60px; background: #e74c3c; margin: 5px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-family: sans-serif; }
                    .azul { background: #3498db; }
                    .verde { background: #2ecc71; }
                </style>
                <div class="palco">
                    <div class="prateleira">
                        <div class="pocao">1</div>
                        <div class="pocao azul">2</div>
                        <div class="pocao verde">3</div>
                    </div>
                </div>`,
            respostasCertas: [".prateleira{flex-direction:column-reverse;}"]
        },
        {
            tipo: "editor",
            titulo: "5. Formação de Escudos (Prática)",
            conteudo: `
                <p>Os escudos estão batendo uns nos outros. Dê espaço.</p>
                <p>Na classe <code>.falange</code>, adicione <code>gap: 20px;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 50,
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; }
                    .falange { display: flex; background: #7f8c8d; padding: 20px; border-radius: 8px; }
                    .escudo { width: 50px; height: 60px; background: #34495e; border: 2px solid #bdc3c7; border-radius: 0 0 25px 25px; }
                </style>
                <div class="palco">
                    <div class="falange">
                        <div class="escudo"></div>
                        <div class="escudo"></div>
                        <div class="escudo"></div>
                    </div>
                </div>`,
            respostasCertas: [".falange{gap:20px;}"]
        },
        {
            tipo: "editor",
            titulo: "6. Inventário Cheio (Introdução)",
            conteudo: `
                <p>Os itens estão vazando do inventário. Permita que eles quebrem linha.</p>
                <p>Na classe <code>.mochila</code>, digite: <code>flex-wrap: wrap;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; }
                    .mochila { display: flex; width: 150px; background: #8d6e63; border: 4px solid #5d4037; padding: 5px; gap: 5px; }
                    .item { width: 40px; height: 40px; background: #f1c40f; border: 1px solid #d4ac0d; }
                </style>
                <div class="palco">
                    <div class="mochila">
                        <div class="item"></div>
                        <div class="item"></div>
                        <div class="item"></div>
                        <div class="item"></div>
                        <div class="item"></div>
                        <div class="item"></div>
                    </div>
                </div>`,
            respostasCertas: [".mochila{flex-wrap:wrap;}"]
        },
        {
            tipo: "editor",
            titulo: "7. O Mapa (Atalho)",
            conteudo: `
                <p>Organize os pedaços do mapa em colunas que quebram linha.</p>
                <p>Na classe <code>.mapa</code>, use o atalho: <code>flex-flow: column wrap;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; }
                    .mapa { display: flex; width: 200px; height: 120px; background: #e0d5b9; border: 2px dashed #8d6e63; }
                    .pedaco { width: 60px; height: 50px; background: #bcaaa4; margin: 2px; border: 1px solid #795548; }
                </style>
                <div class="palco">
                    <div class="mapa">
                        <div class="pedaco"></div>
                        <div class="pedaco"></div>
                        <div class="pedaco"></div>
                        <div class="pedaco"></div>
                    </div>
                </div>`,
            respostasCertas: [".mapa{flex-flow:column wrap;}"]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: Mural de Missões",
            conteudo: `
                <p>Organize os avisos no mural.</p>
                <p>Na classe <code>.mural</code>, configure:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li>Direção: <code>column</code></li>
                    <li>Espaçamento (gap): <code>10px</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 20,
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; }
                    .mural { display: flex; background: #5d4037; padding: 15px; border: 4px solid #3e2723; border-radius: 8px; width: 150px; }
                    .aviso { background: #fdfefe; padding: 8px; color: #333; font-family: sans-serif; font-size: 12px; border: 1px solid #ccc; box-shadow: 1px 1px 3px rgba(0,0,0,0.3); }
                </style>
                <div class="palco">
                    <div class="mural">
                        <div class="aviso">Procura-se Dragão</div>
                        <div class="aviso">Vende-se Espada</div>
                        <div class="aviso">Festa na Taverna</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".mural{flex-direction:column;gap:10px;}",
                ".mural{gap:10px;flex-direction:column;}"
            ]
        }
    ],
    // --- MISSÃO 12: CAMPO DE BATALHA (Justify Content - Corrigida) ---
    "css_adv_12": [
        {
            tipo: "editor",
            titulo: "1. Linha de Frente (Introdução)",
            conteudo: `
                <p>O <code>justify-content</code> alinha os itens onde sobra espaço.</p>
                <p>Mova o guerreiro para o centro.</p>
                <p>Na classe <code>.campo</code>, digite: <code>justify-content: center;</code></p>
            `,
            esconderSeletor: true,
            seletor: "", // O aluno digita o seletor .campo, o nesting cuida do resto
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* width: 100% garante que sobre espaço para mover */
                    .campo { display: flex; background: #558b2f; height: 80px; width: 100%; align-items: center; border: 4px solid #33691e; border-radius: 8px; }
                    .guerreiro { width: 40px; height: 40px; background: #c0392b; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 4px 0 #922b21; }
                </style>
                <div class="palco">
                    <div class="campo">
                        <div class="guerreiro"></div>
                    </div>
                </div>`,
            respostasCertas: [".campo{justify-content:center;}"]
        },
        {
            tipo: "editor",
            titulo: "2. Arqueiros (Introdução)",
            conteudo: `
                <p>Os arqueiros devem ficar na retaguarda (fim da linha).</p>
                <p>Na classe <code>.retaguarda</code>, digite: <code>justify-content: flex-end;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .retaguarda { display: flex; background: #689f38; height: 80px; width: 100%; align-items: center; border: 2px solid #33691e; }
                    .arqueiro { width: 30px; height: 40px; background: #27ae60; border-radius: 5px 5px 0 0; }
                </style>
                <div class="palco">
                    <div class="retaguarda">
                        <div class="arqueiro"></div>
                    </div>
                </div>`,
            respostasCertas: [".retaguarda{justify-content:flex-end;}"]
        },
        {
            tipo: "editor",
            titulo: "3. Guardiões (Prática)",
            conteudo: `
                <p>Coloque um guardião em cada ponta do portão.</p>
                <p>Use <code>justify-content</code> com valor <code>space-between</code> na classe <code>.portao</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .portao { display: flex; background: #3e2723; padding: 10px; width: 100%; border-top: 5px solid #1b120f; box-sizing: border-box; }
                    .guardiao { width: 30px; height: 50px; background: #7f8c8d; border: 2px solid #2c3e50; }
                </style>
                <div class="palco">
                    <div class="portao">
                        <div class="guardiao"></div>
                        <div class="guardiao"></div>
                    </div>
                </div>`,
            respostasCertas: [".portao{justify-content:space-between;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Mercadores (Prática)",
            conteudo: `
                <p>Dê espaço ao redor de cada barraca.</p>
                <p>Use <code>justify-content</code> com valor <code>space-around</code> na classe <code>.mercado</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .mercado { display: flex; background: #e67e22; height: 80px; width: 100%; align-items: center; border-radius: 4px; border-bottom: 4px solid #d35400; }
                    .barraca { width: 40px; height: 30px; background: #ecf0f1; border-radius: 4px 4px 0 0; border: 1px solid #bdc3c7; }
                </style>
                <div class="palco">
                    <div class="mercado">
                        <div class="barraca"></div>
                        <div class="barraca"></div>
                        <div class="barraca"></div>
                    </div>
                </div>`,
            respostasCertas: [".mercado{justify-content:space-around;}"]
        },
        {
            tipo: "editor",
            titulo: "5. Pedras Mágicas (Prática)",
            conteudo: `
                <p>Para um ritual perfeito, o espaço deve ser idêntico entre todas as pedras (inclusive nas bordas).</p>
                <p>Use <code>justify-content</code> com valor <code>space-evenly</code> na classe <code>.altar</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .altar { display: flex; background: #2c3e50; padding: 15px; width: 100%; border: 2px solid #34495e; border-radius: 50px; box-sizing: border-box; }
                    .runa { width: 20px; height: 40px; background: #9b59b6; border: 1px solid #8e44ad; box-shadow: 0 0 5px #9b59b6; }
                </style>
                <div class="palco">
                    <div class="altar">
                        <div class="runa"></div>
                        <div class="runa"></div>
                        <div class="runa"></div>
                    </div>
                </div>`,
            respostasCertas: [".altar{justify-content:space-evenly;}"]
        },
        {
            tipo: "editor",
            titulo: "6. O Início (Prática)",
            conteudo: `
                <p>O exército se dispersou! Mande todos voltarem para o início (esquerda).</p>
                <p>Use <code>justify-content</code> com valor <code>flex-start</code> na classe <code>.tropa</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Eles estão centralizados propositalmente, o aluno tem que arrumar */
                    .tropa { display: flex; justify-content: center; background: #7f8c8d; height: 60px; width: 100%; align-items: center; border: 2px solid #2c3e50; }
                    .soldado { width: 20px; height: 20px; background: #2c3e50; margin: 2px; border-radius: 50%; }
                </style>
                <div class="palco">
                    <div class="tropa">
                        <div class="soldado"></div>
                        <div class="soldado"></div>
                        <div class="soldado"></div>
                    </div>
                </div>`,
            respostasCertas: [".tropa{justify-content:flex-start;}"]
        },
        {
            tipo: "editor",
            titulo: "7. Reunião de Estratégia",
            conteudo: `
                <p>O General quer falar com os líderes no centro da mesa.</p>
                <p>Na classe <code>.mesa-guerra</code>, centralize o conteúdo.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .mesa-guerra { display: flex; background: #5d4037; height: 100px; width: 100%; align-items: center; border-radius: 8px; border: 4px solid #3e2723; }
                    .lider { width: 40px; height: 40px; background: #f1c40f; border: 2px solid #b7950b; margin: 0 5px; }
                </style>
                <div class="palco">
                    <div class="mesa-guerra">
                        <div class="lider"></div>
                        <div class="lider"></div>
                    </div>
                </div>`,
            respostasCertas: [".mesa-guerra{justify-content:center;}"]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: O Rei",
            conteudo: `
                <p>O Rei exige ficar no centro do trono.</p>
                <p>Configure a classe <code>.trono</code> para alinhar horizontalmente no <code>center</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .trono { display: flex; background: #c0392b; height: 100px; width: 100%; align-items: center; border: 4px solid #922b21; border-radius: 8px 8px 0 0; }
                    .rei { width: 50px; height: 60px; background: #f1c40f; border: 2px solid #b7950b; border-radius: 10px 10px 0 0; position: relative; }
                    .rei::after { content: '👑'; position: absolute; top: -20px; left: 10px; font-size: 24px; }
                </style>
                <div class="palco">
                    <div class="trono">
                        <div class="rei"></div>
                    </div>
                </div>`,
            respostasCertas: [".trono{justify-content:center;}"]
        }
    ],
    // --- MISSÃO 13: A MASMORRA VERTICAL (Align Items - Corrigida e Testada) ---
    "css_adv_13": [
        {
            tipo: "editor",
            titulo: "1. Levitação (Introdução)",
            conteudo: `
                <p>O <code>align-items</code> alinha no eixo vertical.</p>
                <p>O mago caiu no chão! Faça ele flutuar no meio.</p>
                <p>Na classe <code>.sala</code>, digite: <code>align-items: center;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Começa no padrão (stretch) ou flex-start, vamos forçar o erro visual */
                    .sala { display: flex; align-items: flex-end; height: 150px; background: #2c3e50; border: 4px solid #8e44ad; width: 100%; box-sizing: border-box; }
                    .mago { width: 50px; height: 60px; background: #9b59b6; color: white; display: flex; align-items: center; justify-content: center; font-size: 30px; border-radius: 4px; border: 2px solid white; }
                </style>
                <div class="palco">
                    <div class="sala">
                        <div class="mago">🧙‍♂️</div>
                    </div>
                </div>`,
            respostasCertas: [".sala{align-items:center;}"]
        },
        {
            tipo: "editor",
            titulo: "2. O Fosso (Introdução)",
            conteudo: `
                <p>Os esqueletos estão flutuando. Jogue-os para o fundo.</p>
                <p>Na classe <code>.poco</code>, digite: <code>align-items: flex-end;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Começa no topo (flex-start) */
                    .poco { display: flex; align-items: flex-start; height: 150px; background: #212121; border-bottom: 5px solid #c0392b; width: 100%; box-sizing: border-box; }
                    .esqueleto { width: 40px; height: 40px; background: #ecf0f1; margin: 5px; border-radius: 4px; border: 1px solid #bdc3c7; display: flex; align-items: center; justify-content: center; }
                </style>
                <div class="palco">
                    <div class="poco">
                        <div class="esqueleto">💀</div>
                        <div class="esqueleto">💀</div>
                    </div>
                </div>`,
            respostasCertas: [".poco{align-items:flex-end;}"]
        },
        {
            tipo: "editor",
            titulo: "3. Morcegos no Teto (Prática)",
            conteudo: `
                <p>Os morcegos caíram no chão. Coloque-os no topo.</p>
                <p>Use <code>align-items</code> com valor <code>flex-start</code> na classe <code>.caverna</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Começa no chão (flex-end) para você arrumar */
                    .caverna { display: flex; align-items: flex-end; height: 150px; background: #34495e; border-top: 5px solid #2c3e50; width: 100%; box-sizing: border-box; }
                    .morcego { width: 40px; height: 30px; background: #2c3e50; margin: 10px; border-radius: 0 0 10px 10px; color: white; text-align: center; display: flex; align-items: center; justify-content: center; }
                </style>
                <div class="palco">
                    <div class="caverna">
                        <div class="morcego">🦇</div>
                        <div class="morcego">🦇</div>
                    </div>
                </div>`,
            respostasCertas: [".caverna{align-items:flex-start;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Teias de Aranha (Prática)",
            conteudo: `
                <p>As aranhas também caíram. Mande elas para o teto.</p>
                <p>Use <code>flex-start</code> na classe <code>.ninho</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Começa no chão (flex-end) */
                    .ninho { display: flex; align-items: flex-end; height: 150px; background: #212121; border: 1px solid #424242; width: 100%; box-sizing: border-box; }
                    .aranha { width: 30px; height: 30px; background: #e74c3c; margin: 5px; border-radius: 50%; border: 1px solid red; display: flex; align-items: center; justify-content: center; font-size: 20px; }
                </style>
                <div class="palco">
                    <div class="ninho">
                        <div class="aranha">🕷️</div>
                        <div class="aranha">🕷️</div>
                    </div>
                </div>`,
            respostasCertas: [".ninho{align-items:flex-start;}"]
        },
        {
            tipo: "editor",
            titulo: "5. Pilares (Introdução)",
            conteudo: `
                <p>Para esticar do chão ao teto, usamos <code>stretch</code>.</p>
                <p>Na classe <code>.templo</code>, digite: <code>align-items: stretch;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* AQUI ESTAVA O BUG: Começava sem align-items (padrão stretch). 
                       Agora forçamos 'center' para eles ficarem pequenos inicialmente. */
                    .templo { display: flex; align-items: center; height: 150px; background: #fdfefe; border: 2px solid #bdc3c7; width: 100%; padding: 0 20px; gap: 20px; box-sizing: border-box; }
                    /* Sem height fixo, apenas min-height para aparecer */
                    .pilar { width: 30px; min-height: 40px; background: #ecf0f1; border: 1px solid #95a5a6; display: flex; justify-content: center; align-items: center; writing-mode: vertical-rl; color: #7f8c8d; }
                </style>
                <div class="palco">
                    <div class="templo">
                        <div class="pilar">I</div>
                        <div class="pilar">II</div>
                        <div class="pilar">III</div>
                    </div>
                </div>`,
            respostasCertas: [".templo{align-items:stretch;}"]
        },
        {
            tipo: "editor",
            titulo: "6. Grades da Prisão (Prática)",
            conteudo: `
                <p>As grades estão curtas. Faça elas cobrirem toda a altura.</p>
                <p>Use <code>align-items: stretch;</code> na classe <code>.prisao</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* CORREÇÃO DO BUG: Forçamos align-items: flex-start para as barras ficarem curtas no topo */
                    .prisao { display: flex; align-items: flex-start; height: 150px; background: #333; width: 100%; padding: 0 10px; gap: 15px; box-sizing: border-box; }
                    /* Barra sem height fixo, apenas min-height */
                    .barra { width: 10px; min-height: 30px; background: #7f8c8d; border: 1px solid #95a5a6; }
                </style>
                <div class="palco">
                    <div class="prisao">
                        <div class="barra"></div>
                        <div class="barra"></div>
                        <div class="barra"></div>
                        <div class="barra"></div>
                    </div>
                </div>`,
            respostasCertas: [".prisao{align-items:stretch;}"]
        },
        {
            tipo: "editor",
            titulo: "7. Biblioteca Antiga (Prática)",
            conteudo: `
                <p>Os livros estão desalinhados. Alinhe pela base do texto.</p>
                <p>Use <code>align-items</code> com valor <code>baseline</code> na classe <code>.estante</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Começa no topo */
                    .estante { display: flex; align-items: flex-start; height: 120px; background: #5d4037; width: 100%; border-bottom: 10px solid #3e2723; box-sizing: border-box; }
                    .livro { background: #f1c40f; margin: 5px; padding: 5px; color: #3e2723; font-weight: bold; }
                    .grande { font-size: 30px; height: 60px; }
                    .pequeno { font-size: 14px; height: 30px; }
                </style>
                <div class="palco">
                    <div class="estante">
                        <div class="livro grande">TOMO</div>
                        <div class="livro pequeno">nota</div>
                        <div class="livro">Livro</div>
                    </div>
                </div>`,
            respostasCertas: [".estante{align-items:baseline;}"]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: O Tesouro Final",
            conteudo: `
                <p>O baú do tesouro deve ficar <strong>exatamente no centro</strong> da sala (horizontal e vertical).</p>
                <p>Configure a classe <code>.sala-tesouro</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Começa errado (topo esquerda) */
                    .sala-tesouro { display: flex; justify-content: flex-start; align-items: flex-start; height: 180px; width: 100%; background: #f39c12; border: 4px solid #d35400; box-sizing: border-box; }
                    .bau { width: 60px; height: 50px; background: #c0392b; border: 2px solid #fff; border-radius: 10px 10px 0 0; display: flex; justify-content: center; align-items: center; font-size: 24px; color: white; }
                </style>
                <div class="palco">
                    <div class="sala-tesouro">
                        <div class="bau">💎</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".sala-tesouro{justify-content:center;align-items:center;}",
                ".sala-tesouro{align-items:center;justify-content:center;}"
            ]
        }
    ],

    // --- MISSÃO 14: O TESOURO (Flex Item Sizing - 8 Fases) ---
    "css_adv_14": [
        {
            tipo: "editor",
            titulo: "1. Dividindo Espólios (Introdução)",
            conteudo: `
                <p>O <code>flex-grow</code> diz o quanto o item deve crescer para ocupar espaço.</p>
                <p>Faça a barra de ouro preencher tudo. Na classe <code>.ouro</code>, digite: <code>flex-grow: 1;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .bau { display: flex; width: 100%; background: #3e2723; padding: 10px; gap: 5px; box-sizing: border-box; }
                    .prata { width: 50px; height: 50px; background: #bdc3c7; border: 1px solid white; display:flex; align-items:center; justify-content:center; }
                    .ouro { height: 50px; background: #f1c40f; border: 1px solid #f39c12; display:flex; align-items:center; justify-content:center; font-weight:bold; }
                </style>
                <div class="palco">
                    <div class="bau">
                        <div class="prata">Prata</div>
                        <div class="ouro">Ouro</div>
                        <div class="prata">Prata</div>
                    </div>
                </div>`,
            respostasCertas: [".ouro{flex-grow:1;}"]
        },
        {
            tipo: "editor",
            titulo: "2. A Parte do Rei (Prática)",
            conteudo: `
                <p>O Rei quer pegar 2x mais que os soldados.</p>
                <p>Os soldados têm grow 1. Defina <code>flex-grow: 2;</code> para o <code>.rei</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .mesa { display: flex; width: 100%; background: #2c3e50; padding: 10px; gap: 5px; box-sizing: border-box; }
                    .soldado { flex-grow: 1; height: 50px; background: #7f8c8d; color: white; display:flex; align-items:center; justify-content:center; }
                    .rei { height: 50px; background: #e74c3c; color: white; display:flex; align-items:center; justify-content:center; font-weight:bold; border: 2px solid gold; }
                </style>
                <div class="palco">
                    <div class="mesa">
                        <div class="soldado">1x</div>
                        <div class="rei">Rei</div>
                        <div class="soldado">1x</div>
                    </div>
                </div>`,
            respostasCertas: [".rei{flex-grow:2;}"]
        },
        {
            tipo: "editor",
            titulo: "3. A Fome do Gigante (Prática)",
            conteudo: `
                <p>O gigante quer comer quase tudo! Dê a ele uma fatia enorme.</p>
                <p>Na classe <code>.gigante</code>, defina <code>flex-grow: 4;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .banquete { display: flex; width: 100%; background: #5d4037; padding: 10px; gap: 5px; box-sizing: border-box; }
                    .humano { flex-grow: 1; height: 50px; background: #90caf9; display:flex; align-items:center; justify-content:center; }
                    .gigante { height: 50px; background: #2e7d32; color: white; font-weight: bold; display:flex; align-items:center; justify-content:center; border: 2px solid #a5d6a7; }
                </style>
                <div class="palco">
                    <div class="banquete">
                        <div class="humano">🧑</div>
                        <div class="gigante">GIGANTE</div>
                        <div class="humano">🧑</div>
                    </div>
                </div>`,
            respostasCertas: [".gigante{flex-grow:4;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Escudo Indestrutível (Introdução)",
            conteudo: `
                <p>O <code>flex-shrink: 0</code> impede que o item seja esmagado.</p>
                <p>Proteja o escudo. Na classe <code>.escudo</code>, digite: <code>flex-shrink: 0;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .inventario { display: flex; width: 200px; background: #8d6e63; padding: 5px; gap: 5px; overflow: hidden; }
                    .item { width: 100px; height: 50px; background: #d7ccc8; flex-shrink: 1; display:flex; align-items:center; justify-content:center; }
                    .escudo { width: 100px; height: 50px; background: #2ecc71; border: 2px solid #27ae60; color: white; display:flex; align-items:center; justify-content:center; }
                </style>
                <div class="palco">
                    <div class="inventario">
                        <div class="item">Lixo</div>
                        <div class="escudo">Escudo</div>
                        <div class="item">Lixo</div>
                    </div>
                </div>`,
            respostasCertas: [".escudo{flex-shrink:0;}"]
        },
        {
            tipo: "editor",
            titulo: "5. Tamanho da Espada (Introdução)",
            conteudo: `
                <p>O <code>flex-basis</code> define o tamanho ideal inicial.</p>
                <p>Defina o tamanho da espada para <code>150px</code> na classe <code>.espada</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 200,
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .armario { display: flex; width: 100%; background: #34495e; padding: 10px; gap: 10px; box-sizing: border-box; }
                    .adaga { flex-grow: 1; height: 40px; background: #95a5a6; }
                    .espada { flex-grow: 1; height: 40px; background: #3498db; border: 2px solid white; color: white; display:flex; align-items:center; justify-content:center; }
                </style>
                <div class="palco">
                    <div class="armario">
                        <div class="adaga"></div>
                        <div class="espada">Excalibur</div>
                        <div class="adaga"></div>
                    </div>
                </div>`,
            respostasCertas: [".espada{flex-basis:150px;}"]
        },
        {
            tipo: "editor",
            titulo: "6. Lança Longa (Prática)",
            conteudo: `
                <p>A lança precisa ser comprida antes de qualquer coisa.</p>
                <p>Defina <code>flex-basis: 200px;</code> para a <code>.lanca</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 300,
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .suporte { display: flex; width: 100%; background: #4e342e; padding: 10px; gap: 10px; box-sizing: border-box; }
                    .escudo-pq { flex-grow: 1; height: 40px; background: #bcaaa4; }
                    .lanca { flex-grow: 1; height: 40px; background: #ff7043; border: 2px solid white; color: white; display:flex; align-items:center; justify-content:center; }
                </style>
                <div class="palco">
                    <div class="suporte">
                        <div class="escudo-pq"></div>
                        <div class="lanca">Lança</div>
                        <div class="escudo-pq"></div>
                    </div>
                </div>`,
            respostasCertas: [".lanca{flex-basis:200px;}"]
        },
        {
            tipo: "editor",
            titulo: "7. O Atalho Mágico (Introdução)",
            conteudo: `
                <p>O atalho <code>flex: 1</code> faz o item crescer e encolher igualmente.</p>
                <p>Aplique <code>flex: 1;</code> na classe <code>.item</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .bau-magico { display: flex; width: 100%; background: #9b59b6; padding: 10px; gap: 5px; box-sizing: border-box; }
                    .item { height: 50px; background: #fdfefe; border: 1px solid #8e44ad; display:flex; align-items:center; justify-content:center; }
                </style>
                <div class="palco">
                    <div class="bau-magico">
                        <div class="item">?</div>
                        <div class="item">?</div>
                        <div class="item">?</div>
                    </div>
                </div>`,
            respostasCertas: [".item{flex:1;}"]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: Poção Dupla",
            conteudo: `
                <p>A poção grande deve ocupar o dobro do espaço das outras.</p>
                <p>Use o atalho <code>flex</code> com valor <code>2</code> na classe <code>.pocao-grande</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .cinto { display: flex; width: 100%; background: #3e2723; padding: 10px; gap: 5px; box-sizing: border-box; }
                    .pocao { flex: 1; height: 50px; background: #26a69a; border: 1px solid white; }
                    .pocao-grande { height: 50px; background: #e91e63; border: 2px solid white; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; }
                </style>
                <div class="palco">
                    <div class="cinto">
                        <div class="pocao"></div>
                        <div class="pocao-grande">2x</div>
                        <div class="pocao"></div>
                    </div>
                </div>`,
            respostasCertas: [".pocao-grande{flex:2;}"]
        }
    ],
    // --- MISSÃO 15: TÁTICAS DE COMBATE (Order & Align Self) ---
    "css_adv_15": [
        {
            tipo: "editor",
            titulo: "1. O Líder na Frente (Introdução)",
            conteudo: `
                <p>O <code>order</code> define a sequência visual. O padrão é 0.</p>
                <p>Se colocarmos um valor negativo, o item vai para o começo.</p>
                <p>Mova o Rei para a frente. Na classe <code>.rei</code>, digite: <code>order: -1;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .fila { display: flex; width: 100%; background: #3e2723; padding: 10px; gap: 10px; box-sizing: border-box; }
                    .soldado { width: 50px; height: 50px; background: #7f8c8d; display:flex; align-items:center; justify-content:center; }
                    .rei { width: 50px; height: 50px; background: #f1c40f; border: 2px solid #fff; font-size: 24px; display:flex; align-items:center; justify-content:center; }
                </style>
                <div class="palco">
                    <div class="fila">
                        <div class="soldado">🛡️</div>
                        <div class="soldado">🛡️</div>
                        <div class="rei">👑</div>
                    </div>
                </div>`,
            respostasCertas: [".rei{order:-1;}"]
        },
        {
            tipo: "editor",
            titulo: "2. O Espião (Introdução)",
            conteudo: `
                <p>Se colocarmos um valor positivo alto, o item vai para o final.</p>
                <p>Mande o espião para a retaguarda. Na classe <code>.espiao</code>, digite: <code>order: 5;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .fila { display: flex; width: 100%; background: #2c3e50; padding: 10px; gap: 10px; box-sizing: border-box; }
                    .guerreiro { width: 50px; height: 50px; background: #c0392b; }
                    .espiao { width: 50px; height: 50px; background: #212121; color: white; display:flex; align-items:center; justify-content:center; font-size: 24px; border: 1px dashed white; }
                </style>
                <div class="palco">
                    <div class="fila">
                        <div class="espiao">🕵️</div>
                        <div class="guerreiro"></div>
                        <div class="guerreiro"></div>
                    </div>
                </div>`,
            respostasCertas: [".espiao{order:5;}"]
        },
        {
            tipo: "editor",
            titulo: "3. Formação de Escolta (Prática)",
            conteudo: `
                <p>O Arqueiro (verde) precisa ficar entre os guerreiros.</p>
                <p>Os guerreiros têm ordem 1 e 3. Defina <code>order: 2;</code> para o <code>.arqueiro</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .escolta { display: flex; width: 100%; background: #5d4037; padding: 10px; gap: 10px; box-sizing: border-box; }
                    .g1 { width: 50px; height: 50px; background: #c0392b; order: 1; display:flex; justify-content:center; align-items:center; color:white; }
                    .g2 { width: 50px; height: 50px; background: #c0392b; order: 3; display:flex; justify-content:center; align-items:center; color:white; }
                    .arqueiro { width: 50px; height: 50px; background: #2ecc71; display:flex; justify-content:center; align-items:center; font-size: 24px; }
                </style>
                <div class="palco">
                    <div class="escolta">
                        <div class="arqueiro">🏹</div>
                        <div class="g1">1</div>
                        <div class="g2">3</div>
                    </div>
                </div>`,
            respostasCertas: [".arqueiro{order:2;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Inversão Tática (Prática)",
            conteudo: `
                <p>O Mago está vulnerável na frente! Mova-o para o final.</p>
                <p>Use a propriedade <code>order</code> com valor <code>10</code> na classe <code>.mago</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .grupo { display: flex; width: 100%; background: #4a148c; padding: 10px; gap: 10px; box-sizing: border-box; }
                    .tanque { width: 50px; height: 50px; background: #7f8c8d; }
                    .mago { width: 50px; height: 50px; background: #ab47bc; border: 2px solid white; display:flex; justify-content:center; align-items:center; font-size:24px; }
                </style>
                <div class="palco">
                    <div class="grupo">
                        <div class="mago">🧙</div>
                        <div class="tanque"></div>
                        <div class="tanque"></div>
                    </div>
                </div>`,
            respostasCertas: [".mago{order:10;}"]
        },
        {
            tipo: "editor",
            titulo: "5. O Rebelde (Introdução)",
            conteudo: `
                <p>O <code>align-self</code> permite que um item ignore o alinhamento do grupo.</p>
                <p>O grupo está no topo, mas o gigante quer ficar no chão. Na classe <code>.gigante</code>, digite: <code>align-self: flex-end;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .caverna { display: flex; align-items: flex-start; height: 150px; background: #3e2723; width: 100%; box-sizing: border-box; padding: 10px; gap: 10px; }
                    .goblin { width: 40px; height: 40px; background: #66bb6a; }
                    .gigante { width: 60px; height: 80px; background: #d84315; border: 2px solid white; }
                </style>
                <div class="palco">
                    <div class="caverna">
                        <div class="goblin"></div>
                        <div class="goblin"></div>
                        <div class="gigante"></div>
                    </div>
                </div>`,
            respostasCertas: [".gigante{align-self:flex-end;}"]
        },
        {
            tipo: "editor",
            titulo: "6. Levitação Solo (Prática)",
            conteudo: `
                <p>Todos estão no chão, mas o fantasma precisa flutuar no centro vertical.</p>
                <p>Use <code>align-self</code> com valor <code>center</code> na classe <code>.fantasma</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .cemiterio { display: flex; align-items: flex-end; height: 150px; background: #263238; width: 100%; box-sizing: border-box; padding: 10px; gap: 10px; }
                    .lapide { width: 40px; height: 60px; background: #78909c; }
                    .fantasma { width: 40px; height: 50px; background: #eceff1; opacity: 0.8; border-radius: 20px 20px 0 0; display:flex; justify-content:center; align-items:center; font-size:24px; }
                </style>
                <div class="palco">
                    <div class="cemiterio">
                        <div class="lapide"></div>
                        <div class="fantasma">👻</div>
                        <div class="lapide"></div>
                    </div>
                </div>`,
            respostasCertas: [".fantasma{align-self:center;}"]
        },
        {
            tipo: "editor",
            titulo: "7. Pilar Mágico (Prática)",
            conteudo: `
                <p>O pilar mágico precisa conectar o chão ao teto (esticar).</p>
                <p>Use <code>align-self</code> com valor <code>stretch</code> na classe <code>.pilar</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .ruina { display: flex; align-items: center; height: 150px; background: #ffecb3; width: 100%; box-sizing: border-box; padding: 0 20px; gap: 20px; border: 2px solid #ffc107; }
                    .pedra { width: 40px; height: 40px; background: #ffca28; border-radius: 50%; }
                    .pilar { width: 30px; background: #00bcd4; border: 2px solid #0097a7; color: white; writing-mode: vertical-rl; display:flex; align-items:center; justify-content:center; }
                </style>
                <div class="palco">
                    <div class="ruina">
                        <div class="pedra"></div>
                        <div class="pilar">MAGIC</div>
                        <div class="pedra"></div>
                    </div>
                </div>`,
            respostasCertas: [".pilar{align-self:stretch;}"]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: O Assassino",
            conteudo: `
                <p>O assassino deve atacar do teto (topo) e ser o primeiro da fila (ordem).</p>
                <p>Na classe <code>.assassino</code>, defina:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li><code>align-self: flex-start;</code></li>
                    <li><code>order: -1;</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .corredor { display: flex; align-items: flex-end; height: 150px; background: #212121; width: 100%; box-sizing: border-box; padding: 10px; gap: 10px; border-bottom: 5px solid #b71c1c; }
                    .guardas { width: 40px; height: 60px; background: #b71c1c; }
                    .assassino { width: 40px; height: 40px; background: #212121; border: 1px solid #757575; color: white; display:flex; justify-content:center; align-items:center; font-size:24px; }
                </style>
                <div class="palco">
                    <div class="corredor">
                        <div class="guardas"></div>
                        <div class="guardas"></div>
                        <div class="assassino">🗡️</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".assassino{align-self:flex-start;order:-1;}",
                ".assassino{order:-1;align-self:flex-start;}"
            ]
        }
    ],
    // --- MISSÃO 16: A BÚSSOLA (Eixos e Direções) ---
    "css_adv_16": [
        {
            tipo: "editor",
            titulo: "1. O Horizonte (Row)",
            conteudo: `
                <p>O padrão do Flexbox é <code>row</code> (linha). O Eixo Principal é horizontal.</p>
                <p>Leve o barco para o leste (final).</p>
                <p>Na classe <code>.mar</code>, digite: <code>justify-content: flex-end;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .mar { display: flex; flex-direction: row; background: #2980b9; height: 100px; width: 100%; border: 4px solid #3498db; align-items: center; box-sizing: border-box; }
                    .barco { font-size: 40px; animation: flutuar 2s infinite ease-in-out; }
                    @keyframes flutuar { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
                </style>
                <div class="palco">
                    <div class="mar">
                        <div class="barco">⛵</div>
                    </div>
                </div>`,
            respostasCertas: [".mar{justify-content:flex-end;}"]
        },
        {
            tipo: "editor",
            titulo: "2. O Mastro (Column)",
            conteudo: `
                <p>Ao mudar para <code>column</code>, o Eixo Principal vira VERTICAL.</p>
                <p>Organize as velas verticalmente. Na classe <code>.mastro</code>, digite: <code>flex-direction: column;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Está row por padrão, queremos column */
                    .mastro { display: flex; background: #8d6e63; height: 200px; width: 20px; margin: 0 auto; align-items: center; }
                    .vela { width: 80px; height: 50px; background: #ecf0f1; border: 1px solid #bdc3c7; border-radius: 0 10px 10px 0; margin: 5px 0; display:flex; justify-content:center; align-items:center; color:#333; font-size: 10px; }
                </style>
                <div class="palco">
                    <div class="mastro">
                        <div class="vela">1</div>
                        <div class="vela">2</div>
                        <div class="vela">3</div>
                    </div>
                </div>`,
            respostasCertas: [".mastro{flex-direction:column;}"]
        },
        {
            tipo: "editor",
            titulo: "3. Subindo a Bandeira (Column + Justify)",
            conteudo: `
                <p><strong>Atenção:</strong> Em <code>column</code>, o <code>justify-content</code> controla a vertical!</p>
                <p>Leve a bandeira para o topo (início do eixo). Use <code>justify-content: flex-start;</code> na classe <code>.corda</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Começa no fim (bottom) propositalmente */
                    .corda { display: flex; flex-direction: column; justify-content: flex-end; height: 200px; width: 10px; background: #fff; margin: 0 auto; align-items: center; }
                    .bandeira { width: 60px; height: 40px; background: #c0392b; color: white; display: flex; justify-content: center; align-items: center; font-size: 20px; }
                </style>
                <div class="palco">
                    <div class="corda">
                        <div class="bandeira">🏴‍☠️</div>
                    </div>
                </div>`,
            respostasCertas: [".corda{justify-content:flex-start;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Ancorar (Prática)",
            conteudo: `
                <p>Precisamos descer a âncora até o fundo.</p>
                <p>O container é coluna. Use <code>justify-content</code> com valor <code>flex-end</code> na classe <code>.fundo-mar</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .fundo-mar { display: flex; flex-direction: column; height: 200px; background: #1a237e; width: 100%; border: 4px solid #304ffe; box-sizing: border-box; align-items: center; }
                    .ancora { font-size: 50px; color: white; filter: drop-shadow(2px 2px 0 #000); }
                </style>
                <div class="palco">
                    <div class="fundo-mar">
                        <div class="ancora">⚓</div>
                    </div>
                </div>`,
            respostasCertas: [".fundo-mar{justify-content:flex-end;}"]
        },
        {
            tipo: "editor",
            titulo: "5. Canhões (Prática)",
            conteudo: `
                <p>Alinhe os canhões verticalmente no centro do convés.</p>
                <p>O container já é coluna. Use <code>justify-content</code> com valor <code>center</code> na classe <code>.conves</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .conves { display: flex; flex-direction: column; height: 200px; background: #5d4037; width: 80px; margin: 0 auto; border: 4px solid #3e2723; box-sizing: border-box; align-items: center; }
                    .canhao { width: 40px; height: 30px; background: #212121; margin: 5px; border-radius: 0 5px 5px 0; }
                </style>
                <div class="palco">
                    <div class="conves">
                        <div class="canhao"></div>
                        <div class="canhao"></div>
                    </div>
                </div>`,
            respostasCertas: [".conves{justify-content:center;}"]
        },
        {
            tipo: "editor",
            titulo: "6. Ventos Contrários (Prática)",
            conteudo: `
                <p>Inverta a ordem horizontal dos peixes.</p>
                <p>Na classe <code>.cardume</code>, use <code>flex-direction: row-reverse;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .cardume { display: flex; width: 100%; background: #4fc3f7; padding: 10px; gap: 10px; box-sizing: border-box; }
                    .peixe { font-size: 30px; }
                </style>
                <div class="palco">
                    <div class="cardume">
                        <div class="peixe">🐟</div>
                        <div class="peixe">🐠</div>
                        <div class="peixe">🐡</div>
                    </div>
                </div>`,
            respostasCertas: [".cardume{flex-direction:row-reverse;}"]
        },
        {
            tipo: "editor",
            titulo: "7. Barris Empilhados (Prática)",
            conteudo: `
                <p>Empilhe os barris de baixo para cima (inverso).</p>
                <p>Use <code>flex-direction</code> com valor <code>column-reverse</code> na classe <code>.porao</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .porao { display: flex; height: 200px; width: 100px; background: #3e2723; margin: 0 auto; border: 4px solid #1b120f; align-items: center; justify-content: flex-start; }
                    .barril { width: 60px; height: 40px; background: #8d6e63; border: 2px solid #5d4037; margin: 2px; border-radius: 10px; display:flex; justify-content:center; align-items:center; color:white; font-weight:bold; }
                </style>
                <div class="palco">
                    <div class="porao">
                        <div class="barril">1</div>
                        <div class="barril">2</div>
                        <div class="barril">3</div>
                    </div>
                </div>`,
            respostasCertas: [".porao{flex-direction:column-reverse;}"]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: Rosa dos Ventos",
            conteudo: `
                <p>Centralize a bússola no meio exato do mapa.</p>
                <p>O container é uma coluna. Configure a classe <code>.mapa</code> para centralizar nos dois eixos.</p>
                <p>Dica: Use <code>justify-content</code> e <code>align-items</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .mapa { display: flex; flex-direction: column; height: 200px; width: 100%; background: #e0f2f1; border: 2px dashed #009688; box-sizing: border-box; }
                    .bussola { font-size: 60px; }
                </style>
                <div class="palco">
                    <div class="mapa">
                        <div class="bussola">🧭</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".mapa{justify-content:center;align-items:center;}",
                ".mapa{align-items:center;justify-content:center;}"
            ]
        }
    ],

    // --- MISSÃO 17: ARQUITETURA (Flexbox Aninhado) ---
    "css_adv_17": [
        {
            tipo: "editor",
            titulo: "1. A Fundação (Introdução)",
            conteudo: `
                <p>Podemos colocar um Flex dentro de outro Flex.</p>
                <p>O prédio (externo) já é flex. Agora, alinhe as janelas (interno).</p>
                <p>Na classe <code>.andar</code>, digite: <code>display: flex;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .predio { display: flex; flex-direction: column; background: #95a5a6; padding: 10px; width: 150px; margin: 0 auto; gap: 10px; }
                    .andar { background: #7f8c8d; padding: 5px; }
                    .janela { width: 30px; height: 30px; background: #f1c40f; border: 2px solid #2c3e50; margin: 2px; }
                </style>
                <div class="palco">
                    <div class="predio">
                        <div class="andar">
                            <div class="janela"></div>
                            <div class="janela"></div>
                            <div class="janela"></div>
                        </div>
                    </div>
                </div>`,
            respostasCertas: [".andar{display:flex;}"]
        },
        {
            tipo: "editor",
            titulo: "2. Alinhando Janelas (Introdução)",
            conteudo: `
                <p>As janelas estão coladas. Vamos separá-las.</p>
                <p>Na classe <code>.andar</code>, adicione: <code>justify-content: space-around;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .predio { display: flex; flex-direction: column; background: #95a5a6; padding: 10px; width: 150px; margin: 0 auto; gap: 10px; }
                    .andar { display: flex; background: #7f8c8d; padding: 5px; }
                    .janela { width: 30px; height: 30px; background: #f1c40f; border: 2px solid #2c3e50; margin: 2px; }
                </style>
                <div class="palco">
                    <div class="predio">
                        <div class="andar">
                            <div class="janela"></div>
                            <div class="janela"></div>
                            <div class="janela"></div>
                        </div>
                    </div>
                </div>`,
            respostasCertas: [".andar{justify-content:space-around;}"]
        },
        {
            tipo: "editor",
            titulo: "3. O Hall de Entrada (Prática)",
            conteudo: `
                <p>O térreo tem portas que precisam ser centralizadas.</p>
                <p>Na classe <code>.terreo</code> (que está dentro do prédio), use <code>justify-content: center;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .predio { display: flex; flex-direction: column; background: #bdc3c7; width: 200px; margin: 0 auto; border: 2px solid #7f8c8d; }
                    .terreo { display: flex; background: #2c3e50; height: 60px; align-items: flex-end; }
                    .porta { width: 40px; height: 50px; background: #e67e22; border: 2px solid #d35400; }
                </style>
                <div class="palco">
                    <div class="predio">
                        <div class="terreo">
                            <div class="porta"></div>
                        </div>
                    </div>
                </div>`,
            respostasCertas: [".terreo{justify-content:center;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Estrutura Lateral (Prática)",
            conteudo: `
                <p>Layout clássico: Sidebar (lado) e Conteúdo.</p>
                <p>Faça a <code>.pagina</code> exibir os itens em linha (row) com <code>display: flex;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .pagina { width: 100%; height: 150px; border: 2px solid #333; }
                    .sidebar { width: 30%; background: #3498db; color: white; padding: 10px; box-sizing: border-box; }
                    .conteudo { width: 70%; background: #ecf0f1; padding: 10px; box-sizing: border-box; }
                </style>
                <div class="palco">
                    <div class="pagina">
                        <div class="sidebar">Menu</div>
                        <div class="conteudo">Texto principal...</div>
                    </div>
                </div>`,
            respostasCertas: [".pagina{display:flex;}"]
        },
        {
            tipo: "editor",
            titulo: "5. Menu Interno (Prática)",
            conteudo: `
                <p>Dentro da Sidebar, alinhe os links em coluna.</p>
                <p>Na classe <code>.sidebar</code>, use <code>display: flex</code> e <code>flex-direction: column</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .pagina { display: flex; width: 100%; height: 150px; border: 2px solid #333; }
                    .sidebar { width: 30%; background: #2c3e50; color: white; padding: 10px; box-sizing: border-box; gap: 10px; }
                    .link { background: #34495e; padding: 5px; border-radius: 4px; font-size: 12px; }
                    .conteudo { width: 70%; background: #ecf0f1; }
                </style>
                <div class="palco">
                    <div class="pagina">
                        <div class="sidebar">
                            <div class="link">Home</div>
                            <div class="link">Perfil</div>
                            <div class="link">Sair</div>
                        </div>
                        <div class="conteudo"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".sidebar{display:flex;flex-direction:column;}",
                ".sidebar{flex-direction:column;display:flex;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "6. Card de Perfil (Prática)",
            conteudo: `
                <p>Um card com foto (esquerda) e texto (direita).</p>
                <p>Para isso, o card precisa ser <code>row</code> e alinhar no centro verticalmente.</p>
                <p>Na classe <code>.card</code>, use <code>display: flex</code> e <code>align-items: center</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .card { background: white; width: 250px; padding: 10px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); margin: 0 auto; gap: 15px; }
                    .foto { width: 50px; height: 50px; background: #e74c3c; border-radius: 50%; }
                    .info { font-family: sans-serif; }
                    .nome { font-weight: bold; color: #333; }
                    .cargo { font-size: 12px; color: #777; }
                </style>
                <div class="palco">
                    <div class="card">
                        <div class="foto"></div>
                        <div class="info">
                            <div class="nome">Ana Dev</div>
                            <div class="cargo">Frontend</div>
                        </div>
                    </div>
                </div>`,
            respostasCertas: [
                ".card{display:flex;align-items:center;}",
                ".card{align-items:center;display:flex;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "7. Navbar Completa (Desafio)",
            conteudo: `
                <p>Vamos arrumar o cabeçalho. Ele deve ter itens afastados.</p>
                <p>Na classe <code>.navbar</code>, aplique:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li><code>display: flex;</code></li>
                    <li><code>justify-content: space-between;</code></li>
                    <li><code>align-items: center;</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .navbar { background: #3498db; height: 60px; padding: 0 20px; color: white; font-family: sans-serif; }
                    .logo { font-weight: bold; font-size: 18px; }
                    .menu { display: flex; gap: 10px; } /* O menu interno já está pronto */
                    .btn { background: rgba(0,0,0,0.2); padding: 5px 10px; border-radius: 4px; }
                </style>
                <div class="palco">
                    <div class="navbar">
                        <div class="logo">MeuSite</div>
                        <div class="menu">
                            <div class="btn">Login</div>
                            <div class="btn">Cadastrar</div>
                        </div>
                    </div>
                </div>`,
            respostasCertas: [
                ".navbar{display:flex;justify-content:space-between;align-items:center;}",
                ".navbar{display:flex;align-items:center;justify-content:space-between;}",
                ".navbar{justify-content:space-between;display:flex;align-items:center;}",
                ".navbar{justify-content:space-between;align-items:center;display:flex;}",
                ".navbar{align-items:center;display:flex;justify-content:space-between;}",
                ".navbar{align-items:center;justify-content:space-between;display:flex;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "8. Boss: O Post Social",
            conteudo: `
                <p>Construa o layout dos botões de ação (curtir, comentar).</p>
                <p>Na classe <code>.acoes</code>:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li>Ative o flex.</li>
                    <li>Distribua com espaço ao redor (<code>space-around</code>).</li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .post { background: white; width: 200px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; font-family: sans-serif; }
                    .imagem { height: 100px; background: #bdc3c7; }
                    .acoes { padding: 10px; background: #f9f9f9; border-top: 1px solid #eee; }
                    .btn { color: #555; font-size: 12px; cursor: pointer; }
                </style>
                <div class="palco">
                    <div class="post">
                        <div class="imagem"></div>
                        <div class="acoes">
                            <span class="btn">❤️ Curtir</span>
                            <span class="btn">💬 Comentar</span>
                        </div>
                    </div>
                </div>`,
            respostasCertas: [
                ".acoes{display:flex;justify-content:space-around;}",
                ".acoes{justify-content:space-around;display:flex;}"
            ]
        }
    ],
    // --- MISSÃO 18: ALINHAMENTO DIVINO (Centralização e Gap) ---
    "css_adv_18": [
        {
            tipo: "editor",
            titulo: "1. Centralizar Horizontal (Revisão)",
            conteudo: `
                <p>O <code>justify-content</code> cuida do eixo principal (horizontal).</p>
                <p>Mova o ponto para o centro. Na classe <code>.linha</code>, use <code>justify-content: center;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .linha { display: flex; width: 100%; height: 60px; background: #eee; border: 2px solid #ccc; align-items: center; }
                    .ponto { width: 20px; height: 20px; background: #e74c3c; border-radius: 50%; }
                </style>
                <div class="palco">
                    <div class="linha">
                        <div class="ponto"></div>
                    </div>
                </div>`,
            respostasCertas: [".linha{justify-content:center;}"]
        },
        {
            tipo: "editor",
            titulo: "2. Centralizar Vertical (Revisão)",
            conteudo: `
                <p>O <code>align-items</code> cuida do eixo cruzado (vertical).</p>
                <p>Mova o ponto para o meio da altura. Na classe <code>.coluna</code>, use <code>align-items: center;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .coluna { display: flex; width: 100%; height: 150px; background: #eee; border: 2px solid #ccc; justify-content: center; /* Já está no centro H, falta V */ }
                    .ponto { width: 20px; height: 20px; background: #3498db; border-radius: 50%; }
                </style>
                <div class="palco">
                    <div class="coluna">
                        <div class="ponto"></div>
                    </div>
                </div>`,
            respostasCertas: [".coluna{align-items:center;}"]
        },
        {
            tipo: "editor",
            titulo: "3. O Santo Graal (Prática)",
            conteudo: `
                <p>Para centralizar TOTALMENTE, usamos os dois juntos.</p>
                <p>Na classe <code>.tela</code>, aplique <code>justify-content: center;</code> e <code>align-items: center;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .tela { display: flex; width: 100%; height: 200px; background: #2c3e50; color: white; font-family: sans-serif; font-weight: bold; }
                    .texto { font-size: 24px; border: 2px solid white; padding: 10px; }
                </style>
                <div class="palco">
                    <div class="tela">
                        <div class="texto">CENTRO</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".tela{justify-content:center;align-items:center;}",
                ".tela{align-items:center;justify-content:center;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "4. Gap Horizontal (Introdução)",
            conteudo: `
                <p>Chega de usar margens! O <code>gap</code> cria espaços entre os itens.</p>
                <p>Na classe <code>.menu</code>, adicione <code>gap: 30px;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 50,
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .menu { display: flex; width: 100%; background: #fff; border: 1px solid #ddd; padding: 10px; box-sizing: border-box; justify-content: center; }
                    .link { background: #9b59b6; color: white; padding: 5px 15px; border-radius: 4px; }
                </style>
                <div class="palco">
                    <div class="menu">
                        <div class="link">Home</div>
                        <div class="link">Sobre</div>
                        <div class="link">Contato</div>
                    </div>
                </div>`,
            respostasCertas: [".menu{gap:30px;}"]
        },
        {
            tipo: "editor",
            titulo: "5. Gap Vertical (Prática)",
            conteudo: `
                <p>O <code>gap</code> também funciona em colunas.</p>
                <p>Na classe <code>.lista</code>, defina um <code>gap</code> de <code>15px</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 30,
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .lista { display: flex; flex-direction: column; width: 200px; margin: 0 auto; background: #f1c40f; padding: 10px; border-radius: 8px; }
                    .item { background: #fff; padding: 10px; border-radius: 4px; color: #333; font-family: sans-serif; }
                </style>
                <div class="palco">
                    <div class="lista">
                        <div class="item">Tarefa 1</div>
                        <div class="item">Tarefa 2</div>
                        <div class="item">Tarefa 3</div>
                    </div>
                </div>`,
            respostasCertas: [".lista{gap:15px;}"]
        },
        {
            tipo: "editor",
            titulo: "6. Espaço e Centro (Prática)",
            conteudo: `
                <p>Combine <code>justify-content: space-between</code> (afastar) com <code>align-items: center</code> (alinhar altura).</p>
                <p>Aplique na classe <code>.nav</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .nav { display: flex; width: 100%; height: 60px; background: #34495e; padding: 0 20px; box-sizing: border-box; color: white; }
                    .logo { font-weight: bold; font-size: 20px; }
                    .btn { background: #2ecc71; padding: 5px 15px; border-radius: 20px; }
                </style>
                <div class="palco">
                    <div class="nav">
                        <div class="logo">LOGO</div>
                        <div class="btn">Login</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".nav{justify-content:space-between;align-items:center;}",
                ".nav{align-items:center;justify-content:space-between;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "7. Rodapé Fixo (Prática)",
            conteudo: `
                <p>Para jogar itens para a direita em uma linha.</p>
                <p>Use <code>justify-content: flex-end;</code> e <code>gap: 10px;</code> na classe <code>.footer</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 20,
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .footer { display: flex; width: 100%; background: #ecf0f1; padding: 15px; box-sizing: border-box; border-top: 2px solid #ccc; }
                    .icone { width: 30px; height: 30px; background: #95a5a6; border-radius: 50%; }
                </style>
                <div class="palco">
                    <div class="footer">
                        <div class="icone"></div>
                        <div class="icone"></div>
                        <div class="icone"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".footer{justify-content:flex-end;gap:10px;}",
                ".footer{gap:10px;justify-content:flex-end;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "8. Desafio: Tela de Login",
            conteudo: `
                <p>O modal branco precisa ficar no centro exato da tela escura.</p>
                <p>Configure a classe <code>.fundo-modal</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .fundo-modal { display: flex; width: 100%; height: 250px; background: rgba(0,0,0,0.8); }
                    .modal { width: 150px; height: 100px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-family: sans-serif; }
                </style>
                <div class="palco">
                    <div class="fundo-modal">
                        <div class="modal">Login</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".fundo-modal{justify-content:center;align-items:center;}",
                ".fundo-modal{align-items:center;justify-content:center;}"
            ]
        }
    ],

    // --- MISSÃO 19: FLUXO E QUEBRA (Wrap e Align Content) ---
    "css_adv_19": [
        {
            tipo: "editor",
            titulo: "1. Quebrando Linha (Revisão)",
            conteudo: `
                <p>Os itens estão espremidos. Permita que eles quebrem linha.</p>
                <p>Na classe <code>.galeria</code>, use <code>flex-wrap: wrap;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .galeria { display: flex; width: 200px; height: 150px; background: #fff; border: 2px solid #333; padding: 5px; gap: 5px; margin: 0 auto; overflow: hidden; }
                    .foto { width: 80px; height: 60px; background: #e74c3c; flex-shrink: 0; }
                </style>
                <div class="palco">
                    <div class="galeria">
                        <div class="foto"></div>
                        <div class="foto"></div>
                        <div class="foto"></div>
                        <div class="foto"></div>
                        <div class="foto"></div>
                    </div>
                </div>`,
            respostasCertas: [".galeria{flex-wrap:wrap;}"]
        },
        {
            tipo: "editor",
            titulo: "2. Alinhando o Conteúdo (Introdução)",
            conteudo: `
                <p>Quando temos várias linhas, <code>align-items</code> não basta.</p>
                <p>Use <code>align-content</code> para alinhar o bloco de linhas no centro.</p>
                <p>Na classe <code>.album</code>, digite: <code>align-content: center;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .album { display: flex; flex-wrap: wrap; width: 200px; height: 200px; background: #34495e; gap: 5px; margin: 0 auto; }
                    .cromo { width: 60px; height: 40px; background: #f1c40f; }
                </style>
                <div class="palco">
                    <div class="album">
                        <div class="cromo"></div>
                        <div class="cromo"></div>
                        <div class="cromo"></div>
                        <div class="cromo"></div>
                        <div class="cromo"></div>
                        <div class="cromo"></div>
                    </div>
                </div>`,
            respostasCertas: [".album{align-content:center;}"]
        },
        {
            tipo: "editor",
            titulo: "3. Espalhando Linhas (Prática)",
            conteudo: `
                <p>Vamos afastar as linhas verticalmente.</p>
                <p>Use <code>align-content</code> com valor <code>space-between</code> na classe <code>.grade</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .grade { display: flex; flex-wrap: wrap; width: 200px; height: 200px; background: #fff; border: 2px solid #ccc; margin: 0 auto; }
                    .bloco { width: 100%; height: 30px; background: #3498db; }
                </style>
                <div class="palco">
                    <div class="grade">
                        <div class="bloco">Linha 1</div>
                        <div class="bloco">Linha 2</div>
                        <div class="bloco">Linha 3</div>
                    </div>
                </div>`,
            respostasCertas: [".grade{align-content:space-between;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Juntando no Topo (Prática)",
            conteudo: `
                <p>As linhas estão espalhadas (padrão stretch). Junte tudo no topo.</p>
                <p>Use <code>align-content: flex-start;</code> na classe <code>.texto</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .texto { display: flex; flex-wrap: wrap; width: 200px; height: 200px; background: #ecf0f1; border: 1px solid #bdc3c7; margin: 0 auto; gap: 5px; }
                    .palavra { background: #95a5a6; color: white; padding: 5px; height: 20px; }
                </style>
                <div class="palco">
                    <div class="texto">
                        <div class="palavra">Este</div>
                        <div class="palavra">é</div>
                        <div class="palavra">um</div>
                        <div class="palavra">texto</div>
                        <div class="palavra">que</div>
                        <div class="palavra">quebra</div>
                    </div>
                </div>`,
            respostasCertas: [".texto{align-content:flex-start;}"]
        },
        {
            tipo: "editor",
            titulo: "5. Quebra Invertida (Introdução)",
            conteudo: `
                <p>Podemos fazer as linhas subirem (quebra invertida).</p>
                <p>Na classe <code>.chat</code>, use <code>flex-wrap: wrap-reverse;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .chat { display: flex; width: 200px; height: 150px; background: #e0f2f1; border: 2px solid #00695c; margin: 0 auto; align-content: flex-start; gap: 5px; }
                    .msg { width: 80px; height: 30px; background: #26a69a; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; }
                </style>
                <div class="palco">
                    <div class="chat">
                        <div class="msg">1</div>
                        <div class="msg">2</div>
                        <div class="msg">3</div>
                        <div class="msg">4</div>
                    </div>
                </div>`,
            respostasCertas: [".chat{flex-wrap:wrap-reverse;}"]
        },
        {
            tipo: "editor",
            titulo: "6. Flex Flow Coluna (Prática)",
            conteudo: `
                <p>Vamos fazer as colunas quebrarem para o lado.</p>
                <p>Use o atalho <code>flex-flow: column wrap;</code> na classe <code>.jornal</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .jornal { display: flex; height: 150px; width: 250px; background: #fdfefe; border: 1px solid #ccc; margin: 0 auto; gap: 5px; }
                    .artigo { width: 100px; height: 40px; background: #333; color: white; display:flex; justify-content:center; align-items:center; }
                </style>
                <div class="palco">
                    <div class="jornal">
                        <div class="artigo">A</div>
                        <div class="artigo">B</div>
                        <div class="artigo">C</div>
                        <div class="artigo">D</div>
                        <div class="artigo">E</div>
                    </div>
                </div>`,
            respostasCertas: [".jornal{flex-flow:column wrap;}"]
        },
        {
            tipo: "editor",
            titulo: "7. Tags Responsivas (Desafio)",
            conteudo: `
                <p>Organize as tags. Elas devem quebrar linha e ter espaço entre elas.</p>
                <p>Na classe <code>.tags</code>:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li><code>flex-wrap: wrap;</code></li>
                    <li><code>gap: 5px;</code></li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 10,
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .tags { display: flex; width: 150px; background: #3e2723; padding: 10px; margin: 0 auto; }
                    .tag { background: #d7ccc8; padding: 5px; font-size: 12px; border-radius: 4px; }
                </style>
                <div class="palco">
                    <div class="tags">
                        <div class="tag">HTML</div>
                        <div class="tag">CSS</div>
                        <div class="tag">JS</div>
                        <div class="tag">React</div>
                        <div class="tag">Node</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".tags{flex-wrap:wrap;gap:5px;}",
                ".tags{gap:5px;flex-wrap:wrap;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "8. Boss: Mosaico de Fotos",
            conteudo: `
                <p>Crie um mosaico centralizado.</p>
                <p>Na classe <code>.mosaico</code>, aplique:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li>Permitir quebra (wrap).</li>
                    <li>Centralizar o conteúdo (<code>align-content</code>).</li>
                    <li>Centralizar os itens na linha (<code>justify-content</code>).</li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .mosaico { display: flex; width: 220px; height: 220px; background: #2c3e50; gap: 5px; margin: 0 auto; }
                    .img { width: 60px; height: 60px; background: #e74c3c; border: 2px solid white; }
                </style>
                <div class="palco">
                    <div class="mosaico">
                        <div class="img"></div>
                        <div class="img"></div>
                        <div class="img"></div>
                        <div class="img"></div>
                        <div class="img"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".mosaico{flex-wrap:wrap;align-content:center;justify-content:center;}",
                ".mosaico{flex-wrap:wrap;justify-content:center;align-content:center;}",
                ".mosaico{align-content:center;flex-wrap:wrap;justify-content:center;}",
                ".mosaico{align-content:center;justify-content:center;flex-wrap:wrap;}",
                ".mosaico{justify-content:center;flex-wrap:wrap;align-content:center;}",
                ".mosaico{justify-content:center;align-content:center;flex-wrap:wrap;}"
            ]
        }
    ],

    // --- MISSÃO 20: O GRANDE ARQUITETO (Layouts Reais) ---
    "css_adv_20": [
        {
            tipo: "editor",
            titulo: "1. Header Clássico (Aplicação)",
            conteudo: `
                <p>Logo na esquerda, Menu na direita.</p>
                <p>Use <code>justify-content: space-between;</code> e <code>align-items: center;</code> na classe <code>.header</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .header { display: flex; width: 100%; height: 50px; background: #34495e; padding: 0 10px; box-sizing: border-box; color: white; }
                    .logo { font-weight: bold; }
                    .menu { width: 50px; height: 10px; background: #bdc3c7; }
                </style>
                <div class="palco">
                    <div class="header">
                        <div class="logo">LOGO</div>
                        <div class="menu"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".header{justify-content:space-between;align-items:center;}",
                ".header{align-items:center;justify-content:space-between;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "2. Hero Section (Aplicação)",
            conteudo: `
                <p>Texto e Imagem lado a lado, centralizados na tela.</p>
                <p>Na classe <code>.hero</code>, alinhe tudo ao centro (H e V).</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .hero { display: flex; height: 150px; background: #ecf0f1; width: 100%; gap: 20px; }
                    .texto { width: 100px; height: 40px; background: #95a5a6; }
                    .img { width: 60px; height: 60px; background: #e74c3c; border-radius: 50%; }
                </style>
                <div class="palco">
                    <div class="hero">
                        <div class="texto"></div>
                        <div class="img"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".hero{justify-content:center;align-items:center;}",
                ".hero{align-items:center;justify-content:center;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "3. Sidebar Layout (Aplicação)",
            conteudo: `
                <p>A barra lateral deve ter tamanho fixo, o conteúdo deve crescer.</p>
                <p>Na classe <code>.conteudo</code>, use <code>flex-grow: 1;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .layout { display: flex; width: 100%; height: 150px; border: 2px solid #333; }
                    .sidebar { width: 60px; background: #2c3e50; color: white; padding: 10px; box-sizing: border-box; flex-shrink: 0; }
                    .conteudo { background: #ecf0f1; }
                </style>
                <div class="palco">
                    <div class="layout">
                        <div class="sidebar">Menu</div>
                        <div class="conteudo">Conteúdo Principal</div>
                    </div>
                </div>`,
            respostasCertas: [".conteudo{flex-grow:1;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Grade de Cards (Aplicação)",
            conteudo: `
                <p>Cards que quebram linha e se espalham.</p>
                <p>Na classe <code>.grid</code>, use <code>flex-wrap: wrap;</code> e <code>justify-content: center;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .grid { display: flex; width: 100%; gap: 10px; background: #fff; padding: 10px; box-sizing: border-box; }
                    .card { width: 60px; height: 60px; background: #9b59b6; }
                </style>
                <div class="palco">
                    <div class="grid">
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".grid{flex-wrap:wrap;justify-content:center;}",
                ".grid{justify-content:center;flex-wrap:wrap;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "5. Footer com Links (Aplicação)",
            conteudo: `
                <p>Links alinhados no centro, mas com quebra de linha se necessário.</p>
                <p>Use <code>justify-content: center</code> e <code>flex-wrap: wrap</code> na classe <code>.footer-links</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .footer-links { display: flex; width: 150px; background: #333; padding: 10px; gap: 10px; margin: 0 auto; }
                    .link { color: #fff; font-size: 10px; text-decoration: underline; }
                </style>
                <div class="palco">
                    <div class="footer-links">
                        <div class="link">Termos</div>
                        <div class="link">Privacidade</div>
                        <div class="link">Contato</div>
                        <div class="link">Sobre</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".footer-links{justify-content:center;flex-wrap:wrap;}",
                ".footer-links{flex-wrap:wrap;justify-content:center;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "6. Chat Message (Aplicação)",
            conteudo: `
                <p>Mensagem do usuário deve ir para a direita (fim).</p>
                <p>Na classe <code>.msg-user</code>, use <code>align-self: flex-end;</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .chat-box { display: flex; flex-direction: column; width: 200px; height: 150px; background: #e0f2f1; border: 1px solid #ccc; padding: 10px; gap: 10px; box-sizing: border-box; margin: 0 auto; }
                    .msg { padding: 5px 10px; border-radius: 10px; font-size: 12px; max-width: 80%; }
                    .msg-bot { background: #fff; align-self: flex-start; }
                    .msg-user { background: #26a69a; color: white; /* Alinhe este */ }
                </style>
                <div class="palco">
                    <div class="chat-box">
                        <div class="msg msg-bot">Olá!</div>
                        <div class="msg msg-user">Oi!</div>
                    </div>
                </div>`,
            respostasCertas: [".msg-user{align-self:flex-end;}"]
        },
        {
            tipo: "editor",
            titulo: "7. Barra de Ações (Aplicação)",
            conteudo: `
                <p>Botão "Cancelar" na esquerda, "Salvar" na direita.</p>
                <p>Use <code>justify-content: space-between;</code> na classe <code>.actions</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .actions { display: flex; width: 200px; background: #eee; padding: 10px; border-top: 1px solid #ccc; margin: 0 auto; }
                    .btn { padding: 5px 10px; border: 1px solid #999; border-radius: 4px; font-size: 12px; }
                    .save { background: #2ecc71; color: white; border: none; }
                </style>
                <div class="palco">
                    <div class="actions">
                        <button class="btn">Cancelar</button>
                        <button class="btn save">Salvar</button>
                    </div>
                </div>`,
            respostasCertas: [".actions{justify-content:space-between;}"]
        },
        {
            tipo: "editor",
            titulo: "8. O CHEFÃO: Dashboard",
            conteudo: `
                <p>Monte o layout final: Sidebar e Conteúdo. O Conteúdo tem um Header e um Main.</p>
                <p>A estrutura já está em coluna. Faça o <code>.main</code> crescer para ocupar o resto da tela.</p>
                <p>Use <code>flex-grow: 1;</code> na classe <code>.main</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .dashboard { display: flex; width: 100%; height: 200px; border: 2px solid #333; }
                    .sidebar { width: 50px; background: #2c3e50; flex-shrink: 0; }
                    .body { display: flex; flex-direction: column; flex-grow: 1; }
                    .topbar { height: 40px; background: #34495e; }
                    .main { background: #ecf0f1; /* Faça este crescer */ }
                </style>
                <div class="palco">
                    <div class="dashboard">
                        <div class="sidebar"></div>
                        <div class="body">
                            <div class="topbar"></div>
                            <div class="main">Conteúdo</div>
                        </div>
                    </div>
                </div>`,
            respostasCertas: [".main{flex-grow:1;}"]
        }
    ],
// --- MISSÃO 21: A REDE URBANA (Versão Final - Plano B) ---
    "css_adv_21": [
        {
            tipo: "editor",
            titulo: "1. Ligando a Energia",
            conteudo: `
                <p>Ative o Grid na cidade.</p>
                <p>Na classe <code>.cidade</code>: <code>display: grid;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .cidade { background: #34495e; padding: 10px; width: 200px; margin: 0 auto; border: 4px solid #2c3e50; }
                    .lote { background: #95a5a6; color: white; padding: 10px; margin: 2px; border: 1px solid #7f8c8d; text-align: center; }
                </style>
                <div class="palco">
                    <div class="cidade">
                        <div class="lote">A</div>
                        <div class="lote">B</div>
                        <div class="lote">C</div>
                        <div class="lote">D</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".cidade{display:grid;}",
                ".cidade { display: grid; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "2. Avenidas Largas",
            conteudo: `
                <p>Defina duas colunas de 80px.</p>
                <p>Na classe <code>.bairro</code>: <code>grid-template-columns: 80px 80px;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .bairro { display: grid; background: #27ae60; padding: 10px; width: 200px; margin: 0 auto; }
                    .casa { background: #ecf0f1; height: 40px; border: 1px solid #bdc3c7; }
                </style>
                <div class="palco">
                    <div class="bairro">
                        <div class="casa"></div>
                        <div class="casa"></div>
                        <div class="casa"></div>
                        <div class="casa"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".bairro{grid-template-columns:80px 80px;}",
                ".bairro { grid-template-columns: 80px 80px; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "3. Espaçamento (Gap)",
            conteudo: `
                <p>Dê um espaço de 10px entre os blocos.</p>
                <p>Use: <code>gap: 10px;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            unidade: "px",
            limite: 20,
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .mapa { display: grid; grid-template-columns: 50% 50%; background: #7f8c8d; padding: 10px; width: 150px; margin: 0 auto; }
                    .quadra { height: 40px; background: #ecf0f1; border: 1px solid #333; }
                </style>
                <div class="palco">
                    <div class="mapa">
                        <div class="quadra"></div>
                        <div class="quadra"></div>
                        <div class="quadra"></div>
                        <div class="quadra"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".mapa{gap:10px;}",
                ".mapa { gap: 10px; }",
                ".mapa{grid-gap:10px;}",
                ".mapa { grid-gap: 10px; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "4. Fluxo Vertical",
            conteudo: `
                <p>Mude o fluxo para colunas.</p>
                <p><code>grid-auto-flow: column;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .transito { display: grid; background: #f39c12; padding: 10px; width: 200px; margin: 0 auto; gap: 5px; grid-template-rows: 40px 40px; }
                    .carro { background: #fff; border: 1px solid #e67e22; display: flex; align-items: center; justify-content: center; font-weight: bold; }
                </style>
                <div class="palco">
                    <div class="transito">
                        <div class="carro">1</div>
                        <div class="carro">2</div>
                        <div class="carro">3</div>
                        <div class="carro">4</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".transito{grid-auto-flow:column;}",
                ".transito { grid-auto-flow: column; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "5. Andares",
            conteudo: `
                <p>Defina a altura das linhas.</p>
                <p><code>grid-template-rows: 40px 80px;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .predio { display: grid; grid-template-columns: 100%; background: #fff; border: 2px solid #333; width: 100px; margin: 0 auto; }
                    .andar { border: 1px solid #eee; background: #bdc3c7; }
                </style>
                <div class="palco">
                    <div class="predio">
                        <div class="andar"></div>
                        <div class="andar"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".predio{grid-template-rows:40px 80px;}",
                ".predio { grid-template-rows: 40px 80px; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "6. Centralizando Itens",
            conteudo: `
                <p>As lojas estão esticadas. Vamos centralizá-las horizontalmente na grade.</p>
                <p>Na classe <code>.centro</code>, use: <code>justify-items: center;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Colunas já definidas aqui para evitar bug */
                    .centro { display: grid; grid-template-columns: 1fr 1fr; background: #e67e22; padding: 10px; width: 100%; box-sizing: border-box; gap: 5px; }
                    .loja { background: #d35400; color: white; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border: 1px solid white; }
                </style>
                <div class="palco">
                    <div class="centro">
                        <div class="loja">1</div>
                        <div class="loja">2</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".centro{justify-items:center;}",
                ".centro { justify-items: center; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "7. Zona Mista",
            conteudo: `
                <p>Uma coluna fixa (60px) e o resto automático.</p>
                <p><code>grid-template-columns: 60px auto;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .zona { display: grid; width: 100%; height: 80px; border: 2px solid #333; background: white; }
                    .fabrica { background: #34495e; }
                    .patio { background: #95a5a6; }
                </style>
                <div class="palco">
                    <div class="zona">
                        <div class="fabrica"></div>
                        <div class="patio"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".zona{grid-template-columns:60px auto;}",
                ".zona { grid-template-columns: 60px auto; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "8. Alinhando Altura",
            conteudo: `
                <p>Os apartamentos estão ocupando toda a altura. Vamos centralizá-los verticalmente.</p>
                <p>Na classe <code>.condo</code>, use: <code>align-items: center;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Colunas já definidas */
                    .condo { display: grid; grid-template-columns: repeat(4, 1fr); background: #8e44ad; padding: 10px; width: 200px; height: 100px; margin: 0 auto; gap: 5px; }
                    .apto { background: #9b59b6; height: 20px; border: 1px solid white; }
                </style>
                <div class="palco">
                    <div class="condo">
                        <div class="apto"></div>
                        <div class="apto"></div>
                        <div class="apto"></div>
                        <div class="apto"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".condo{align-items:center;}",
                ".condo { align-items: center; }"
            ]
        }
    ],

// --- MISSÃO 22: O MESTRE DE OBRAS (Posicionamento) ---
    "css_adv_22": [
        {
            tipo: "editor",
            titulo: "1. Expandir Lote",
            conteudo: `
                <p>No Grid, podemos dizer onde um item começa e termina. As linhas são as bordas.</p>
                <p>Faça o item ir da linha 1 até a 3.</p>
                <p>Na classe <code>.item</code>: <code>grid-column: 1 / 3;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .grid { display: grid; grid-template-columns: 50px 50px 50px; gap: 5px; background: #ecf0f1; width: 170px; margin: 0 auto; padding: 10px; border: 1px dashed #ccc; }
                    .pedra { height: 40px; background: #bdc3c7; }
                    .item { height: 40px; background: #e74c3c; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }
                </style>
                <div class="palco">
                    <div class="grid">
                        <div class="item">Go</div>
                        <div class="pedra"></div>
                        <div class="pedra"></div>
                        <div class="pedra"></div>
                    </div>
                </div>`,
            respostasCertas: [".item{grid-column:1/3;}"]
        },
        {
            tipo: "editor",
            titulo: "2. A Viga Mestra",
            conteudo: `
                <p>Podemos usar <code>span</code> para dizer "ocupe X espaços", sem se preocupar com o número da linha.</p>
                <p>Faça a viga ocupar 3 espaços: <code>grid-column: span 3;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .obra { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; background: #5d4037; width: 200px; padding: 10px; margin: 0 auto; }
                    .tijolo { height: 30px; background: #8d6e63; }
                    .viga { height: 30px; background: #f1c40f; color: #3e2723; font-weight: bold; display: flex; align-items: center; justify-content: center; border: 2px solid #fff; }
                </style>
                <div class="palco">
                    <div class="obra">
                        <div class="viga">VIGA</div>
                        <div class="tijolo"></div>
                        <div class="tijolo"></div>
                        <div class="tijolo"></div>
                    </div>
                </div>`,
            respostasCertas: [".viga{grid-column:span 3;}"]
        },
        {
            tipo: "editor",
            titulo: "3. Elevador Vertical",
            conteudo: `
                <p>Isso também funciona na vertical (linhas).</p>
                <p>Faça o elevador ir da linha 1 até a 3.</p>
                <p>Na classe <code>.elevador</code>: <code>grid-row: 1 / 3;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .predio { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 50px 50px; gap: 5px; background: #2c3e50; width: 150px; padding: 10px; margin: 0 auto; }
                    .sala { background: #34495e; border: 1px solid #7f8c8d; }
                    .elevador { background: #3498db; color: white; display: flex; align-items: center; justify-content: center; }
                </style>
                <div class="palco">
                    <div class="predio">
                        <div class="elevador">UP</div>
                        <div class="sala"></div>
                        <div class="sala"></div>
                    </div>
                </div>`,
            respostasCertas: [".elevador{grid-row:1/3;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Torre de Vigia",
            conteudo: `
                <p>Faça a torre ocupar 2 espaços verticais usando span.</p>
                <p>Na classe <code>.torre</code>: <code>grid-row: span 2;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .castelo { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-auto-rows: 40px; gap: 5px; background: #95a5a6; width: 200px; padding: 10px; margin: 0 auto; }
                    .muro { background: #7f8c8d; }
                    .torre { background: #2c3e50; color: white; display: flex; align-items: center; justify-content: center; }
                </style>
                <div class="palco">
                    <div class="castelo">
                        <div class="muro"></div>
                        <div class="torre">Torre</div>
                        <div class="muro"></div>
                        <div class="muro"></div>
                        <div class="muro"></div>
                    </div>
                </div>`,
            respostasCertas: [".torre{grid-row:span 2;}"]
        },
        {
            tipo: "editor",
            titulo: "5. O Alicerce (Rodapé)",
            conteudo: `
                <p>Para ocupar a linha inteira, não importa quantas colunas existam, usamos um truque: ir da linha 1 até a -1 (a última).</p>
                <p>Na classe <code>.footer</code>: <code>grid-column: 1 / -1;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .site { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; background: #fff; border: 1px solid #ccc; width: 200px; padding: 5px; margin: 0 auto; }
                    .item { height: 30px; background: #eee; }
                    .footer { height: 30px; background: #2ecc71; color: white; display: flex; justify-content: center; align-items: center; font-size: 10px; }
                </style>
                <div class="palco">
                    <div class="site">
                        <div class="item"></div>
                        <div class="item"></div>
                        <div class="item"></div>
                        <div class="item"></div>
                        <div class="footer">Rodapé</div>
                    </div>
                </div>`,
            respostasCertas: [".footer{grid-column:1/-1;}"]
        },
        {
            tipo: "editor",
            titulo: "6. Pulando Espaços",
            conteudo: `
                <p>Podemos mover um item para começar especificamente na segunda linha da grade.</p>
                <p>Na classe <code>.janela</code>: <code>grid-column-start: 2;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .parede { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; background: #e67e22; width: 150px; padding: 10px; margin: 0 auto; height: 100px; }
                    .janela { background: #81d4fa; border: 2px solid white; height: 50px; }
                </style>
                <div class="palco">
                    <div class="parede">
                        <div class="janela"></div>
                    </div>
                </div>`,
            respostasCertas: [".janela{grid-column-start:2;}"]
        },
        {
            tipo: "editor",
            titulo: "7. O Botão de Pânico",
            conteudo: `
                <p>O botão está posicionado certo, mas está esticado ocupando todo o espaço da célula.</p>
                <p>Vamos ajustá-lo ao centro. Na classe <code>.btn</code>, use: <code>align-self: center;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .pad { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 60px; gap: 2px; background: #333; width: 120px; margin: 0 auto; padding: 5px; border-radius: 10px; }
                    .btn { background: #e74c3c; width: 30px; height: 30px; border-radius: 50%; border: 2px solid white; justify-self: center; }
                </style>
                <div class="palco">
                    <div class="pad">
                        <div class="btn"></div>
                        <div class="btn"></div>
                    </div>
                </div>`,
            respostasCertas: [".btn{align-self:center;}"]
        },
        {
            tipo: "editor",
            titulo: "8. Boss: A Manchete",
            conteudo: `
                <p>Desafio final: A manchete do jornal precisa de destaque.</p>
                <p>Faça ela ocupar <strong>2 colunas</strong> e <strong>2 linhas</strong> usando span.</p>
                <p>Na classe <code>.manchete</code>, use <code>grid-column</code> e <code>grid-row</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .jornal { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 50px; gap: 5px; background: white; width: 250px; padding: 10px; margin: 0 auto; border: 1px solid #ccc; }
                    .noticia { background: #95a5a6; }
                    .manchete { background: #2c3e50; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 20px; }
                </style>
                <div class="palco">
                    <div class="jornal">
                        <div class="manchete">NEWS</div>
                        <div class="noticia"></div>
                        <div class="noticia"></div>
                        <div class="noticia"></div>
                        <div class="noticia"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".manchete{grid-column:span 2;grid-row:span 2;}",
                ".manchete{grid-row:span 2;grid-column:span 2;}"
            ]
        }
    ],
// --- MISSÃO 23: O ARQUITETO (Grid Areas - Versão "Sem Dor de Cabeça") ---
    "css_adv_23": [
        {
            tipo: "editor",
            titulo: "1. Batizando Setores",
            conteudo: `
                <p>Vamos começar simples. Dê o nome <strong>cabecalho</strong> para o topo.</p>
                <p>Digite: <code>.topo { grid-area: cabecalho; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .layout { display: grid; grid-template-columns: 1fr 1fr; grid-template-areas: "cabecalho cabecalho" "conteudo lateral"; gap: 5px; background: #2c3e50; padding: 10px; width: 200px; margin: 0 auto; }
                    .topo { background: #e74c3c; color: white; display: flex; align-items: center; justify-content: center; }
                    .meio { background: #ecf0f1; height: 50px; grid-area: conteudo; }
                    .lado { background: #3498db; height: 50px; grid-area: lateral; }
                </style>
                <div class="palco">
                    <div class="layout">
                        <div class="topo">Topo</div>
                        <div class="meio"></div>
                        <div class="lado"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".topo { grid-area: cabecalho; }",
                ".topo{grid-area:cabecalho;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "2. A Planta Baixa",
            conteudo: `
                <p>Agora desenhe o mapa no container usando os nomes.</p>
                <p>Digite: <code>.site { grid-template-areas: "topo topo" "baixo baixo"; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .site { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; background: #34495e; padding: 10px; width: 200px; margin: 0 auto; }
                    .header { background: #f1c40f; grid-area: topo; height: 30px; }
                    .footer { background: #16a085; grid-area: baixo; height: 30px; }
                </style>
                <div class="palco">
                    <div class="site">
                        <div class="header"></div>
                        <div class="footer"></div>
                    </div>
                </div>`,
            respostasCertas: [
                '.site { grid-template-areas: "topo topo" "baixo baixo"; }',
                '.site{grid-template-areas:"topo topo" "baixo baixo";}'
            ]
        },
        {
            tipo: "editor",
            titulo: "3. O Sidebar",
            conteudo: `
                <p>O menu deve ocupar a esquerda, e o texto as outras duas colunas.</p>
                <p>Digite: <code>.blog { grid-template-areas: "menu texto texto"; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .blog { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5px; background: #fff; border: 2px solid #333; padding: 10px; width: 250px; margin: 0 auto; }
                    .nav { background: #2980b9; color: white; grid-area: menu; display: flex; align-items: center; justify-content: center; writing-mode: vertical-rl; }
                    .post { background: #bdc3c7; height: 40px; grid-area: texto; }
                </style>
                <div class="palco">
                    <div class="blog">
                        <div class="nav">Menu</div>
                        <div class="post"></div>
                    </div>
                </div>`,
            respostasCertas: [
                '.blog { grid-template-areas: "menu texto texto"; }',
                '.blog{grid-template-areas:"menu texto texto";}'
            ]
        },
        {
            tipo: "editor",
            titulo: "4. Espaços Vazios",
            conteudo: `
                <p>Use um ponto <code>.</code> para deixar um espaço vazio.</p>
                <p>Digite: <code>.cartao { grid-template-areas: "logo ." "texto texto"; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .cartao { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; background: #8e44ad; padding: 10px; width: 200px; margin: 0 auto; }
                    .logo { background: #f1c40f; height: 30px; grid-area: logo; border-radius: 50%; width: 30px; }
                    .texto { background: #ecf0f1; height: 30px; grid-area: texto; }
                </style>
                <div class="palco">
                    <div class="cartao">
                        <div class="logo"></div>
                        <div class="texto"></div>
                    </div>
                </div>`,
            respostasCertas: [
                '.cartao { grid-template-areas: "logo ." "texto texto"; }',
                '.cartao{grid-template-areas:"logo ." "texto texto";}'
            ]
        },
        
        // --- AQUI ESTAVAM AS FASES BUGADAS (5 e 6). 
        // --- SUBSTITUÍ POR FASES DE MAPA (GRID-TEMPLATE-AREAS) QUE SÃO MAIS SEGURAS.

        {
            tipo: "editor",
            titulo: "5. Invertendo o Jogo",
            conteudo: `
                <p>Vamos inverter a ordem visual sem mexer no HTML.</p>
                <p>Coloque a área 'b' antes da 'a'.</p>
                <p>Digite: <code>.caixa { grid-template-areas: "b a"; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .caixa { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; background: #34495e; padding: 10px; width: 200px; margin: 0 auto; }
                    .item-a { background: #e74c3c; height: 50px; grid-area: a; color: white; display:flex; justify-content:center; align-items:center; }
                    .item-b { background: #3498db; height: 50px; grid-area: b; color: white; display:flex; justify-content:center; align-items:center; }
                </style>
                <div class="palco">
                    <div class="caixa">
                        <div class="item-a">A</div>
                        <div class="item-b">B</div>
                    </div>
                </div>`,
            respostasCertas: [
                '.caixa { grid-template-areas: "b a"; }',
                '.caixa{grid-template-areas:"b a";}'
            ]
        },
        {
            tipo: "editor",
            titulo: "6. Coluna Vertical",
            conteudo: `
                <p>Agora vamos empilhar verticalmente usando strings separadas.</p>
                <p>Digite: <code>.torre { grid-template-areas: "cima" "baixo"; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .torre { display: grid; grid-template-columns: 100px; gap: 5px; background: #2c3e50; padding: 10px; width: 120px; margin: 0 auto; }
                    .up { background: #f1c40f; height: 40px; grid-area: cima; }
                    .down { background: #e67e22; height: 40px; grid-area: baixo; }
                </style>
                <div class="palco">
                    <div class="torre">
                        <div class="up"></div>
                        <div class="down"></div>
                    </div>
                </div>`,
            respostasCertas: [
                '.torre { grid-template-areas: "cima" "baixo"; }',
                '.torre{grid-template-areas:"cima" "baixo";}'
            ]
        },

        // --- Fim das substituições ---

        {
            tipo: "editor",
            titulo: "7. Boss: Full Page",
            conteudo: `
                <p>Construa o layout completo.</p>
                <p>Linha 1: <code>"nav content"</code></p>
                <p>Linha 2: <code>"nav content"</code></p>
                <p>Linha 3: <code>"footer footer"</code></p>
                <p>Use a classe <code>.tela</code>.</p>
            `,
            esconderSeletor: false,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .tela { display: grid; grid-template-columns: 50px 1fr; gap: 5px; background: #34495e; padding: 10px; width: 200px; margin: 0 auto; }
                    .n { background: #3498db; grid-area: nav; }
                    .c { background: #ecf0f1; grid-area: content; height: 60px; }
                    .f { background: #c0392b; grid-area: footer; height: 30px; }
                </style>
                <div class="palco">
                    <div class="tela">
                        <div class="n"></div>
                        <div class="c"></div>
                        <div class="f"></div>
                    </div>
                </div>`,
            respostasCertas: [
                '.tela { grid-template-areas: "nav content" "nav content" "footer footer"; }',
                '.tela{grid-template-areas:"nav content" "nav content" "footer footer";}'
            ]
        }
    ],

    // --- MISSÃO 24: ALINHAMENTO SUPREMO (Grid Alignment) ---
    "css_adv_24": [
        {
            tipo: "editor",
            titulo: "1. Alinhando a Célula (Horizontal)",
            conteudo: `
                <p>No Grid, alinhamos o conteúdo <strong>dentro</strong> da célula.</p>
                <p>Centralize o item horizontalmente. Na classe <code>.celula</code>, digite: <code>justify-items: center;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .celula { display: grid; width: 100px; height: 100px; background: #bdc3c7; border: 2px solid #7f8c8d; margin: 0 auto; }
                    .ponto { width: 20px; height: 20px; background: #c0392b; border-radius: 50%; }
                </style>
                <div class="palco">
                    <div class="celula">
                        <div class="ponto"></div>
                    </div>
                </div>`,
            respostasCertas: [".celula{justify-items:center;}"]
        },
        {
            tipo: "editor",
            titulo: "2. Alinhando a Célula (Vertical)",
            conteudo: `
                <p>Para alinhar verticalmente dentro da célula, usamos <code>align-items</code>.</p>
                <p>Coloque o item no centro vertical da <code>.caixa</code>: <code>align-items: center;</code></p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .caixa { display: grid; width: 100px; height: 100px; background: #95a5a6; border: 2px solid #7f8c8d; margin: 0 auto; justify-items: center; }
                    .cubo { width: 30px; height: 30px; background: #2980b9; }
                </style>
                <div class="palco">
                    <div class="caixa">
                        <div class="cubo"></div>
                    </div>
                </div>`,
            respostasCertas: [".caixa{align-items:center;}"]
        },
        {
            tipo: "editor",
            titulo: "3. O Atalho Mágico (Prática)",
            conteudo: `
                <p>Preguiça de digitar os dois? Use <code>place-items: center;</code> para centralizar tudo.</p>
                <p>Aplique na classe <code>.palco-centro</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .palco-centro { display: grid; width: 100px; height: 100px; background: #2c3e50; margin: 0 auto; }
                    .joia { width: 40px; height: 40px; background: #f1c40f; border: 2px solid #fff; transform: rotate(45deg); }
                </style>
                <div class="palco">
                    <div class="palco-centro">
                        <div class="joia"></div>
                    </div>
                </div>`,
            respostasCertas: [".palco-centro{place-items:center;}"]
        },
        {
            tipo: "editor",
            titulo: "4. Movendo a Grade (Horizontal)",
            conteudo: `
                <p>Se a grade for menor que o container, podemos mover a grade inteira.</p>
                <p>Mova a grade para a direita (fim) usando <code>justify-content: end;</code> na classe <code>.container</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .container { display: grid; grid-template-columns: 30px 30px; gap: 5px; width: 100%; height: 60px; background: #ecf0f1; border: 2px dashed #bdc3c7; }
                    .item { height: 30px; background: #e74c3c; }
                </style>
                <div class="palco">
                    <div class="container">
                        <div class="item"></div>
                        <div class="item"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".container{justify-content:end;}",
                ".container{justify-content:flex-end;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "5. Movendo a Grade (Vertical)",
            conteudo: `
                <p>Agora vamos mover a grade verticalmente para o centro.</p>
                <p>Use <code>align-content: center;</code> na classe <code>.area</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .area { display: grid; grid-template-columns: 30px 30px; gap: 5px; width: 100px; height: 150px; background: #34495e; margin: 0 auto; border: 2px solid #2c3e50; }
                    .bloco { height: 30px; background: #2ecc71; }
                </style>
                <div class="palco">
                    <div class="area">
                        <div class="bloco"></div>
                        <div class="bloco"></div>
                        <div class="bloco"></div>
                        <div class="bloco"></div>
                    </div>
                </div>`,
            respostasCertas: [".area{align-content:center;}"]
        },
        {
            tipo: "editor",
            titulo: "6. Espalhando a Grade (Desafio)",
            conteudo: `
                <p>Queremos que as colunas fiquem o mais longe possível uma da outra.</p>
                <p>Use <code>justify-content</code> com valor <code>space-between</code> na classe <code>.nav</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .nav { display: grid; grid-template-columns: 40px 40px; width: 100%; height: 50px; background: #8e44ad; padding: 5px; box-sizing: border-box; }
                    .btn { height: 40px; background: #9b59b6; border: 1px solid white; }
                </style>
                <div class="palco">
                    <div class="nav">
                        <div class="btn"></div>
                        <div class="btn"></div>
                    </div>
                </div>`,
            respostasCertas: [".nav{justify-content:space-between;}"]
        },
        {
            tipo: "editor",
            titulo: "7. Esticando Tudo (Desafio)",
            conteudo: `
                <p>Os itens estão pequenos. Faça eles esticarem para preencher a célula.</p>
                <p>Na classe <code>.grade</code>, use <code>justify-items</code> com valor <code>stretch</code>.</p>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Começa centralizado para o aluno consertar */
                    .grade { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; width: 150px; margin: 0 auto; background: #ecf0f1; justify-items: center; }
                    .barra { height: 30px; width: 30px; background: #e67e22; /* width fixo será ignorado ou esticado visualmente se removermos width? No grid stretch, ele estica se width for auto. Vamos remover width do .barra abaixo */ } 
                    .barra-stretch { height: 30px; background: #e67e22; }
                </style>
                <div class="palco">
                    <div class="grade">
                        <div class="barra-stretch"></div>
                        <div class="barra-stretch"></div>
                    </div>
                </div>`,
            respostasCertas: [".grade{justify-items:stretch;}"]
        },
        {
            tipo: "editor",
            titulo: "8. BOSS: O Centro Absoluto",
            conteudo: `
                <p>O item precisa estar no centro da célula, E a grade precisa estar no centro do container.</p>
                <p>Na classe <code>.boss</code>, configure:</p>
                <ul style="font-size:0.9em; margin-left:15px;">
                    <li>Centralizar o item na célula (<code>place-items</code>).</li>
                    <li>Centralizar a grade no container (<code>justify-content</code> e <code>align-content</code>).</li>
                </ul>
            `,
            esconderSeletor: true,
            seletor: "",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .boss { display: grid; grid-template-columns: 50px 50px; gap: 5px; width: 100%; height: 200px; background: #2c3e50; border: 4px solid #f1c40f; }
                    .loot { width: 30px; height: 30px; background: #e74c3c; border: 2px solid white; }
                </style>
                <div class="palco">
                    <div class="boss">
                        <div class="loot"></div>
                        <div class="loot"></div>
                        <div class="loot"></div>
                        <div class="loot"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".boss{place-items:center;justify-content:center;align-content:center;}",
                ".boss{place-items:center;align-content:center;justify-content:center;}",
                ".boss{justify-content:center;align-content:center;place-items:center;}",
                ".boss{align-content:center;justify-content:center;place-items:center;}"
            ]
        }
    ],
// --- MISSÃO 25: O METAMORFO (Responsividade e Media Queries) ---
    "css_adv_25": [
        {
            tipo: "editor",
            titulo: "1. O Gatilho",
            conteudo: `
                <p>O <code>@media</code> aplica regras apenas se a tela obedecer a uma condição.</p>
                <p>Vamos simular um celular. Mude o fundo da caixa para vermelho.</p>
                <p>Digite: <code>.box { background: red; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre", 
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; text-align: center; }
                    .box { width: 100px; height: 100px; background: blue; transition: 0.5s; margin: 0 auto; }
                </style>
                <div class="palco">
                    <div class="box"></div>
                </div>
                <div style="margin-top:10px; color:#aaa; font-family:monospace; font-size:12px;">
                    @media (max-width: 600px) { ... }
                </div>`,
            respostasCertas: [
                ".box{background:red;}", 
                ".box { background: red; }", 
                ".box{background-color:red;}"
            ]
        },
        {
            tipo: "editor",
            titulo: "2. Quebrando o Grid",
            conteudo: `
                <p>No celular, 2 colunas ficam apertadas.</p>
                <p>Mude o grid para <strong>1 coluna</strong> (fração única).</p>
                <p>Digite: <code>.grid { grid-template-columns: 1fr; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
                    .item { height: 50px; background: #2ecc71; border: 1px solid #27ae60; }
                </style>
                <div class="palco">
                    <div class="grid">
                        <div class="item"></div>
                        <div class="item"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".grid{grid-template-columns:1fr;}", 
                ".grid { grid-template-columns: 1fr; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "3. Flexbox Vertical",
            conteudo: `
                <p>O menu está deitado (row). No celular, ele deve ficar em pé.</p>
                <p>Mude a direção do Flex para <code>column</code>.</p>
                <p>Digite: <code>.menu { flex-direction: column; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .menu { display: flex; gap: 10px; background: #34495e; padding: 10px; }
                    .link { background: #ecf0f1; padding: 5px 10px; text-align: center; font-family: sans-serif; }
                </style>
                <div class="palco">
                    <div class="menu">
                        <div class="link">Home</div>
                        <div class="link">Sobre</div>
                        <div class="link">Contato</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".menu{flex-direction:column;}", 
                ".menu { flex-direction: column; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "4. Escondendo Coisas",
            conteudo: `
                <p>A barra lateral vermelha ocupa muito espaço no celular.</p>
                <p>Faça ela sumir usando <code>display: none;</code>.</p>
                <p>Digite: <code>.sidebar { display: none; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .layout { display: flex; gap: 10px; }
                    .sidebar { width: 50px; height: 100px; background: #e74c3c; }
                    .conteudo { flex: 1; height: 100px; background: #ecf0f1; }
                </style>
                <div class="palco">
                    <div class="layout">
                        <div class="sidebar"></div>
                        <div class="conteudo"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".sidebar{display:none;}", 
                ".sidebar { display: none; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "5. Botões Grandes",
            conteudo: `
                <p>Dedos são gordinhos. Botões precisam ser maiores no touch.</p>
                <p>Aumente o padding interno para <code>20px</code>.</p>
                <p>Digite: <code>.btn { padding: 20px; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; text-align: center; }
                    .btn { padding: 10px; background: #3498db; color: white; border: none; font-size: 16px; font-family: sans-serif; }
                </style>
                <div class="palco">
                    <button class="btn">Toque Aqui</button>
                </div>`,
            respostasCertas: [
                ".btn{padding:20px;}", 
                ".btn { padding: 20px; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "6. Texto Legível",
            conteudo: `
                <p>Textos pequenos forçam a vista no celular.</p>
                <p>Aumente o tamanho da fonte para <code>18px</code>.</p>
                <p>Digite: <code>p { font-size: 18px; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    p { font-size: 12px; background: #fff; padding: 10px; border: 1px solid #ccc; font-family: sans-serif; }
                </style>
                <div class="palco">
                    <p>Texto muito pequeno para ler no celular.</p>
                </div>`,
            respostasCertas: [
                "p{font-size:18px;}", 
                "p { font-size: 18px; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "7. Reordenar (Order)",
            conteudo: `
                <p>No celular, queremos a imagem (laranja) aparecendo <strong>antes</strong> do texto.</p>
                <p>Mude a ordem da imagem para <code>-1</code>.</p>
                <p>Digite: <code>.img { order: -1; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .card { display: flex; flex-direction: column; width: 150px; margin: 0 auto; background: white; padding: 5px; }
                    .texto { height: 40px; background: #bdc3c7; margin-bottom: 5px; display:flex; align-items:center; justify-content:center; font-family: sans-serif; font-size: 12px; }
                    .img { height: 60px; background: #e67e22; display:flex; align-items:center; justify-content:center; color:white; font-family: sans-serif; font-size: 12px; }
                </style>
                <div class="palco">
                    <div class="card">
                        <div class="texto">Texto</div>
                        <div class="img">Imagem</div>
                    </div>
                </div>`,
            respostasCertas: [
                ".img{order:-1;}", 
                ".img { order: -1; }"
            ]
        },
        {
            tipo: "editor",
            titulo: "8. Boss: Card Responsivo",
            conteudo: `
                <p>Transforme o card horizontal em vertical.</p>
                <p>1. Mude para <code>column</code>.</p>
                <p>2. Centralize com <code>align-items: center</code>.</p>
                <p>Digite o CSS completo para <code>.card</code>.</p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    /* Card começa horizontal (row) */
                    .card { display: flex; gap: 10px; background: #fff; padding: 10px; border: 1px solid #ccc; justify-content: center; }
                    .avatar { width: 50px; height: 50px; background: #9b59b6; border-radius: 50%; }
                    .info { width: 100px; height: 50px; background: #ecf0f1; }
                </style>
                <div class="palco">
                    <div class="card">
                        <div class="avatar"></div>
                        <div class="info"></div>
                    </div>
                </div>`,
            respostasCertas: [
                ".card{flex-direction:column;align-items:center;}",
                ".card{align-items:center;flex-direction:column;}"
            ]
        }
    ],

// --- MISSÃO 26: MEDIDAS MÁGICAS (Unidades Relativas) ---
    "css_adv_26": [
        {
            tipo: "editor",
            titulo: "1. Porcentagem (%)",
            conteudo: `
                <p>Pixels são fixos e travados. A porcentagem se adapta ao pai.</p>
                <p>Faça a barra vermelha encher <strong>metade</strong> do container cinza.</p>
                <p>Digite: <code>.barra { width: 50%; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre", 
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .container { width: 200px; background: #eee; border: 2px solid #333; height: 30px; margin: 0 auto; }
                    .barra { height: 100%; background: #e74c3c; width: 20px; /* Mude isso */ transition: 0.5s; }
                </style>
                <div class="palco">
                    <div class="container">
                        <div class="barra"></div>
                    </div>
                </div>`,
            respostasCertas: [".barra{width:50%;}", ".barra { width: 50%; }"]
        },
        {
            tipo: "editor",
            titulo: "2. Altura da Tela (vh)",
            conteudo: `
                <p><code>100vh</code> significa 100% da altura da tela (Viewport Height).</p>
                <p>Faça o Hero ocupar a tela inteira, não importa o tamanho.</p>
                <p>Digite: <code>.hero { height: 100vh; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: block; width: 100%; height: 200px; position: relative; border: 2px dashed #ccc; box-sizing: border-box; overflow: hidden; }
                    /* max-height: 100% impede que o 100vh vaze do simulador e quebre sua página */
                    .hero { width: 100%; background: #3498db; color: white; display: flex; align-items: center; justify-content: center; height: 50px; max-height: 100%; transition: 0.3s; box-sizing: border-box; }
                </style>
                <div class="palco">
                    <div class="hero">Hero Section</div>
                </div>`,
            respostasCertas: [".hero{height:100vh;}", ".hero { height: 100vh; }"]
        },
        {
            tipo: "editor",
            titulo: "3. Largura da Tela (vw)",
            conteudo: `
                <p>A unidade <code>vw</code> significa Viewport Width (Largura da Tela do seu dispositivo).</p>
                <p>Digite: <code>.modal { width: 20vw; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; width: 100%; padding: 20px; box-sizing: border-box; overflow: hidden; border-radius: 0 0 8px 8px; }
                    .modal { height: 100px; background: #f1c40f; border: 2px solid #f39c12; width: 20px; display: flex; align-items: center; justify-content: center; font-weight: bold; transition: 0.3s; box-sizing: border-box; }
                </style>
                <div class="palco">
                    <div class="modal">Aviso</div>
                </div>`,
            respostasCertas: [".modal{width:20vw;}", ".modal { width: 20vw; }"]
        },
        {
            tipo: "editor",
            titulo: "4. A Unidade REM",
            conteudo: `
                <p><code>rem</code> baseia-se no tamanho da fonte do navegador (geralmente 16px).</p>
                <p><code>2rem</code> = 32px (2x o padrão). É melhor para acessibilidade.</p>
                <p>Defina: <code>.titulo { font-size: 2rem; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre", 
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; text-align: center; }
                    .titulo { font-size: 10px; font-family: sans-serif; transition: 0.3s; }
                </style>
                <div class="palco">
                    <div class="titulo">Título Responsivo</div>
                </div>`,
            respostasCertas: [".titulo{font-size:2rem;}", ".titulo { font-size: 2rem; }"]
        },
        {
            tipo: "editor",
            titulo: "5. Max Width (Limite)",
            conteudo: `
                <p>Para o texto não ficar com linhas infinitas em telas grandes, usamos <code>max-width</code>.</p>
                <p>Limite o texto a 300px.</p>
                <p>Digite: <code>.texto { max-width: 300px; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .texto { background: #fff; padding: 10px; margin: 0 auto; width: 100%; border: 1px solid #ccc; font-size: 12px; }
                </style>
                <div class="palco">
                    <div class="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. O texto vai esticar até o limite que você definir.</div>
                </div>`,
            respostasCertas: [".texto{max-width:300px;}", ".texto { max-width: 300px; }"]
        },
        {
            tipo: "editor",
            titulo: "6. Min Width (Mínimo)",
            conteudo: `
                <p>Botões não podem ficar pequenos demais.</p>
                <p>Garanta que o botão tenha pelo menos 100px.</p>
                <p>Digite: <code>.btn { min-width: 100px; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: flex; justify-content: center; padding: 20px; width: 100%; }
                    .btn { background: #27ae60; color: white; border: none; padding: 10px; width: 10px; /* Muito pequeno! */ white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: center; }
                </style>
                <div class="palco">
                    <button class="btn">OK</button>
                </div>`,
            respostasCertas: [".btn{min-width:100px;}", ".btn { min-width: 100px; }"]
        },
        {
            tipo: "editor",
            titulo: "7. Imagem Flexível",
            conteudo: `
                <p>A imagem está vazando do container!</p>
                <p>Para imagens responsivas, usamos largura máxima de 100%.</p>
                <p>Digite: <code>.foto { max-width: 100%; }</code></p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; }
                    .caixa { width: 150px; border: 4px solid #c0392b; overflow: visible; background: #fff; }
                    .foto { width: 250px; /* Maior que a caixa! */ height: 100px; background: #34495e; display: flex; align-items: center; justify-content: center; color: white; }
                </style>
                <div class="palco">
                    <div class="caixa">
                        <div class="foto">IMAGEM GIGANTE</div>
                    </div>
                </div>`,
            respostasCertas: [".foto{max-width:100%;}", ".foto { max-width: 100%; }"]
        },
        {
            tipo: "editor",
            titulo: "8. Boss: O Container Perfeito",
            conteudo: `
                <p>Crie o container padrão da web moderna.</p>
                <p>1. Largura de <strong>90%</strong> (fluido).</p>
                <p>2. Máximo de <strong>400px</strong> (limite).</p>
                <p>3. Margem automática (centro).</p>
                <p>Aplique tudo na classe <code>.container</code>.</p>
            `,
            esconderSeletor: false,
            seletor: "",
            unidade: "livre",
            htmlInicial: `
                <style>
                    .palco { display: block; padding: 20px; width: 100%; background: #2c3e50; }
                    .container { background: white; height: 100px; width: 20px; /* Começa errado */ }
                </style>
                <div class="palco">
                    <div class="container"></div>
                </div>`,
            respostasCertas: [
                ".container{width:90%;max-width:400px;margin:auto;}",
                ".container{max-width:400px;width:90%;margin:auto;}",
                ".container{margin:auto;width:90%;max-width:400px;}"
            ]
        }
    ],
};

// --- CONFIGURAÇÃO DAS MISSÕES (TÍTULO E LINGUAGEM) ---
const configMissoes = {
    // --- Semanais (BÁSICO - Mantido) ---
    "var_tipos": { titulo: "Variáveis e Tipos", lang: "Python", cor: "#FFD43B", corTexto: "#306998" },
    "operadores": { titulo: "Operadores Lógicos", lang: "Python", cor: "#FFD43B", corTexto: "#306998" },
    "condicionais": { titulo: "Estruturas Condicionais", lang: "Python", cor: "#FFD43B", corTexto: "#306998" },
    "loops": { titulo: "Loops e Repetições", lang: "Python", cor: "#FFD43B", corTexto: "#306998" },
    "funcoes": { titulo: "Funções Básicas", lang: "Python", cor: "#FFD43B", corTexto: "#306998" },
    "arrays": { titulo: "Arrays e Listas", lang: "Python", cor: "#FFD43B", corTexto: "#306998" },
    "objetos": { titulo: "Objetos e Classes", lang: "Python", cor: "#FFD43B", corTexto: "#306998" },

    // --- Curso de Lógica ---
    "logica_sequencia": { titulo: "O Robô Cozinheiro", lang: "Lógica", cor: "#4CAF50", corTexto: "#fff" },
    "logica_decisao": { titulo: "O Labirinto de Decisões", lang: "Lógica", cor: "#4CAF50", corTexto: "#fff" },
    "logica_padroes": { titulo: "Detetive de Padrões", lang: "Lógica", cor: "#4CAF50", corTexto: "#fff" },
    "logica_debug": { titulo: "Consertando o Código", lang: "Lógica", cor: "#4CAF50", corTexto: "#fff" },
    "logica_troca": { titulo: "A Lógica da Troca", lang: "Lógica", cor: "#4CAF50", corTexto: "#fff" },
    "logica_contador": { titulo: "O Contador de Passos", lang: "Lógica", cor: "#4CAF50", corTexto: "#fff" },
    "revisao_logica_1": { titulo: "Desafio: O Semáforo", lang: "Lógica", cor: "#FF5722", corTexto: "#fff" },
    "alg_busca": { titulo: "Adivinhe o Número", lang: "Lógica", cor: "#2196F3", corTexto: "#fff" },
    "alg_ordenacao": { titulo: "Organizando a Estante", lang: "Lógica", cor: "#2196F3", corTexto: "#fff" },
    "alg_caminho": { titulo: "O Menor Caminho", lang: "Lógica", cor: "#2196F3", corTexto: "#fff" },
    "alg_pilha": { titulo: "A Pilha de Pratos", lang: "Lógica", cor: "#2196F3", corTexto: "#fff" },
    "alg_fila": { titulo: "A Fila do Banco", lang: "Lógica", cor: "#2196F3", corTexto: "#fff" },
    "alg_acumulador": { titulo: "O Cofre (Acumulador)", lang: "Lógica", cor: "#2196F3", corTexto: "#fff" },
    "proj_final_logica": { titulo: "Projeto: Escape Room", lang: "Lógica", cor: "#9C27B0", corTexto: "#fff" },
    "est_matriz": { titulo: "Matrizes (Grids)", lang: "Dados", cor: "#9C27B0", corTexto: "#fff" },
    "est_dicionario": { titulo: "Dicionários (Keys)", lang: "Dados", cor: "#9C27B0", corTexto: "#fff" },
    "alg_recursao": { titulo: "Recursão Infinita", lang: "Lógica", cor: "#E91E63", corTexto: "#fff" },
    "logica_modulo": { titulo: "Operador Módulo %", lang: "Matemática", cor: "#E91E63", corTexto: "#fff" },
    "logica_erros": { titulo: "Try / Catch", lang: "Controle", cor: "#F44336", corTexto: "#fff" },
    "est_arvore": { titulo: "Estrutura de Árvore", lang: "Dados", cor: "#9C27B0", corTexto: "#fff" },
    "revisao_logica_2": { titulo: "Desafio Hacker", lang: "Hacking", cor: "#212121", corTexto: "#00FF00" },
    "oop_classe": { titulo: "22. A Fábrica (Classes)", lang: "POO", cor: "#FF9800", corTexto: "#fff" },
    "oop_atributos": { titulo: "23. Dando Vida", lang: "POO", cor: "#FF9800", corTexto: "#fff" },
    "oop_metodos": { titulo: "24. Ensinando Ações", lang: "POO", cor: "#FF9800", corTexto: "#fff" },
    "oop_heranca": { titulo: "25. Herança", lang: "POO", cor: "#FF9800", corTexto: "#fff" },
    "oop_polimorfismo": { titulo: "26. Polimorfismo", lang: "POO", cor: "#FF9800", corTexto: "#fff" },
    "oop_encapsulamento": { titulo: "27. Segurança (Privado)", lang: "POO", cor: "#FF9800", corTexto: "#fff" },
    "proj_final_oop": { titulo: "28. Projeto: Arena RPG", lang: "Projeto", cor: "#795548", corTexto: "#fff" },
    "fer_json": { titulo: "29. JSON", lang: "Web", cor: "#00BCD4", corTexto: "#fff" },
    "fer_string": { titulo: "30. Dominando Textos", lang: "Utils", cor: "#00BCD4", corTexto: "#fff" },
    "fer_datas": { titulo: "31. O Tempo (Dates)", lang: "Utils", cor: "#00BCD4", corTexto: "#fff" },
    "fer_lambda": { titulo: "32. Funções Lambda", lang: "Code", cor: "#00BCD4", corTexto: "#fff" },
    "fer_funcional": { titulo: "33. Map & Filter", lang: "Code", cor: "#00BCD4", corTexto: "#fff" },
    "fer_regex": { titulo: "34. Regex (Padrões)", lang: "Avancado", cor: "#00BCD4", corTexto: "#fff" },
    "fer_api": { titulo: "35. APIs e Rede", lang: "Web", cor: "#009688", corTexto: "#fff" },
    "eng_clean": { titulo: "36. Clean Code", lang: "Pro", cor: "#607D8B", corTexto: "#fff" },
    "eng_git": { titulo: "37. Git & GitHub", lang: "Pro", cor: "#607D8B", corTexto: "#fff" },
    "eng_testes": { titulo: "38. Testes Unitários", lang: "QA", cor: "#607D8B", corTexto: "#fff" },
    "eng_patterns": { titulo: "39. Design Patterns", lang: "Arch", cor: "#455A64", corTexto: "#fff" },
    "eng_bigo": { titulo: "40. Performance (Big O)", lang: "CS", cor: "#455A64", corTexto: "#fff" },
    "eng_mvc": { titulo: "41. Arquitetura MVC", lang: "Arch", cor: "#37474F", corTexto: "#fff" },
    "desafio_final_mestre": { titulo: "42. DESAFIO MESTRE", lang: "KERNEL", cor: "#000000", corTexto: "#FFD700" },

    // --- CURSO HTML ---
    "html_estrutura": { titulo: "1. Estrutura Básica", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_textos": { titulo: "2. Títulos e Textos", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_formatacao": { titulo: "3. Formatação", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_links": { titulo: "4. Links", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_imagens": { titulo: "5. Imagens", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_listas": { titulo: "6. Listas", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_atributos": { titulo: "7. Atributos", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_tabelas": { titulo: "8. Tabelas", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_forms": { titulo: "9. Formulários", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_botoes": { titulo: "10. Botões", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_divs": { titulo: "11. Div e Span", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_classes": { titulo: "12. IDs e Classes", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_semantica": { titulo: "13. Semântica", lang: "HTML", cor: "#E44D26", corTexto: "#fff" },
    "html_projeto": { titulo: "14. Desafio HTML", lang: "PROJETO", cor: "#333", corTexto: "#E44D26" },

    // --- CURSO CSS ---
    "css_intro": { titulo: "15. Introdução ao CSS", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_seletores": { titulo: "16. Seletores", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_cores": { titulo: "17. Cores e Fundos", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_texto": { titulo: "18. Tipografia", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_boxmodel": { titulo: "19. Box Model", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_display": { titulo: "20. Display e Posição", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_flex_intro": { titulo: "21. Flexbox: O Container", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_flex_alinhamento": { titulo: "22. Flexbox: Alinhando", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_flex_wrap": { titulo: "23. Flexbox: Quebras", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_projeto_layout": { titulo: "24. Projeto: Site Flex", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_grid": { titulo: "25. CSS Grid Layout", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_responsivo": { titulo: "26. Responsividade", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_animacoes": { titulo: "27. Efeitos e Animações", lang: "CSS", cor: "#2965f1", corTexto: "#fff" },
    "css_projeto_final": { titulo: "28. PROJETO MASTER", lang: "FINAL", cor: "#000", corTexto: "#00FF00" },

    // --- CURSO JAVASCRIPT ---
    "js_intro": { titulo: "1. Hello World", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_console": { titulo: "2. O Console", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_variaveis": { titulo: "3. Variáveis", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_tipos": { titulo: "4. Tipos de Dados", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },

    // ---(Módulo 1 - Parte 2) ---
    "js_operadores": { titulo: "5. Operadores", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_comparadores": { titulo: "6. Comparadores", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_logica": { titulo: "7. E, OU, NÃO", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_templates": { titulo: "8. Template Strings", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_null": { titulo: "9. Null e Undefined", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_desafio_1": { titulo: "10. Desafio: Média", lang: "JavaScript", cor: "#000", corTexto: "#F7DF1E" },

    // ---(Módulo 2 - Controle de Fluxo) ---
    "js_condicionais": { titulo: "11. Decisões (If/Else)", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_ternario": { titulo: "12. Else If e Ternário", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_switch": { titulo: "13. Switch Case", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_while": { titulo: "14. Loop While", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_for": { titulo: "15. Loop For", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },

    // ---(Módulo 3 - O DOM) ---
    "js_dom_intro": { titulo: "16. O que é DOM?", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_seletores": { titulo: "17. Selecionando Elementos", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_conteudo": { titulo: "18. Mudando Texto", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_estilo": { titulo: "19. Mudando CSS (Estilo)", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_eventos": { titulo: "20. Eventos (Clicks)", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },

    // ---(Modulo 4 - Dados) ---
    "js_arrays": { titulo: "21. Arrays (Listas)", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_arrays_metodos": { titulo: "22. Manipulando Listas", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_for_of": { titulo: "23. Loop For..Of", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_objetos": { titulo: "24. Objetos (Objects)", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_objetos_metodos": { titulo: "25. Métodos e 'This'", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },

    // ---(Modulo 5 - JS Moderno e Storage) ---
    "js_arrow": { titulo: "26. Arrow Functions", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_destructuring": { titulo: "27. Desestruturação", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_map_filter": { titulo: "28. Map e Filter", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_json": { titulo: "29. O que é JSON?", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_localstorage": { titulo: "30. LocalStorage", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },

    // ---(Módulo 6 - Assincronismo) ---
    "js_async_intro": { titulo: "31. Assincronismo", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_promises": { titulo: "32. Promises (Promessas)", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_async_await": { titulo: "33. Async / Await", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_fetch": { titulo: "34. Fetch API (Requisições)", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_try_catch": { titulo: "35. Tratando Erros", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },

    // --- (Módulo 7 - Avançado e Final) ---
    "js_classes": { titulo: "36. Classes (POO)", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_modulos": { titulo: "37. Módulos (Import/Export)", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_datas": { titulo: "38. Datas e Tempo", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_math": { titulo: "39. Math e Aleatório", lang: "JavaScript", cor: "#F7DF1E", corTexto: "#000" },
    "js_projeto_master": { titulo: "40. Lógica Master: ToDo", lang: "JavaScript", cor: "#000", corTexto: "#FFD700" },

    // --- CURSO CSS AVANÇADO (RPG) ---
    "css_adv_1": { titulo: "1. A Magia das Cores", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_2": { titulo: "2. Classes e Grupos", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_3": { titulo: "3. O Poder do ID", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_4": { titulo: "4. Box Model (Território)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_5": { titulo: "5. Estrutura (Display)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_6": { titulo: "6. Posicionamento (GPS)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_7": { titulo: "7. Tipografia (A Voz)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_8": { titulo: "8. Interação (:hover)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_9": { titulo: "9. Fundos (Background)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_10": { titulo: "10. Decoração (Style)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    // -- Flex box
    "css_adv_11": { titulo: "11. A Guilda (Flexbox)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_12": { titulo: "12. Campo de Batalha (Justify)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_13": { titulo: "13. A Masmorra Vertical", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_14": { titulo: "14. O Tesouro (Sizing)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_15": { titulo: "15. Táticas (Order & Self)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_16": { titulo: "16. A Bússola (Eixos)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_17": { titulo: "17. Arquitetura (Aninhado)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_18": { titulo: "18. Alinhamento (Santo Graal)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_19": { titulo: "19. Fluxo (Wrap & Align)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    "css_adv_20": { titulo: "20. O Arquiteto (Layouts)", lang: "Pro", cor: "#2965f1", corTexto: "#fff" },
    // -- Grid
    "css_adv_21": { titulo: "21. A Rede Urbana (Grid)", lang: "Pro", cor: "#e67e22", corTexto: "#fff" },
    "css_adv_22": { titulo: "22. Mestre de Obras (Pos)", lang: "Pro", cor: "#e67e22", corTexto: "#fff" },
    "css_adv_23": { titulo: "23. O Mapa (Grid Areas)", lang: "Pro", cor: "#e67e22", corTexto: "#fff" },
    "css_adv_24": { titulo: "24. Alinhamento (Grid)", lang: "Pro", cor: "#e67e22", corTexto: "#fff" },
    //-- Responsividade
    "css_adv_25": { titulo: "25. O Metamorfo (@media)", lang: "Pro", cor: "#d35400", corTexto: "#fff" },
    "css_adv_26": { titulo: "26. Medidas Mágicas", lang: "Pro", cor: "#8e44ad", corTexto: "#fff" },
    
};

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                             LÓGICA
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
let perguntasAtuais = [];
let filaRevisao = [];
let indiceAtual = 0;
let modoRevisao = false;
let respostaUsuario = []; 
let selecaoUsuario = null;
let idMissaoAtual = "";

const container = document.getElementById('conteudo-dinamico');
const btnVerificar = document.getElementById('btn-verificar');
const btnContinuar = document.getElementById('btn-continuar');
const feedback = document.getElementById('mensagem-feedback');
const barraProgresso = document.getElementById('barra-progresso');
const contadorPassos = document.getElementById('contador-passos');
const containerVidas = document.getElementById('container-vidas');

function getMissaoID() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id && bancoDeMissoes[id]) return id;
    // ID ausente ou inválido — redireciona para o menu de missões
    window.location.replace('../paginas/missoes_menu.html');
    return null;
}

document.addEventListener('DOMContentLoaded', () => {
    let vidasAtuais = parseInt(localStorage.getItem('codin_vidas'));
    if (isNaN(vidasAtuais)) vidasAtuais = 5; 

    if (vidasAtuais <= 0) {
        mostrarGameOver(); 
        return;            
    }
    idMissaoAtual = getMissaoID();
    if (!idMissaoAtual) return; // redirecionando
    perguntasAtuais = [...bancoDeMissoes[idMissaoAtual]];   
    const config = configMissoes[idMissaoAtual] || { titulo: "Missão Especial", lang: "Geral", cor: "#ddd", corTexto: "#333" };
    let classeIcone = 'fa-brands fa-python';
    switch (config.lang) {
        // --- GRUPO HTML --- //
        case 'HTML':
            classeIcone = 'fa-brands fa-html5';
            break;

        // --- GRUPO CSS  --- //
        case 'CSS':
        case 'Layout':
        case 'Flex':
        case 'Grid':
        case 'Mobile':
        case 'FX':
        case 'Style': // Caso use essa tag no futuro
            classeIcone = 'fa-brands fa-css3-alt'; // Ícone CSS3 Padrão
            break;

        // --- GRUPO LÓGICA e ALGORITMOS --- //
        case 'Lógica':
        case 'Algoritmo':
        case 'CS':
            classeIcone = 'fas fa-network-wired'; 
            break;

        // --- GRUPO DADOS --- //
        case 'Dados':
        case 'Estrutura':
            classeIcone = 'fas fa-database'; 
            break;

        // --- GRUPO POO --- //
        case 'POO':
        case 'Arch': 
            classeIcone = 'fas fa-cubes'; 
            break;

        // --- GRUPO WEB GERAL --- //
        case 'Web':
            classeIcone = 'fas fa-globe'; 
            break;
        case 'Hacking':
            classeIcone = 'fas fa-user-secret'; 
            break;

        // --- GRUPO AVANÇADO --- //
        case 'Pro':
        case 'Avancado':
        case 'Code':
        case 'Utils':
        case 'Controle':
            classeIcone = 'fas fa-laptop-code'; 
            break;

        // --- OUTROS --- //
        case 'Matemática':
            classeIcone = 'fas fa-calculator'; 
            break;
        case 'QA':
            classeIcone = 'fas fa-vial'; 
            break;

        // --- PROJETOS --- //
        case 'Projeto':
        case 'KERNEL':
        case 'PROJETO': 
        case 'FINAL':
            classeIcone = 'fas fa-trophy'; 
            break;

        // --- LINGUAGENS --- //
        case 'JavaScript':
            classeIcone = 'fa-brands fa-js';
            break;
        case 'Python':
            classeIcone = 'fa-brands fa-python';
            break;
            
        default:
            if (idMissaoAtual.startsWith('html_')) classeIcone = 'fa-brands fa-html5';
            else if (idMissaoAtual.startsWith('css_')) classeIcone = 'fa-brands fa-css3-alt';
            else classeIcone = 'fa-solid fa-code';
            
        // Add mais aq, caso tiver mais futuramente 
    }
    // ------------------------------------- //

    const elTitulo = document.querySelector('.titulo-missao');
    if (elTitulo) {
        elTitulo.innerHTML = `
            <div>
                <i class="fa-solid fa-bullseye"></i> Missão: ${config.titulo}
                <span style="display:inline-block; margin-left:10px; font-size:0.6em; background:${config.cor}; color:${config.corTexto}; padding:3px 8px; border-radius:12px; vertical-align:middle; font-weight:bold; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <i class="${classeIcone}"></i> ${config.lang}
                </span>
            </div>
        `;
    }
    document.title = `Missão: ${config.titulo} - Codin`;

    if(document.documentElement.style.setProperty) {
        document.documentElement.style.setProperty('--cor-tema', config.cor);
    }

    if (typeof atualizarVidasVisual === 'function') atualizarVidasVisual();
    carregarPergunta();
});

function carregarPergunta() {
    const listaAtiva = modoRevisao ? filaRevisao : perguntasAtuais;
    if (indiceAtual >= listaAtiva.length) {
        
        if (modoRevisao) {
            finalizarMissao();
        } else {
            if (filaRevisao.length > 0) {
                iniciarModoRevisao();
            } else {
                finalizarMissao();
            }
        }
        return;
    }

    const p = listaAtiva[indiceAtual];

    if(btnVerificar) {
        btnVerificar.onclick = verificarResposta; 
        btnVerificar.innerText = "Verificar";
        btnVerificar.style.display = 'block';
        btnVerificar.classList.remove('ativo');
    }
    if(btnContinuar) btnContinuar.style.display = 'none';
    if(feedback) {
        feedback.style.display = 'none';
        feedback.className = 'feedback';
    }
    
    respostaUsuario = [];
    selecaoUsuario = null;

    if (modoRevisao) {
        if(barraProgresso) {
            barraProgresso.style.width = "100%";
            barraProgresso.style.backgroundColor = "#FFC107";
        }
        if(contadorPassos) {
            contadorPassos.innerText = `Revisão: ${indiceAtual + 1}/${filaRevisao.length}`;
            contadorPassos.style.color = "#FFC107";
        }
    } else {
        if(barraProgresso) {
            const progresso = (indiceAtual / perguntasAtuais.length) * 100;
            barraProgresso.style.width = `${progresso}%`;
            barraProgresso.style.backgroundColor = "#2196F3"; // Azul normal
        }
        if(contadorPassos) {
            contadorPassos.innerText = `${indiceAtual + 1}/${perguntasAtuais.length}`;
            contadorPassos.style.color = "#555";
        }
    }

    renderizarConteudo(p);
}

function renderizarConteudo(p) {
    let html = `<h2>${p.titulo}</h2>`;
    
    if (modoRevisao) {
        html += `<p style="color:#d32f2f; font-weight:bold; font-size:0.9em;"><i class="fa-solid fa-triangle-exclamation"></i> Vamos tentar de novo!</p>`;
    }

    if (p.instrucao && p.tipo !== 'editor' && p.tipo !== 'game') {
        html += `<p class="instrucao">${p.instrucao}</p>`;
    }

    // TIPO 1: TEORIA //
    if (p.tipo === "teoria") {
        html += `<div style="font-size: 1.1em; line-height: 1.6;">${p.conteudo}</div>`;
        container.innerHTML = html;
        setTimeout(() => {
            if(btnVerificar) {
                btnVerificar.innerText = "Entendi!";
                btnVerificar.classList.add('ativo');
                btnVerificar.onclick = proximaPergunta;
                btnVerificar.style.display = 'block';
            }
        }, 10);
    } 
    
    // TIPO 2: MONTAGEM ///
    else if (p.tipo === "montagem") {
        html += `<div class="area-codigo-montagem" id="area-slots"></div><div class="banco-opcoes" id="area-opcoes"></div>`;
        container.innerHTML = html;
        gerarBlocosMontagem(p);
    } 
    
    // TIPO 3: QUIZ //
    else if (p.tipo === "quiz") {
        html += `<div class="lista-opcoes">`;
        p.opcoes.forEach((op, index) => {
            html += `<button class="opcao-quiz" onclick="selecionarOpcao(${index})">${op}</button>`;
        });
        html += `</div>`;
        container.innerHTML = html;
    }

    // TIPO 4: EDITOR e JOGO
    else if (p.tipo === "editor" || p.tipo === "game") {
        html += `
        <div class="container-editor">
            <div class="coluna-esquerda">
                <div class="teoria-texto">${p.conteudo || p.instrucao}</div>
                
                <div style="margin-top: 15px;">
                    `;
                    if (!p.esconderSeletor) {
                        html += `
                        <p style="font-family:monospace; font-weight:bold; margin-bottom:5px; color:#555;">
                            Seletor: <span style="background:#ddd; padding:2px 6px; border-radius:4px;">${p.seletor || 'CSS'}</span> {
                        </p>`;
                    }

                    html += `
                        <textarea id="input-codigo" 
                                class="area-codigo-input" 
                                placeholder="${p.esconderSeletor ? 'Digite o código CSS completo aqui...' : 'Digite a propriedade...'}" 
                                data-seletor="${p.seletor || ''}" 
                                
                                /* --- NOVIDADE AQUI --- */
                                data-unit="${p.unidade || 'px'}"  /* Qual unidade é permitida? Padrão: px */
                                data-max="${p.limite || 150}"     /* Qual o limite numérico? Padrão: 150 */
                                /* --------------------- */
                                
                                oninput="atualizarPreview()"></textarea>
                        `;

                    if (!p.esconderSeletor) {
                        html += `<p style="font-family:monospace; font-weight:bold; margin-top:5px; color:#555;">}</p>`;
                    }

                    html += `
                </div>
                <div id="feedback-live" class="feedback-editor"></div>
            </div>

            <div class="coluna-direita">
                <div class="barra-preview">
                    <span class="bolinha red"></span>
                    <span class="bolinha yellow"></span>
                    <span class="bolinha green"></span>
                    <span style="margin-left:auto;">Navegador</span>
                </div>
                <div id="preview-palco">
                    ${p.htmlInicial || ''}
                </div>
            </div>
        </div>`;
        
        container.innerHTML = html;      
        if (p.tipo === "game") setTimeout(() => configurarJogo(p), 50);
        if(btnVerificar) {
            btnVerificar.onclick = () => verificarCodigoDigitado(p);
            btnVerificar.innerText = "Verificar Código";
            btnVerificar.classList.remove('ativo');
            btnVerificar.style.display = 'block';
        }
        setTimeout(() => {
            const input = document.getElementById('input-codigo');
            if(input) input.focus();
        }, 100);
    }
}

function gerarBlocosMontagem(p) {
    const areaSlots = document.getElementById('area-slots');
    const areaOpcoes = document.getElementById('area-opcoes');
    areaSlots.innerHTML = '<span style="color:#aaa; font-style:italic;">Clique nos blocos para montar:</span>';
    const blocosMisturados = embaralharLista(p.blocos);

    blocosMisturados.forEach(texto => {
        const btn = document.createElement('div');
        btn.className = 'bloco-codigo';
        btn.innerText = texto;
        btn.onclick = () => moverBloco(btn, texto);
        areaOpcoes.appendChild(btn);
    });
}

function moverBloco(elemento, texto) {
    const areaSlots = document.getElementById('area-slots');
    const areaOpcoes = document.getElementById('area-opcoes');

    if (elemento.parentElement === areaOpcoes) {
        if (respostaUsuario.length === 0) areaSlots.innerHTML = '';
        areaSlots.appendChild(elemento);
        respostaUsuario.push(texto);
    } else {
        areaOpcoes.appendChild(elemento);
        const index = respostaUsuario.indexOf(texto);
        if (index > -1) respostaUsuario.splice(index, 1);
        if (respostaUsuario.length === 0) areaSlots.innerHTML = '<span style="color:#aaa;">...</span>';
    }

    if (respostaUsuario.length > 0) btnVerificar.classList.add('ativo');
    else btnVerificar.classList.remove('ativo');
}

function selecionarOpcao(index) {
    selecaoUsuario = index;
    document.querySelectorAll('.opcao-quiz').forEach((btn, i) => {
        if (i === index) btn.classList.add('selecionada');
        else btn.classList.remove('selecionada');
    });
    btnVerificar.classList.add('ativo');
}

function verificarResposta() {
    const lista = modoRevisao ? filaRevisao : perguntasAtuais;
    const p = lista[indiceAtual]; 
    let acertou = false;

    if (p.tipo === "montagem") {
        if (JSON.stringify(respostaUsuario) === JSON.stringify(p.respostaCerta)) acertou = true;
    } 
    else if (p.tipo === "quiz") {
        if (selecaoUsuario === p.respostaIndex) acertou = true;
    } 
    
    else if (p.tipo === "editor") {
        let codigoAluno = document.getElementById("editor-css").value; 
        let alunoLimpo = normalizarCss(codigoAluno);

        if (p.respostasCertas && p.respostasCertas.length > 0) {
            for (let gabarito of p.respostasCertas) {
                if (alunoLimpo === normalizarCss(gabarito)) {
                    acertou = true;
                    break; 
                }
            }
        }
    }
    // ----------------------------------------------------------- //

    mostrarFeedback(acertou, p);
}

function mostrarFeedback(acertou, pergunta) {
    feedback.style.display = 'block';
    btnVerificar.style.display = 'none';
    btnContinuar.style.display = 'block';

    if (acertou) {
        feedback.innerText = modoRevisao ? "Agora sim! Aprendizado recuperado. 🎓" : "Correto! Mandou bem. 🎉";
        feedback.className = "feedback correto";
    } else {
        feedback.className = "feedback erro";

        if (modoRevisao) {
            let respostaTexto = "";
            if (pergunta.tipo === "quiz") respostaTexto = pergunta.opcoes[pergunta.respostaIndex];
            else if (pergunta.tipo === "montagem") respostaTexto = pergunta.respostaCerta.join(" ");
            else if (pergunta.tipo === "editor") {
                respostaTexto = pergunta.respostasCertas[0];
            }
            // -------------------------- //
            
            feedback.innerHTML = `<strong>Incorreto.</strong><br>A resposta certa era: <code>${respostaTexto}</code>`;
        } else {
            feedback.innerText = "Ops! Essa pergunta vai para a Revisão no final.";
            if (!filaRevisao.includes(pergunta)) {
                filaRevisao.push(pergunta);
            }
            perderVidaGlobal();
        }
    }
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                SISTEMA DE CARD DE REVISÃO
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
// Lista de Frases Motivacionais / Engraçadas para a Revisao
const frasesRevisao = [
    "Fique tranquilo, até eu errei minha primeira linha de código! 🐛",
    "Não é bug, é uma feature surpresa! Mas vamos corrigir... 🛠️",
    "Na minha máquina funcionava... brincadeira, vamos arrumar! 💻",
    "Aposto que foi um ponto e vírgula que fugiu! 🔍",
    "O computador faz o que você manda, não o que você quer. Vamos alinhar isso! 🤖",
    "Programar é a arte de errar até dar certo. Você está no caminho! 🎨",
    "Até os melhores programadores usam o Ctrl+Z. Relaxa! ⌨️",
    "Respira, toma uma água e tenta de novo. O cérebro precisa esfriar! 💧",
    "Errar é humano. Debuggar é divino! ✨",
    "O erro vermelho assusta, mas não morde. Vamos vencer ele! 🦁",
    "Cada erro te deixa um passo mais perto de virar Senior. 💼",
    "Desistir não compila! Bora tentar mais uma vez. 🚀",
    "Se fosse fácil, todo mundo faria. Você é diferente! 🌟",
    "O sucesso é a soma de pequenos esforços (e muitos erros corrigidos). 🏆",
    "Eita! A lógica deu um nó aqui. Vamos desatar?",
    "Ops! Acho que o gato andou no teclado... 🐱",
    "Calma, o teclado não tem culpa! (Ainda) 😤",
    "Isso foi apenas um teste de resistência... e você passou! Agora conserta. 💪",
    "Debuggar é como ser um detetive em um filme de crime onde você é também o assassino. 🕵️‍♂️",
    "Quase lá! Só faltou um detalhezinho de nada. 🤏",
    "Loading sabedoria... Erro encontrado. Reiniciando processo! 🔄",
    "Bora caçar esse bug! 🕸️",
    "Mais uma tentativa, vai dar bom! 👍",
    "Foco no código! 👀",
    "Não deixe o erro te vencer! 🥊"
    // FUTURO PROGAMADOR, PODE ADICIONAR MAIS C QUISER
];

// Lista das Imagens do Mascote
const imagensMascote = [
    "../codin/errocodin.png",
    //VOu add mais dps
];

function iniciarModoRevisao() {
    modoRevisao = true;
    indiceAtual = 0;
    const fraseSorteada = frasesRevisao[Math.floor(Math.random() * frasesRevisao.length)];
    const imagemSorteada = imagensMascote[Math.floor(Math.random() * imagensMascote.length)];

    document.getElementById('frase-revisao').innerText = fraseSorteada;
    
    const imgElement = document.getElementById('img-revisao');
    imgElement.src = imagemSorteada;

    imgElement.onerror = function() {
        this.style.display = 'none'; 
    };

    const modal = document.getElementById('modal-revisao');
    modal.style.display = 'flex';
}

function fecharModalRevisao() {
    document.getElementById('modal-revisao').style.display = 'none';
    carregarPergunta();
}

function proximaPergunta() {
    indiceAtual++;
    carregarPergunta();
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  SISTEMA DE VIDAS GLOBAL
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

function perderVidaGlobal() {
    let vidas = parseInt(localStorage.getItem('codin_vidas'));
    if (isNaN(vidas)) vidas = 5;
    
    if (vidas > 0) {
        vidas--;
        localStorage.setItem('codin_vidas', vidas);
        
        if (!localStorage.getItem('codin_tempo_vida')) {
            localStorage.setItem('codin_tempo_vida', new Date().getTime());
        }
        
        if (typeof atualizarVidasVisual === 'function') atualizarVidasVisual();
    }

    if (vidas === 0) {
        mostrarGameOver();
    }
}

// --- VARIÁVEL PARA O CACHE (MEMÓRIA) --- //
let modalGameOverCache = null;

function mostrarGameOver() {
    if (modalGameOverCache) {
        modalGameOverCache.style.display = 'flex';
        return;
    }
    let modalExistente = document.getElementById('modal-gameover');
    if (modalExistente) {
        modalGameOverCache = modalExistente;
        modalExistente.style.display = 'flex';
        return;
    }
    const modal = document.createElement('div');
    modal.id = 'modal-gameover';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="card-gameover">
            <img src="../codin/0vida.png" alt="Codin Triste" class="mascote-triste" onerror="this.src='https://cdn-icons-png.flaticon.com/512/11520/11520108.png'">
            
            <h2 class="titulo-gameover">Poxa, que pena!</h2>
            
            <p class="texto-gameover">
                Suas energias acabaram. O Codin precisa descansar um pouco para recuperar os corações.
                <br><br>
                <strong>Tente novamente mais tarde!</strong>
            </p>
            
            <button class="btn-gameover" onclick="fecharGameOver()">
                Voltar ao Menu
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    modalGameOverCache = modal;
}

function fecharGameOver() {
    if (modalGameOverCache) {
        modalGameOverCache.style.display = 'none';
    } else {
        const modal = document.getElementById('modal-gameover');
        if (modal) modal.style.display = 'none';
    }

    const url = window.location.href;
    
    if (url.includes('missao.html') || url.includes('misssoes')) { 
        window.location.href = '../index.html';
    } else {
        window.location.href = 'index.html';
    }
}

function atualizarVidasVisual() {
    if (!containerVidas) return; 

    let vidas = parseInt(localStorage.getItem('codin_vidas'));
    if (isNaN(vidas)) vidas = 5;

    containerVidas.innerHTML = '';
    for(let i=0; i<5; i++) {
        if (i < vidas) {
            containerVidas.innerHTML += '<i class="fa-solid fa-heart" style="color:#ff5252; margin-left:5px;"></i>';
        } else {
            containerVidas.innerHTML += '<i class="fa-regular fa-heart" style="color:#ccc; margin-left:5px;"></i>';
        }
    }
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                 FINALIZAÇÃO E SALVAMENTO
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function finalizarMissao() {
    const idFim = (typeof idMissaoAtual !== 'undefined') ? idMissaoAtual : getMissaoID();
    let concluidas = [];
    try { concluidas = JSON.parse(localStorage.getItem('codin_missoes_concluidas')) || []; } catch (e) { localStorage.removeItem('codin_missoes_concluidas'); }

    // --- TRAVA DE SEGURANÇA ANTI-FARM CASO ALGUEM RAQUEAR O MODO DEV ( Eu tirei o botão de revisar, mas deixa a função pode precisar futuramente) ---
    if (concluidas.includes(idFim)) {
        alert("Você já completou essa missão! Sem recompensa extra por enquanto. 😉");

        renderizarTelaVitoria(idFim, 0, 0); 
        return; 
    }

    const premioBaseXP = 40; 
    const premioMoedas = 30;

    // --- LÓGICA DO BOOSTER --- //
    const boosterAte = parseInt(localStorage.getItem('codin_booster_xp_ate')) || 0;
    const agora = new Date().getTime();
    let multiplicador = 1;

    if (agora < boosterAte) {
        multiplicador = 2;
    }

    const xpGanhoFinal = premioBaseXP * multiplicador;

    let saldoAtual = parseInt(localStorage.getItem('codin_saldo')) || 500;
    let xpAtual = parseInt(localStorage.getItem('codin_xp')) || 0;
    let nivelAtual = parseInt(localStorage.getItem('codin_nivel')) || 1;

    saldoAtual += premioMoedas;
    xpAtual += xpGanhoFinal;

    // Level Up //
    let subiuDeNivel = false;
    while (true) {
        let xpNecessario = 100 + (nivelAtual * 75);

        if (xpAtual >= xpNecessario) {
            xpAtual -= xpNecessario;
            nivelAtual++;
            subiuDeNivel = true;
        } else {
            break;
        }
    }

    localStorage.setItem('codin_saldo', saldoAtual);
    localStorage.setItem('codin_xp', xpAtual);
    localStorage.setItem('codin_nivel', nivelAtual);

    concluidas.push(idFim);
    localStorage.setItem('codin_missoes_concluidas', JSON.stringify(concluidas));

    // --- STREAK (sequência de dias) ---
    const hoje = new Date().toDateString();
    const ultimaData = localStorage.getItem('codin_ultima_data');
    const ontem = new Date(Date.now() - 86400000).toDateString();
    let streakAtual = parseInt(localStorage.getItem('codin_streak')) || 0;

    if (ultimaData === hoje) {
        // já jogou hoje, streak não muda
    } else if (ultimaData === ontem) {
        streakAtual++;
    } else {
        streakAtual = 1;
    }
    localStorage.setItem('codin_streak', streakAtual);
    localStorage.setItem('codin_ultima_data', hoje);

    let licoesHoje = parseInt(localStorage.getItem('codin_licoes_hoje')) || 0;
    let dataLicoes = localStorage.getItem('codin_data_licoes_hoje');
    
    if (dataLicoes === hoje) {
        licoesHoje++;
    } else {
        licoesHoje = 1; 
        localStorage.setItem('codin_data_licoes_hoje', hoje);
    }
    localStorage.setItem('codin_licoes_hoje', licoesHoje);

    sessionStorage.removeItem('codin_recem_cadastrado');

    renderizarTelaVitoria(idFim, premioMoedas, xpGanhoFinal);

    if (subiuDeNivel) {
        mostrarLevelUp(nivelAtual);
    }
}

// --- FUNÇÕES AUXILIARES DE FINALIZAÇÃO --- //
function renderizarTelaVitoria(idFim, premioMoedas, premioXP) {
    const container = document.getElementById('conteudo-dinamico') || document.getElementById('conteudo-missao');
    const tituloFase = (typeof configMissoes !== 'undefined' && configMissoes[idFim]) ? configMissoes[idFim].titulo : "Missão";
    const idsSemanais = ["var_tipos", "operadores", "condicionais", "loops", "funcoes", "arrays", "objetos"];
    let linkDestino = "";

    // 1. CSS AVANÇADO //
    if (idFim.startsWith("css_adv_")) {
        linkDestino = '../paginas/missoes_menu.html?modo=curso_css_adv';
    }
    // 2. HTML & CSS (Básico) //
    else if (idFim.startsWith("html_") || idFim.startsWith("css_")) {
        linkDestino = '../paginas/missoes_menu.html?modo=curso_html_css';
    }
    // 3. JavaScript //
    else if (idFim.startsWith("js_")) {
        linkDestino = '../paginas/missoes_menu.html?modo=curso_js';
    }
    // 4. Semanais (Volta pra Home) //
    else if (idsSemanais.includes(idFim)) {
        linkDestino = '../index.html'; 
    }
    // 5. Padrão (Lógica) //
    else {
        linkDestino = '../paginas/missoes_menu.html?modo=curso_logica';
    }
    // ----------------------------------------------------

    const iconeExtra = premioXP > 40 ? '⚡' : ''; 

    container.innerHTML = `
        <div class="card-teoria fade-in" style="text-align:center; padding: 40px 20px;">
            <i class="fas fa-trophy" style="font-size: 60px; color: #FFD700; margin-bottom: 20px;"></i>
            <h1 style="color:#333; margin-bottom: 10px;">Missão Cumprida!</h1>
            <p style="font-size:1.1em; color:#666;">Você completou: <strong>${tituloFase}</strong></p>
            
            <div style="margin: 30px 0; padding: 15px; background: #f8f9fa; border-radius: 10px; display: inline-block;">
                <span style="color:#4CAF50; font-weight:bold; margin-right:15px; font-size: 1.2em;">
                    <i class="fa-brands fa-android"></i> +${premioMoedas}
                </span>
                <span style="color:#2196F3; font-weight:bold; font-size: 1.2em;">
                    <i class="fas fa-star"></i> +${premioXP} ${iconeExtra}
                </span>
            </div>

            <div class="area-botoes-fixa" style="justify-content: center;">
                <button class="btn-proximo" onclick="window.location.href='${linkDestino}'">
                    Continuar Jornada <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
    
    if(typeof btnVerificar !== 'undefined' && btnVerificar) btnVerificar.style.display = 'none';
    if(typeof btnContinuar !== 'undefined' && btnContinuar) btnContinuar.style.display = 'none';
    if(typeof feedback !== 'undefined' && feedback) feedback.style.display = 'none';
    if(typeof barraProgresso !== 'undefined' && barraProgresso) barraProgresso.style.width = '100%';
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                FUNÇÃO MOSTRAR LEVEL UP
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
function mostrarLevelUp(novoNivel) {
    let modal = document.getElementById('modal-levelup');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-levelup';
        modal.className = 'modal-overlay';
        modal.style.display = 'none';
        
        modal.innerHTML = `
            <div class="card-levelup scale-up">
                <h1 class="titulo-levelup">LEVEL UP!</h1>
                
                <div class="mascote-container">
                    <img id="img-evolucao" src="" alt="Codin Evoluído" class="mascote-animado">
                </div>
                
                <div class="nivel-badge">
                    <span style="font-size: 0.5em; display:block; color:#666;">Você alcançou o Nível</span>
                    <span id="numero-nivel-novo">0</span>
                </div>

                <button class="btn-proximo" onclick="document.getElementById('modal-levelup').style.display='none'">
                    Incrível! <i class="fas fa-star"></i>
                </button>
            </div>
        `;
        document.body.appendChild(modal); 
    }

    const imgEvolucao = modal.querySelector('#img-evolucao');
    const txtNivel = modal.querySelector('#numero-nivel-novo');

    let imagemSrc = "";
    // Lógica das imagens por  //
    if (novoNivel <= 50) {
        imagemSrc = "../codin/codinlogin.png"; 
    } 
    else if (novoNivel <= 200) {
        imagemSrc = "../assets/codin_nivel_2.png"; 
    } 
    else if (novoNivel <= 500) {
        imagemSrc = "../assets/codin_nivel_3.png"; 
    } 
    else {
        imagemSrc = "../assets/codin_nivel_4.png"; 
    }

    if(imgEvolucao) imgEvolucao.src = imagemSrc;
    if(txtNivel) txtNivel.innerText = novoNivel;

    modal.style.display = 'flex';
}

function fecharModalLevelUp() {
    const modal = document.getElementById('modal-levelup');
    if(modal) modal.style.display = 'none';
}

function embaralharLista(lista) {
    if (!lista) return [];
    let novaLista = [...lista]; 
    for (let i = novaLista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [novaLista[i], novaLista[j]] = [novaLista[j], novaLista[i]];
    }
    return novaLista;
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                SISTEMA DE EDITOR E PREVIEW 
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
function atualizarPreview() {
    const input = document.getElementById('input-codigo');
    const btn = document.getElementById('btn-verificar');
    
    if (!input) return;

    let cssDigitado = input.value;
    let seletorAlvo = input.getAttribute('data-seletor');
    let unidadePermitida = input.getAttribute('data-unit') || 'px'; 
    let limiteMaximo = parseInt(input.getAttribute('data-max')) || 1000;
    let cssFinal = cssDigitado;
    if (unidadePermitida !== 'livre') {
        
        // --- filtro //
        cssFinal = cssDigitado.replace(/(#[0-9a-fA-F]+)|(\d+)(\s*)([a-z%]*)/gi, (match, hex, numero, espaco, unidadeUsuario) => {
            
            // 1. PROTEÇÃO DE COR //
            if (hex) return hex;

            // Se não for cor, é número //
            let num = parseInt(numero);

            // 2. Zero é liberado //
            if (num === 0) return '0';

            // 3. Validação de Unidade //
            if (!unidadeUsuario || unidadeUsuario.toLowerCase() !== unidadePermitida.toLowerCase()) {
                return numero; 
            }

            // 4. Limite Máximo ///
            if (num > limiteMaximo) {
                num = limiteMaximo;
            }

            return num + unidadePermitida; 
        });
    }

    let cssForte = cssFinal.split(';').map(parte => {
        if (parte.trim() && parte.includes(':') && !parte.includes('!important')) {
            return parte + ' !important';
        }
        return parte;
    }).join(';');

    let styleTag = document.getElementById('style-dinamico-missao');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'style-dinamico-missao';
        document.body.appendChild(styleTag); 
    }

    let regraCss = "";
    if (seletorAlvo && seletorAlvo !== "") {
        if (seletorAlvo === "#palco" || seletorAlvo === "#preview-palco") {
            regraCss = `#preview-palco { ${cssForte} }`;
        } else {
            regraCss = `#preview-palco ${seletorAlvo} { ${cssForte} }`;
        }
    } else {
        regraCss = `#preview-palco { ${cssForte} }`;
    }

    styleTag.innerHTML = regraCss;

    if (cssDigitado.trim().length > 0) {
        if(btn) btn.classList.add('ativo');
    } else {
        if(btn) btn.classList.remove('ativo');
    }
}

function configurarJogo(p) {
    const palco = document.getElementById('preview-palco');
    palco.style = "";
    palco.style.position = 'relative';

    const alvosAntigos = palco.querySelectorAll('.gabarito-fantasma');
    alvosAntigos.forEach(el => el.remove());

    const gabarito = document.createElement('div');
    gabarito.className = 'gabarito-fantasma'; 
    gabarito.style.cssText = `
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        display: flex;
        pointer-events: none;
        padding: 10px;
        box-sizing: border-box;
        z-index: 0; /* Fica atrás */
        ${p.estiloCorreto} 
    `;
    
    gabarito.innerHTML = '<div class="alvo-emoji">🍎</div>';
    palco.prepend(gabarito);
}

// Função para ignorar espaços e aspas diferentes na hora de corrigir
function normalizarCss(codigo) {
    if (!codigo) return "";
    return codigo
        .trim() 
        .replace(/\s+/g, ' ') 
        .replace(/\s*:\s*/g, ':') 
        .replace(/\s*;\s*/g, ';') 
        .replace(/\s*{\s*/g, '{') 
        .replace(/\s*}\s*/g, '}') 
        .replace(/'/g, '"')       
        .replace(/;}/g, '}');     
}

function normalizarCSS(css) {
    if (!css) return "";
    return css
        .toLowerCase()              
        .replace(/\s+/g, '')        
        .replace(/;$/, '')          
        .split(';')                 
        .sort()                     
        .join(';');                 
}

function verificarCodigoDigitado(p) {
    const input = document.getElementById('input-codigo');
    let respostaUser = input.value.trim().toLowerCase();
    respostaUser = respostaUser.replace(/\s/g, '').replace(/;/g, '');
    const respostasPossiveis = p.respostasCertas.map(r => r.replace(/\s/g, '').replace(/;/g, ''));

    let acertou = respostasPossiveis.includes(respostaUser);

    mostrarFeedback(acertou, p);
}