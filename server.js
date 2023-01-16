// express
const express = require('express');
const app = express();
const { request, response } = require('express');
// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
// mongodb
const MongoClient = require('mongodb').MongoClient;
var db;
// method-override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
// ejs
app.set('view engine','ejs');
// public folder
app.use('/public',express.static('public'));
// env
require('dotenv').config();

MongoClient.connect(process.env.DB_URL,(error,result)=>{
    if(error) return console.log(error);
    db= result.db('indexDo')
    app.listen(process.env.PORT,()=>{
        console.log('To Do go')
    });
});
// index
app.get('/',(request,response)=>{
    response.render('sign.ejs')
});

app.use('/sign',require('./routes/sign.js'));

