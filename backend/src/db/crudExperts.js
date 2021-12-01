//crud del backend
const db = require("./firebase.js");

// Obtener todos los expertos
function getExperts(callback){
    return db.collection("experts").get().then((docs) => {
        var arrayExperts = []
        docs.forEach((expert) => {
            arrayExperts.push(expert.data());
        })
        // CUANDO LLEGAMOS ACÁ, SE DEBE ENVIAR LA RESPUESTA AL GET REQUEST
        callback(arrayExperts);
    })
} 

// Obtener un experto específico
function getExpert(uid, callback){
    return db.collection("experts").doc(uid).get()
        .then((refDoc) => {
            callback(refDoc.data())
        })
}

getExpert("sA8jUgnnkqvhaE8TwSSy", (expertData) => {
    console.log(expertData)
})

module.exports = {
    getExperts,
    getExpert
}
