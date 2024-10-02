import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategorieService } from 'src/app/core/services/categorie/categorie.service';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.scss']
})
export class CreateCategorieComponent {
  categorieForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categorieService: CategorieService,
    public dialogRef: MatDialogRef<CreateCategorieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.categorieForm = this.fb.group({
      libelle: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.categorieForm.valid) {
      this.categorieService.saveCategorie(this.categorieForm.value).subscribe({
        next: (response) => {
          console.log('Catégorie créée avec succès !');
          this.dialogRef.close(response); // Fermer le modal et retourner la réponse
        },
        error: (error) => {
          console.error('Erreur lors de la création de la catégorie', error);
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
