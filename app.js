const express = require('express')
const app = express()
const PORT = 4000
const http = require('http')
const cors = require('cors');

require('./src/model/modelsIndex')
const mainRoutes = require('./src/api/v1/routes/routesIndex')
require('dotenv').config()
app.use(express.json());
app.use(cors({origin:'*'}))
app.use('/api/v1', mainRoutes)

app.get('/', (req, res)=>{
    return res.status(200).json({msg: "Working fine"})
})

app.listen(PORT, ()=>{
    console.log("Server is listenting", PORT);
})