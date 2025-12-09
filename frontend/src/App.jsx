

import './App.css'
import Plan from './pages/plan'
import Favorites from './pages/favorites'
import Home from './pages/home'
import Header from './components/header'
import {Route,Routes} from 'react-router-dom'
import Recipe from './pages/recipe'
function App() {


  return (
    <div className='app '><Header/>
    <main>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MealPlan" element={<Plan />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Recipe/:id" element={<Recipe/>}/>
    </Routes>
    
    </main>
    </div>
   
  )
}

export default App
