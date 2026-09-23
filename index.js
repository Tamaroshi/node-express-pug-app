const express = require("express");
const app = express();
const port = 3000;
const path = require("path");


const arr = []

//viewer para template engine, dizer que existe uma engine e aonde encontrar o arquivo
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/view"));

//Para colocar css precisar dizer onde está a pasta
app.use(express.static(path.join(__dirname, "view")));

//Usar dados em formato json ou string
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* //Envia os dados do cliente para outra rota
app.post("/submit", (req, res) => {
  let n1 = Number(req.body.n1);
  let n2 = Number(req.body.n2);
  let calc = n1 + n2;
  res.render("submission", { n1, n2, calc });
});

//visualização do formulário
app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/view/index.pug"));
}); */

app.route("/")
  .get((req, res) => {
    res.render("index");
  })
  .post((req, res) => {
    let n1 = Number(req.body.n1);
    let n2 = Number(req.body.n2);
    let calc = n1 + n2;
    const data = req.body
    arr.push(data);
    res.render("submission", {n1, n2, calc});
  });

app.get('/data', (req, res) => {
  res.json(arr);
})


app.listen(port, () => {
  console.log("on");
});
