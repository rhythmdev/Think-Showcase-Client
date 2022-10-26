import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   
    const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   const providerLogin = (provider) => {
//     setLoading(true);
//     return signInWithPopup(auth, provider);
//   };

// create user
  const createUser = (email, password) => {
    setLoading(true);
   
    return createUserWithEmailAndPassword(auth, email, password);
  };
// login with email & password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // verify email
 const verifyEmail = () => {
  return sendEmailVerification(auth.currentUser);
 }

 // logout
  const logOut = () => {
    return signOut(auth);
  };

  // google sign in
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(" state change", currentUser);
     if(currentUser === null || currentUser.emailVerified){
      setUser(currentUser);
     }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    signInWithGoogle,
    logOut,
    createUser,
    signIn,
    loading,
    setLoading,
    updateUserProfile,
    verifyEmail
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
