import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: null,
      weather: null,
      icon: null
    }

    this.getWeather = this.getWeather.bind(this);
  }

  getWeather() {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=929924a4ce66e3ee0856d5f98131203d';
    fetch(url)
    .then(response => {      
      return response.json();
    })
    .then(data => {      
      let weather;
      weather = data;
      this.setState({
        temperature: weather.main.temp,
        weather: weather.weather[0].main,
        icon: 'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'
      });
      console.log(weather);
    });
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    return(
      <div>
        <h4>Temperature: {this.state.temperature}</h4>        
        <h4>Weather: {this.state.weather}</h4>        
        <img src={this.state.icon} height="100" width="100" />
      </div>
    );
  }
}