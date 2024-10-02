import { Categorie } from "./categorieModel";

export class Produit{
    idProduit!: number;
    libelleProduit!: string;
    prix!: number;  
    categorie!: Categorie;
}