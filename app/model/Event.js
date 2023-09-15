function Event(time, place) {


    const getTime = () => {
        return time;
    };
    const getPlace = () => {
        return place;
    };
    const setTime = (_time) => {
        this.time = _time;
    };
    const setPlace = (_place) => {
        this.place = _place;
    };

    return {
        getTime,
        getPlace,
        setTime,
        setPlace
    }

}
module.exports = {
    Event
}