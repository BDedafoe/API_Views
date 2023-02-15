const searchElement = document.querySelector('[data-city-search]')
const searchBox = new google.maps.places.SearchBox(searchElement)
searchBox.addListener('places_changed', () => {
  const place = searchBox.getPlaces()[0]
  if (place == null) return
  const latitude = place.geometry.location.lat()
  const longitude = place.geometry.location.lng()

  fetch('/weather', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude,
       
    })
  })
    .then(res => res.json()).then(data => { 
      setWeatherData(data, place.formatted_address)
      console.log(data)
  })
  .catch(err => console.log(err))
})

const locationElement = document.querySelector('[data-location]')
const tempElement = document.querySelector('[data-temp]')
const feelslikeElement = document.querySelector('[data-feels_like]')
const descriptionElement = document.querySelector('[data-weather-description]')

function setWeatherData(data, place) {
  locationElement.textContent = place     //Google API
  tempElement.textContent = data.temp
  feelslikeElement.textContent = data.feels_like
  descriptionElement.textContent = data.weather[0].description
  document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
  
} 