/***
 * -Declaracion
 * -Ejecucion / Mandarla a llamar
 * -Referencia
 * 
 * Calback es una fucion que se pasa como parametro (referencia)
 * a otra fucion para ejecutarla
 * 
 */
//Declaracion
const saludar = () =>{
    console.log("Saludar");
}

//Referencia
saludar

//Ejecucion 
saludar()

//Callbacks

function avisar () {
    console.log("Ya llegeue a la casa ama");
}

function irACasa(callback) {
    console.log("Caminando a casa...");
    callback();
}

irACasa(avisar);