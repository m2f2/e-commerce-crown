import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {CartIconContainer, ShoppingImage, ItemCount} from "./cart-icon.styles";
import ShoppingIcon from "../../assets/x.svg";
const CartIcon=()=>{
          const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

          const toggleIsCartOpen=()=> setIsCartOpen(!isCartOpen)
          return(
                    <CartIconContainer onClick={toggleIsCartOpen}>
                              <ShoppingImage src={ShoppingIcon} alt="Shopping Icon" />
                              <ItemCount className="item-count">{cartCount}</ItemCount>
                    </CartIconContainer>
          )
}

export default CartIcon;