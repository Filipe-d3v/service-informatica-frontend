import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

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

  update(): void{
    this.service.update(this.produto).subscribe((resposta =>{
      this.router.navigate(['produtos']);
      this.service.message('Produto atualizado com sucesso!');
    }))
  }

  findById(): void {
    this.service.findById(this.id_produto).subscribe(resposta => {
      this.produto = resposta;
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
