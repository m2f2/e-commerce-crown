import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";
import ShoppingIcon from "../../assets/x.svg";
const CartIcon=()=>{
          const {isCartOpen, setIsCartOpen} = useContext(CartContext);

          const toggleIsCartOpen=()=> setIsCartOpen(!isCartOpen)
          return(
                    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
                              <img src={ShoppingIcon} alt="Shopping Icon" />
                              <span className="item-count">0</span>
                    </div>
          )
}

export default CartIcon;