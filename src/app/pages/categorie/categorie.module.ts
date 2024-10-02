import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ListCategorieComponent,
    CreateCategorieComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class CategorieModule { }
