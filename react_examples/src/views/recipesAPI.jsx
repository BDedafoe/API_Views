import React, { useEffect, useState } from 'react'
import Recipe from '../components/Recipes';


const Recipes_API = () => {
  const APP_ID = '13755d77';
  const APP_KEY = '0af463b47293aad01d8fdbae960f0de5';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect( () => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    
    <div className="App">
      <br></br>
        <h3>Search for recipes</h3>
        <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
        saturatedFats={recipe.recipe.totalNutrients.FASAT.quantity}        
        />
     
      ))}
      </div>
    </div>
  )
}

export default Recipes_API;

