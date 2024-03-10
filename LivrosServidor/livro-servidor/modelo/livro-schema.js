// livro-schema.js
const banco = require('./conexao');
const { Schema } = banco;

// Definir a estrutura do banco
const LivroSchema = new Schema({
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String]
});

// Associar LivroSchema e a coleção livros ao modelo de dados Livro
const Livro = banco.model('Livro', LivroSchema);

// Exportar o modelo Livro
module.exports = Livro;
