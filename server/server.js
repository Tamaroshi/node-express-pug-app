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
