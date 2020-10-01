import React from "react";
import "./WeatherData.css";
import { RenderWeatherIcon } from "./WeatherIcons";
import { WindDirection } from "./WindDirection";

export class WeatherData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let weatherData = this.props.weatherData;

    if (weatherData == null) {
      return null;
    }

    return (
      <div>
        <div className="main-container">
          <h1>
            {weatherData.city}, {weatherData.country}
          </h1>

          <h6>Last updated: {weatherData.currentTime}</h6>

          <div className="flex-container">
            <div>
              <RenderWeatherIcon weatherData={this.props.weatherData} />
              <h3>{weatherData.description}</h3>
              <h1>
                <span className="font-weight-lg">{weatherData.temp}</span>
                <span>°C</span>
              </h1>
              <h5>
                <span>feels like: {weatherData.feelslike}</span>
                <span>°C</span>
              </h5>
            </div>
          </div>

          <div className="flex-container">
            <table>
              <tbody>
                <tr>
                  <th></th>
                </tr>
                <tr>
                  <td className="font-weight-lg">Humidity:</td>
                  <td>{weatherData.humidity}%</td>
                </tr>
                <tr>
                  <td className="font-weight-lg">Sunrise:</td>
                  <td>{weatherData.sunrise}</td>
                </tr>
                <tr>
                  <td className="font-weight-lg">Sunset:</td>
                  <td>{weatherData.sunset}</td>
                </tr>
                <tr>
                  <td className="font-weight-lg">Cloudiness:</td>
                  <td>{weatherData.cloudiness}%</td>
                </tr>
                <tr>
                  <td className="font-weight-lg">Wind speed:</td>
                  <td>
                    {weatherData.windspeedKnot} knots |{" "}
                    {weatherData.windspeedKmH} km/h
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-lg">Wind direction:</td>
                  <td>
                    <WindDirection weatherData={this.props.weatherData} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
