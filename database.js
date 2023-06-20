// Importe o módulo 'dotenv' para ler as variáveis de ambiente de um arquivo .env
const { db_host, db_user, db_pass, db_name } = require('./config.json');

// Importe o módulo 'mysql' para conectar-se ao MySQL (ou o banco de dados de sua escolha)
const mysql = require('mysql');

// Crie uma função para estabelecer a conexão com o banco de dados
function getConnection() {
  const connection = mysql.createConnection({
    host: db_host,       // Host do banco de dados
    user: db_user,       // Nome de usuário do banco de dados
    password: db_pass,   // Senha do banco de dados
    database: db_name,       // Nome do banco de dados
  });

  return connection;
}

// Exporte a função getConnection para que você possa usá-la em outros arquivos
module.exports = getConnection;
