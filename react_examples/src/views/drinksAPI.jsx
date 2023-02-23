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
    
    <div className="App">
      <br></br>
        <h3>Search for drinks</h3>
        <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="drinks">
      {drink.map(drinks => (
        <Drink  
       
        name={drinks.strDrink} 
        glass={drinks.strGlass} 
        image={drinks.strDrinkThumb} 
        instructions={drinks.strInstructions}    
        />
     
      ))}
      </div>
    </div>
  )
}

export default Drinks_API;