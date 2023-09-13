import {createWeatherData} from "./WeatherData"
import {MpH_UNIT, MpS_UNIT, direction} from './Metrics'

function createWind(value, type, unit, time, place, direction) {
    let weatherData = createWeatherData(value, type, unit, time, place);


    let wind = Obejct.assign({}, weatherData);

    wind.cardinalPo = direction;

    wind.getDirection = function () {
        return this.direction
    }
    wind.setDirection = function (_direction) {
        this.direction = _direction
    }

    wind.convertToMpH = () => {
        if (wind.getUnit() !== MpH_UNIT) {
            wind.setUnit(MpH_UNIT);
            wind.setValue(wind.getValue() * 2.237);
            wind.setDirection(direction)
        }
    }
    wind.convertToMpS = () => {
        if (wind.getUnit() !== MpS_UNIT) {
            wind.setUnit(MpS_UNIT);
            wind.setValue(wind.getValue() / 2.237);
            wind.setDirection(direction)
        }
    }


    return wind;
}

module.exports = {
    createWind
}