const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const { Sequelize } = require('sequelize');
const hbs = exphbs.create({});
const sequelize = require('./config/connection');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});