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


fs.writeFile("./hola.txt", "Este es un nuevo texto contenido en el mismo archivo", 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})