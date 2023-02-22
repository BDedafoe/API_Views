if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const express = require('express')
const app = express()
const PORT = process.env.PORT 
const myKEY = process.env.myKEY 
const axios = require('axios')


app.use(express.json())



//weatherAPI 
app.use(express.static('./weatherAPI'))

 app.post('/weather', (req, res) => {
    console.log(req.body)
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${req.body.latitude}&lon=${req.body.longitude}&exclude=hourly,minutely&units=imperial&appid=${myKEY}`
    axios({
      url: url,
      responseType: 'json'
    }).then(data => res.json(data.data))
})

app.get('/', (req, res) => {
  res.render('./weatherAPI/index.html')
})

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))