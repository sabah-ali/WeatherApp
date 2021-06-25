// init storage
const storage = new Storage();

// get storage locatio data
const weatherLocation = storage.getLocationData();

// init weather ojbect 
const weather = new Weather (weatherLocation.city, weatherLocation.country);

//init ui
const ui = new UI();

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event 
document.querySelector('#w-change-btn').addEventListener('click',(e) => {
    const city = document.querySelector('#city').value;
    const country = document.querySelector('#country').value;

    // change location
    weather.changeLocation(city, country);

    //set location in ls

    storage.setLocationData(city,country)
    // get and display weather 
    getWeather();

    // close model
    $('#locModal').modal('hide');
});


function getWeather(){
weather.getWeather()
.then(results =>{
    ui.paint(results);
})
.catch(error => console.log(error));
}