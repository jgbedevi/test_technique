import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ListProduitComponent,
    CreateProduitComponent,
    EditProduitComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ProduitModule { }
