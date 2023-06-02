const fs = require("fs");
console.log("readFile", fs.readFile);

// fs.readFile("./hola.txt", 'utf8', (err, data) => {
    
//     // dentro de la callback
//     // si hay error
//     if(err){
//         console.log(err);
//         return;
//     }

//     // si leyo bien el contenido
//     console.log("Data", data);

// })


// fs.writeFile("./hola.txt", "Una nueva prueba de lo que se esta ecribiendo en el archvo a modificar", 'utf8', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// })

// fs.appendFile("./hola.txt", "\nUna prueba nueva de lo que se tiene que ver\nen el archivo para saber que si lo esta modificando", 'utf8', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// })

// fs.unlink("./hola.txt", (err) => {
//     if (err) throw err;
//     console.log('path/hola.txt was deleted');
// })

// fs.copyFile("./hola.txt", "./newFolder/newFile.txt", (err) => {
//     if(err) throw err;
//     console.log("File was copied");
// })

// fs.mkdir("./newFolder/otherFolder", {recursive: true}, (err) => {
//     if (err) throw err;
//     console.log("Folder created successfully");
// })

// const leerArchivo = (archivo) => {
//     fs.readFile(`newFolder/${archivo}`, 'utf8', (err, data) => {
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log("Data", data);  
//     })
// }

// fs.readdir("newFolder/", 'utf8', (err, files) => {
//     if (err) throw err;
//     files.forEach(element => {
//         leerArchivo(element)
//     });
// })