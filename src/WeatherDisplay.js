import React, { Component } from 'react'
import './WeatherDisplay.css'

class WeatherDisplay extends Component {
    render() {
        let {current, location} = this.props;
        console.log(current);
        return (
            <div className="WeatherDisplay">
                {this.props.loading && 
                <div className="WeatherDisplay-details">
                    <p>Country: {location.country}</p>
                    <p>City: {location.name}</p>
                    <p>Region: {location.region}</p>
                    <p>Local Time: {location.localtime}</p>
                    <div className="WeatherDisplay-group">
                        <p>{current.condition.text}</p>
                        <img src={current.condition.icon} alt={current.condition.text} />
                    </div>
                    <div className="WeatherDisplay-group">
                        <p>Temperature: {current.temp_c} &deg;C</p>
                        <p>Feels Like: {current.feelslike_c}</p>
                    </div>
                    <div className="WeatherDisplay-group">
                        <p>Humidity: {current.humidity}%</p>
                        <p>Wind: {current.wind_kph} km/h</p>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default WeatherDisplay;
