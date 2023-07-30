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
  // upload.single('imageUpload')(req, res, (err) => {
  //   if (err) {
  //     console.error('Error uploading file:', err);
  //     return res.status(500).send('Error uploading the file.');
  //   }
    
  //   // If the file upload is successful, the file details will be available in req.file
  //   if (req.file) {
  //     console.log('File uploaded successfully:', req.file.filename);
  //     // You can save the file details to a database or use them as needed

  //     // Redirect to another page or respond with a success message
  //   } else {
  //     // If no file was uploaded or an error occurred, handle accordingly
  //     res.status(400).send('Error uploading the file.');
  //   }
  // });
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