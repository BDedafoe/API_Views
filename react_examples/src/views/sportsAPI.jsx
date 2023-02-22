import React, { useEffect, useState } from 'react'
import Sports from '../components/Sports';


const Sports_API = () => {
  const api_key = '42bf439e61771905bd136834d596bda8' || 'YOUR_API_KEY'

  const [score, setScores] = useState([]);
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
      <div className="score">
      {score.map(data => (
        <Sports 
        score={data.scores[0].score}
        title={data.sport_title} 
        />
      
      ))}
      </div>
    </div>
  )
}



export default Sports_API;

// const axios = require('axios')
// // An api key is emailed to you when you sign up to a plan
// // Get a free API key at https://api.the-odds-api.com/
// const apiKey = process.argv[2] || 'YOUR_API_KEY'
// const sportKey = 'upcoming' // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports
// const regions = 'us' // uk | us | eu | au. Multiple can be specified if comma delimited
// const markets = 'h2h' // h2h | spreads | totals. Multiple can be specified if comma delimited
// const oddsFormat = 'decimal' // decimal | american
// const dateFormat = 'iso' // iso | unix

// axios.get('https://api.the-odds-api.com/v4/sports', {
//     params: {
//         apiKey
//     }
// })
// .then(response => {
//     console.log(response.data)
// })
// .catch(error => {
//     console.log('Error status', error.response.status)
//     console.log(error.response.data)
// })

// axios.get(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds`, {
//     params: {
//         apiKey,
//         regions,
//         markets,
//         oddsFormat,
//         dateFormat,
//     }
// })
// .then(response => {
//     console.log(JSON.stringify(response.data))

//     // Check your usage
//     console.log('Remaining requests',response.headers['x-requests-remaining'])
//     console.log('Used requests',response.headers['x-requests-used'])

// })
// .catch(error => {
//     console.log('Error status', error.response.status)
//     console.log(error.response.data)
// })