import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivros } from '../controle-livros.service';
import { Editora } from '../editora';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { Livro } from '../livro';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ControleLivros],
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro;
  autoresForm: string = '';
  editoras: Editora[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivros,
    private router: Router
  ) {
    this.livro = new Livro('0', 0, '', '', []); // Instanciando um novo livro via construtor padrão
  }

  ngOnInit(): void {
    this.servEditora.getEditoras().subscribe((data: Editora[]) => {
      this.editoras = data;
    });
    
  }

  incluir = () => {
    // Preenchendo o atributo autores do livro com os autores do formulário
    this.livro.autores = this.autoresForm.split('\n');
    
    // Chamando o método incluir de servLivros com o livro como parâmetro
    this.servLivros.incluir(this.livro);
    
    // Navegando para a rota "/lista"
    this.router.navigateByUrl('/lista');
  }
}
