import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["One Punch"]);
  
  const onAddCategory = (newCategory) => {
    
    if ( categories.includes(newCategory) ) return;

    //categories.push(newCategory);
    setCategories([...categories, newCategory]);
    // Opción 2:  setcategories( cat =>[...cat, "Valorant"]);    
  }
  
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        //setCategories = {setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />
      
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {
        categories.map(category => (       
          // <div key={category}>
          //   <h3>{category}</h3>
          //   <li>{category}</li>
          // </div> 

          <GifGrid
           key={category}
           category={category} />                        
        ))
      }     
      
    </>
  )
}
