/**
 * admin-credentials.js — Credenciais do painel administrativo
 *
 * ⚠️  ESTE ARQUIVO NÃO DEVE SER COMMITADO.
 *     Adicione "admin/admin-credentials.js" ao .gitignore.
 *     Para configurar, copie admin-credentials.example.js e preencha os hashes.
 *
 * Geração do hash:  btoa('cd_admin_2025_' + 'SUA_SENHA_AQUI')
 */

'use strict';

const ADMIN_CREDENTIALS = {
    'admin':     { hash: btoa('cd_admin_2025_' + 'Codin@Admin2025'), role: 'administrador' },
    'moderador': { hash: btoa('cd_admin_2025_' + 'Codin@Mod2025'),  role: 'moderador'     }
};
