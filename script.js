let weather = {
    "apiKey": "dd089913984f2627957ca46ad72dca58",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const{ name } = data;
        const{ icon,description } = data.weather[0];
        const{ temp,humidity } = data.main;
        const{ speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");        
    },
    search: function () {
        this.fetchWeather(document.getElementById("search-input").value)
    }
}; 

document.getElementById("search-button").addEventListener("click", (e) => 
{
    e.preventDefault();
    weather.search();
});

document.getElementById("search-input").addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Chennai");