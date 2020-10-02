import React from "react";

import "./SearchBar.css"

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
    this.props.onSearchStarted(this.state.city);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for city..."
          onChange={this.handleCityChange}
          className="no-outline"
        />
        <button type="submit" onClick={this.handleSubmit}>
          Search
        </button>
      </div>
    );
  }
}
