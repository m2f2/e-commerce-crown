
import { Route, Routes } from 'react-router-dom';
import Shop from "./routes/Shop/shop";
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';



const App=() =>{
  

  return (
   <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index  element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='signIn' element={<SignIn/>}/>
    </Route>
    {/* <Route path='home'  element={<Home/>}/> */}
   </Routes>
  )
}

export default App
