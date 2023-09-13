import {createWeatherPrediction} from "./WeatherPrediction";
import {celsius_TYPE, celsius_UNIT, fahrenheit_TYPE, fahrenheit_UNIT} from "./Metrics";

function createTemperaturePrediction(value, type, unit, time, place) {
    let weatherPrediction = createWeatherPrediction(value, type, unit, time, place);

    let temperaturePrediction = Object.assign({}, weatherPrediction);

    temperaturePrediction.convertToF = () => {
        if (temperaturePrediction.getType() !== fahrenheit_TYPE) {
            temperaturePrediction.setValue((temperaturePrediction.getValue() * 9 / 5) + 32);
            temperaturePrediction.setUnit(fahrenheit_UNIT);
        }
    }

    temperaturePrediction.convertToC = () => {
        if (temperaturePrediction.getType() !== celsius_TYPE) {
            temperaturePrediction.setValue((temperaturePrediction.getValue() - 32) * 5 / 9);
            temperaturePrediction.setUnit(celsius_UNIT);
        }
    }
}

module.exports = {
    createTemperaturePrediction
}