
require("dotenv").config();

const mysql = require("mysql2/promise");
//import { Pool } from 'mysql2/typings/mysql/lib/Pool';

mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
}).promise();

 async function registraProduto(nome, preco, quantidade, categoria) {
    const resultado = await Pool.query("INSERT INTO produtos  (nome, preco, qunatidade, categoria) VALUES (?, ?, ?, ?)",
        [nome, preco, quantidade, categoria]);
    return resultado;
}

 async function listaProduto() {
    const [lista] = await Pool.query("SELECT * FROM produtos");
    return lista[0];
}

 async function listaProdutos() {
    const [lista] = await Pool.query("SELECT * FROM produtos");
    return lista;
}

module.exports = {
    registraProduto,
    listaProduto,
    listaProdutos
}
