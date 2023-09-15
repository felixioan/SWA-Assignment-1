const {Types} = require("./model/Metrics");
const {createPrecipitation, Precipitation} = require("./model/Precipitation");
const {createTemperature, Temperature} = require("./model/Temperature");
const {createWind, Wind} = require("./model/Wind");
const {createCloudCoverage, CloudCoverage} = require("./model/CloudCoverage");


function deserializedData(jsonData) {
    const deserializedData = jsonData.map(item => {
        switch (item.type) {
            case Types.TEMPERATURE: {
                return new Temperature(item.value, item.type, item.unit, item.time, item.place);
            }
            case Types.PRECIPITATION: {
                return new Precipitation(item.value, item.type, item.unit, item.time, item.place, item.precipitation_type);
            }
            case Types.WIND_SPEED: {
                return new Wind(item.value, item.type, item.unit, item.time, item.place, item.direction);
            }
            case Types.CLOUD_COVERAGE: {
                return new CloudCoverage(item.value, item.type, item.unit, item.time, item.place);
            }

            default:
                return null;
        }
    });
    return deserializedData;
}

module.exports = {
    deserializedData,
};