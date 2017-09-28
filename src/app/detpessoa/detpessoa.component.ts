import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Pessoa} from '../pessoa';

@Component({
  selector: 'app-detpessoa',
  templateUrl: './detpessoa.component.html',
  styleUrls: ['./detpessoa.component.css']
})

export class DetpessoaComponent {
  @Input() selecionado: Pessoa;

}