import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';

const routes: Routes = [
  {
    path: '',
    component: ListProduitComponent
  },
  {
    path: 'create',
    component: CreateProduitComponent
  },
  
  {
    path: 'update',
    component: EditProduitComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
