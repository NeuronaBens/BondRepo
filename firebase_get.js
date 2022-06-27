const firebaseConfig = {
    apiKey: "AIzaSyAjJmc3wg7zgT5MV13bIp6ZT_qUET1mpfc",
    authDomain: "finanzas-bc7a9.firebaseapp.com",
    projectId: "finanzas-bc7a9",
    storageBucket: "finanzas-bc7a9.appspot.com",
    messagingSenderId: "759423779530",
    appId: "1:759423779530:web:6ae6dc28b6d984d7c92a33"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

var docRef = await db.collection("bonds").get();
var bonds = docRef.docs.map(doc => doc.data());

console.log(bonds);

var docRef = await db.collection("users").get();
var users = docRef.docs.map(doc => doc.data());

console.log(users);

document.variableGlobal_bonds = bonds;
document.variableGlobal_users = users;
document.variableGlobal_db = db;