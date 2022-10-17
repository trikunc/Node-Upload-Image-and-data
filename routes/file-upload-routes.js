'use strict';

const express = require('express');
const { upload } = require('../helpers/filehelper');
const { singleFileUpdate,
  getallSingleFile, test } = require('../controllers/fileuploaderController');
const router = express.Router();

router.post("/upload", upload.single("file"), function (req, res) {
  console.log('upload')
  const file = req.file;
  console.log('file::>', file)
  res.status(201).json(file.filename);
});
router.put('/singleFile/:pid', singleFileUpdate);
router.get('/getSingleFile/:pid', getallSingleFile);
router.get('/test', test);


module.exports = {
  routes: router
}