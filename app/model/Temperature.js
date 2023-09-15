const {WeatherData, } = require ("./WeatherData")
const { celsius_UNIT, fahrenheit_UNIT} = require ("./Metrics")

function createTemperature(value, type, unit, time, place) {
    let weatherData =  new WeatherData(value, type, unit, time, place);



    const convertToF = () => {
        if (weatherData.getUnit() !== fahrenheit_UNIT) {
            weatherData.setUnit(fahrenheit_UNIT);
            weatherData.setValue((temperature.getValue() * 9 / 5) + 32);
        }
    }
    const convertToC = () => {
        if (weatherData.getUnit() !== celsius_UNIT) {
            weatherData.setUnit(celsius_UNIT);
            weatherData.setValue((temperature.getValue() - 32) * 5 / 9);
        }
    }

    return {
        ...weatherData,
        convertToF,
        convertToC,
    }
}

module.exports = {
    Temperature: createTemperature
}