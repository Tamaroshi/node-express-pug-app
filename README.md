# 🚀 Node.js + Express & Pug Template Engine Web App

[![Node.js](https://img.shields.io/badge/Node.js-18%2B%20%7C%2020%2B-339933?logo=nodedotjs&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-4.18-000000?logo=express&logoColor=white)](#)
[![Pug](https://img.shields.io/badge/View_Engine-Pug-A86454?logo=pug&logoColor=white)](#)
[![License](https://img.shields.io/badge/License-MIT-purple.svg)](#)

Aplicação web desenvolvida em **Node.js** com framework **Express**, utilizando **Pug** como motor de renderização no lado do servidor (Server-Side Rendering — SSR), arquitetura modularizada com separação de camadas (`app/` e `server/`), manipulação de formulários HTTP e disponibilização de endpoint de dados em formato JSON.

---

## 📌 Funcionalidades

- **Arquitetura Modular:** Separação clara entre a configuração da aplicação (`app/app.js`) e a inicialização do servidor HTTP/Banco de Dados (`server/server.js`).
- **Renderização no Servidor (SSR):** Templates dinâmicos compilados com a engine **Pug**.
- **Servimento de Arquivos Estáticos:** Configuração de diretório público para folhas de estilo CSS (`style.css`), favicon e imagens (`.jpg`).
- **Processamento de Requisições HTTP:**
  - Parsing de payloads `application/x-www-form-urlencoded` e `application/json`.
  - Tratamento de submissão de formulários via método `POST`.
- **API REST / JSON:** Endpoint dedicado para consulta de dados cadastrados em formato JSON.

---

## 🛣️ Rotas da Aplicação

| Método | Rota | Descrição | Resposta |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Página principal com formulário de entrada e apresentação | Renderiza `index.pug` |
| `POST` | `/` | Processa valores numéricos (`n1`, `n2`), executa o cálculo de soma e registra a submissão | Renderiza `submission.pug` com o resultado |
| `GET` | `/data` | Retorna o histórico de todas as submissões enviadas durante a execução | Retorna array em formato `JSON` |

---

## 📁 Estrutura do Projeto

```bash
express/
├── app/
│   └── app.js             # Configuração da aplicação Express, middlewares e rotas
├── server/
│   └── server.js          # Inicialização do servidor HTTP e conexão com MongoDB
├── index.js               # Ponto de entrada que delega para o servidor
├── package.json           # Dependências e scripts do Node.js
├── package-lock.json      # Árvore de resolução de dependências
├── .gitignore             # Arquivos e pastas ignorados no versionamento (ex: node_modules)
├── README.md              # Documentação oficial do projeto
├── PROJETO_COMPLETO_GITHUB.md # Instruções de upload e código consolidado
└── view/                  # Templates Pug e arquivos estáticos
    ├── index.pug          # Template da página principal e formulário
    ├── submission.pug     # Template de exibição do resultado da submissão
    ├── style.css          # Estilos visuais da aplicação
    └── img/               # Imagens estáticas e favicons
        ├── elon.jpg
        └── favicon.jpg
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado (versão 16 ou superior).
* Gerenciador de pacotes `npm`.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Tamaroshi/node-express-pug-app.git
   cd node-express-pug-app
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor:**
   ```bash
   npm start
   ```
   *(ou `node index.js` / `node server/server.js`)*

4. **Acesse no navegador:**
   - Página principal: [http://localhost:3000/](http://localhost:3000/)
   - Histórico de dados em JSON: [http://localhost:3000/data](http://localhost:3000/data)

---

## 👤 Autor

* **Luis Felipe Tamashiro**
  * Estudante de Ciência da Computação — Universidade Federal de Uberlândia (UFU)
  * GitHub: [@Tamaroshi](https://github.com/Tamaroshi)
  * LinkedIn: [LF-Tamashiro](https://www.linkedin.com/in/LF-Tamashiro)
  * Email: [lftamashiro@gmail.com](mailto:lftamashiro@gmail.com)

---
*Licença MIT — Fique à vontade para clonar, estudar e utilizar como base para novas aplicações.*
