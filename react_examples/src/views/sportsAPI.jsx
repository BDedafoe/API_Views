import React, { useEffect, useState } from 'react'
import Sports from '../components/Sports';


const Sports_API = () => {
  const api_key = '42bf439e61771905bd136834d596bda8' || 'YOUR_API_KEY'

  const [scores, setScores] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect( () => {
    getScores()
  }, [query])

  const getScores = async () => {
    const response = await fetch(`https://api.the-odds-api.com/v4/sports/${query}/scores/?daysFrom=1&apiKey=${api_key}`)
    const data = await response.json()
    setScores(data)
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
        <h3>Search for Sports Scores</h3>
        <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="scores">
      {scores.map(data => (
        <Sports 
        score={[0].scores}
        title={[0].sport_title} 
        />
        
      ))}
      </div>
    </div>
  )
}



export default Sports_API;