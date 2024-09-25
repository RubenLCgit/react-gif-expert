import { useState } from "react";
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['ONE PUNCH']);
  
  const onAddCategory = (newCategory) => { 
    if (categories.includes(newCategory) || isStringEmpty(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  
  const isStringEmpty = (value) => value === null || value === undefined || value.trim() === '';
  
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory = { onAddCategory } />

      {
        categories.map((category) =>
          
          <GifGrid key={ category } category={ category } />
          
        )
      }
  
    </>
  )
}

export default GifExpertApp
