import { FormControl, Validators } from '@angular/forms';
import { OsService } from './../../../../services/os.service';
import { Router } from '@angular/router';
import { Os } from './../../../../models/os';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit {

  os: Os = {
    id: '',
    dataIni: '',
    nome_cliente: '',
    fone_cliente: '',
    endereco_cliente: '',
    prioridade: '',
    status: '',
    observacoes:'',
    valor: ''
  }

  nome_cliente = new FormControl('', [Validators.minLength(5)]);
  fone_cliente = new FormControl('', [Validators.minLength(8)]);
  endereco_cliente = new FormControl('', [Validators.minLength(4)]);
  prioridade = new FormControl('', [Validators.minLength(1)]);
  status = new FormControl('', [Validators.minLength(1)]);
  observacoes = new FormControl('', [Validators.minLength(10)]);
  valor = new FormControl('', [Validators.minLength(1)]);

  constructor(private router: Router,
    private service: OsService
    ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['os'])
  }

  create(): void {
    this.service.create(this.os).subscribe((resposta) => {
      this.router.navigate(['os'])
      this.service.message('Produto cadastrado com sucesso!')
    })
  }

  erroValidNome(){
    if(this.nome_cliente.invalid){
      return 'Campo Obrigatório! Mínimo de 5 caracteres.';
    }
    return false
  }

  erroValidFone(){
    if(this.fone_cliente.invalid){
      return 'Campo Obrigatório! Mínimo de 8 caracteres.';
    }
    return false;
  }
  
  erroValidEndereco(){
    if(this.endereco_cliente.invalid){
      return 'Campo Obrigatório! Mínimo de 4 caracteres.';
    }
    return false;
  }

  erroValidPrioridade(){
    if(this.prioridade.invalid){
      return 'Campo Obrigatório!';
    }
    return false;
  }

  erroValidStatus(){
    if(this.status.invalid){
      return 'Campo Obrigatório!';
    }
    return false;
  }
  
  erroValidObs(){
    if(this.observacoes.invalid){
      return 'Campo Obrigatório! Mínimo de 10 caracteres.';
    }
    return false
  }

  erroValidValor(){
    if(this.valor.invalid){
      return 'Campo Obrigatório! Mínimo de 1 caracteres.';
    }
    return false
  }
}
