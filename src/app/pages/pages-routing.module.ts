import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories', loadChildren: () => import('./categorie/categorie.module').then(s => s.CategorieModule)
},

{
  path: 'produits', loadChildren: () => import('./produit/produit.module').then(s => s.ProduitModule)
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
