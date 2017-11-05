import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const Tempertures = cityData.list.map(weatherInfo => weatherInfo.main.temp)
        const pressures = cityData.list.map(weatherInfo => weatherInfo.main.pressure)
        const humidities = cityData.list.map(weatherInfo => weatherInfo.main.humidity)

        //--ES5 syntax--
        //const lon = cityData.city.coord.lon;
        //const lat = cityData.city.coord.lat;

        //--ES6 syntax--
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={cityName}>
            <td>{cityName}</td>
            <td><Chart data={Tempertures} color="green" units="K" /></td>
            <td><Chart data={pressures} color="orange" units="hPa" /></td>
            <td><Chart data={humidities} color="blue" units="%" /></td>
            </tr>
    );
    }

    render() {
        return (
            <table className="table table-hover">
            <thead>
            <tr>
            <th>City</th>
            <th>Temperture (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
    </tbody>
        </table>
    );
    }
}

// --ES5 syntax--
// function mapStateToProps(state){
//     const weather = state.weather
//     return {weather: weather}
// }

// --ES6 equivelant--
function mapStateToProps({ weather }) { // same as const weather = state.weather
    return { weather }                 // same as { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);