const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json())

/**
 * 1er Conectarse a la base de datos
 * 2d Levantar el servidor
 * 
*/
const dataBaseURL = "mongodb+srv://manu:uno23456@kodemia.oi3ljcc.mongodb.net/kodemia";

//conecctar la base de datos
mongoose.connect(dataBaseURL)
.then(()=> {
    console.log("Conexion a la base de datos exitosa");
    app.listen(3000, () => {
        console.log("Mi servidor esta levantado"); 
    });
})
.catch((err) => {
    console.log("No se pudo conectar la base de datos", err);
});

/**
 * Collections 
 * Documentos _> schemas/modelos 
 */

//schema
const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 10, 
        required:true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 100
    }, 
    module: {
        type: String,
        minlength: 4,
        maxlength: 10,
        required:true
    },
    generation: {
        type: String,
        minlength: 3,
        maxlength:10,
        required: true
    },
    sex: {
        type: String,
        enum: ["f", "m", "o"]
    }
});
//modelo
const Koder = mongoose.model("koders", koderSchema, "Koders");

//Home
app.get("/", (req,res)=> {
    res.json("Estamos en el endpoint de HOME")
})

app.get("/koders", async (req, res) => {
    console.log("query param ->>>>", req.query)
    //Accedemos a la base de datos
    try{
        const koders = await Koder.find(req.query)
        res.json({
            success: true,
            data: koders
        }) 
    }catch(err){
        console.log("err", err);
        res. status(400)
        res.json({
            success: false,
            messaje: err.message
        })
    }
});

app.post("/koders", async (req, res) => {
    console.log("body--->", req.body);
    /**
     * Request -> 
     * Params
     * Query params
     * Body
     * 
     */
    try{
        const koder = await Koder.create(req.body);
        console.log("koder", koder);
        res.status(201);
        res.json({
            success: true,
            data: koder
        })
    }
    catch(err){
        console.log("err", err);
        res. status(400)
        res.json({
            success: false,
            messaje: err.message
        })
    }
})

/**
 * Enpoint donde podemos encontrar un koder por su id
 * /recurso/identificador
 * methood
 * rute
 * MOdel, findById
 * 
 */

app.get("/koders/:id", async (req, res) => {
    const { id } = req.params
    try{
        const koder = await Koder.findById(id);
        if(!koder){
            err = res.status(404);
        }
        res.status(200);
        res.json({
            success: true,
            data: koder
        })
    }catch(err){
        res.status(400);
        res.json({
            success: false,
            message: err.message
        })
    }
});

app.delete("/koders/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const deleteKoder = await  Koder.findByIdAndDelete(id);
        console.log(deleteKoder);
        let status = 200;
        const responseParams = {
            success: true,
            message: "El koder fue eliminado exitosamente",
        }
        if(!deleteKoder){
            responseParams.success = false;
            responseParams.message = "EL koder no fue encontrado";
            status = 404
        }
        res.status(status)
        res.json(responseParams)
    }catch(err){
        res.status(400);
        res.json({
            success: false,
            message: err.message
        })
    }
})