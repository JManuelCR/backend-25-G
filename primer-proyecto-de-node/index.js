const argv = require('yargs-parser')(process.argv.slice(2));
const colors = require('colors');
 

/** ------------------------------------------------ */

const names = [
    "Andres Garcia",
    "Andres de Anda",
    "Cristian",
    "Damian",
    "Dani",
    "Gustavo",
    "Ignacio",
    "Jorge",
    "Karla",
    "Lau",
    "Luis",
    "Mara",
    "Max",
    "Pao",
    "Roberto",
    "Samantha"
]
const findNombre = (names, name) => {
    let finded = names.find(element => element === name) !== undefined;
    finded ? console.log(`Bienvenido ${name}`.rainbow) : console.log(`Fuera de aqui`.red);
}

console.log(findNombre(names, argv.nombre));