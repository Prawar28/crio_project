const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

const memes = []

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res){

  const meme = {
    name: req.body.name,
    caption: req.body.caption,
    url: req.body.url
  }

  memes.push(meme)

  console.log(memes);
})

app.listen(3000, function(req, res){
    console.log('server started')
})
