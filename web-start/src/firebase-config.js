/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
    apiKey: "AIzaSyC5SQOs-1KwiijrO0XL9rNLlT3KhJFbbnY",
    authDomain: "codelab-friendly-chat-pomi.firebaseapp.com",
    projectId: "codelab-friendly-chat-pomi",
    storageBucket: "codelab-friendly-chat-pomi.appspot.com",
    messagingSenderId: "691567903802",
    appId: "1:691567903802:web:4a50305027715d77c9e103"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}