const {getClientes}=require("c:/experts/experts/backend/src/db/crud.js");
   
//const {getUsers}=require("c:/experts/experts/backend/src/db/crud.js");
 const express  = require('express');
 const app = express();
 const port =3000;
 
 app.use(express.json());
 
 app.get('/get-Clientes',function(req,res){
   // app.get('/get-Users',function(req,res){

    getClientes(function(arrayExperts){
    //getUsers(function(arrayExperts){
        res.json(arrayExperts);
        
    })
})

app.get('/CLIENTE',function(req, res){
   res.send('Esta es la lista de usuarios');
})

// Traer un experto específico
//app.get('/CLIENTE/:id', function(req, res){
  //  const uid = req.params.id;
    //dbE.getClientes(uid, function(refDoc){
      //  res.json(refDoc);
    //})
//})


 app.listen(port,() =>{
     console.log("running on port "+port);
 })
    