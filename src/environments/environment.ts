// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebase: {
    projectId: "jade-shop",
    appId: "1:494195402117:web:093f7134f555c56ae0d0ec",
    storageBucket: "jade-shop.appspot.com",
    apiKey: "AIzaSyA4gdct075lcWClTKQy6u8eKTWZFshIrfA",
    authDomain: 'jade-shop.firebaseapp.com',
    messagingSenderId:  "494195402117",
  }
}; 

/*// Import the functions you need from the SDKs you need
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
};*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
