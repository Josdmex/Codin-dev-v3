// Se o usuário já está autenticado, redireciona para o dashboard
if (localStorage.getItem('codin_nome')) {
    window.location.replace('../index.html');
}

document.addEventListener('DOMContentLoaded', () => {
    iniciarAnimacaoAbertura();
});

async function iniciarAnimacaoAbertura() {
    const janelaEl = document.getElementById('janela-login');
    const conteudoAbertura = document.getElementById('conteudo-abertura');
    const interfaceReal = document.getElementById('interface-real');

    await new Promise(resolve => setTimeout(resolve, 2000));

    conteudoAbertura.style.opacity = '0';
    await new Promise(r => setTimeout(r, 100)); 
    conteudoAbertura.style.display = 'none';

    const animacaoCartao = janelaEl.animate([
        { width: '280px', height: '100px', borderRadius: '20px' }, 
        { width: '280px', height: '4px',   borderRadius: '2px', offset: 0.2 }, 
        { width: '380px', height: '4px',   borderRadius: '2px', offset: 0.6 }, 
        { width: '380px', height: '450px', borderRadius: '20px', offset: 1 }   
    ], {
        duration: 1400, 
        easing: 'cubic-bezier(0.75, 0, 0.25, 1)', 
        fill: 'forwards'
    });

    await animacaoCartao.finished;
    interfaceReal.style.display = 'flex';
    
    interfaceReal.animate([
        { opacity: 0, transform: 'scale(0.95)' },
        { opacity: 1, transform: 'scale(1)' }
    ], { 
        duration: 300, 
        easing: 'ease-out',
        fill: 'forwards' 
    });
}

function mostrarFormulario(tipo) {
    document.getElementById('opcoes-iniciais').style.display = 'none';
    
    if (tipo === 'login') {
        document.getElementById('form-login').style.display = 'block';
        setTimeout(() => document.getElementById('login-usuario').focus(), 100);
    } else {
        document.getElementById('form-cadastro').style.display = 'block';
        setTimeout(() => document.getElementById('cad-nome').focus(), 100);
    }
}

function voltarOpcoes() {
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('form-cadastro').style.display = 'none';
    
    const opcoesIniciais = document.getElementById('opcoes-iniciais');
    opcoesIniciais.style.display = 'flex';
    opcoesIniciais.style.flexDirection = 'column';
    opcoesIniciais.style.alignItems = 'center';
}

function mostrarErro(inputId, mensagem) {
    const input = document.getElementById(inputId);
    let erro = input.parentElement.querySelector('.msg-erro');
    if (!erro) {
        erro = document.createElement('span');
        erro.className = 'msg-erro';
        erro.style.cssText = 'color:#e74c3c;font-size:0.78rem;margin-top:4px;display:block;';
        input.parentElement.appendChild(erro);
    }
    erro.textContent = mensagem;
    input.style.borderColor = '#e74c3c';
}

function limparErro(inputId) {
    const input = document.getElementById(inputId);
    const erro = input.parentElement.querySelector('.msg-erro');
    if (erro) erro.remove();
    input.style.borderColor = '';
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function realizarLogin(evento) {
    evento.preventDefault();

    const usuario = document.getElementById('login-usuario').value.trim();
    const senha = document.getElementById('login-senha').value;

    limparErro('login-usuario');
    limparErro('login-senha');

    let valido = true;
    if (!usuario) {
        mostrarErro('login-usuario', 'Informe seu nome de usuário ou email.');
        valido = false;
    }
    if (!senha || senha.length < 6) {
        mostrarErro('login-senha', 'A senha deve ter pelo menos 6 caracteres.');
        valido = false;
    }
    if (!valido) return;

    const botao = document.querySelector('#form-login button[type="submit"]');
    botao.disabled = true;
    botao.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Entrando...';

    const ultimoUsuario = localStorage.getItem('codin_ultimo_usuario');

    // Se for um usuário diferente do último logado, limpa dados da sessão anterior
    if (ultimoUsuario !== usuario) {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('codin_')) localStorage.removeItem(key);
        });
    }

    localStorage.setItem('codin_nome', usuario);
    localStorage.setItem('codin_ultimo_usuario', usuario);

    setTimeout(() => { window.location.href = "../index.html"; }, 1500);
}

function realizarCadastro(evento) {
    evento.preventDefault();

    const nome = document.getElementById('cad-nome').value.trim();
    const email = document.getElementById('cad-email').value.trim();
    const senha = document.getElementById('cad-senha').value;

    limparErro('cad-nome');
    limparErro('cad-email');
    limparErro('cad-senha');

    let valido = true;
    if (!nome || nome.length < 2) {
        mostrarErro('cad-nome', 'Informe seu nome (mínimo 2 caracteres).');
        valido = false;
    }
    if (!email || !validarEmail(email)) {
        mostrarErro('cad-email', 'Informe um email válido.');
        valido = false;
    }
    if (!senha || senha.length < 6) {
        mostrarErro('cad-senha', 'A senha deve ter pelo menos 6 caracteres.');
        valido = false;
    }
    if (!valido) return;

    const botao = document.querySelector('#form-cadastro button[type="submit"]');
    botao.disabled = true;
    botao.innerHTML = '<i class="fa-solid fa-check"></i> Criado!';

    // Se já existe uma conta ativa, confirma antes de sobrescrever
    if (localStorage.getItem('codin_nome')) {
        const confirmar = confirm(`Já existe uma conta ativa ("${localStorage.getItem('codin_nome')}"). Criar uma nova conta apagará todo o progresso atual. Deseja continuar?`);
        if (!confirmar) {
            botao.disabled = false;
            botao.innerHTML = 'Criar Conta';
            return;
        }
    }

    // Limpa dados da sessão anterior antes de criar a conta nova
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('codin_')) localStorage.removeItem(key);
    });

    localStorage.setItem('codin_nome', nome);
    localStorage.setItem('codin_ultimo_usuario', nome);
    localStorage.setItem('codin_nivel', 1);
    localStorage.setItem('codin_xp', 0);
    localStorage.setItem('codin_saldo', 500);

    sessionStorage.setItem('codin_recem_cadastrado', 'true');

    setTimeout(() => { window.location.href = "../index.html"; }, 1500);
}