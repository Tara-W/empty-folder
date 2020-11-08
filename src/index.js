// Current date and time
let currentDate = new Date();

  let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let currentDay = days[currentDate.getDay()];
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();

    let presentDay = document.querySelector("#Present-day-time");
    presentDay.innerHTML=`${currentDay} ${currentHour}:${currentMinute}`;

// Search engine and call API

function provideCityWeather(response){
  console.log(response)
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temp-value").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(response.data.wind.speed);
}

function searchCity(city){
  let apiKey = "2c25dbfa075b95be9eff722fd30f0aa7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(provideCityWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#user-input").value;
  searchCity(city);
}

function searchLocation(position){
  let apiKey = "2c25dbfa075b95be9eff722fd30f0aa7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(provideCityWeather);  
}

function userLocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchCountry = document.querySelector("#search-engine");
searchCountry.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", userLocation);
searchCity("Sweden");



  


  
  
 