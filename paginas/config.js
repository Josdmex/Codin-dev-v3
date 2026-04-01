/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    LÓGICA DA PÁGINA DE CONFIGURAÇÕES 
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

document.addEventListener('DOMContentLoaded', () => {
    carregarPreferencia('toggle-sfx', 'codin_pref_sfx', true);
    carregarPreferencia('toggle-music', 'codin_pref_music', false);
    carregarPreferencia('toggle-daily', 'codin_pref_daily', true);
    carregarPreferencia('toggle-achievements', 'codin_pref_achievements', true);
    carregarPreferencia('toggle-new-courses', 'codin_pref_courses', false);

    configurarListener('toggle-sfx', 'codin_pref_sfx');
    configurarListener('toggle-music', 'codin_pref_music');
    configurarListener('toggle-daily', 'codin_pref_daily');
    configurarListener('toggle-achievements', 'codin_pref_achievements');
    configurarListener('toggle-new-courses', 'codin_pref_courses');
});

function carregarPreferencia(id, key, padrao) {
    const el = document.getElementById(id);
    if(!el) return;
    const val = localStorage.getItem(key);
    el.checked = val === null ? padrao : (val === 'true');
}

function configurarListener(id, key) {
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('change', (e) => {
        localStorage.setItem(key, e.target.checked);
    });
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        CONTROLE DE MODAIS E AÇÕES
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

// --- LOGOUT --- //
function fazerLogout() {
    document.getElementById('modal-logout').style.display = 'flex';
}

function confirmarLogoutReal() {
    localStorage.removeItem('codin_nome');
    window.location.href = "../login/login.html";
}

// --- EXCLUIR PROGRESSO  --- //
function excluirProgresso() {
    document.getElementById('modal-delete-1').style.display = 'flex';
}

function abrirPasso2Exclusao() {
    document.getElementById('modal-delete-1').style.display = 'none';
    document.getElementById('modal-delete-2').style.display = 'flex';
}

function executarExclusao() {
    Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('codin_')) {
            localStorage.removeItem(key);
        }
    });

    const btn = document.querySelector('.btn-danger-final');
    if(btn) {
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Apagando...';
        btn.disabled = true;
    }
    setTimeout(() => {
        window.location.href = "../login/login.html";
    }, 1000);
}

function fecharModal(idModal) {
    document.getElementById(idModal).style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = "none";
    }
}