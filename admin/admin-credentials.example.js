/**
 * admin-credentials.example.js — Modelo de configuração de credenciais
 *
 * Copie este arquivo como "admin-credentials.js" e substitua pelos hashes reais.
 * Geração do hash:  btoa('cd_admin_2025_' + 'SUA_SENHA_AQUI')
 *
 * Exemplo:
 *   btoa('cd_admin_2025_' + 'MinhaSenh@Forte') => cole o resultado abaixo
 */

'use strict';

const ADMIN_CREDENTIALS = {
    'admin':     { hash: 'HASH_DO_ADMIN_AQUI',     role: 'administrador' },
    'moderador': { hash: 'HASH_DO_MODERADOR_AQUI', role: 'moderador'     }
};
