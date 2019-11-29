import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaAPIService } from '../service/pessoa-api.service';
import { error } from 'util';

@Component({
  selector: 'has-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  pessoas :Pessoa[];

  constructor(private service: PessoaAPIService) { }

  ngOnInit() {
    this.service
    .getPessoas()
    .subscribe((data: Pessoa[]) => this.pessoas = data,
    error => console.log(error));




  }

}
