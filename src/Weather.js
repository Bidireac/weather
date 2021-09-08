import React, { Component } from 'react'
import WeatherSearch from './WeatherSearch'
import WeatherDisplay from './WeatherDisplay'
import axios from 'axios';
import './Weather.css'

const BASE_URL = 'http://api.weatherapi.com/v1/current.json?key=9491d21f13244109847122617210502&aqi=no&q=';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: false, current: '', location: ''};
        this.updateWeather = this.updateWeather.bind(this);
    }
    async updateWeather(search) {
        try {
            let result = await axios.get(`${BASE_URL}${search}`)
            this.setState({
                loading: true,
                current: result.data.current,
                location: result.data.location 
            });
        } catch (e) {
            alert('Please enter a valid Country, City or Region!')
            console.log(e);
            this.setState({
                loading: false,
                current: '', 
                location: ''
        })
        }
    }
    render() {
        return (
            <div className="Weather">
                <WeatherSearch updateWeather={this.updateWeather}/>
                <WeatherDisplay current={this.state.current} location={this.state.location} loading={this.state.loading} />
            </div>
        )
    }
}

export default Weather;
