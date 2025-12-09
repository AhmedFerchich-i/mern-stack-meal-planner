
import './mealsGrid.css'
import { Link } from 'react-router-dom'
export default function MealsGrid({mealsList}) {
    if(mealsList )
    return(
        <ul className="meals-grid">
            {mealsList.map((meal)=>(
                <li key={meal.idMeal}>
                    
                    <Link className='meal-card' to={`/Recipe/${meal.idMeal}`}>
                    
                        <img className='meal-image' src={meal.strMealThumb} />
                         <h3 className='meal-name'>{meal.strMeal}</h3>
                    
                        
                    </Link>
                </li>
            )
                
            )}
        </ul>
    )

}