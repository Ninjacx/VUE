const http = require('http');
const ws = require('socket.io');
const fs = require('fs');//文件
const url = require('url');//解析地址

const express = require('express');
const multer = require('multer')({ dest: 'www/upload' });
var router = express.Router();

let  server = express();



server.listen(8888);
server.use(multer.any());

server.use(function (req, res, next) {

  server.all(`${req.originalUrl}`, function (req, res,next) {
     res.sendFile( __dirname + "/www/" + `${req.originalUrl}.html`);
  });
  next();
});

server.post('/upload',function(req,res){
  console.log(req.files);
  res.send("ok");
});




server.use(express.static('public'));
