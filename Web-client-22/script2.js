function getWeather(){
    // I need data for my API's params
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = data.current_weather;
        const info = `  Temperature: ${weather.temperature}°C
                        Wind Speed:${weather.windspeed} km/h
                        wind Direction: ${weather.winddirection}°`;

        document.getElementById("output").innerText = info;
    })
    .catch(error => {
        document.getElementById("output").innerText = 'Error getting weather';
        console.error(error);
    })
}