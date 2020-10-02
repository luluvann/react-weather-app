const apiKey = "d8d349d845326a05731f3af54ad5e65e";

const upperCaseFirstLetter = (string) => {
  let str = string;
  let strFirstLetter = str.slice(0, 1).toUpperCase();
  let strLength = str.length;
  let restOfStr = str.slice(1, strLength + 1);

  return strFirstLetter + restOfStr;
};

const convertTimeStamp = (ts,timezone) => {
  // convert unix timestamp to milliseconds
  let ts_ms = (ts + timezone )* 1000 ;

  // initialize new Date object
  let date_ob = new Date(ts_ms);

  let utcString = date_ob.toUTCString(); 
  let time = utcString.slice(-12, -7); 

  return time;
};

const currentTime = () => {
  let today = new Date();
  let hours = ("0" + today.getHours()).slice(-2);
  let minutes = ("0" + today.getMinutes()).slice(-2);
  return today.toDateString() + " " + hours + ":" + minutes;
};

const OWM = {
  search(city, units) {
    const cityEscaped = encodeURIComponent(city);
    const unitsEscaped = encodeURIComponent(units);

    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityEscaped}&units=${unitsEscaped}&appid=${apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(JSON.stringify(data));
        return {
          city: data.name,
          country: data.sys.country,
          weatherConditionCode: data.weather[0].id,
          description: upperCaseFirstLetter(data.weather[0].description),
          temp: Math.round(data.main.temp),
          feelslike: Math.round(data.main.feels_like),
          tempmin: Math.round(data.main.temp_min),
          tempmax: Math.round(data.main.temp_max),
          humidity: data.main.humidity,
          sunrise: convertTimeStamp(data.sys.sunrise,data.timezone),
          sunset: convertTimeStamp(data.sys.sunset,data.timezone),
          cloudiness: data.clouds.all,
          iconSource:
            "http://openweathermap.org/img/wn/" +
            data.weather[0].icon +
            "@2x.png",
          windspeedKnot: Math.round(data.wind.speed * 1.95),
          windspeedKmH: Math.round(data.wind.speed * 3.6),
          winddeg: data.wind.deg,
          currentTime: currentTime(),
        };
      });
  },
};

export default OWM;
