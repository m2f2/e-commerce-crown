import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  getAuth, signInWithEmailAndPassword, 
  signInWithPopup, signInWithRedirect, 
  signOut, 
  onAuthStateChanged
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

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

export const  addCollectionAndDocuments = async (collectionKey, objectToAdd)=>{
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  
  objectToAdd.forEach((object)=>{
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })
  await batch.commit();
  console.log("done")
}

export const getCategoriesAndDocuments = async ()=>{
  const collectionRef = collection(db,'Category');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
    const{ title, items} =docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{})

  return categoryMap;
}

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
export const signInAuthUserWithEmailAndPassword =  async(email,password)=>{
  if(!email || !password) return;
  return await  signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async ()=> await signOut(auth)


export const onAuthStateChangedListener = (callback)=> onAuthStateChanged(auth, callback)