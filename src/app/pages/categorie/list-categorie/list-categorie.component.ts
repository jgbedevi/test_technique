import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategorieComponent } from '../create-categorie/create-categorie.component';
import { CategorieService } from 'src/app/core/services/categorie/categorie.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Categorie } from 'src/app/core/models/categorieModel';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.scss']
})
export class ListCategorieComponent {
  displayedColumns: string[] = ['idCategorie', 'libelle'];
  dataSource = new MatTableDataSource<Categorie>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(public dialog: MatDialog, 
    private categorieService: CategorieService) {}

    ngOnInit(): void {
      this.loadCategories();
    }
  
    loadCategories(): void {
      this.categorieService.getCategories().subscribe({
        next: (data) => {
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator; // Attacher le paginator aux données
        },
        error: (err) => console.error(err)
      });
    }
  

  openCreateCategorieDialog(): void {
    const dialogRef = this.dialog.open(CreateCategorieComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Nouvelle catégorie créée:', result);
        // Ici, tu peux recharger la liste des catégories si nécessaire
      }
    });
  }
}
