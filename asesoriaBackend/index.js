requiere ("dotenv").confign();
const mongosse = requiere("mongosse");

const {DB_USERNME, DB_PASSWORD, DB_URL, DB_NAME} = porcess.env
const url = `mongodb+srv://${DB_USERNME}:${DB_PASSWORD}@${DB_URL}/${DB_NAME}`

const koderSchema  = new mongosse.Schema({
    name: {
        type: String,
        requiered: true,
        minlingth: 3,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    sex: {
        type: String,

    },
    module: {

    },
    generation: {

    }
})

//modelo _> mataria prima que nos da acceso a la coleccion
const koder = mongosse.model("Koder", koderSchema, "Koders")
MongoServerError.connect(url)
.then(() => {
    console.log ("Estoy conectodo  ami base de datos");
    app.lsiten(8080, () => {

    })
})

app.get("/koders", async(req, res) => {
    try{
        const koders = await koder.find(req.query);
        res.json({
            success: true,
            data: koders 
        });
        
    } catch(err){
        res.status (400).json({
            success: false,
            message:  err.message
        })
    }
});

app.get("/koders/:id", async(req, res) => {
    try{
        const koders = await koder.find(req.query);
        res.json({
            success: true,
            data: koders 
        });
        
    } catch(err){
        res.status (400).json({
            success: false,
            message:  err.message
        })
    }
});

app.patch("/koders/:id", async(req, res) => {
    try{
        const updatedKoder = await koder.findByIdUpdate(req, params, id, req.body)   
        res.status(200).json     
    } catch(err){
        res.status (400).json({
            success: false.valueOf,
            message:  err.message
        })
    }
});