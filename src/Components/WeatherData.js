import React from "react";
import "./WeatherData.css";
import { RenderWeatherIcon } from "./WeatherIcons";
import { WindDirection } from "./WindDirection";

export class WeatherData extends React.Component {
  constructor(props) {
    super(props);

   
    this.state = {celsius:true, tempUnit:"°C"}
    this.handleClickToFarenheit=this.handleClickToFarenheit.bind(this)
    this.handleClickToCelsius=this.handleClickToCelsius.bind(this)
    this.handleConversion=this.handleConversion.bind(this);
  }

  handleClickToFarenheit(){
    console.log("celsius to false")
    this.setState({celsius:false, tempUnit:"°F"})
  }

  handleClickToCelsius(){
    console.log("celsius to true")
    this.setState({celsius:true, tempUnit:"°C"})
  }

  handleConversion(){
    let temp = this.props.weatherData.temp;
    if (this.state.celsius){
      return temp;
    } else {
      return Math.round((temp+32)*1.8);
    }


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
          <span><span onClick={this.handleClickToCelsius} className={this.state.celsius == true ? "activeTemp temp-clickable" : "temp-clickable"}>°C</span> <span>|</span> <span onClick={this.handleClickToFarenheit} className={this.state.celsius == false ? "activeTemp temp-clickable" : "temp-clickable"}>°F</span></span>

          <div className="flex-container">
            <div>
              <RenderWeatherIcon weatherData={this.props.weatherData} />
              <h3>{weatherData.description}</h3>
              <h1>
                <span className="font-weight-lg">{this.handleConversion()}<span>{this.state.tempUnit}</span></span>
               
              </h1>
              <h5>
                <span>feels like: {weatherData.feelslike}<span>{this.state.tempUnit}</span></span>
                
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
                    {weatherData.windspeedKnot} knots | {weatherData.windspeedKmH} km/h
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
