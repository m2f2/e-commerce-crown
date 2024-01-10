import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
const SignIn = () =>{
          const logGoogleUser = async ()=>{
                    const {user} = await signInWithGooglePopup();
                    const userDocRef = await createUserDocumentFromAuth(user);
          }

          return(
                    <>
                              <h1>sign in</h1>
                              <button onClick={logGoogleUser}>Sign In With Google Popup</button>
                    </>
          )
}

export default SignIn; 