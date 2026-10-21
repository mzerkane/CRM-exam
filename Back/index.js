const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import de cors
require('dotenv').config();

const app = express();

app.use(cors()); // Autoriser les requêtes venant du frontend
app.use(express.json()); // Pour lire le format JSON

// Votre connexion MongoDB...
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('API CRM en marche');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));