import {  useState } from "react";
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import './sign-in-form.style.scss';


const SignInForm =()=>{

  const signInWithGoogle = async ()=>{
     await signInWithGooglePopup();
    }
          const defaultFormFields ={
                    email:"",
                    password: "",
          }

          const [formFields, setFormFields] = useState(defaultFormFields)
          const { email, password, } = formFields; 

          const resetFormFields = ()=>{
            setFormFields(defaultFormFields)
          }
          // console.log(formFields);
          const handleChange = (event)=>{
                    const {name, value} = event.target;
                    setFormFields({...formFields, [name]: value});
          }

          const handleSubmit = async (e)=>{
                  e.preventDefault()
                  try{ 
                    await signInAuthUserWithEmailAndPassword(email, password);
                    resetFormFields();
                  }
                  catch(error){
                    switch(error.code){
                      case "auth/wrong-password":
                        alert("incorrect password for email");
                        break;
                      case "auth/user-not-found": 
                      alert("user not found");
                      break;
                      default:
                        console.log(error)
                    }
                   }

          }
           return(
                    <div className="sign-up-container">
                    <h2>Alrady have an account?</h2>
                              <span>Sign In with email and password</span>
                              <form onSubmit={handleSubmit}>
                                        
                                        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                                        <FormInput label="Password "  type="password"required onChange={handleChange} name="password" value={password}/>
                                        <div className="buttons-container ">
                                          <Button  type="submit">Sign In</Button>
                                          <Button buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
                                        </div>
                                        
                              </form>
                    </div>
           )
}


export default SignInForm;