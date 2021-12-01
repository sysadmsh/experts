const admin = require('firebase-admin');


const serviceAccount=require("./tecnoavixx-89b105c3c41e.json");

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports=db;
