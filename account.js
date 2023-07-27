const { run, add } = require('./sql-conn');

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
    return run("SELECT * FROM recommendrUsers WHERE username = '" + username + "' AND email = '" + email + "' AND pwd = '" + password + "'");
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

post_signup = async (req, res) => {
    const { first, last, username, email, password } = req.body;
    valid = await check_signup(first, last, username, email, password);
    if(valid){
        req.session.username = username;
        res.redirect('/home');
    }
    else {
        res.redirect('/signup');
    }
};

async function check_signup(first, last, username, email, password) {
    if(await exists(username)) {
        return false;
    }
    else {
        const params = [first, last, username, email, password];
        return await add("INSERT INTO recommendrUsers (first, last, username, email, pwd) VALUES (?,?,?,?,?)", params);
    }
};

async function exists(username) {
    return await run("SELECT * FROM recommendrUsers WHERE username = '" + username + "'");
};


module.exports = {
    get_login,
    post_login,
    get_signup,
    post_signup
  };