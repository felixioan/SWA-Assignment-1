const {WeatherData} = require("./WeatherData");
const {inch_UNIT, inch_TYPE, mm_TYPE, mm_UNIT} = require("./Metrics");

function Precipitation(value, type, unit, time, place, precipitation_type) {

    let weatherData = new WeatherData(value, type, unit, time, place);

    const getPrecipitationType = () => precipitation_type;

    const convertToInches = () => {
        if (weatherData.getUnit() !== mm_UNIT) {
            weatherData.setValue(weatherData.getValue() / 25.4);
            weatherData.setUnit(mm_UNIT);
        }
    }

    const convertToMM = () => {
        if (weatherData.getUnit() !== mm_UNIT) {
            weatherData.setValue(weatherData.getValue() * 25.4);
            weatherData.setUnit(mm_UNIT);
        }
    }

    return {
        ...weatherData,
        getPrecipitationType,
        convertToMM,
        convertToInches
    }
}

module.exports = {
    Precipitation,
}