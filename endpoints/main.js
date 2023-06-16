// actualizar koder
// patch/put
// /koders/:id
AudioParamMap.patch("/koder/:id", async (req, res) => {
    try {
        // todo lo que puede
        const updatedKoder = await Koder.findByIdAndUpdate (params.Id, body);
        res. status(200).json({
            success: true,
            data: updatedKoder,
        })
    }
    catch{ 
        
    }
})

app.use((require, response, next) => {
    
})