import { createContext, useState } from "react";


import PRODUCTS from "../shop-data.json";

export const ProductsContext  = createContext({
          Products:[]
})

export const ProductsProvider = ({children})=>{
          const [Products, setProducts] = useState(PRODUCTS);
          const value = {Products}
          return <ProductsContext.Provider value={value }>{children}</ProductsContext.Provider>
}