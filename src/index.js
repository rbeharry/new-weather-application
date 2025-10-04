function refreshWeather (response) {
    let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.city;
    let temperature=response.data.temperature.current;

    temperatureElement.innerHTML = Math.round(response.data.temperature.current);

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