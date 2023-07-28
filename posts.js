const { user_info } = require('./get-info');


get_create = (req, res) => {
    if (req.session.username) {
        // if 'username' is already in session
        res.redirect('/create');
      } else {
        const data = {
          pageTitle: 'Log In | Recommendr',
          file: 'login',
          variables: {
    
          }
        };
        res.render('main', data);
    }
}

post_create = (req, res) => {
    res.redirect('/home')
}

async function get_posts() {
  results = await user_info("SELECT * FROM recommendations")
  return results;
}

module.exports = {
    get_create,
    post_create,
    get_posts
}