const express = require('express');
const session = require('express-session'); 
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { get_login, post_login, get_signup, post_signup } = require('./account');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.get(['/', '/home'], (req, res) => {
    const data = {
      pageTitle: 'Home | Recommendr',
      file: 'home',
      variables: {
        var1: 'First Variable',
        var2: 'Second Variable'
      }
    };
    // Checking if the username is there
    console.log(req.session.username)
    res.render('main', data);

});


app.get(['/account'], (req, res) => {
  if (req.session.username) {
    const data = {
      pageTitle: 'Account | Recommendr',
      file: 'account',
      variables: {

      }
    };
    res.render('main', data);
  } else {
    res.redirect('/login');
  }
});

app.get(['/post'], (req, res) => {
  if (req.session.username) {
    const data = {
      pageTitle: 'Post | Recommendr',
      file: 'post',
      variables: {

      }
    };
    res.render('main', data);
  } else {
    res.redirect('/login');
  }
});

app.get(['/login'], get_login);
app.post('/login', post_login);
app.get(['/signup'], get_signup);
app.post('/signup', post_signup);


// Where the app is running
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));