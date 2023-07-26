const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');

// app.get('/testing', (req, res) => {
//     const data = {
//       pageTitle: 'Home',
//       file: 'home',
//       variables: {
//         button: 'Account'
//       }
//     };
//     res.render('main', data);
// });

app.get('/', (req, res) => {
    const data = {
      pageTitle: 'New Home',
      file: 'home',
      variables: {
        button: 'New Button'
      }
    };
    res.render('main', data);
});


// Where the app is running
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));