const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'Public')))

app.get('/',function(req,res){
    fs.readdir(`./Files`, function(err,Files){
        res.render('index',{Files:Files})
    })
   
});

app.post('/create',function(req,res){
    
fs.writeFile(`./Files/${req.body.title.split(' ').join('')}.txt`, req.body.details , function(err){
res.redirect("/")
})
   
});

app.listen(3030);