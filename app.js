// imports

const express = require("express");

const bodyParser = require("body-parser");

const request = require("request");
const { dirname } = require("path");
const exp = require("constants");

const app = express();

//static files
app.use(express.static("public"))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Set zviews's
app.set('views', './views');
app.set('view engine', 'ejs');

//app.get
app.get("/", function(req, res){
    res.render('index', {text: "Hello World!"});
});

let para = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
app.get("/about", function(req, res){
    res.render("about", {About: para})
})

// app.listen
app.listen(3000, function(){
    console.log("server is running on port 3000");
});