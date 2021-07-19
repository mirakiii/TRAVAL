let weather = {
    apikey: 'e5cdf8e946fcdfc4a9ee29ce21d16fa7',
    fetchweather : function(city) {
        fetch(
            'http://api.openweathermap.org/data/2.5/weather?q='
             + city
             +'&units=metric&appid='
             + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather : function(data) {
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    },
    search : function(){
        this.fetchweather(document.querySelector(".searchbar").value);
    }
};
document
    .querySelector(".search button")
    .addEventListener("click", function(){
        weather.search();
    })
