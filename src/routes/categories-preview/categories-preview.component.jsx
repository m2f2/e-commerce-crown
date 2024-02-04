import {useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap , selectCategoriesIsLoading} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";
const  CategoriesPreview = ()=>{ 
      const categoryMap = useSelector(selectCategoriesMap);
      const isLoading = useSelector(selectCategoriesIsLoading)
      return (
                <>
                {isLoading? (<Spinner/>):
                  (Object.keys(categoryMap).map((title)=>{
                                const products = categoryMap[title]
                                return <CategoryPreview key={title} title={title} products={products}/>
                        }))}  
                </>
                    
          )
}
export default CategoriesPreview;