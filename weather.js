class Weather{
    constructor(city,country){
        this.apiKey='90530be2246d4baa83ba9fd8e3ecd371';
        this.city =  city;
        this.country = this.country;
    }
    async getWeather(){
        const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
        );

        const responseData = await response.json();
            console.log(responseData);

        return responseData
    }
    
    // Change Weather location 

    changeLocation(city,country){
        this.city = city;
        this.country = country;
    }

}  