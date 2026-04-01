/**
 * auth.js — Proteção de rotas do CodinDev
 * Inclua este script como PRIMEIRO script em todas as páginas protegidas.
 * Redireciona para o login caso o usuário não esteja autenticado.
 * Exibe mensagem de manutenção se o admin desativou a página.
 */
(function () {
    var CHAVE_SESSAO     = 'codin_nome';
    var CHAVE_ADMIN_SESS = 'codin_admin_sessao';
    var caminho          = window.location.pathname;

    // ── Ignora páginas do painel admin (têm auth própria) ────────────
    if (caminho.indexOf('/admin/') !== -1) return;

    // ── Ignora a própria tela de login ───────────────────────────────
    if (caminho.indexOf('/login/') !== -1) return;

    // ── Calcula prefixo verificando se está em subpasta conhecida ───
    // Funciona tanto em file:// (caminhos longos) quanto em servidor.
    var estaEmSubpasta = /\/(paginas|misssoes)\//i.test(caminho);
    var prefixoLogin  = estaEmSubpasta ? '../login/login.html' : './login/login.html';
    var prefixoInicio = estaEmSubpasta ? '../index.html'       : './index.html';

    // ── Redireciona se não autenticado ───────────────────────────────
    if (!localStorage.getItem(CHAVE_SESSAO)) {
        window.location.replace(prefixoLogin);
        return;
    }

    // ── Verifica modo manutenção (após DOMContentLoaded) ────────────
    // Admins logados (sessão em sessionStorage) nunca veem manutenção.
    var adminSessao = null;
    try { adminSessao = JSON.parse(sessionStorage.getItem(CHAVE_ADMIN_SESS)); } catch (e) {}
    if (adminSessao && adminSessao.usuario) return; // admin tem acesso irrestrito

    // Determina o ID da página atual pelo nome do arquivo
    var nomePagina = caminho.split('/').pop().replace('.html', '') || 'index';

    var paginasDesativadas = [];
    try {
        paginasDesativadas = JSON.parse(localStorage.getItem('codin_admin_paginas_desativadas')) || [];
    } catch (e) {}

    if (paginasDesativadas.indexOf(nomePagina) !== -1) {
        // Aguarda o DOM para sobrescrever o conteúdo com a tela de manutenção
        document.addEventListener('DOMContentLoaded', function () {
            document.body.style.cssText = 'margin:0;padding:0;font-family:Poppins,sans-serif;background:#f1f5f9;';
            document.body.innerHTML = [
                '<div style="display:flex;align-items:center;justify-content:center;',
                'min-height:100vh;flex-direction:column;gap:12px;text-align:center;padding:24px;">',
                '<div style="font-size:4rem;line-height:1;">🔧</div>',
                '<h2 style="color:#1e293b;font-size:1.5rem;margin:0;">Página em Manutenção</h2>',
                '<p style="color:#64748b;font-size:.95rem;max-width:380px;line-height:1.6;margin:0;">',
                'Esta área está temporariamente indisponível.<br>',
                'Volte em breve!</p>',
                '<a href="', prefixoInicio, '"',
                ' style="margin-top:8px;padding:10px 22px;background:#6366f1;color:#fff;',
                'border-radius:8px;text-decoration:none;font-weight:600;font-size:.9rem;">',
                '← Voltar ao Início</a>',
                '</div>'
            ].join('');
        });
    }
})();
