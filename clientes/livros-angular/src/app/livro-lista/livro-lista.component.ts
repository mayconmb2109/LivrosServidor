import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivros } from '../controle-livros.service';

import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent implements OnInit {
  editoras: Editora[] = [];
  livros: Livro[] = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivros) {}

  ngOnInit(): void {
    this.servEditora.getEditoras().subscribe((data: Editora[]) => {
      this.editoras = data;
    });

    this.servLivros.obterLivros().then((livros: Livro[]) => {
      // Manipule os livros obtidos aqui
      this.livros = livros;
  }).catch((error) => {
      // Trate qualquer erro que ocorra durante a obtenção dos livros
      console.error('Erro ao obter livros:', error);
  });
  
  }

  excluir = async (codigo: string) => {
    try {
      await this.servLivros.excluir(codigo);
      const livros = await this.servLivros.obterLivros();
      this.livros = livros;
    } catch (error) {
      console.error('Erro ao excluir ou obter livros:', error);
    }
  }
  

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
