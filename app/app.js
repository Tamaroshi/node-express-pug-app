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
