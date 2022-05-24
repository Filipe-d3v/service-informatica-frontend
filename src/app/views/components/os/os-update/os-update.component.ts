import { OsService } from './../../../../services/os.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Os } from './../../../../models/os';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-os-update',
  templateUrl: './os-update.component.html',
  styleUrls: ['./os-update.component.css']
})
export class OsUpdateComponent implements OnInit {

  id_os = '';

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
    private service: OsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id_os = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_os).subscribe(resposta => {
      this.os = resposta;
      //this.converteDados();
    })
  }

  cancel(): void {
    this.router.navigate(['os'])
  }

  update(): void {
    this.service.update(this.os).subscribe((resposta =>{
      this.router.navigate(['os']);
      this.service.message('Serviço técnico atualizado com sucesso!');
    }))
  }

  converteDados(): void{
    if(this.os.prioridade == "BAIXA"){
      this.os.prioridade = 0;
    }else if(this.os.prioridade == "MEDIA"){
      this.os.prioridade = 1;
    }else{
      this.os.prioridade = 2;
    }

    if(this.os.status == "ANDAMENTO"){
      this.os.status = 0;
    }else{
      this.os.status = 1;
    }
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