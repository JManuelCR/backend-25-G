const express = require("express");
const app = express ();
const fsPromises = require("fs/promises");

//Middleware
//Parsear todo lo que el cliente mande a JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Endpoint de home mi API esta funcionando CAMBIANDO con otro CAMNBIO")
});

//Enpoints
/**
 * 1er endpoint
 * Enlistar Koders
 * ARQ REST
 * recurso/identificador
 * method -> GET
 * ruta -> http://localhot:3000/koders
 * 
 */

app.get("/koders", async (req, res)=> {
    const { module } = req.query;
    console.log("req.query", req.query); // asi puedo ver los params que se me estan pidiendo
    console.log(module);
    const db = await fsPromises.readFile("./koders.json", "UTF8");
    const parseDB = JSON.parse(db) // la lectura del archivo nos regresa un texto planoconst db = await
    if(!module){
        res.json(parseDB.koders)
    }
    const  filterKoders = parseDB.koders.filter(koder => module.toLowerCase() === koder.module.toLowerCase())
    res.json(filterKoders); //asi le decimos que tiene que ser con formato json
});
//Usando el query param no se modifica la ruta no importa cuantos tengamos

app.post("/koders", async (req, res) => {
    console.log("Request", req.body);
    // Crear el koder
    const db = await fsPromises.readFile("./koders.json", "utf8");
    const parseDb = JSON.parse(db);
    const koder = {
        id: parseDb.koders.length + 1,
        ...req.body
    }
    parseDb.koders.push(koder)    
    await fsPromises.writeFile("./koders.json", JSON.stringify(parseDb, "\n", 2))
    res.json(koder)
})
app.listen (3000, () => {
    console.log("Nuestro servidor esta prendido");
})

//Get Koder by name
/** 
 * Query params -->>> ?modiuleBackedn
 * Path params ( idnetificador -> :pahtParam) 
 * 
 */

app.get("/koders/:id", async (req, res) => { //Utilizado en path param para ir por id
    const { id } = req.params
    console.log(typeof(id));
    const db = await fsPromises.readFile("./koders.json", "utf8");
    const parseDb = JSON.parse(db);
    const filterKoder = parseDb.koders.filter((koder) => koder.id === parseInt(id))[0];
    res.json(filterKoder)
});

/**
 * ejercicio
 * 2 Enpoint
 * 1er endpointDonde me filtren por age los mentores
 * 2do enpoint Donde obtengamos un mentor en especifico por su nombre * 
 */

app.get("/mentors", async(req, res) => {
    const { age } = req.query;
    const db = await fsPromises.readFile("./koders.json", "utf8");
    const parseDb = JSON.parse(db);
    if(!age){
        res.json(parseDb.mentors)
    }
    const filterMentors = parseDb.mentors.filter(mentor => mentor.age === parseInt(age))
    res.json(filterMentors)
})

app.get("/mentors/:name", async (req, res) => {
    const {name} = req.params;
    const db = await fsPromises.readFile("./koders.json", "utf8");
    const parseDb = JSON.parse(db);
    const filterMentors = parseDb.mentors.filter(mentor => mentor.name.toLowerCase() === name.toLowerCase())
    res.json(filterMentors)
});

/**
 * Ejercicio
 * 1 enpoint 
 * quiero actualizzar un koder
 * 
 * metodo
 * ruta
 * findIndex, find()
 */
app.patch("/koders/:id", async(req, res) => {
   const { id } = req.params;
   const db = await fsPromises.readFile("./koders.json","utf8");
   const parseDb= JSON.parse(db);
   //encontrar koder a actualizar
   const index = parseDb.koders.findIndex(koder => koder.id === parseInt(id))
   console.log("indice", index);
   console.log(`Arreglo en el indice ${index}`, parseDb.koders[index]);
   //Crear nuestro objeto nuevo
   const updatedKoder = {
       ...parseDb.koders[index],
       ...req.body// agregame lo mismo
   }
   console.log(updatedKoder);
   parseDb.koders[index] = updatedKoder
   //ecribimos ya actualizado en la base de datos
   await fsPromises.writeFile("./koders.json", JSON.stringify(parseDb, "\n", 2))
   res.json(updatedKoder)
})

/**
 * Tarea delete eliminar un koder
 */

app.delete("/koders/:id", async (req, res) =>{
    const { id } = req.params;
    const db = await fsPromises.readFile("./koders.json", "utf8");
    const parseDb = JSON.parse(db);
    const index = parseDb.koders.findIndex(koder => koder.id === parseInt(id));
    if(index === -1){
        res.json({message: `Invalid data`});
        return
    }else {
        parseDb.koders.splice(index, 1)
    };
    await fsPromises.writeFile("./koders.json", JSON.stringify(parseDb,"\n", 2))
    res.json(parseDb.koders)

})