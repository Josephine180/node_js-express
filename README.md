# Passez au Full Stack avec Node.js, Express et MongoDB
Ce projet est réalisé dans le cadre du cours Passez au Full Stack avec Node.js, Express et MongoDB proposé par OpenClassrooms. L'objectif est de développer une API REST sécurisée en utilisant Node.js, Express et MongoDB.


## Objectifs du cours
* Créer un serveur web simple avec Express

* Développer une API REST avec Node.js, Express et MongoDB

* Mettre en place une base de données MongoDB avec Mongoose

* Implémenter des opérations CRUD (Create, Read, Update, Delete)

* Gérer l'authentification des utilisateurs avec JWT

* Sécuriser l'API contre les attaques courantes (injections, XSS, etc.)


## Technologies utilisées
* Node.js

* Express

* MongoDB

* Mongoose

* JSON Web Tokens (JWT)

* bcrypt

* Helmet

* dotenv


## Installation
### Cloner le dépôt :

```
bash

git clone https://github.com/votre-utilisateur/nom-du-projet.git
cd nom-du-projet
```
### Installer les dépendances :

```
bash
npm install
```
### Configurer les variables d'environnement :
Créer un fichier .env à la racine du projet avec les variables suivantes :

```
env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Lancer le serveur :
```
bash
npm start
```

### Structure du projet
```
pgsql

├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── app.js
├── server.js
└── package.json
```
### Fonctionnalités principales
* Création et authentification des utilisateurs

* Opérations CRUD sur les ressources

* Sécurisation des routes avec JWT

* Validation des données entrantes

* Protection contre les attaques courantes