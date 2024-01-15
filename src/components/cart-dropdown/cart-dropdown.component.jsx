import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {CartDropDownContainer, CartItems, EmptyMessage} from "./cart-dropdown.style";
const CartDropDown = () =>{
          const {cartItems} = useContext(CartContext);
          const navigation = useNavigate();

          const goToCheckoutHandler = ()=> navigation('/checkout');
          return(
                    <CartDropDownContainer>
                              <CartItems>
                                        {cartItems.length? 
                                                  (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) :
                                                  (<EmptyMessage>Your cart is empty</EmptyMessage>)

                                        }
                                        {}
                              </CartItems>
                              <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
                    </CartDropDownContainer> 
          )
}

export default CartDropDown;