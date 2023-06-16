const express = require("express");
const server = express();
const fsPromises = require("fs/promises")

/**server recibe dos parametros 
 * la rute
 * un callback y este usa el resquest y reponse
 * 
*/
server.get('/', (req, res) => {
    res.write("Estamos en home");
    res.end()
    // express.response.end();
});

server.listen(3000, () => {
    console.log("Nuestro servidor esta prendido")
});


/** 
 * 3 endpoints  en la ruta de /hola -> [POST, DELETE, PATCH]
 */

server.post('/hola', (req, res) => {
    res.write("Estamos en hola creando algo");
    res.end()
    // express.response.end();
});
server.delete('/hola', (req, res) => {
    res.write("Estamos en delete borrando algo");
    res.end()
    // express.response.end();
});
server.patch('/hola', (req, res) => {
    res.write("Estamos en hola editando algo");
    res.end()
    // express.response.end();
});


// hacer un endpoint que leaea un archivo  y nos lo repsonda
server.get("/archivo", async (req, res) => {
    const data = await fsPromises.readFile("./archivoALeer.txt", "UTF-8") 
    res.send(data)  
})