# 🌐 Node.js + Express & Pug — Repositório Completo & Guia de Upload

Este documento reúne **todas as informações e o código-fonte** da aplicação web modularizada com **Express e Pug**, pronto para você enviar para o GitHub através da sua conta **`Tamaroshi`**.

---

## 📌 Sumário
1. [Instruções para Subir na sua Outra Conta do GitHub](#1-instruções-para-subir-na-sua-outra-conta-do-github)
2. [README Oficial do Projeto](#2-readme-oficial-do-projeto)
3. [Estrutura de Diretórios](#3-estrutura-de-diretórios)
4. [Código-Fonte Integral dos Arquivos](#4-código-fonte-integral-dos-arquivos)
   - [Configuração (.gitignore)](#gitignore)
   - [Dependências (package.json)](#packagejson)
   - [Aplicação (app/app.js)](#appappjs)
   - [Servidor (server/server.js)](#serverserverjs)
   - [Ponto de Entrada (index.js)](#indexjs)
   - [Templates e Estilos (view/)](#view)

---

## 1. Instruções para Subir na sua Outra Conta do GitHub

O repositório Git local já está inicializado na pasta `express` com `.gitignore`, `README.md`, `app/app.js`, `server/server.js` e o commit inicial estruturado, excluindo a pasta pesada `node_modules/`.

Para enviar para o GitHub pela conta **`Tamaroshi`**:

### Passo 1: Criar o Repositório no GitHub
1. Acesse o GitHub logado na conta **`Tamaroshi`**: [https://github.com/new](https://github.com/new)
2. Escolha o nome do repositório: `node-express-pug-app` (ou `express-web-app`).
3. Deixe marcado como **Public** (Público).
4. **IMPORTANTE:** Não marque "Add a README file" nem `.gitignore`.
5. Clique em **Create repository**.

### Passo 2: Executar o Push via Terminal
Abra o Git Bash ou PowerShell e execute:

```bash
# 1. Entre na pasta do projeto:
cd "C:\Users\lftam\Desktop\Programação\express"

# 2. Configure os dados da sua conta para este repositório:
git config user.name "Tamaroshi"
git config user.email "lftamashiro@gmail.com"

# 3. Adicione o link do repositório remoto criado (substitua SEU_TOKEN pelo token gerado ghp_...):
git remote add origin https://SEU_TOKEN@github.com/Tamaroshi/node-express-pug-app.git

# 4. Envie os arquivos para o branch principal:
git push -u origin main
```

---

## 2. README Oficial do Projeto

Aplicação desenvolvida em **Node.js** com **Express** e **Pug** como View Engine, com suporte a Server-Side Rendering (SSR), roteamento REST, parsing de requisições e servimento de arquivos estáticos.

### Rotas:
* `GET /`: Exibe o formulário principal dinâmico.
* `POST /`: Processa a soma dos números `n1` e `n2` e renderiza a tela de resultado.
* `GET /data`: Retorna o histórico de submissões em formato `JSON`.

---

## 3. Estrutura de Diretórios

```bash
express/
├── app/
│   └── app.js             # Configuração da aplicação Express, middlewares e rotas
├── server/
│   └── server.js          # Inicialização do servidor HTTP e conexão com MongoDB
├── index.js               # Ponto de entrada que delega para o servidor
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
├── PROJETO_COMPLETO_GITHUB.md
└── view/
    ├── index.pug
    ├── submission.pug
    ├── style.css
    └── img/
        ├── elon.jpg
        └── favicon.jpg
```

---

## 4. Código-Fonte Integral dos Arquivos

### .gitignore
```gitignore
node_modules/
jspm_packages/
*.log
npm-debug.log*
yarn-debug.log*
.env
.env.*
.vscode/*
!.vscode/extensions.json
.idea
*.suo
.DS_Store
Thumbs.db
```

### package.json
```json
{
  "name": "node-express-pug-app",
  "version": "1.0.0",
  "description": "Aplicação web desenvolvida com Node.js, Express e Pug Template Engine",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "keywords": ["node", "express", "pug", "ssr", "javascript"],
  "author": "Luis Felipe Tamashiro",
  "license": "MIT",
  "dependencies": {
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "pug": "^3.0.2"
  }
}
```

### app/app.js
```javascript
const express = require("express");
const path = require("path");

const app = express();

const arr = [];

// Configuração da View Engine (Pug)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "..", "view"));

// Arquivos estáticos (CSS, imagens)
app.use(express.static(path.join(__dirname, "..", "view")));

// Middlewares para parsing de requisições
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas da aplicação
app.route("/")
  .get((req, res) => {
    res.render("index");
  })
  .post((req, res) => {
    let n1 = Number(req.body.n1);
    let n2 = Number(req.body.n2);
    let calc = n1 + n2;
    const data = req.body;
    arr.push(data);
    res.render("submission", { n1, n2, calc });
  });

// Rota para consulta dos dados submetidos (API JSON)
app.get("/data", (req, res) => {
  res.json(arr);
});

module.exports = app;
```

### server/server.js
```javascript
require("dotenv").config();
const app = require("../app/app");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

// Inicialização com suporte a MongoDB se CONNECTIONSTRING estiver no .env
if (process.env.CONNECTIONSTRING) {
  mongoose
    .connect(process.env.CONNECTIONSTRING)
    .then(() => {
      console.log("Conectado ao MongoDB com sucesso.");
      iniciarServidor();
    })
    .catch((err) => {
      console.error("Erro ao conectar ao MongoDB:", err);
      iniciarServidor();
    });
} else {
  iniciarServidor();
}

function iniciarServidor() {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}

module.exports = { app, iniciarServidor };
```

### index.js
```javascript
// Ponto de entrada que inicializa o servidor configurado
require("./server/server");
```

### view/index.pug
```pug
doctype html
html
  head 
    title utilizando pug
    link(rel="stylesheet", href="style.css")
    link(rel="shortcut icon", href="/img/favicon.jpg")
  body
    header
     h1#title utilizando pug
    
    br

    p Formulário de demonstração com renderização dinâmica em Pug e Express.

    br

    img(src="/img/elon.jpg")

    br

    form(action="/", method="POST")
      label(for="n1") número 1:
      input(type="text", id="n1", name="n1")
      br
      label(for="n2") número 2:
      input(type="text", id="n2", name="n2")
      br
      input(type="submit", value="Submit")

    footer 
      h1#title footer
```

### view/submission.pug
```pug
doctype html
html
  body
    h1 Resultado :
    p n1 : #{n1}
    p n2 : #{n2}
    p resultado : #{calc}
```

### view/style.css
```css
body {
    background-color: rgb(130, 194, 219);
    font-family: Arial, sans-serif;
    padding: 20px;
}

#title {
    text-align: center;
    color: #1a365d;
}

form {
    background: #ffffff;
    padding: 20px;
    border-radius: 8px;
    max-width: 300px;
}

input {
    margin-bottom: 10px;
}
```
