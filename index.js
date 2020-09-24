const express = require('express')
require('dotenv').config();

const app = express()
//directorio publico

app.use(express.static('public'))

//Rutas
app.use('/api/auth', require('./routes/auth'))

app.listen( process.env.PORT, () => {
    console.log(`servidor correindo en puerto ${process.env.PORT}`)
})