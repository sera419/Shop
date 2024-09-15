/*export const environment = {
  firebase: {
    projectId: 'jade-fashion',
    appId: '1:120506765687:web:c471a917398e4f1ea59172',
    storageBucket: 'jade-fashion.appspot.com',
    apiKey: 'AIzaSyCQTKvDN8JXwTWo3HSvb_zIgyAQb9StFSw',
    authDomain: 'jade-fashion.firebaseapp.com',
    messagingSenderId: '120506765687',
  },
  production: true
};
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4gdct075lcWClTKQy6u8eKTWZFshIrfA",
  authDomain: "jade-shop.firebaseapp.com",
  projectId: "jade-shop",
  storageBucket: "jade-shop.appspot.com",
  messagingSenderId: "494195402117",
  appId: "1:494195402117:web:093f7134f555c56ae0d0ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);