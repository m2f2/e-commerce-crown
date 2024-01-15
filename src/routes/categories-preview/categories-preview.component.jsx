import {  useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CatagoriesContext } from "../../contexts/catagories.context";


const  CategoriesPreview = ()=>{
          const {categoryMap} = useContext(CatagoriesContext)
          return (
                <>
                {Object.keys(categoryMap).map((title)=>{
                                const products = categoryMap[title]
                                return <CategoryPreview key={title} title={title} products={products}/>
                        })}  
                </>
                    
          )
}
export default CategoriesPreview;