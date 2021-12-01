// get crud

const db = require('./firebase.js');

function getClientes(callback){
//function getUsers(callback){
    return db.collection("CLIENTE").get().then((docs) => {
        var arrayExperts = []
        docs.forEach((user) => {
            //const obj = customer.data();
            //obj.uid = customer.id;
            arrayExperts.push(user.data());                                                                    
        //console.log(user.data());
    })

    callback(arrayExperts);

})
}

// Crear un Cliente
function addCliente(CLIENTE, callback){
    return db.collection("CLIENTE").add(CLIENTE)
        .then(() => {
            callback("Success");
        })
        .catch((error) => {
            callback(`Error to get CLIENTE ${error}`);
        })
}

// Crear un nuevo CLIENTE
const cliente = {
    "name": "Laura Pesellin",
    "location": "Bogota, Colombia",
    "occupation": "Experta en Tecnologias Agiles"
}
addCliente(cliente, (status)=>{
    console.log(status);
})

function deleteCliente(uid, callback){
    return db.collection("CLIENTE").doc(uid).delete()
    .then(() => {
        callback("Success");
    })
    .catch((error) =>{
        callback(`Error to get users ${error}`);
    })
}

// Borrar un CLIENTE usando el id
deleteCliente("Fo4jnB5sUW5WLlYrMFpd", (status) =>{
    console.log(status);
})











module.exports= {
    getClientes
    //addCliente
    
}

//db.collection("users").get().then((docs) => {
//    docs.array.forEach(user) => {
 //       console.log(user.data());
        
 //   });
//})
