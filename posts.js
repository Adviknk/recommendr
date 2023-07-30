const { user_info } = require('./get-info');
const multer = require('multer');


const storage = multer.diskStorage({
  destination: './static/', 
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

post_create = (req, res) => {
  console.log(req.body)
  console.log(req.file)
  const keysArray = Object.keys(req.body);
  
  if(keysArray.length != 5) {
    res.redirect('/post')
  }
  else {
    res.redirect('/home')
  }
}

async function get_posts() {
  results = await user_info("SELECT * FROM recommendations")
  return results;
}

module.exports = {
    post_create,
    get_posts,
    upload
}