
var router = require('express').Router();
// mongodb
const MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect(process.env.DB_URL,(error,result)=>{
    if(error) return console.log(error);
    db= result.db('indexDo')
});

router.post('/signup',function(request,response){
    user = {id:request.body.Username,pw:request.body.Password}
   db.collection('login').insertOne(user,(error,result)=>{
        response.redirect('/')
   }); 
});

router.post('/signin',function(request,response){
    response.redirect('/views/nav.html')
});


module.exports=router;