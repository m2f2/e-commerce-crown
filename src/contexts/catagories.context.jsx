import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";


export const CatagoriesContext  = createContext({
          categoryMap:{}
})

export const CatagoriesProvider = ({children})=>{
          const [categoryMap, setCategoryMap] = useState({});
          useEffect(()=>{
                    const getCategoriesMap = async()=>{
                              const categoryMap = await getCategoriesAndDocuments();
                              setCategoryMap(categoryMap);
                    }

                    getCategoriesMap();
          },[])

          const value = {categoryMap}
          return <CatagoriesContext.Provider value={value }>{children}</CatagoriesContext.Provider>
}