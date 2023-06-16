const  express = require("express");
const { login } = require("../usecases/users.usecase")

const router =  express.Router()
app.post("/", async (req, res) => {
    try{
        const user = await login(req.body.email, req.body.password);
        res.json({
            success: true,
            data: user
        })
    }catch(err){
        res.status(err.status || 500);
        res.json({
            success: false,
            message: err.message
        });
    }
})

mocule.exports  = router;