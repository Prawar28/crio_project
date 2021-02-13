const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const memes = [];

app.get('/', function(req, res){
  res.render('home', {meme: memes});
})

app.post('/', function(req, res){

  const meme = {
    name: req.body.name,
    caption: req.body.caption,
    url: req.body.url
  }

  memes.push(meme)
  res.redirect('/')
})

app.listen(3000, function(){
  console.log('Server started at Port 3000:');
})
