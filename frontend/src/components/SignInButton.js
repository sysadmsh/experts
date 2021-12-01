// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyAsgEFXPYWlqV8EwlIq2D5VCeTwR2VUYm0",
  authDomain: "tecnoavixx.firebaseapp.com",
  databaseURL: "https://tecnoavixx-default-rtdb.firebaseio.com",
  projectId: "tecnoavixx",
  storageBucket: "tecnoavixx.appspot.com",
  messagingSenderId: "706938797209",
  appId: "1:706938797209:web:08a44e9b3a376e4d78cc08",
  measurementId: "G-X1HMECWPDV"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/home",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],

  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      const user = {
        uid: authResult.user.uid,
        name: authResult.user.displayName,
        photoUrl: authResult.user.photoURL,
        email: authResult.user.email,
        flagNewUser: authResult.additionalUserInfo.isNewUser,
      };

      localStorage.setItem("user", JSON.stringify(user));
      return true;
    },
  },
};

function SignInButton() {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}

export default SignInButton;