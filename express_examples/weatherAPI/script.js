setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');
const locationEl = document.querySelector('[data-location]')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];




// function getWeatherData () {                  --->>               // This is using simple Geolocation web API to find coordinates. This will request the cliet to give their location. If they refuse, this app is pointless...
//     navigator.geolocation.getCurrentPosition((success) => {
        
//         let {latitude, longitude } = success.coords;

//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

//         console.log(data)
//         showWeatherData(data);
//         })

//     })
// }


getWeatherData()                    // This is using Google Places API to find coordinates 
function getWeatherData () {
   
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
              showWeatherData(data, place.formatted_address)
          })
          .catch(err => console.log(err))
        })
}

function showWeatherData (data, place){
    locationEl.textContent = place          //Google API provided location 
    let {temp, humidity, pressure, sunrise, sunset, wind_speed} = data.current;
     
    currentWeatherItemsEl.innerHTML = 
    `<div class="weather-item">
        <div>Current Temp</div>
        <div>${temp} °F</div>
    </div
    <div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}mph</div>
    </div>
    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format('HH:mm a')}
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    </div>
    
    
    `;

    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night} °F</div>
                <div class="temp">Day - ${day.temp.day} °F</div>
            </div>

            `
        } else {
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night} °F</div>
                <div class="temp">Day - ${day.temp.day} °F</div>
            </div>
            
            `
        }
    })

    weatherForecastEl.innerHTML = otherDayForcast;
    
}



