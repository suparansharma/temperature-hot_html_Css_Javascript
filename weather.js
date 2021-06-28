document.getElementById('submit-btn').addEventListener('click', function () {
    var cityName = document.getElementById('city-name-input').value;
    console.log(cityName);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=805af68c71f238865fc5e9b2614a0e87`)
        .then(res => res.json())
        .then(data => {
            var weatherDetails = data.weather[0];
            document.getElementById('city-name').innerText = data.name;

            let weatherTempInKelvin = data.main.temp;
            let weatherTempInCelsius = Math.round(weatherTempInKelvin - 273.15);


            document.getElementById('city-temp').innerText = weatherTempInCelsius;

            document.getElementById('city-weather').innerText = weatherDetails.main;

            let iconSet = data.weather[0].icon;
            let icon = `https://openweathermap.org/img/wn/${iconSet}.png`;
            document.getElementById('city-weather-img').src = icon;



        })
})