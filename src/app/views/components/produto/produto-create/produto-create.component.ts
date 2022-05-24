import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/produto';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    id: '',
    nome: '',
    descricao: '',
    preco: ''
  }

  nome = new FormControl('', [Validators.minLength(1)])
  descricao = new FormControl('', [Validators.minLength(1)])
  preco = new FormControl('', [Validators.minLength(1)])

  constructor(
    private router: Router,
    private service: ProdutoService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['produtos'])
  }

  create(): void {
    this.service.create(this.produto).subscribe((resposta) => {
      this.router.navigate(['produtos'])
      this.service.message('Produto cadastrado com sucesso!')
    })
  }

  errorValidNome() {
    if (this.nome.invalid) {
      return 'Campo Obrigatório!';
    }
    return false;
  }
  errorValidDesc() {
    if (this.descricao.invalid) {
      return 'Campo Obrigatório!';
    }
    return false;
  }
  errorValidPreco() {
    if (this.preco.invalid) {
      return 'Campo Obrigatório!';
    }
    return false;
  }
}
