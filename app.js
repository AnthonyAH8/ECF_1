const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/tasksRoutes');
const app = express();
const port = 3000;
const db = mongoose.connection

mongoose.connect('mongodb://localhost:27017/project_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
});

app.listen(port, () => {
    console.log(`Port : ${port}`);
  })

app.use(express.json()).use("/api", userRoutes, projectRoutes, taskRoutes);