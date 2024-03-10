import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Importa Observable e of
import { Editora } from './editora'; // Importa a classe Editora

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' }
  ];

  constructor() { }

  // Método para retornar todas as editoras como um Observable
  getEditoras(): Observable<Editora[]> {
    return of(this.editoras);
  }

  // Método para retornar o nome da editora com base no codEditora
  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : 'Editora não encontrada';
  }
}
