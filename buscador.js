console.log(process.argv);

/**
 * Pasarle un nombre a nuestro proceso de node y verificar si ese nombre existe en
 *  el arreglo de nombres. Si existe imprimir bienvenido y el nombre, si no imprimir 
 * fuera de aqui
 * 
 */

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

// const findName = (names, name) => {
//     let menssage = '';
//     let finded = names.includes(name);
//     finded ? menssage = `Bienvenido ${name}` : menssage = `Fuera de aqui`
//     return menssage;
// }
// console.log(findName(names, process.argv[2]));

const findNombre = (names, name) => {
    let menssage = '';
    let finded = names.find(element => element === name) !== undefined;
    finded ? menssage = `Bienvenido ${name}` : menssage = `Fuera de aqui`
    return menssage; 

}

console.log(findNombre(names, process.argv[2]));
