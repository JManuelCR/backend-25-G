/**
 * Estado inicial
 *  Pending --> la promesa no se ha resulto, estado incial
 *  Acepted --> La promesa se resolcio satisfactoriamente
 *  Rejected --> La promesa fue rechazada
 * 
 * Declarar/crear
 * Al momento de que nosotros hacemos una promesa
 * resolce --> vamos a indicar cuando una promesa es resuelta
 * reject --> vamos a indicar cuando una promesa es rechazada
 * 
 * ejecutar 
 * then --> la promesa ya esta resuelta
 * catch --> la promesa esta rechazada
 * 
 * sintaxis
 * new Promise((resulve, reject) => {})
 */


const pastel = {
    leerReceta: false,
    conseguirIngridientes: false,
    prepararMasa: false
}

const leerReceta = (pastel) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastel.leerReceta = true;
            // No se resuelve -> CATCH
            if(!pastel.leerReceta){
                reject("Tienes que leer una receta primero")
            }

            //Si si
            resolve(pastel)
        }, 3000);
    })
}

const conseguirIngridientes = (pastelLeido) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastelLeido.conseguirIngridientes = true;
            if(!pastelLeido.conseguirIngridientes){
                reject("Tiene que conseguir los ingredientes primero");
            }
            resolve(pastelLeido)
        }, 2000)
    })
}
const prepararLaMasa = (prepararMasa) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            prepararMasa.prepararMasa = true;
            if(!prepararMasa.prepararMasa){
                reject("Tiene que conseguir los ingredientes primero");
            }
            resolve(prepararMasa)
        }, 3000)
    })
}
// const promesa = leerReceta(pastel);
// console.log("Promesa >>>>>>>>", promesa);

// promesa
leerReceta(pastel)
.then((pastelLeido) => {
    console.log("Receta de pastel leida", pastelLeido);
    conseguirIngridientes(pastelLeido)
     .then((pastelConIngredientes) => {
        console.log("Ingredientes conseguidos", pastelConIngredientes);
        prepararLaMasa(pastelConIngredientes)
         .then((prepararMasa) => {
            console.log("La masa ha sido preparada", prepararMasa);
         })
         .catch((error) => {
            console.log("error", error);
         })
     })
     .catch((error) => {
        console.log("error", error);
     })
})
.catch((error) => {
    console.log("error", error);
});