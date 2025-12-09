import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  const list = Array.from({ length: 20 }, (_, i) => i + 1);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        setMeal(data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails();
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="recipe-page">
      <h1 className="recipe-title">{meal.strMeal}</h1>

      <div className="recipe-main">
        <img className="recipe-img" src={meal.strMealThumb} alt={meal.strMeal} />

        <div className="recipe-info">
          <p className="info-tag">Category: {meal.strCategory}</p>
          <p className="info-tag">Area: {meal.strArea}</p>
          <p className="info-tag">Tags: {meal.strTags}</p>
        </div>
      </div>

      <div className="recipe-sections">
        <section className="ingredients-section">
          <h2>Ingredients</h2>
          <ul>
            {list.map((i) => {
              const ingredient = meal[`strIngredient${i}`];
              const measure = meal[`strMeasure${i}`];
              if (!ingredient || ingredient.trim() === "") return null;

              return (
                <li key={i} className="ingredient-row">
                  <span>{ingredient}</span>
                  <span>{measure}</span>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="instructions-section">
          <h2>Instructions</h2>
          <p>{meal.strInstructions}</p>
        </section>
      </div>

      {meal.strYoutube && (
        <div className="video-section">
          <h2>Video Tutorial</h2>
          <iframe
            src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
            className="video-frame"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
