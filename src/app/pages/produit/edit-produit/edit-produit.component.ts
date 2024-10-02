import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Categorie } from 'src/app/core/models/categorieModel';
import { Produit } from 'src/app/core/models/produitModel';
import { CategorieService } from 'src/app/core/services/categorie/categorie.service';
import { ProduitService } from 'src/app/core/services/produit/produit.service';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss']
})
export class EditProduitComponent {
  produit!: Produit; // Produit à éditer
  categories: Categorie[] = []; // Liste des catégories

  constructor(
    public dialogRef: MatDialogRef<EditProduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produit, 
    private produitService: ProduitService,
    private categorieService: CategorieService
  ) {}

  ngOnInit() {
    this.produit = { ...this.data }; 
    this.getCategories(); 
  }

  getCategories() {
    this.categorieService.getCategories().subscribe({
      next: (data: Categorie[]) => {
        this.categories = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des catégories', error);
      }
    });
  }

  onSubmit() {
    this.produitService.updateProduit(this.produit.idProduit, this.produit).subscribe({
      next: (response) => {
        console.log('Produit modifié avec succès', response);
        this.dialogRef.close(this.produit); 
      },
      error: (error) => {
        console.error('Erreur lors de la modification du produit', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

}
