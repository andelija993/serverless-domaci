import * as admin from "firebase-admin";

var serviceAccount = require("C:/Users/anesic/Desktop/serverless-domaci/service-account.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db=admin.firestore();

export default db;