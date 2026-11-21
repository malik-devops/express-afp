const express = require('express');

const app = express();

app.use(express.json());

const clientRoutes = require('./routes/client.routes');

app.use('/api/clients', clientRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API Express !');
});

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});