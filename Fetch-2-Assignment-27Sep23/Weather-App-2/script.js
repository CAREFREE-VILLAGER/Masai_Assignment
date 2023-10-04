const openWeatherApiKey = '0e6aa85ca904ccd4a5e77945634eeab9';
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const dailyForecastContainer = document.querySelector('.daily-forecast');

searchButton.addEventListener('click', () => {
    const cityName = cityInput.value;

    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${openWeatherApiKey}`)
        .then(response => response.json())
        .then(data => {
            
            displayDailyForecast(data.list);
        })
        .catch(error => {
            console.error('Error fetching weather forecast data:', error);
        });
});

function displayDailyForecast(forecastList) {
    
    dailyForecastContainer.innerHTML = '';

    
    const dailyForecasts = {};

    
    forecastList.forEach((forecast) => {
        const date = new Date(forecast.dt * 1000).toDateString();
        if (!dailyForecasts[date]) {
            dailyForecasts[date] = forecast;
        }
    });

    
    Object.values(dailyForecasts).slice(0, 5).forEach((forecast) => {
        const date = new Date(forecast.dt * 1000);
        const minTemp = (forecast.main.temp_min - 273.15).toFixed(2); 
        const maxTemp = (forecast.main.temp_max - 273.15).toFixed(2); 
        const weatherDescription = forecast.weather[0].main;
        const weatherIcon = forecast.weather[0].icon; 

        const forecastCard = document.createElement('div');
        forecastCard.className = 'forecast-card';

        
        const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}.png`;

        forecastCard.innerHTML = `
            <h3>${date.toDateString()}</h3>
            <img src="${weatherIconUrl}" alt="${weatherDescription}" width="50">
            <p>Min Temp: ${minTemp}°C</p>
            <p>Max Temp: ${maxTemp}°C</p>
            <p>Weather: ${weatherDescription}</p>
        `;

        dailyForecastContainer.appendChild(forecastCard);
    });
}
