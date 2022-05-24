import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { ProdutoUpdateComponent } from './views/components/produto/produto-update/produto-update.component';
import { ProdutoCreateComponent } from './views/components/produto/produto-create/produto-create.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoReadComponent } from './views/components/produto/produto-read/produto-read.component';
import { ProdutoDeleteComponent } from './views/components/produto/produto-delete/produto-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'produtos',
    component: ProdutoReadComponent
  },
  {
    path: 'produtos/create',
    component: ProdutoCreateComponent
  },
  {
    path: 'produtos/update/:id',
    component: ProdutoUpdateComponent
  },
  {
    path: 'produtos/delete/:id',
    component: ProdutoDeleteComponent
  },
  {
    path: 'os',
    component: OsReadComponent
  },
  {
    path: 'os/create',
    component: OsCreateComponent
  },
  {
    path: 'os/update/:id',
    component: OsUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
