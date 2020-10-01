import React from "react";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {
        city: "Montreal",
      },
    };
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCityChange(event) {
    this.setState({
      city: event.target.value,
    });
  }

  handleSubmit() {
    this.props.getWeather(this.state.city);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="City"
          onChange={this.handleCityChange}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Get weather
        </button>
      </div>
    );
  }
}
