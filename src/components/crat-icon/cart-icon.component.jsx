import { useDispatch, useSelector } from "react-redux";
import {CartIconContainer, ShoppingImage, ItemCount} from "./cart-icon.styles";
import ShoppingIcon from "../../assets/x.svg";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import {setIsCartOpen} from "../../store/cart/cart.action";
const CartIcon=()=>{

          const dispatch = useDispatch();
          const cartCount = useSelector(selectCartCount);
          const isCartOpen = useSelector(selectIsCartOpen);
          const toggleIsCartOpen=()=> dispatch(setIsCartOpen(!isCartOpen));

          
          return(
                    <CartIconContainer ner onClick={toggleIsCartOpen}>
                              <ShoppingImage src={ShoppingIcon} alt="Shopping Icon" />
                              <ItemCount className="item-count">{cartCount}</ItemCount>
                    </CartIconContainer>
          )
}

export default CartIcon;