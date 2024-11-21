// services/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js"; // Importando o Analytics

const firebaseConfig = {
    apiKey: "AIzaSyAZFfWi-01PgAZuNj5KOZTMOo2mTO6ot9s",
    authDomain: "projeto-recomecos.firebaseapp.com",
    projectId: "projeto-recomecos",
    storageBucket: "projeto-recomecos.appspot.com",
    messagingSenderId: "1000020937824",
    appId: "1:1000020937824:web:da0e9506467564ca50c705",
    measurementId: "G-LMPLJNP6WV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app)
