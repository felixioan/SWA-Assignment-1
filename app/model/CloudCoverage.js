const {WeatherData} = require("./WeatherData");


function createCloudCoverage(value, type, unit, time, place) {
    let weatherData = WeatherData(value, type, unit, time, place);


    return {
        ...weatherData
    };
}

module.exports = {
    CloudCoverage : createCloudCoverage
}