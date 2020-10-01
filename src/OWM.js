const apiKey = 'd8d349d845326a05731f3af54ad5e65e';

const OWM = {

    search(city, units) {
      const cityEscaped = encodeURIComponent(city);
      const unitsEscaped = encodeURIComponent(units);

      return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityEscaped}&units=${unitsEscaped}&appid=${apiKey}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(JSON.stringify(data));
                    return {
                        city: data.name,
                        country: data.sys.country,
                        weatherConditionCode:  data.weather[0].id,
                        description: this.upperCaseFirstLetter( data.weather[0].description),
                        temp: Math.round( data.main.temp),
                        feelslike:Math.round( data.main.feels_like),
                        tempmin:Math.round( data.main.temp_min),
                        tempmax:Math.round( data.main.temp_max),
                        humidity: data.main.humidity,
                        sunrise:this.convertTimeStamp(( data.sys.sunrise)),
                        sunset:this.convertTimeStamp(( data.sys.sunset)),
                        cloudiness: data.clouds.all,
                        iconSource: "http://openweathermap.org/img/wn/"+ data.weather[0].icon+"@2x.png",
                        windspeedKnot: Math.round( data.wind.speed*1.95),
                        windspeedKmH: Math.round( data.wind.speed*3.6),
                        winddeg: data.wind.deg,
                        currentTime: this.currentTime()
                    };
                });
    }
}

export default OWM;


