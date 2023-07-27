const express = require('express');
const session = require('express-session'); 
const bodyParser = require('body-parser');
const ejs = require('ejs');

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

app.get(['/login'], (req, res) => {
  if (req.session.username) {
    // if 'username' is already in session
    res.redirect('/account');
  } else {
    const data = {
      pageTitle: 'Log In | Recommendr',
      file: 'login',
      variables: {

      }
    };
    res.render('main', data);
  }
});

app.post('/login', (req, res) => {
  valid = true;
  if(valid){
    const { username } = req.body;
    req.session.username = username;
    res.redirect('/home');
  }
  else {
    res.redirect('/login');
  }
});

app.get(['/signup'], (req, res) => {
  if (req.session.username) {
    // if 'username' is already in session
    res.redirect('/account');
  } else {
    const data = {
      pageTitle: 'Sign Up | Recommendr',
      file: 'signup',
      variables: {

      }
    };
    res.render('main', data);
  }
});

app.post('/signup', (req, res) => {
  valid = true;
  if(valid){
    const { username } = req.body;
    req.session.username = username;
    res.redirect('/home');
  }
  else {
    res.redirect('/signup');
  }
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
    //res.send(`Welcome to your dashboard, ${req.session.username}!`);
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


// Where the app is running
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));