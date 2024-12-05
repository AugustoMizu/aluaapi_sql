require("dotenv").config();

const db = require("./db");
const express = require("express")  ;

const app = express();

app.use(express.json());

app.post("/produto", (request, response)=>{
    const nome = "nome 1";
    const preco = 12.60;
    const quantidade = 5;
    const categoria = "teste";

    const resultado = db.registraProduto(nome, preco, quantidade, categoria);
    response.status(201).send(resultado);
});

app.get("/", (request, response) => {
    response.json({
        message: "Está OK o Response!"
    })
});

app.listen(process.env.PORT, ()=>{
    console.log("App IS RUNNING!") ;   
});