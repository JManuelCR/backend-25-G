/**
 * Node,
 * No tenemos el DOM ni tampoco BOM
 * no vamos a poder hacer un promt para poder pedir escribir cosas
 * Que si tenemoos en Node, procesos
 */


/**
 * COnstruir una funcion que separe nombres largos de cortos
 * Los nombres largos son de 4 caracteres en adelante
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

const longAndShortNames = (names) =>{
    const longNames = names.filter(item => item.length >= 4);
    const shortNames = names.filter(item => item.length < 4);
    console.log(`The long names are:\n${longNames}`);
    console.log(`The short names are:\n${shortNames}`);
}

/**
 * otra solucion
 * 
 * const nameSaparator = () => {
 * const longNames = [];
 * const shortNames = [];
 * lsit.foreach(item => {
 *  if(item.length >= 4){
 *      longNames.push(item);
 *  }else {
 *  shortNames.push(item);
 * }
 * })
 * }
 */

longAndShortNames(names);

const nombresEstructurados = names.reduce((acum, curr) => {
    return {
        ...acum, 
        [curr]: curr.length
    }
}, {});

console.log(nombresEstructurados);