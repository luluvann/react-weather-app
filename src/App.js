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
    this.startSearch("Montreal")
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
        <Footer />
      </div>
    );
  }
}

export default App;
