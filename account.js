const { run } = require('./sql-conn');

get_login = (req, res) => {
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
};

post_login = async (req, res) => {
    const { username, email, password } = req.body;
    valid = await check_login(username, email, password);
    if(valid){
      req.session.username = username;
      res.redirect('/home');
    }
    else {
      res.redirect('/login');
    }
};

function check_login(username, email, password) {
    return run("SELECT * FROM users WHERE username = '" + username + "' AND email = '" + email + "' AND pwd = '" + password + "'");
};

get_signup = (req, res) => {
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
};

post_signup = (req, res) => {
  valid = true;
  if(valid){
    const { username } = req.body;
    req.session.username = username;
    res.redirect('/home');
  }
  else {
    res.redirect('/signup');
  }
};


module.exports = {
    get_login,
    post_login,
    get_signup,
    post_signup
  };