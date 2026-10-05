/* Firebase wiring point. Replace placeholders with your Firebase project config.
   Demo mode intentionally remains fully usable without Firebase. */
export const firebaseConfig=
{
 apiKey: "AIzaSyC7bEYtEIk4DN3edQKievh-ek89tWS4awc",

    authDomain: "playza-87102.firebaseapp.com",

    databaseURL: "https://playza-87102-default-rtdb.firebaseio.com",

    projectId: "playza-87102",

    storageBucket: "playza-87102.firebasestorage.app",

    messagingSenderId: "695215345584",

    appId: "1:695215345584:web:14fc00081f035046979075",

    measurementId: "G-PTR7E4D8VT"

};
export const firebaseReady=false;
export async function initFirebase(){return firebaseReady}
