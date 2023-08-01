const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { get_login, post_login, get_signup, post_signup, logout } = require('./account');
const { post_create, get_posts, upload } = require('./posts');
const { user_info } = require('./get-info');
const { result } = require('./sql-conn');
const RedisStore = require('connect-redis')(session);

const app = express();
const redisOptions = {
  host: 'your-redis-host', 
  port: 6379
};
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  store: new RedisStore(redisOptions),
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static('static'));

app.get(['/', '/home'], async (req, res) => {
  temp = await get_posts();
  stringPosts = JSON.stringify(temp)
  const data = {
    pageTitle: 'Home | Recommendr',
    file: 'home',
    variables: stringPosts
  };
  // Checking if the username is there
  // console.log(req.session.username)
  res.render('main', data);

});

app.post(['/filter'], async (req, res) => {
  const keysArray = Object.keys(req.body);
  queryString = "SELECT * FROM recommendations";

  queryString = queryString + " WHERE description LIKE '%" + req.body.search + "%'";


  if (req.body.Food) {
    queryString = queryString + " AND category = 'Food'";
  }
  if (req.body.Activity) {
    queryString = queryString + " AND category = 'Activity'";
  }
  if (req.body.Entertainment) {
    queryString = queryString + " AND category = 'Entertainment'";
  }
  if (req.body.Other) {
    queryString = queryString + " AND category = 'Other'";
  }

  stars = 0

  if (keysArray.includes('one')) {
    stars = 1;
  }
  if (keysArray.includes('two')) {
    stars = 2;
  }
  if (keysArray.includes('three')) {
    stars = 3;
  }
  if (keysArray.includes('four')) {
    stars = 4;
  }
  if (keysArray.includes('five')) {
    stars = 5;
  }

  if (stars != 0) {
    queryString = queryString + " AND stars = " + stars;
  }

  if (req.body.address) {
    queryString = queryString + " AND address LIKE '%" + req.body.address + "%'";
  }

  // console.log(queryString)
  temp = await result(queryString);
  stringPosts = JSON.stringify(temp)
  const data = {
    pageTitle: 'Home | Recommendr',
    file: 'home',
    variables: stringPosts
  };
  // Checking if the username is there
  // console.log(req.session.username)
  res.render('main', data);

});


app.get(['/account'], async (req, res) => {
  if (req.session.username) {
    user_id = req.session.username;
    user_array = await user_info("SELECT * FROM recommendrUsers WHERE username = '" + user_id + "'");
    user_dict = user_array[0];
    const data = {
      pageTitle: 'Account | Recommendr',
      file: 'account',
      variables: user_dict
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

app.post('/post', upload.single('imageUpload'), post_create);

app.get(['/login'], get_login);
app.post('/login', post_login);
app.get(['/signup'], get_signup);
app.post('/signup', post_signup);
// app.get('/create', get_create);
// app.post('/create', post_create);
app.get('/logout', logout);


// Where the app is running
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));