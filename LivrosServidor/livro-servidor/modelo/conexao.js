// conexao.js
const mongoose = require('mongoose');

// Configuração das opções de conexão
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

// Efetuar a conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/livraria', options)
  .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Exportar a conexão
module.exports = mongoose;
