function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#weather-app-icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML =`<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
console.log (response.data);
}



function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
    if (minutes < 10) {minutes = `0${minutes}`;}
  return `${day}, ${hours}:${minutes}`;
}

function searchCity (city) {
    let apiKey = "3fbc16ffbdt190o64c90aa576419eec5"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`
axios.get(apiUrl).then(refreshWeather);
}




function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");


searchCity(searchInput.value);

}
let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("New York");

let forecast = document.querySelector("#forecast");

forecast.innerHTML = ` 
<div class="weather-forecast-day">
        <div class="weather-forecast-date">Tue</div>
        <div class="weather-forecast-icon">⛅</div>
        <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
                <strong>15º</strong>
              </div>
              <div class="weather-forecast-temperature">9º</div>
         </div> 
         </div>`;
        <div class="weather-forecast-day">
        <div class="weather-forecast-date">Tue</div>
        <div class="weather-forecast-icon">⛅</div>
        <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
                <strong>15º</strong>
              </div>
              <div class="weather-forecast-temperature">9º</div>
         </div>
         </div>
          <div class="weather-forecast-day">
        <div class="weather-forecast-date">Wed</div>
        <div class="weather-forecast-icon">⛅</div>
        <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
                <strong>15º</strong>
              </div>
              <div class="weather-forecast-temperature">9º</div>
         </div>
         </div>
           <div class="weather-forecast-day">
        <div class="weather-forecast-date">Thu</div>
        <div class="weather-forecast-icon">⛅</div>
        <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
                <strong>15º</strong>
              </div>
              <div class="weather-forecast-temperature">9º</div>         </div>
         </div>
           <div class="weather-forecast-day">
        <div class="weather-forecast-date">Fri</div>
        <div class="weather-forecast-icon">⛅</div>
        <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
                <strong>15º</strong>
              </div>
              <div class="weather-forecast-temperature">9º</div>
         </div>
         </div>
           <div class="weather-forecast-day">
        <div class="weather-forecast-date">Sat</div>
        <div class="weather-forecast-icon">⛅</div>
        <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
                <strong>15º</strong>
              </div>
              <div class="weather-forecast-temperature">9º</div>
         </div>
         </div>