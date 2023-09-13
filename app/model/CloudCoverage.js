import {createWeatherData} from "./WeatherData";


function createCloudCoverage(value, type, unit, time, place) {
    let weatherData = createWeatherData(value, type, unit, time, place);


    let cloudCoverage = Object.assign({}, weatherData);

    return cloudCoverage;
}

module.exports = {
    createCloudCoverage
}