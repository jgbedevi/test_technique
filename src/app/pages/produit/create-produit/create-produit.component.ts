import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Categorie } from 'src/app/core/models/categorieModel';
import { Produit } from 'src/app/core/models/produitModel';
import { CategorieService } from 'src/app/core/services/categorie/categorie.service';
import { ProduitService } from 'src/app/core/services/produit/produit.service';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.scss']
})
export class CreateProduitComponent {
  produit: Produit = new Produit();
  categories: Categorie[] = []; 

  constructor(
    public dialogRef: MatDialogRef<CreateProduitComponent>,
    private produitService: ProduitService,
    private categorieService: CategorieService 
  ) {}

  ngOnInit() {
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
    this.produitService.saveProduit(this.produit).subscribe({
      next: (response) => {
        console.log('Produit créé avec succès', response);
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Erreur lors de la création du produit', error);
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

}
