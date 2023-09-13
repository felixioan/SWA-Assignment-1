import {createWeatherPrediction} from "./WeatherPrediction";
import {inch_TYPE, inch_UNIT, mm_TYPE, mm_UNIT} from "./Metrics";

function createPrecipitationPrediction(value, type, unit, time, place) {
    let weatherPrediction = createWeatherPrediction(value, type, unit, time, place);

    let precipitationPrediction = Object.assign({}, weatherPrediction);

    precipitationPrediction.getExpectedTypes = () => precipitationPrediction.getType();

    precipitationPrediction.matches = (data) => {
        return weatherPrediction.matches(data);
    }

    precipitationPrediction.convertToInches = () => {
        if (precipitationPrediction.getType() !== inch_TYPE) {
            precipitationPrediction.setValue(precipitationPrediction.getValue() / 25.4);
            precipitationPrediction.setType(inch_TYPE);
            precipitationPrediction.setUnit(inch_UNIT);
        }
    }

    precipitationPrediction.convertToMM = () => {
        if (precipitationPrediction.getType() !== mm_TYPE) {
            precipitationPrediction.setValue(precipitationPrediction.getValue() * 25.4);
            precipitationPrediction.setType(mm_TYPE);
            precipitationPrediction.setUnit(mm_UNIT);
        }
    }
}

module.exports = {
    createPrecipitationPrediction
}