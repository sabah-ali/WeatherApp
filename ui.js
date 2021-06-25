class UI{
    constructor(){
        this.location = document.querySelector('#w-location');
        this.desc = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string');
        this.details = document.querySelector('#w-details');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.feelsLike = document.querySelector('#w-feels-like');
        this.dewpoint = document.querySelector('#w-dewpoint');
        this.wind = document.querySelector('#w-wind');
    }
    paint(weather){
        this.location.textContent = weather.name
        this.desc.textContent = weather.weather[0].description
        this.string.textContent = weather.main.temp
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`
        this.feelsLike.textContent = `FeelsLike ${weather.main.feels_like} degrees`
        this.dewpoint.textContent = `Wind Direction: ${weather.wind.deg} degrees`
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} meters/sec`
    }
}