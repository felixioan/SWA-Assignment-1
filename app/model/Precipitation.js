import {createWeatherData} from "./WeatherData"
import {
    mm_TYPE,
    mm_UNIT,
    inch_TYPE,
    inch_UNIT,
} from "./Metrics"

function createPrecipitation(value, type, unit, time, place)
{
    let weatherData = createWeatherData(value, type, unit, time, place);


    let precipitation = Obejct.assign({}, weatherData);

    precipitation.convertToMM = () => {
        precipitation.setType(mm_TYPE);
        precipitation.setUnit(mm_UNIT);
        precipitation.setValue(precipitation.getValue() * 25.4);
    }
    precipitation.convertToINCH = () => {
        precipitation.setType(inch_TYPE);
        precipitation.setUnit(inch_UNIT);
        precipitation.setValue(precipitation.getValue() / 25.4);
    }
    return precipitation;
}

module.exports = {
    createPrecipitation
}