import React, { useEffect, useState } from 'react'
import Drink from '../components/Drinks';


const Drinks_API = () => {

  const [drink, setDrinks] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect( () => {
    getDrinks()
    getDrinksList()
    
  }, [query])

  const getDrinks = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`)
    const data = await response.json()
    setDrinks(data.drinks) 
  }

  const getDrinksList = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
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
    
      <div className="drinks_search">
      <br></br>
        <h3>Search for a drink</h3>
        <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="drinks_container">
      <div className="drinks">
      {drink.map(drinks => (
        <Drink  
        key={drinks.strDrink} 
        name={drinks.strDrink}
        glass={drinks.strGlass}
        image={drinks.strDrinkThumb} 
        instructions={drinks.strInstructions}
        ingredients={[drinks.strIngredient1, drinks.strIngredient2, drinks.strIngredient3, drinks.strIngredient4, drinks.strIngredient5, drinks.strIngredient6, drinks.strIngredient7, drinks.strIngredient8, drinks.strIngredient9, drinks.strIngredient10, drinks.strIngredient11, drinks.strIngredient12, drinks.strIngredient13, drinks.strIngredient14, drinks.strIngredient15].map(ingredient=>( 
            <li >{ingredient}</li>
        ))}
        measure={[drinks.strMeasure1, drinks.strMeasure2, drinks.strMeasure3, drinks.strMeasure4, drinks.strMeasure5, drinks.strMeasure6, drinks.strMeasure7, drinks.strMeasure8, drinks.strMeasure9, drinks.strMeasure10, drinks.strMeasure11, drinks.strMeasure12, drinks.strMeasure13, drinks.strMeasure14, drinks.strMeasure15].map(measures=>( 
            <li >{measures}</li>
        ))}
        />
      ))}
      </div>
      </div>
    </div>
    
  )
}

export default Drinks_API;

