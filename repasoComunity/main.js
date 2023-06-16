//Declarar
function imprimirNombre(nombre, apellido, edad = 20, tipo="koder") {
  return `Mi nombre es: ${nombre} ${apellido} y tengo ${edad} y soy ${tipo}`;
    //Clausures: son funciones dentro de funjoines
};

//Arrow function

const arrowFuncion = () => {

}

/**
 * cuando ponemos parametros en una funcion, les tenemos que dar valor a  esos parametros el mandar a llamar
 * la funcion
 * Dentro de una funcion lo que importa es el nombre, pero al mandarla a llamar lo que importa es el orden, 
 * de como lo mandamos llamar, por eso tenemos que respetar el otden de los parametros de entrada para que la 
 * funcion pueda acceder de manera corracta a ellos. 
 * Si por alfuna razon se invierten debemos ponerlo por orden para poder tenerlos de manera correcta
 * LOS PARAMETROS POR DEFECTO deben de ir al final de toods los parametros usados
 */

//referencia
console.log("aqui esta mi ficion",  imprimirNombre)

// ejecutan/ Se manda llamar
const resultsdoImprimir = imprimirNombre("manuel", "cabrera")

console.log(resultsdoImprimir)

/**------------------------------------------------------------------------------------------------ */

//metodo map
const Mara = "3"
const koders = {
    Mara,
    "Pao": "4",
    Laura: "7",
    Sam: "9"
}

koders["Mara"];

const keys = Object.keys(koders);
const values = Object.values(koders);

//filter donde sean mayores a cinco

const filterResult = keys.filter((value, idx, array) =>{
    if(koders[value] > 5){
        return value
    }
})

console.log("koders Filtrados", filterResult)

const kodersArreglo = ["Mara", "Pao", "Laura", "Sam"];
const objetoATransformar = {
    Mara : {
        nombre: "Mara"
    },
    Pao : {
        nombre: "Pao"
    }
}

const objectoTransformado = kodersArreglo.reduce((accm, key, idx, array) => {
    console.log("accumulador", {...accm});
    console.log("key", key);

    return {
        ...accm, 
        [key]:{
            nombre: key
        } 
    }
},{})

console.log("objeto transformado", objectoTransformado)