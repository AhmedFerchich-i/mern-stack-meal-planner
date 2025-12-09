
import './header.css'
import { Link } from 'react-router-dom';

export default function Header(){
    return(
      <header>
        <nav className="nav-compoenent">
        <ul className="nav-list">
            <li className='nav-list-item'> <Link to={'/'}>Home</Link>  </li>
            <li className='nav-list-item'> <Link to={'/MealPlan'}>Meal Planner</Link>  </li>
            <li className='nav-list-item' > <Link to={'/Favorites'}>Favorites</Link> </li>
        </ul>
      </nav>
      </header>
      
    )
}