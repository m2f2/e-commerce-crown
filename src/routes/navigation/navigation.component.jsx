
// eslint-disable-next-line no-unused-vars
import React, { Fragment, useContext } from "react";
import { FaCrown } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import {CartContext, CartProvider} from "../../contexts/cart.context"
import "./navigation.style.scss";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/crat-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";


const Navigation = ()=>{
    const {currentUser}=useContext(UserContext);
    const {isCartOpen}=useContext(CartContext)
    
          return <Fragment>
            <div className="navigation">
             <Link className="logo-container" to='/'>
              <FaCrown className="logo"/>
             </Link>
             <div className="nav-links-container">
                    
                    <Link className="nav-link" to='/shop'>
                              SHOP
                    </Link>
                    <Link className="nav-link" to='/auth'>
                    {
                      currentUser ? <span className="nav-link" onClick={signOutUser}>Sign Out</span> : <span className="nav-link">Sign In</span>
                    }
                    </Link>
                    <CartIcon/>
             </div>
             {isCartOpen && <CartDropDown/>}
            </div>
            <Outlet/>
          </Fragment>
        }

export default Navigation;