import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CatagoriesContext } from "../../contexts/catagories.context";

import "./category.styles.scss";


const Category = () =>{
          const { category} = useParams();
          const {categoryMap} = useContext(CatagoriesContext);
          const [products, setProducts] = useState(categoryMap[category]);

          useEffect(()=>{
                    setProducts(categoryMap[category])
          },[category, categoryMap]);

          return(
                    <>
                              <h2 className="category-title">{category.toUpperCase()}</h2>
                              <div className="category-container">
                              {products &&
                                        products.map((product)=> <ProductCard key={product.id} product={product}/>)
                              
                              }
                    </div>
                    </>
                    
          );
}

export default Category; 