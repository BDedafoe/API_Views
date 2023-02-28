setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    timeElement.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateElement.innerHTML = days[day] + ', ' + date+ ' ' + months[month]
    
    // function for setting current date and time on local machine 
}, 1000);


const timeElement = document.getElementById('time')
const dateElement = document.getElementById('date')
const securityTypeElement = document.querySelector('[securityType]')
const dayHighElement = document.querySelector('[day-high]')
const dayLowElement = document.querySelector('[day-low]')
const pctChangeElement = document.querySelector('[pct-change')
const gc1ItemElement = document.getElementById('gc1')
const adsmiItemElement = document.getElementById('adsmi')
const aexItemElement = document.getElementById('aex')
const co1ItemElement = document.getElementById('co1')


getStockData()     

function getStockData () {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0fa22a966cmshcf045e39ba47705p1eace5jsnf31107f9f078',
            'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com'
        }
    };
    
    fetch('https://bb-finance.p.rapidapi.com/market/get-full?id=adsmi%3Aind%2Caex%3Aind%2Cco1%3Acom%2Cgc1%3Acom', options)
    
        .then(res => res.json()).then(data => { 
            showStockData(data)
            console.log(data)
        })
        .catch(err => console.log(err))
      
}


function showStockData (data) {

    adsmiItemElement.innerHTML =     
    `<div class="info">
        <div>${data.result["ADSMI:IND"].name}</div>
    </div>
    <div class="info">
        <div>Open</div>
        <div>${data.result["ADSMI:IND"].open}</div>
    </div> 
    <div class="info">
        <div>Close</div>
        <div>${data.result["ADSMI:IND"].close}</div>
    </div>
    <div class="info">
        <div>Day High</div>
        <div>${data.result["ADSMI:IND"].dayHigh}</div>
    </div>
    <div class="info">
        <div>Day Low</div>
        <div>${data.result["ADSMI:IND"].dayLow}</div>
    </div>
    <div class="info">
        <div>PCT Change</div>
        <div>${data.result["ADSMI:IND"].pctChange}%</div>
    </div>

    `;

    aexItemElement.innerHTML =     
    `<div class="info">
        <div>${data.result["AEX:IND"].name}</div>
    </div>
    <div class="info">
        <div>Open</div>
        <div>${data.result["AEX:IND"].open}</div>
    </div> 
    <div class="info">
        <div>Close</div>
        <div>${data.result["AEX:IND"].close}</div>
    </div>
    <div class="info">
        <div>Day High</div>
        <div>${data.result["AEX:IND"].dayHigh}</div>
    </div>
    <div class="info">
        <div>Day Low</div>
        <div>${data.result["AEX:IND"].dayLow}</div>
    </div>
    <div class="info">
        <div>PCT Change</div>
        <div>${data.result["AEX:IND"].pctChange}%</div>
    </div>

    `;

    co1ItemElement.innerHTML =     
    `<div class="info">
        <div>${data.result["CO1:COM"].symbol}</div>
    </div>
    <div class="info">
        <div>Last</div>
        <div>${data.result["CO1:COM"].last}</div>
    </div> 
    <div class="info">
        <div>Region</div>
        <div>${data.result["CO1:COM"].region}</div>
    </div>
    <div class="info">
        <div>Day High</div>
        <div>${data.result["CO1:COM"].dayHigh}</div>
    </div>
    <div class="info">
        <div>Day Low</div>
        <div>${data.result["CO1:COM"].dayLow}</div>
    </div>
    <div class="info">
        <div>PCT Change</div>
        <div>${data.result["CO1:COM"].pctChange}%</div>
    </div>

    `;
    
    gc1ItemElement.innerHTML =     
    `<div class="info">
        <div>${data.result["GC1:COM"].symbol}</div>
    </div>
    <div class="info">
        <div>Last</div>
        <div>${data.result["GC1:COM"].last}</div>
    </div> 
    <div class="info">
        <div>Region</div>
        <div>${data.result["GC1:COM"].region}</div>
    </div>
    <div class="info">
        <div>Day High</div>
        <div>${data.result["GC1:COM"].dayHigh}</div>
    </div>
    <div class="info">
        <div>Day Low</div>
        <div>${data.result["GC1:COM"].dayLow}</div>
    </div>
    <div class="info">
        <div>PCT Change</div>
        <div>${data.result["GC1:COM"].pctChange}%</div>
    </div>

    `;
   
}