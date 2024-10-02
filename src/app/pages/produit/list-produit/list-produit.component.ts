import { Component } from '@angular/core';
import { Produit } from 'src/app/core/models/produitModel';
import { ProduitService } from 'src/app/core/services/produit/produit.service';
import { CreateProduitComponent } from '../create-produit/create-produit.component';
import { MatDialog } from '@angular/material/dialog';
import { EditProduitComponent } from '../edit-produit/edit-produit.component';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent {
  produits: Produit[] = []; // Liste des produits
  produit!: Produit;

  constructor(private produitService: ProduitService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits() {
    this.produitService.getProduits().subscribe(produits => {
      this.produits = produits;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateProduitComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialog a été fermé', result);
      this.loadProduits();
    });
  }


  openEditDialogModif(produit: Produit): void {
    const dialogRef = this.dialog.open(EditProduitComponent, {
      data: produit // Passer les données du produit à éditer
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadProduits(); 
      }
    });
  }
}
