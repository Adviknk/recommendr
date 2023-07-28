


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

module.exports = {
    get_create,
    post_create
}