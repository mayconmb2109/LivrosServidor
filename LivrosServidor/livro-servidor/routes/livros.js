// livros.js
const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// Rota para obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter livros' });
  }
});

// Rota para incluir um novo livro
router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    await incluir(livro);
    res.json({ mensagem: 'Livro incluído com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao incluir livros' });
  }
});

// Rota para excluir um livro pelo código
router.delete('/:codigo', async (req, res) => {
  try {
    const codigo = req.params.codigo;
    await excluir(codigo);
    res.json({ mensagem: 'Livro excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao excluir livro' });
  }
});

module.exports = router;
