const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3f2da9c0a81942cb4fb2aae2da7c68b2&units=metric`);

    return resp.data.main.temp;

}


module.exports = {

    getClima

}