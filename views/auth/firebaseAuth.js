// import "firebase/app";
// import {
//   signInWithPopup,
//   getAuth,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendEmailVerification,
// } from "firebase/auth";
// // import { app } from "../../config/firebase/firebaseConfig";
// import {app} from"../../config/firebase_config"

// const provider = new GoogleAuthProvider();
// const auth = getAuth(app);
// export const loginWithGoogle = async () => {
//   const user = await signInWithPopup(auth, provider);
//   return user;
// };

// export const singUpWithEmailAndPassword = async (email,password) => {
//   const result = await createUserWithEmailAndPassword(auth, email, password);
//   var actionCodeSettings = {
//     url: "",
//     handleCodeInApp: true,
//   };
//   await sendEmailVerification(result.user, actionCodeSettings);
//   return result;
// };

// export const loginWithEmailAndPassword = async (email,password) => {
//     console.log(email);
//     console.log(password);
//   return await signInWithEmailAndPassword(auth, email, password);
// };
