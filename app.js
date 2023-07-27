const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');

app.get(['/', '/home'], (req, res) => {
    const data = {
      pageTitle: 'Home | Recommendr',
      file: 'home',
      variables: {
        var1: 'First Variable',
        var2: 'Second Variable'
      }
    };
    res.render('main', data);
});

app.get(['/account'], (req, res) => {
  const data = {
    pageTitle: 'Account | Recommendr',
    file: 'account',
    variables: {
      var1: 'First Variable',
      var2: 'Second Variable'
    }
  };
  res.render('main', data);
});

app.get(['/post'], (req, res) => {
  const data = {
    pageTitle: 'Post | Recommendr',
    file: 'post',
    variables: {
      var1: 'First Variable',
      var2: 'Second Variable'
    }
  };
  res.render('main', data);
});


// Where the app is running
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));