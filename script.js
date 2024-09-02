const options = {method: 'GET', headers: {accept: 'application/json'}};

document.getElementById('fetchWeather').addEventListener('click', () => {
    fetch('https://api.boostr.cl/weather.json', options)
        .then(response => response.json())
        .then(response => {
            document.getElementById('weatherData').textContent = JSON.stringify(response, null, 2);
        })
        .catch(err => console.error(err));
});