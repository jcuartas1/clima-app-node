const lugar = require('../lugar/lugar');
const clima = require('../clima/clima');




const getInfo = async(ciudad) => {

    let direccion = await lugar.getLugarlatLen(ciudad);

    let latitud = direccion.lat;
    let longitud = direccion.lng;

    let temp = await clima.getClima(latitud, longitud);

    return {
        ciudad,
        temp
    }

}

module.exports = {

    getInfo

}