const info = require('./info/info');

const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let ciudad = argv.direccion;

info.getInfo(ciudad)
    .then(data => console.log(`El clima de ${data.ciudad} es de ${data.temp}`))
    .catch(e => console.log(`No se pudo obtener el clima de ${ciudad}`));