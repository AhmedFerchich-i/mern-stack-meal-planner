
import { useEffect,useState } from "react";
import { SearchableDataList } from "./searchableDataList";
import './filtersPanel.css'

export default function FiltersPanel({categoryInput,ingredientInput,areaInput,setCategoryInput,setAreaInput,setIngredientInput,clearFunction,fetchMealsList}){
    const [categories, setCategories] = useState([]);
    const [areas, setAreas] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    
    function getValuesList(repeatedKey,listOfDicts){
       const options= listOfDicts.map(item=>  item[repeatedKey])
       
       return options
       
    }

    useEffect(() => {
        // fetch categories
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
          .then(res => res.json())
          .then(data => setCategories(getValuesList('strCategory',data['meals'])));
    
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
          .then(res => res.json())
          .then(data => setAreas(getValuesList('strArea',data['meals'])));
    
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
          .then(res => res.json())
          .then(data => setIngredients(getValuesList('strIngredient',data['meals'])));
      }, []);

    return(
        <form className="filters-panel">
             
                     <SearchableDataList input={categoryInput} setInput={setCategoryInput} legend={'Category'} options={categories} clearFunction={clearFunction} fetchMealsList={fetchMealsList} />
                     <SearchableDataList input={areaInput} setInput={setAreaInput} legend={'Area'} options={areas} clearFunction={clearFunction} fetchMealsList={fetchMealsList} />
                     <SearchableDataList input={ingredientInput} setInput={setIngredientInput} legend={'Main Ingredient'} options={ingredients} clearFunction={clearFunction} fetchMealsList={fetchMealsList} />
             
        </form>
       
    )

}