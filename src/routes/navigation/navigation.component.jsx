import { Fragment} from "react";
import { FaCrown } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/crat-icon/cart-icon.component";
import {selectIsCartOpen} from '../../store/cart/cart.selector'
import { selectCurrentUser } from "../../store/user/user.selector";
import { LogoContainer, NavLink, NavLinks, NavigationComponent } from "./navigation.style";
import { signOutStart } from "../../store/user/user.action";
const Navigation = ()=>{
  const dispatch= useDispatch();
  const currentUser =  useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = ()=>dispatch(signOutStart())


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



