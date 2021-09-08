import React, { Component } from 'react'
import './WeatherSearch.css'

class WeatherSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {location: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.updateWeather(this.state.location);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render() {
        return (
            <div className="WeatherSearch">
                <p className="WeatherSearch-title">Search for weather details from everywhere on the world</p>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className="WeatherSearch-input"
                        type="text" 
                        name="location" 
                        value={this.state.location}
                        onChange={this.handleChange}
                    />
                    <button className="WeatherSearch-button">Search</button>
                </form>
            </div>
        )
    }
}

export default WeatherSearch;
