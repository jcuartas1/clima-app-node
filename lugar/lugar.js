const axios = require('axios');

const getLugarlatLen = async(ciudad) => {

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=3f2da9c0a81942cb4fb2aae2da7c68b2`
    });


    const resp = await instance.get();

    if (resp.data.weather.length === 0) {
        throw new Error(`No hay Resuldatos para ${direccion}`);
    }

    const data = resp.data;
    const nombre = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        nombre,
        lat,
        lng
    }

}

module.exports = {
    getLugarlatLen

}