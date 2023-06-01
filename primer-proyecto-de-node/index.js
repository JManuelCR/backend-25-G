const argv = require('yargs-parser')
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
    console.log(name);
    let finded = names.find(element => element === name) !== undefined;
    finded ? console.log(`Bienvenido ${name}`.rainbow) : console.log(`Fuera de aqui`.red);
    return; 

}

console.log(findNombre(names, process.argv.nombre));