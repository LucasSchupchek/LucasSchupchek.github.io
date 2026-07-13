# Site Institucional — Schupchek Assessoria Administrativa

Site institucional simples (React + Vite) criado para verificação de domínio no
Meta Business Manager. Inclui página inicial, Termos de Uso e Política de
Privacidade.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # pré-visualiza o build
```

## Editar os dados da empresa

Tudo que é específico da empresa está em **`src/company.js`**:
razão social, CNPJ, endereço, e-mail, WhatsApp e a lista de serviços.
Basta editar esse arquivo — o site inteiro é atualizado.

> Preencha `email` e `whatsapp` com seus contatos reais antes de publicar.

## Deploy na Vercel

1. Suba este projeto para um repositório (GitHub/GitLab/Bitbucket) **ou** use a CLI:
   ```bash
   npm i -g vercel
   vercel        # segue o assistente
   vercel --prod # publica em produção
   ```
2. Na Vercel, o framework é detectado como **Vite**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. O arquivo `vercel.json` já configura o redirecionamento de rotas (SPA), então
   `/termos` e `/privacidade` funcionam com refresh direto.

## Verificação no Meta Business Manager

Depois do deploy:
1. Aponte seu domínio próprio para a Vercel (Settings → Domains).
2. No Meta Business Manager → Configurações do negócio → Segurança da marca →
   **Domínios**, adicione seu domínio.
3. Use um dos métodos de verificação (meta tag no `<head>`, upload de arquivo
   HTML ou registro DNS TXT).
   - Para a **meta tag**: cole a tag fornecida pelo Meta dentro do `<head>` em
     `index.html`.
   - Para o **arquivo HTML**: coloque o arquivo na pasta `public/` (ele será
     servido na raiz do site).
```
