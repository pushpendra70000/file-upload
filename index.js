//const something = require (somelibrary)
const express = require('express');
const app = express ();
const multer = require('multer');
require('dotenv').config();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,Math.floor(Math.random() * 100)+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.post('/fileuploads', upload.single('profile'), (req, res,)=>{
    console.log(req.file)
    res.status(200).json({
        msg:"file uploaded succesfully"
    });

  })

let port= process.env.PORT
//object.method
app.listen(port,()=>{
  console.log(`this server is running on port ${port}`);
})