/* creation schema de données qui contient les champs souhaités pour chaque Thing. */
/* Methode schema mise à disposition avec Mongoose. Champ Id généré automatiquement */
const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  imageUrl: { type: String, required: true},
  userId: { type: String, required: true},
  price: { type: Number, required: true },
});

/* exporter le schema en tant que modèle, disponible pour l'application Express */
/* méthode model transforme le modèle en modèle utilisable. */
module.exports = mongoose.model('Thing', thingSchema);