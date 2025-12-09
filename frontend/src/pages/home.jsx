import FiltersPanel from "../components/filtersPanel"
import SearchBar from "../components/searchbar"
import './home.css'
import { useRef } from 'react';
import { useState } from "react";
import MealsGrid from "../components/mealsGrid";
export default function Home(){
    const searchRef=useRef()
    const [categoryInput,setCategoryInput]=useState('')
    const [areaInput,setAreaInput]=useState('')
    const [ingredientInput,setIngredientInput]=useState('')
    const [mealsList,setMealsList]=useState(null)

    function clearAllOthers(chosen) {
       
        if (chosen !== "Search") searchRef.current.value = "";
    
        if (chosen !== "Category") setCategoryInput("");
        if (chosen !== "Area") setAreaInput("");
        if (chosen !== "Main Ingredient") setIngredientInput("");
      }



    async function fetchMealsList(url){
        try{
         
            const response= await fetch(url)
        const data= await response.json()
  
        const meals= data['meals']
     
        setMealsList(meals)
        }
        catch(error ){
            console.log('error ',error)
        }
        
    }

    return(
        <>
            <section className="search-section">
                <FiltersPanel categoryInput={categoryInput} setCategoryInput={setCategoryInput} areaInput={areaInput} setAreaInput={setAreaInput} ingredientInput={ingredientInput} setIngredientInput={setIngredientInput} clearFunction={clearAllOthers} fetchMealsList={fetchMealsList}  />
                <SearchBar searchBarInputRef={searchRef} clearFunction={clearAllOthers} fetchMealsList={fetchMealsList}/>
            </section>
            <main>
              <MealsGrid mealsList={mealsList} />
            </main>
            
        </>
    )
}