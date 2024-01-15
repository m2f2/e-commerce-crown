import { Fragment, useContext } from "react";
import { FaCrown } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/crat-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";

import { LogoContainer, NavLink, NavLinks, NavigationComponent } from "./navigation.style";

const Navigation = ()=>{
    const {currentUser}=useContext(UserContext);
    const {isCartOpen}=useContext(CartContext)
    
          return <Fragment>
            <NavigationComponent>
             <LogoContainer to='/'>
              <FaCrown style={{fontSize: '40px'}}/>
             </LogoContainer>
             <NavLinks>
                    
                    <NavLink to='/shop'>
                              SHOP
                    </NavLink>
                    <NavLink to='/auth'>
                    {
                      currentUser ? <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink> : <NavLink as='span'>SIGN IN</NavLink>
                    }
                    </NavLink>
                    <CartIcon/>
             </NavLinks>
             {isCartOpen && <CartDropDown/>}
            </NavigationComponent>
            <Outlet/>
          </Fragment>
        }

export default Navigation;