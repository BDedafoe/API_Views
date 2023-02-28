import React, { useEffect, useState } from 'react'
import Drink from '../components/Drinks';


const Drinks_API = () => {

  const [drink, setDrinks] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect( () => {
    getDrinks()
  }, [query])

  const getDrinks = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`)
    const data = await response.json()
    setDrinks(data.drinks) 
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
    
    <div className="drinks">
      <br></br>
        <h3>Search for a cocktail by ingredient</h3>
        <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="drinks">
      {drink.map(drinks => (
        <Drink  
        key={drinks.strDrink} 
        name={drinks.strDrink} 
        image={drinks.strDrinkThumb} 
        />
     
      ))}
      </div>
    </div>
  )
}

export default Drinks_API;

