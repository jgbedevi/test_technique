import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';

const routes: Routes = [
  {
    path: '',
    component: ListCategorieComponent
  },
  {
    path: 'create',
    component: CreateCategorieComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
