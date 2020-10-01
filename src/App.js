import React from 'react';
import './App.css';
import OWM from "./OWM"

import { WeatherData } from "./WeatherData";
import { SearchBar } from "./SearchBar"

const apiKey = "d8d349d845326a05731f3af54ad5e65e";
const unit = "metric"
const lang = "eng"

class App extends React.Component {
  constructor(){
    super();
    this.state = {weatherData:undefined}
      
    this.getWeather();

  }

  convertTimeStamp(ts){
    // convert unix timestamp to milliseconds
    let ts_ms = ts * 1000;

    // initialize new Date object
    let date_ob = new Date(ts_ms);

    // year as 4 digits (YYYY)
    let year = date_ob.getFullYear();

    // month as 2 digits (MM)
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // date as 2 digits (DD)
    let date = ("0" + date_ob.getDate()).slice(-2);

    // hours as 2 digits (hh)
    let hours = ("0" + date_ob.getHours()).slice(-2);

    // minutes as 2 digits (mm)
    let minutes = ("0" + date_ob.getMinutes()).slice(-2);

    return (hours+":"+minutes)

  }

  currentTime(){
      let today = new Date();
      let hours = ("0" + today.getHours()).slice(-2)
      let minutes = ("0" + today.getMinutes()).slice(-2);
    return (today.toDateString()+" "+hours+":"+minutes)

  }

  upperCaseFirstLetter(string){
    let str = string;
    let strFirstLetter = str.slice(0,1).toUpperCase();
    let strLength = str.length;
    let restOfStr = str.slice(1,strLength+1);

    return (strFirstLetter + restOfStr)
  }


  getWeather(city,units){
    if (city == null || units == null){
      return;
    }
    OWM.search(city,units)
      .then(promiseWeatherData => {
        this.setState({
          weatherData: promiseWeatherData,
        })
      });
  }

  
    /*getWeather(cityName){
    const api_call = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}&lang=${lang}`)
    const response = api_call.json();

      return (
        this.setState({ weatherData:
            {
            city:response.name,
            country:response.sys.country,
            weatherConditionCode: response.weather[0].id,
            description: this.upperCaseFirstLetter(response.weather[0].description),
            temp: Math.round(response.main.temp),
            feelslike:Math.round(response.main.feels_like),
            tempmin:Math.round(response.main.temp_min),
            tempmax:Math.round(response.main.temp_max),
            humidity:response.main.humidity,
            sunrise:this.convertTimeStamp((response.sys.sunrise)),
            sunset:this.convertTimeStamp((response.sys.sunset)),
            cloudiness:response.clouds.all,
            iconSource: "http://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png",
            windspeedKnot: Math.round(response.wind.speed*1.95),
            windspeedKmH: Math.round(response.wind.speed*3.6),
            winddeg:response.wind.deg,
            currentTime: this.currentTime()
            }
        })

      )
    }*/
    
  


  render(){
    return (
        <div>
        <SearchBar />  
        <WeatherData weatherData={this.state.weatherData}/>
        </div>
  
    )

  }

}

export default App;
