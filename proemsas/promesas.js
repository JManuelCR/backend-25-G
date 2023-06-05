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
    prepararMasa: false,
    hornearLaMasa: false,
    prepararLaDecoracion: false,
    decorarElPastel: false,
    refrigerar: false
};
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
};
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
};
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
};
const hornearPastel = (hornearLaMasa) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            hornearLaMasa.hornearLaMasa = true;
            if(!hornearLaMasa){
                reject("Tienes que hornear la masa primero antes de continuar con el pastel")
            }
            resolve(hornearLaMasa)
        }, 1000)
    })
};
const prepararLaDecoracion = (prepararDecoracion) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            prepararDecoracion.prepararLaDecoracion = true;
            if(!prepararDecoracion){
                reject("Si va a ser un pastel tienes que decorarlo de lo contrario sera un panque, primero prepara la decoracion");
            }
            resolve(prepararDecoracion);
        },2000);
    });
};
const decorarPastel = (decorarElPastel) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            decorarElPastel.decorarElPastel = true;
            if(!decorarElPastel){
                reject("Decora el pastel con la decoracion que hiciste");
            }
            resolve(decorarElPastel);
        }, 3000)
    })
}
const refrigerar = (refrigerar) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            refrigerar.refrigerar = true;
            if(!refrigerar){
                reject("HAy que meter al refri el pastel para que tenga consistencia");
            }
            resolve(refrigerar);
        }, 1000);
    });
};
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
         .then((prepararMasaLista) => {
            console.log("La masa ha sido preparada", prepararMasaLista);
            hornearPastel(prepararMasaLista)
             .then((hornearLaMasa) => {
                console.log("La masa ha sido horneada", hornearLaMasa)
                prepararLaDecoracion(hornearLaMasa)
                 .then((decoracionPreparada) => {
                    console.log("La decoracion ha sido preparada", decoracionPreparada)
                    decorarPastel(decoracionPreparada)
                     .then((decorar) => {
                        console.log("El pastel ha sido decorado y se ve muy bien", decorar)
                        refrigerar(decorar)
                        .then((refrigerar) => {
                            console.log("El pastel ya esta en el refrigerador", refrigerar)
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                     })
                     .catch((error) => {
                        console.log(error)
                     })
                 })
                 .catch((error) => {
                    console.log(error);
                 })
             })
             .catch((error) => {
                console.log(error);
             })
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