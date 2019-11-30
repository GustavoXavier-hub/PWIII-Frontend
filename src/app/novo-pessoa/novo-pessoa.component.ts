import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Pessoa } from '../pessoa';
import { PessoaAPIService } from '../service/pessoa-api.service';

@Component({
  selector: 'has-novo-pessoa',
  templateUrl: './novo-pessoa.component.html',
  styleUrls: ['./novo-pessoa.component.css']
})
export class NovoPessoaComponent implements OnInit {

  formPessoa: FormGroup;

  constructor(public FormBuilder :FormBuilder,private service: PessoaAPIService ) { }

  ngOnInit() {
      this.formPessoa = this.FormBuilder.group({

        nome : this.FormBuilder.control(''),
        
        sobrenome : this.FormBuilder.control(''),
        
        cpf : this.FormBuilder.control(''),

        telefone : this.FormBuilder.control(''),

        endereco : this.FormBuilder.control(''),

        email : this.FormBuilder.control(''),

      });

    }

      onSalvar(){

        let pessoa : Pessoa = this.formPessoa.value;

        this.service
    .createPessoa(pessoa)
    .subscribe((data: Pessoa) => console.log("Sucesso"),
    error => console.log(error));


      }


      



  

}
