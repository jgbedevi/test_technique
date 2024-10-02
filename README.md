
# Application de gestion de produits avec Angular

Ce projet est une application Angular qui permet de gérer des produits avec un backend Spring Boot. L'application permet de lister, créer, modifier et supprimer des produits, tout en les associant à des catégories. L'authentification par token (JWT) est également intégrée.

## Technologies utilisées
- **Frontend** : Angular 16
- **Backend** : Spring Boot (un serveur backend doit être exécuté séparément pour interagir avec l'application)
- **Authentification** : JWT (JSON Web Token)
- **Gestionnaire de paquets** : npm

## Prérequis
Avant de commencer, assurez-vous d'avoir les outils suivants installés :
- [Node.js](https://nodejs.org/) (version 14.x ou supérieure)
- [npm](https://www.npmjs.com/get-npm)
- [Angular CLI](https://angular.io/cli) (version 16.x ou supérieure)

## Installation

1. Clonez le dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/username/nom-de-votre-repo.git


2. Accédez au dossier du projet :
  
   ```bash
   cd nom-de-votre-repo

3. Installez les dépendances :
    ```bash
    npm install

## Configuration de l'API

Avant de démarrer l'application, assurez-vous que votre backend Spring Boot est en cours d'exécution.

## Démarrage de l'application

Pour démarrer l'application, exécutez la commande suivante :
    ```bash
    ng serve

## Fonctionnalités
- Lister les produits : Affiche tous les produits dans une table, récupérés depuis le backend.
- Créer un produit : Un formulaire modal permet de créer un nouveau produit avec les détails requis.
- Modifier un produit : Chaque produit dans la table peut être modifié via un bouton Modifier.
- Supprimer un produit : Chaque produit peut être supprimé à l'aide d'un bouton Supprimer.
- Gestion des catégories : Chaque produit appartient à une catégorie spécifique.
- Formulaires modaux : Des formulaires modaux sont utilisés pour créer et modifier des produits, avec une validation basique des données.
- Gestion de l'authentification

## Déploiement

Pour déployer l'application sur un serveur, suivez ces étapes :

1. Construisez l'application pour la production :
    ```bash
    ng build --prod

Cela créera un répertoire dist/ contenant les fichiers optimisés pour la production.

2. Copiez le contenu du dossier dist/ sur votre serveur web. Vous pouvez utiliser des outils comme Firebase Hosting, Netlify, ou déployer sur un serveur Apache/Nginx.

## Exemple de déploiement sur un serveur Nginx
1. Installez Nginx sur votre serveur (si ce n'est pas déjà fait).

2. Copiez les fichiers de dist/votre-projet dans le répertoire racine de votre serveur (généralement /var/www/html).

3. Modifiez la configuration de Nginx (fichier /etc/nginx/sites-available/default) pour servir votre application :
      ```bash
      server {
       listen 80;
      server_name votre_domaine.com; 
      location / {
        root /var/www/html/votre-projet;
        try_files $uri $uri/ /index.html;
          }
        }

4. Redémarrez Nginx pour appliquer les modifications :
    ```bash
    sudo systemctl restart nginx

## Auteurs
- GBEDEVI Yawa Jacqueline - jgbedevi
