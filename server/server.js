const express = require("express");
const app = express();
const port = 3001;
const path = require("path");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '..', '/public')));

app.get("/", function(req,res){
    res.render(path.join(__dirname, '..', 'views', 'index'))
})

app.get("/addfunds", function(req,res){
    res.render(path.join(__dirname, '..', 'views', 'addfunds'));
})

app.listen(port, function(){
    console.log("Server is up");
});