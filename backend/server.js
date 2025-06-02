// On importe le module 'http' de Node.js, qui permet de créer un serveur web
const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);


// On démarre le serveur et on lui demande d'écouter sur un port
// process.env.PORT est utilisé pour permettre au serveur de fonctionner sur des plateformes cloud (comme Heroku)
// Si cette variable d'environnement n'est pas définie, on utilise le port 3000 par défaut
server.listen(process.env.PORT || 3000);
