const apiKey = 'AIzaSyCHOHPW0LNcGMFcBFZUAL2-b9B0Pe3yVcs'; 
const openWeatherApiKey = '0e6aa85ca904ccd4a5e77945634eeab9'; 
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const displayYourData = document.querySelector("#dataCity");
const mapContainer = document.querySelector(".map");

searchButton.addEventListener('click', () => {
    const cityName = cityInput.value; 
    
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherApiKey}`)
        .then(response => response.json())
        .then(data => {
            
            displayWeatherData(data);
            
            
            displayGoogleMap(data.coord.lat, data.coord.lon);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

function displayWeatherData(data) {
    displayYourData.innerHTML = "";
    
    const cityName = document.createElement("p");
    cityName.textContent = "City Name: " + data.name;
    
    const cityMinTemp = document.createElement("p");
    cityMinTemp.textContent = "Minimum Temperature: " + data.main.temp_min;
    
    const cityMaxTemp = document.createElement("p");
    cityMaxTemp.textContent = "Maximum Temperature: " + data.main.temp_max;
    
    const citySunRise = document.createElement("p");
    citySunRise.textContent = "Sunrise at: " + new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    
    const citySunSet = document.createElement("p");
    citySunSet.textContent = "Sunset at: " + new Date(data.sys.sunset * 1000).toLocaleTimeString();
    
    const cityWind = document.createElement("p");
    cityWind.textContent = "Wind Speed: " + data.wind.speed;
    
    const weatherIcon = document.createElement("img");
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    const cityWeather = document.createElement("p");
    cityWeather.textContent = data.weather[0].description;
    
    const weatherCard = document.createElement("div");
    weatherCard.className = "icon";
    
    weatherCard.append(
        cityName, 
        cityMinTemp, 
        cityMaxTemp, 
        citySunRise, 
        citySunSet, 
        cityWind, 
        weatherIcon, 
        cityWeather
    );
    
    displayYourData.appendChild(weatherCard);
}

function displayGoogleMap(latitude, longitude) {
    mapContainer.innerHTML = `<iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}" allowfullscreen></iframe>`;
}