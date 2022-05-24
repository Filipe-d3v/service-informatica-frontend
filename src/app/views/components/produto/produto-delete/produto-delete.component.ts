import { FormControl, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  id_produto = ''

  produto: Produto = {
    id: '',
    nome: '',
    descricao: '',
    preco: ''
  }

  nome = new FormControl('', [Validators.minLength(1)]);
  descricao = new FormControl('', [Validators.minLength(1)]);
  preco = new FormControl('', [Validators.minLength(1)]);

  constructor(
    private router: Router,
    private service: ProdutoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_produto = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_produto).subscribe(resposta => {
      this.produto = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.id_produto).subscribe(resposta =>{
      this.router.navigate(['produtos'])
      this.service.message('Produto deletado com sucesso!')
    })
  }

  cancel(): void {
    this.router.navigate(['produtos'])
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