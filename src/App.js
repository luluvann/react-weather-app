import React from "react";
import "./App.css";
import OWM from "./OWM";

import { WeatherData } from "./WeatherData";
import { SearchBar } from "./SearchBar";

const apiKey = "d8d349d845326a05731f3af54ad5e65e";
const unit = "metric";
const lang = "eng";

class App extends React.Component {
  constructor() {
    super();
    this.state = { weatherData: undefined };
    this.startSearch = this.startSearch.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  startSearch(cityName) {
    this.getWeather(cityName, "metric");
  }

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
      </div>
    );
  }
}

export default App;
