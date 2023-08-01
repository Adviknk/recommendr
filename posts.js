const { user_info } = require('./get-info');
const { quick_run } = require('./sql-conn');
const multer = require('multer');
const { commit } = require('./commit');


const storage = multer.diskStorage({
  destination: './static/', 
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

post_create = (req, res) => {
  // console.log(req.body)
  // console.log(req.file)
  const keysArray = Object.keys(req.body);
  
  count = 0;

  if(keysArray.includes('Food')) {
    count = count + 1;
  }
  if(keysArray.includes('Other')) {
    count = count + 1;
  }
  if(keysArray.includes('Activity')) {
    count = count + 1;
  }
  if(keysArray.includes('Entertainment')) {
    count = count + 1;
  }

  stars = 0

  if(keysArray.includes('one')) {
    stars = 1;
  }
  if(keysArray.includes('two')) {
    stars = 2;
  }
  if(keysArray.includes('three')) {
    stars = 3;
  }
  if(keysArray.includes('four')) {
    stars = 4;
  }
  if(keysArray.includes('five')) {
    stars = 5;
  }

  // commit("'static/" + req.file.originalname + "'", "Added new file")
  
  if(stars == 0 || count > 1 || count == 0) {
    res.redirect('/post')
  }
  else {
    quick_run('INSERT INTO recommendations (title, description, image, url, address, category, stars) VALUES ("' + req.body.title + '","' + req.body.description + '","' + req.file.originalname + '","' + req.body.url + '","' + req.body.address + '","' + keysArray[2] + '","' + stars + '")')
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