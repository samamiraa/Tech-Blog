//requires dependancies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers.js');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers/routes');
const sequelize = require('./config/connection.js');

//requires models to create tabkes once server is started
const User = require('./models/User.js');
const Post = require('./models/Post.js');
const Comments = require('./models/Comments.js')


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// session details
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 60 * 60 * 1000, 
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// users helpers.js
const hbs = exphbs.create({ helpers });

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//sets path to public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});