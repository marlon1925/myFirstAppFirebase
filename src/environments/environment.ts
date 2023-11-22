// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  //firebase API key
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  firebaseConfig: {
    apiKey: "AIzaSyB_keRNIhYR03n2pCTruVD30NPZI5sRHTE",
    authDomain: "ml-eb6d4.firebaseapp.com",
    projectId: "ml-eb6d4",
    storageBucket: "ml-eb6d4.appspot.com",
    messagingSenderId: "64761088859",
    appId: "1:64761088859:web:34b0d3a6edd188d9aa287e"
  },

  // Initialize Firebas
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
