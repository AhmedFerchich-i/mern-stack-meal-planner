
import './searchbar.css'

export default function SearchBar({ searchBarInputRef,clearFunction,fetchMealsList }){
    function handleSearch(e) {
        e.preventDefault();

        clearFunction('Search');  // clear others using the ref

        const value = searchBarInputRef.current.value;
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;

        fetchMealsList(url);
    }
    
    return(
        
            <form className='searchbar-form'>
                <input className='search-input' ref={searchBarInputRef} placeholder="or just search by name ..." />
                <button className='search-btn'  onClick={handleSearch} >Search</button>
            </form>
        
    )
}