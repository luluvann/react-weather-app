import React from "react";
import OWM from "./util/OWM";

import { WeatherData } from "./Components/WeatherData";
import { SearchBar } from "./Components/SearchBar";
import { Footer } from "./Components/Footer";


class App extends React.Component {
  constructor() {
    super();
    this.state = { weatherData: undefined};
    this.startSearch = this.startSearch.bind(this);
    this.getWeather = this.getWeather.bind(this);

    //The 2 below variables work together and will read the value specified to the parameter "city" of the browser url https://myapp.com/?city={value_specified_to_city_param}
    let params = (new URL(document.location)).searchParams;
    let city = params.get('city');

    //At the launch of the app, Montreal will be the argument to the function startSearch if no value is specified to the params city of the url, if specified, it will trigger the search of for the city specified
    if (city == null){
      this.startSearch("Montreal");
    } else {
      this.startSearch(city);
    }
  }

  startSearch(cityName) {
    //let params = new URLSearchParams(window.location.search)
    let params = (new URL(document.location)).searchParams
    // Set new or modify existing parameter value
    params.set("city", cityName);
    // Replace current querystring with the new one
    window.history.replaceState(null, null, "?"+params.toString());
    this.getWeather(cityName, "metric");
  }

  //getWeather is the function that calls the API from the OWM
  getWeather(city, units) {
    if (city == null || units == null) {
      return;
    }
    OWM.search(city, units).then((promiseWeatherData) => {
      this.setState({
        weatherData: promiseWeatherData,
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchStarted={this.startSearch} />
        <WeatherData weatherData={this.state.weatherData} />
        <Footer />
      </div>
    );
  }
}

export default App;
