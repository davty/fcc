import React, { Component } from 'react';
import './Weather.css';

const API_KEY = 'e7c67fbaaea8bcc9ee8daeceff1d7400';

function toCelsius(kelvin) {
  return kelvin - 273.15;
}

function toFarenheit(kelvin) {
  return kelvin * 9/5 - 459.67;
}

class Weather extends Component {

  constructor() {
    super();
    navigator.geolocation.watchPosition(this.onPositionChange.bind(this));

    this.state = {location: null, celsius: true};
  }

  fetchData(lon, lat) {
    const url = 
      `http://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lon}&appid=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then(this.onFetched.bind(this));
  }

  onFetched({name, weather, main}) {
    this.setState({location: name, icon: weather[0].icon, temperature: main.temp})
  }

  onPositionChange(position) {
    this.fetchData(position.coords.longitude, position.coords.latitude)
  }

  toggleCelsius() {
    this.setState({celsius: !this.state.celsius})
  }

  render() {
    const { celsius, temperature, location, icon } = this.state;
    return (
      <div className="Weather container">
        <h1>{location}</h1>
        <h2><img src={icon ? `http://openweathermap.org/img/w/${icon}.png` : ''} alt="Weather Icon" /></h2>
        <h3 onClick={() => this.toggleCelsius()}>{celsius ? toCelsius(temperature) : toFarenheit(temperature)}</h3>
      </div>
    );
  }
}

export default Weather;
