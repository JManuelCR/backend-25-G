// const koder = {
//     seDieronInformes: false,
//     seEntrevisto: false,
//     sePago: false,
//     seInscribio: false
// };

// const darInformes = (koder, entrevistar) => {
//     let error= null;
//     setTimeout(() => {
//         koder.seDieronInformes = true;
//         if(!koder.seDieronInformes){
//             error = "El koder necesita ser informado primero";
//         }
//         //solucion
//         // callback -> entrevistamelo porque ya se le dieron informaes
//         console.log("El koder ya se le dieron infotmes", koder);
//         entrevistar(error, koder)
//     }, 2000)
// }

// const seEntrevisto = (koderInformado, pagar)  => {
//     let error = null;
//     setTimeout(() => {
//         koderInformado.seEntrevisto = true;
//         if(!koderInformado){
//            error = "El koder necesita ser entrevistado primero";
//         }
//         console.log("Al koder se le entrevisto", koderInformado);  
//         pagar(error, koderInformado);
//     }, 1000)
// }
// const sePago = (koderEntrevistado, inscribir) => {
//     let error = null;
//     setTimeout(() => {
//         koderEntrevistado.sePago = true;
//         if(!koderEntrevistado.sePago){
//             error = "El koder necesita pagar";
//         }
//         console.log(("El koder ya pago", koderEntrevistado));
//         inscribir(error, koderEntrevistado);        
//     }, 2000);
// }
// const inscribir = (koderPagado) => {
//     setTimeout(() => {
//         koderPagado.seInscribio = true;
//         console.log("El koder ya se inscribio!!!", koderPagado);
//     }, 3000)

// }

// // Callbacks aanonimas
// darInformes(koder, (error, koderInformado) => {
//     if(error) {
//         console.log(error);
//         return;
//     };

//     seEntrevisto(koderInformado, (error, koderEntrevistado) => {
//         if(error) {
//             console.log(error);
//             return;
//         }
//         sePago(koderEntrevistado, (error, koderPagado) => {
//             if(error){
//                 console.log(error);
//                 return;
//             }
//             inscribir(koderPagado);
//         })
//     })
// });

// const koderInformado = darInformes(koder, seEntrevisto);
// const koderEntrevistado = seEntrevisto(koderEntrevistado);
// console.log("koder entrevistado", koderEntrevistado);
// console.log("Koder Informado",koderInformado);
// console.log("koder", koder);



/** ------------------------------------------------------- */
const cake = {
    sePreparaLaMasa: false,
    seHorneaLaMasa: false,
    sePreparaLacubierta: false,
    seAdornaConLaCubierta: false,
    seRefrigera: false
};

const prepararLaMasa = (cake, hornear) => {
    let error = null;
    setTimeout(() => {
        cake.sePreparaLaMasa = true;
        if(!cake.sePreparaLaMasa){
            error = "Se necesita primero preparar la masa";
        }
        hornear(error, cake)
    }, 4000)
}

const hornearElPastel = (masaPreparada, prepararLaCubierta) => {
    let error = null;
    setTimeout(() => {
        masaPreparada.seHorneaLaMasa = true;
        if(!masaPreparada.seHorneaLaMasa){
            error = ("la masa necesita ser horneada primero");
        };
        prepararLaCubierta(error, masaPreparada)
    }, 5000);
}

const prepararElRecubrimiento = (pastelHorneado, recubirElPastel) => {
    let error = null;
    setTimeout(() => {
        pastelHorneado.sePreparaLacubierta = true;
        if(!pastelHorneado.sePreparaLacubierta){
            error = ("La cubierta necesita ser preparada primero");
        };
        recubirElPastel(error, pastelHorneado);
    }, 4000);
};

const decorarElPastel = (cubiertaPreparada, refrigerar) => {
    let error = null;
    setTimeout(()=>{
        cubiertaPreparada.decorarElPastel = false;
        if(!cubiertaPreparada.decorarElPastel){
            error = ("El pastel necesita ser decorado si no es solo un panque, decoralo primero");
        };
        refrigerar(error, cubiertaPreparada);

    }, 3000)
}
const refrigerarPastel = (pastelListo) => {
    setTimeout(() => {
        pastelListo.seRefrigera = true;
        console.log("EL pastel ya esta en refrigeracion");
    }, 4000)
}

prepararLaMasa(cake, (error, masaPreparada) =>{
    if(error){
        console.log(error);
        return;
    }
    console.log("La masa ha sido preparada");
    hornearElPastel(masaPreparada, (error, pastelHorneado) =>{
        if(error){
            console.log(error);
            return;
        }
        console.log("La masa ha sido horneada y no se quemo");
        prepararElRecubrimiento(pastelHorneado, (error, cubiertaPreparada) =>{
            if(error){
                console.log(error);
                return;
            }
            console.log("La cubierta ha sido preparada y quedo muy chida");
            decorarElPastel(cubiertaPreparada, (error, refrigerar) => {
                if(error){
                    console.log(error);
                    return;
                }
                console.log("El pastel ha sido decorado y se ve muy mamon");
                refrigerarPastel(refrigerar);
            })
        })
    })
})

