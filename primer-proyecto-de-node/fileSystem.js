const fs = require("fs");
console.log("readFile", fs.readFile);

fs.readFile("./hola.txt", 'utf8', (err, data) => {
    
    // dentro de la callback
    // si hay error
    if(err){
        console.log(err);
        return;
    }

    // si leyo bien el contenido
    console.log("Data", data);

})


// fs.writeFile("./hola.txt", "Una nueva prueba de lo que se esta ecribiendo en el archvo a modificar", 'utf8', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// })

fs.appendFile("./hola.txt", "Una nueva prueba de lo que se esta ecribiendo en el archvo a modificar", 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})