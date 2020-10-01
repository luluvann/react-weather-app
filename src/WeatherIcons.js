import React from "react";

import "./WeatherIcons.css";


export class RenderWeatherIcon extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        let weatherConditionCode = this.props.weatherData.weatherConditionCode;

        if (weatherConditionCode == 800){
            return (
                <div className="icon sunny">
                    <div className="sun">
                        <div className="rays"></div>
                    </div>
                </div>

            )
        } else if (weatherConditionCode > 800){
            return(
                <div className="icon cloudy">
                    <div className="cloud"></div>
                    <div className="cloud"></div>
                </div>
            )
        } else if (weatherConditionCode >= 700){
            return (
                <img src={this.props.weatherData.iconSource} />
            )
        } else if (weatherConditionCode >= 600){
            return (
                <div className="icon flurries">
                <div className="cloud"></div>
                <div className="snow">
                    <div className="flake"></div>
                    <div className="flake"></div>
                </div>
                </div>
            )
        } else if (weatherConditionCode >= 5 || weatherConditionCode >= 3){
            return(
                <div className="icon rainy">
                    <div className="cloud"></div>
                    <div className="rain"></div>
                </div>              
            )
        } else if (weatherConditionCode >= 2){
            return (
                <div className="icon thunder-storm">
                <div className="cloud"></div>
                <div className="lightning">
                    <div className="bolt"></div>
                    <div className="bolt"></div>
                </div>
                </div>
            )

        } else {
            return (
                
                null
            )
        }



    }

}




