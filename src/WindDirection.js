import React from "react";

export class WindDirection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let windDeg = this.props.weatherData.winddeg;

    if (windDeg == 0) {
      return <div>from S to N</div>;
    } else if (windDeg <= 45) {
      return <div>from SW to NE</div>;
    } else if (windDeg <= 90) {
      return <div>from W to E</div>;
    } else if (windDeg <= 135) {
      return <div>from NW to SE</div>;
    } else if (windDeg <= 180) {
      return <div>from N to S</div>;
    } else if (windDeg <= 225) {
      return <div>from NE to SW</div>;
    } else if (windDeg <= 270) {
      return <div>from E to W</div>;
    } else {
      return <div>from SE to NW</div>;
    }
  }
}
