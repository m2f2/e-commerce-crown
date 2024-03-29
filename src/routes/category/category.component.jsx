import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";
import "./category.styles.scss";


const Category = () =>{
          const { category} = useParams();
          const categoryMap = useSelector(selectCategoriesMap);
          const isLoading = useSelector(selectCategoriesIsLoading);
          const [products, setProducts] = useState(categoryMap[category]);

          useEffect(()=>{
                    setProducts(categoryMap[category])
          },[category, categoryMap]);

          return( 
                    <>
                              <h2 className="category-title">{category.toUpperCase()}</h2>
                              {
                                        isLoading? <Spinner/> : (<div className="category-container">
                                        {products &&
                                                  products.map((product)=> <ProductCard key={product.id} product={product}/>)
                                        
                                        }
                              </div>)
                              }
                              
                    </>
                    
          );
}

export default Category;   