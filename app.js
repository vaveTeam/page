//API
const express = require('express');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

// EJS
app.use("/public", express.static('./public'));
app.use("/img", express.static('./public/img'));
app.use("/css", express.static('./public/css'));
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
  
  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Connect flash
  app.use(flash());


  app.get('/', (req, res) => {
    res.render('home', { 
        pageTitle: 'Globalni | Strona Główna',
        user: req.user
  });
});

app.listen(8080);
console.log('8080 Port Odpalony!');