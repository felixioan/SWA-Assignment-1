import {createWeatherData} from "./WeatherData"
import { celsius_UNIT, fahrenheit_UNIT} from "./Metrics"

function createTemperature(value, type, unit, time, place) {
    let weatherData = createWeatherData(value, type, unit, time, place);

    let temperature = Obejct.assign({}, weatherData);

    temperature.convertToF = () => {
        if (temperature.getUnit() !== fahrenheit_UNIT) {
            temperature.setUnit(fahrenheit_UNIT);
            temperature.setValue((temperature.getValue() * 9 / 5) + 32);
        }
    }
    temperature.convertToC = () => {
        if (temperature.getUnit() !== celsius_UNIT) {
            temperature.setUnit(celsius_UNIT);
            temperature.setValue((temperature.getValue() - 32) * 5 / 9);
        }
    }

    return temperature;
}

module.exports = {
    createTemperature
}