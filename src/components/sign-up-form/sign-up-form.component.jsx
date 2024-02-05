import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.style.scss';




const SignUpForm =()=>{
  const defaultFormFields ={
    displayName: "",
    email:"",
    password: "",
    confirmPassword: "",
  }
  const resetFormFields = ()=>{
    setFormFields(defaultFormFields)
  }
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields; 
  const dispatch = useDispatch();

  const handleChange = (event)=>{
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(password !== confirmPassword){
      alert('password not match');
      return;
    }

    try{ 
      dispatch(signUpStart(email,password,displayName))
      resetFormFields()
    }
    catch(error){
      if(error.code==='auth/email-already-in-use'){
                alert('cannot create user email already in use')
      }else{
                console.log(error)
      }
    }
  };

  return(
    <div className="sign-up-container">
    <h2>Don't have an account?</h2>
              <span>Signup with email and password</span>
              <form onSubmit={handleSubmit}>
                        
                        <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                        <FormInput label="Password "  type="password"required onChange={handleChange} name="password" value={password}/>
                        <FormInput label="Confirm Password"type="password"required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                        <Button  type="submit">Sign Up</Button>
              </form>
    </div>
  )
}


export default SignUpForm;