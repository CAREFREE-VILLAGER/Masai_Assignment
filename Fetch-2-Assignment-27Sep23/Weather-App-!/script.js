

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