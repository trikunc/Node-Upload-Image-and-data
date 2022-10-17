'use strict';
// const SingleFile = require('../models/singlefile');
// const MultipleFile = require('../models/multiplefile');

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function singleFileUpdate(req, res) {
  console.log('singleFileUpload')
  const { pid } = req.params
  const body = req.body

  console.log("pid==>", pid)
  console.log("body==>", body)
  try {
    const updateUser = await prisma.user.update({
      where: {
        id: parseInt(pid),
      },
      data: {
        email: body.email,
        name: body.name,
        longitude: body.longitude,
        latitude: body.latitude,
        filePath: req.body.filePath,
      }
    })
    res.status(200).json(updateUser, { success: true });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const getallSingleFile = async (req, res, next) => {
  const { pid } = req.params

  try {
    const file = await prisma.user.findUnique({
      where: {
        id: parseInt(pid),
      }
    })
    res.status(200).send(file);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const test = async (req, res, next) => {
  try {
    res.status(200).send({ message: "message" });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

module.exports = {
  singleFileUpdate,
  getallSingleFile,
  test
}