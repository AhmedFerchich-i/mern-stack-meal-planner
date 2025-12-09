import './searchableDatalist.css'

export function SearchableDataList({input,setInput,legend,options,clearFunction,fetchMealsList}){


    function handleChange(e) {
        const value = e.target.value;
        
        
        setInput(value);
    
    
        clearFunction(legend);
    
        
        const isValid = options.includes(value);
    
        if (isValid) {
          let url = "";
    
          if (legend === "Category") {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
          }
          if (legend === "Area") {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`;
          }
          if (legend === "Main Ingredient") {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`;
          }
    
          fetchMealsList(url);
        }
      }
    
    
    return(
        <fieldset className="searchable-datalist" >
            <legend>{legend}</legend>
           <input  list={legend} value={input} onChange={handleChange} />
           <datalist id={legend}>
            {options.map((element,index) => 
                (<option key={index} value={element}  />)
            )}
           </datalist>
    

        </fieldset>
    )
}