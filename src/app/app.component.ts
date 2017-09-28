import { Component, OnInit, Input,  EventEmitter  } from '@angular/core';

import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  pessoas: Array<Pessoa>;
  selecionado: Pessoa;
  novo: Pessoa = new Pessoa(0, '', '');

  constructor() {
      this.title = 'Curso de Inglês Básico';
      this.pessoas = [
          new Pessoa(1, 'Capitão América', 'steve@gmail.com'),
          new Pessoa(2, 'Viúva Negra', 'natasha@gmail.com'),
          new Pessoa(3, 'Ms. Marvel', 'carold@gmail.com'),
          new Pessoa(4, 'Deadpool', 'wadwill@gmail.com'),
          new Pessoa(5, 'Gavião Arqueiro', 'bartonc@gmail.com')
      ];
  }

  ngOnInit(): void {
  }

  onSelect(pessoa: Pessoa): void {
    this.selecionado = pessoa;
  }

  cadastrar(): void {
      const novoId: number = this.pessoas.length + 1;
      this.pessoas.push(new Pessoa(novoId, this.novo.nome, this.novo.email));
      this.novo = new Pessoa(0, '', '');
      this.selecionado ;
  }

  salvarEdicao(): void {
    this.selecionado=null;
  }
}
