# CodinDev

Plataforma gamificada de aprendizado de programação. Aprenda HTML, CSS, JavaScript, lógica de programação e mais — com missões interativas, ranking global, loja de cosméticos e sistema de progressão por XP.

## Tecnologias

- HTML5, CSS3, JavaScript (Vanilla)
- Armazenamento local via `localStorage` / `sessionStorage`
- Avatares via [DiceBear](https://www.dicebear.com/)
- Ícones via [Font Awesome](https://fontawesome.com/) e [Google Material Symbols](https://fonts.google.com/icons)
- Fontes via [Google Fonts](https://fonts.google.com/)

## Estrutura

```
CodinDev/
├── index.html          # Dashboard principal
├── script.js           # Lógica do dashboard
├── missoes_logica.js   # Banco de dados de missões/cursos
├── css/                # Estilos globais
├── js/
│   └── auth.js         # Proteção de rotas
├── login/              # Tela de login/cadastro
├── paginas/            # Cursos, missões, loja, ranking, perfil, configurações
├── misssoes/           # Motor das missões interativas
├── admin/              # Painel administrativo (acesso restrito)
├── codin/              # Assets do mascote Codin
└── equipados/          # Cosméticos do sistema de itens
```

## Painel Administrativo

Acesse em `/admin/index.html`. Requer credenciais de administrador ou moderador.

**Configuração das credenciais:**

1. Copie `admin/admin-credentials.example.js` para `admin/admin-credentials.js`
2. Substitua os hashes pelas senhas reais:
   ```js
   btoa('cd_admin_2025_' + 'SuaSenhaAqui')
   ```
3. O arquivo `admin/admin-credentials.js` está no `.gitignore` e não será commitado.

## Deploy no Render

O projeto inclui `render.yaml` configurado para deploy como site estático.

1. Conecte o repositório no [Render](https://render.com/)
2. O Render detecta automaticamente o `render.yaml`
3. Certifique-se de **não commitar** `admin/admin-credentials.js`

## Licença

Projeto educacional — uso pessoal e acadêmico.
