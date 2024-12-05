import mysql from 'mysql2';
import { Pool } from 'mysql2/typings/mysql/lib/Pool';

import dotenv from 'dotenv';
dotenv.config();

mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
}).promise();

export async function registraProduto(nome, preco, quantidade, categoria) {
    const resultado = await Pool.query("INSERT INTO produtos  (nome, preco, qunatidade, categoria) VALUES (?, ?, ?, ?)",
        [nome, preco, quantidade, categoria]);
    return resultado;
}

export async function listaProduto() {
    const [lista] = await Pool.query("SELECT * FROM produtos");
    return lista[0];
}

export async function listaProdutos() {
    const [lista] = await Pool.query("SELECT * FROM produtos");
    return lista;
}

