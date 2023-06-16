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


/**
 * 
 * 
 * Async// Await
 * Async es yun apalabra recerbada -> que indica cuando una funcion va ase ASINCRONA
 * Await es una palabra reservada -> QUe se utiliza dentro de una FUNCION ASINCRONA
 * indicaque se tenemos que esperar a que la promesa se sinalice
 * 
 * async function () {
 * 
 * }
 * 
 * async sunction comunYCorriente() {
 * 
 * }
 * 
 * 
 */
 const terminarPastel = async (pastel) => {
    try{
        const pastelConRecetaLeida =  await leerReceta (pastel);
        const pastelConIngredientesConseguidos = await conseguirIngridientes(pastelConRecetaLeida);
        const pastelConMasaPreparada = await prepararLaMasa(pastelConIngredientesConseguidos);
        const hornearLaMasa = await hornearPastel(pastelConMasaPreparada);
        const prepararDecoracion = await prepararLaDecoracion(hornearLaMasa);
        const decorar = await decorarPastel(prepararDecoracion);
        const refri =  await refrigerar(decorar)
        return refri;
     }
     catch(err) {
        console.log("error", err)
     }

    }
 const resultado = terminarPastel(pastel)
 .then((pastel) => {
    console.log("pastel terminado", pastel)
 });
 //hay que usar error aca tambien???

const fs = require("fs");
const fsPromises = require("fs").promises;

const readFile = async () => {
    try {
        const content = await fsPromises.readFile('./saludo.txt', {encoding: 'utf8'});
        return content;
    } catch (err) {
        console.log(err)
    }
}

const fileContent = readFile()
.then((res) => {
    console.log ("Contenido del archivo:", res)
})
