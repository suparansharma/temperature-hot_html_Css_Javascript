document.getElementById('submit-btn').addEventListener('click', function () {
    var cityName = document.getElementById('city-name-input').value;
    console.log(cityName);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=805af68c71f238865fc5e9b2614a0e87`)
        .then(res => res.json())
        .then(data => {
           
            document.getElementById('city-name').innerText = data.name;
            document.getElementById('city-temp').innerText = data.main.temp;
            
           

        })
    })