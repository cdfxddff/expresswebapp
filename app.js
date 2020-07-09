const express = require('express');
const app = express();
const logger = require('morgan');
app.use(logger("dev"));

let parseredUrl = [];

app.set("view engine", "ejs");

app.get('/', function(req,res){
    res.render(`${__dirname}/view/index.ejs`, {obj: parseredUrl});
});

app.get('/delete/:id', function(req,res){
    parseredUrl.splice(req.params.id,1);
    res.redirect('/del');
});

app.get('/del', function(req,res){
    res.render(`${__dirname}/view/del.ejs`, {obj2: parseredUrl});
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/', function(req,res){
    const count = parseredUrl.push({title:req.body.title,url:req.body.url});
    res.render(__dirname+"/view/index.ejs", {obj: parseredUrl});
});

app.listen(8080, function(){
    console.log("8080 server working");
});