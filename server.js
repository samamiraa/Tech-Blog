const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const routes = require('./controllers/routes');
const sequelize = require('./config/connection.js');

const User = require('./models/User.js');
const Post = require('./models/Post.js');
const Comments = require('./models/Comments.js')


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});