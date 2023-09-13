import {createWeatherData} from "./WeatherData"
import {celsius_TYPE, celsius_UNIT, fahrenheit_TYPE, fahrenheit_UNIT} from "./Metrics"

function createTemperature(temp, time, place) {
    let weatherData = createWeatherData(temp, 'Temperature', 'C', time, place);

    let temperature = Obejct.assign({}, weatherData);

    temperature.convertToF = () => {
        temperature.setType(fahrenheit_TYPE);
        temperature.setUnit(fahrenheit_UNIT);
        temperature.setValue((temperature.getValue() * 9 / 5) + 32);
    }
    temperature.convertToC = () => {
        temperature.setType(celsius_TYPE);
        temperature.setUnit(celsius_UNIT);
        temperature.setValue((temperature.getValue() - 32) * 5 / 9);
    }
    return temperature;
}

module.exports = {
    createTemperature
}