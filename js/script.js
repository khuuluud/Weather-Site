var data = [];
var search = document.querySelector('#search')


search.addEventListener('keyup', function (e) {
  var inputSearch = e.target;
  var search = inputSearch.value;
  console.log(inputSearch.value);
  getLocation(search)
})


getLocation('cairo')
function getLocation(city) {

  var http = new XMLHttpRequest;
  http.open('get', `https://api.weatherapi.com/v1/forecast.json?key=6fc4114a77b243448be25542240601&q=${city}&days=3`);
  http.send();
  http.addEventListener('readystatechange', function () {
    if (http.readyState == 4 && http.status === 200) {

      data = JSON.parse(http.response);
      console.log(data);
      displayWeather()

    }

  })
}

function displayWeather() {
  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var date = new Date(data.forecast.forecastday[0].date);
  var dayOfWeek = daysOfWeek[date.getDay()];
  var monthsOfYear = month[date.getMonth()];
  var thisDay = date.getDate()

  var cardOne = `
  
  <div class="forecast-container rounded-start-4" id="forecast">
    <div class="today forecast ">
      <div class="forecast-heade d-flex justify-content-between px-4" id="today">
        <div class="day">${dayOfWeek}</div>
        <div class=" date ms-auto">${thisDay + monthsOfYear}</div>
      </div>
      <div class="forecast-content" id="current">
        <div class="location mt-4 px-3  ">${data.location.name}</div>
        <div class="degree d-flex  ">
          <div class="num ">${data.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>C</div>
          <img src="https:${data.forecast.forecastday[0].day.condition.icon}" alt="icon" class="" >
        </div>
        <div class="cloud">${data.forecast.forecastday[0].day.condition.text}</div>
        <div class="icons mt-3">
          <img class="pe-1" src="./img/icon-umberella.png" alt="umberella"> <span class="icon-txt pe-3 ">${data.forecast.forecastday[0].day.daily_chance_of_rain}%</span> 
          <img class="pe-1" src="./img/icon-wind.png" alt="wind"><span class="icon-txt pe-3 " >${data.forecast.forecastday[0].day.maxwind_kph}km/h</span>
          <img class="pe-1" src="./img/icon-compass.png" alt="compass"><span class="icon-txt pe-3 ">East</span>
         
        </div>
      </div>
    </div>
  </div>
  `
  var date = new Date(data.forecast.forecastday[1].date);
  var dayOfWeek = daysOfWeek[date.getDay()];
  var cardTwo = `
  
  <div class="forecast-container custom-background " id="forecast">
    <div class="today forecast ">
      <div class="forecast-heade-two" id="today">
        <div class="day text-center ">${dayOfWeek}</div>
      </div>
      <div class="forecast-icon mt-5 d-flex justify-content-center align-items-center  ">
            <img class="" src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="icon" >
          </div>
      <div class="forecast-content" id="current">
        
        <div class="degree">
          <div class="num  text-center fs-4">${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div> 
          <div class="mini  text-center">${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</div>  
        </div>
        <div class="custom text-center  py-3">${data.forecast.forecastday[1].day.condition.text}</div>
      </div>
    </div>
  </div>
  
  `
  var date = new Date(data.forecast.forecastday[2].date);
  var dayOfWeek = daysOfWeek[date.getDay()];
  var cardThree = `
  
  <div class="forecast-container rounded-end-4 border-1" id="forecast">
    <div class="today forecast">
      <div class="forecast-heade  " id="today">
        <div class="day text-center ">${dayOfWeek}</div>
      </div>
      <div class="forecast-icon mt-5 d-flex justify-content-center align-items-center  ">
            <img class="" src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="icon" >
          </div>
      <div class="forecast-content" id="current">
        
        <div class="degree">
          <div class="num  text-center fs-4">${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div> 
          <div class="mini  text-center">${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</div>  
        </div>
        
        
        <div class="custom text-center  py-3">${data.forecast.forecastday[2].day.condition.text}</div>
      </div>
    </div>
  </div>
  
  `


  document.getElementById('card-one').innerHTML = cardOne;
  document.getElementById('card-two').innerHTML = cardTwo;
  document.getElementById('card-three').innerHTML = cardThree;

}






















