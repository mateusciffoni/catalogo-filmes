# Catálogo de Filmes — PRW2 Avaliação 2

CRUD de filmes em React com **React Router Dom** e **Axios**, usando o **mockapi.io** como servidor.

## Páginas

| Rota          | Página  | O que faz |
|---------------|---------|-----------|
| `/`           | Início  | Lista ID e NOME dos filmes; clicar em um filme abre a página Ler |
| `/ler/:id`    | Ler     | Mostra todos os dados do filme; botão Cancelar volta para Início |
| `/criar`      | Criar   | Formulário; Criar grava (POST) e volta; Cancelar volta |
| `/alterar`    | Alterar | Caixa para digitar o id → Procura → se achar, formulário para edição (PUT); se não, mensagem + Voltar |
| `/apagar`     | Apagar  | Caixa para digitar o id → Procura → se achar, mostra os dados e Apaga (DELETE); se não, mensagem + Voltar |

## Configurar o mockapi.io

1. Entre em https://mockapi.io e crie um projeto.
2. Crie um resource chamado **`filmes`** com o schema:
   - `id` — Object ID
   - `nome` — String
   - `genero` — String
   - `ano` — String
3. Copie o endpoint (ex.: `https://6720abcd....mockapi.io/filmes`) e cole em **`src/api.js`**.

## Rodar

```bash
npm install
npm run dev
```

## Publicar no Vercel

Importe o repositório do GitHub em https://vercel.com/new (framework: Vite — é detectado sozinho).
O arquivo `vercel.json` já redireciona todas as rotas para o `index.html`, para que recarregar a página em `/ler/3` não dê 404.
