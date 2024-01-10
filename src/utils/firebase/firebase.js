import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
          apiKey: "AIzaSyDPnd6Droo5F2Baf6atxbA5SGQyoMmtwVU",
          authDomain: "fayed-clothing-db.firebaseapp.com",
          projectId: "fayed-clothing-db",
          storageBucket: "fayed-clothing-db.appspot.com",
          messagingSenderId: "301474008970",
          appId: "1:301474008970:web:d816fab431ed83d7e6c273"
        };
        
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
          prompt: "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup =()=>signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect  = ()=> signInWithRedirect(auth, googleProvider)


export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth, additionalInformation)=>{
  if (!userAuth) return;
  const userDocRef = doc(db, "user", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

      try{
        await setDoc(userDocRef,{displayName,email,createdAt, ...additionalInformation={}})
      }
      catch(e){
        console.log('error creating the user',e);
      }
  }

 

  return userDocRef;
}


export const createAuthUserWithEmailAndPassword =  async(email,password)=>{
  if(!email || !password) return;
  return await  createUserWithEmailAndPassword(auth, email, password)
}