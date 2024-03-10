import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LivroListaComponent } from './livro-lista/livro-lista.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'lista', component: LivroListaComponent },
      { path: '', redirectTo: '/lista', pathMatch: 'full' }
    ])
  ],
  providers: []
})
export class AppModule { }
