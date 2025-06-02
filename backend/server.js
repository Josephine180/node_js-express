// On importe le module 'http' de Node.js, qui permet de créer un serveur web
const http = require('http');

// On crée un serveur HTTP avec la méthode createServer
// Cette méthode prend une fonction de rappel (callback) qui sera appelée à chaque requête reçue
// 'req' représente la requête envoyée par le client
// 'res' représente la réponse que le serveur renvoie
const server = http.createServer((req, res) => {
  // On termine la réponse en envoyant un message au client
  // Cela signifie que chaque fois que quelqu'un accède au serveur, il verra ce message
  res.end('Voilà la réponse du server');
});

// On démarre le serveur et on lui demande d'écouter sur un port
// process.env.PORT est utilisé pour permettre au serveur de fonctionner sur des plateformes cloud (comme Heroku)
// Si cette variable d'environnement n'est pas définie, on utilise le port 3000 par défaut
server.listen(process.env.PORT || 3000);
