import { useState } from "react";
import {
          createUserDocumentFromAuth,
          signInWithGooglePopup,
} from "../../utils/firebase/firebase";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";



const SignIn = () =>{
        
          // eslint-disable-next-line react-hooks/exhaustive-deps
         
          const logGoogleUser = async ()=>{
                    const {user} = await signInWithGooglePopup();
                    const userDocRef = await createUserDocumentFromAuth(user);
          }
          

          return(
                    <>
                              <h1>sign in</h1>
                              <SignUpForm/>
                              <button onClick={logGoogleUser}>Sign In With Google Popup</button>
                     </>
          )
}

export default SignIn; 