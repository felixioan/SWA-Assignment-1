const {createWeatherData, WeatherData} = require ("./WeatherData");
const {MpH_UNIT, MpS_UNIT, Direction} = require ("./Metrics");
function createWind(value, type, unit, time, place, direction) {
    let weatherData = new WeatherData(value, type, unit, time, place);


  const getDirection = function ()
  {return direction}


    const setDirection = function (_direction) {
        direction = _direction
    }

    const convertToMpH = () => {
        if (wind.getUnit() !== MpH_UNIT) {
            wind.setUnit(MpH_UNIT);
            wind.setValue(wind.getValue() * 2.237);
            wind.setDirection(Direction)
        }
    }
    const convertToMpS = () => {
        if (wind.getUnit() !== MpS_UNIT) {
            wind.setUnit(MpS_UNIT);
            wind.setValue(wind.getValue() / 2.237);
            wind.setDirection(Direction)
        }
    }


    return {
        ...weatherData,
        convertToMpH,
        convertToMpS,
        getDirection,
        setDirection
    }
}

module.exports = {
    Wind: createWind,
}