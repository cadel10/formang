const mongoose = require("mongoose")

const dbName = "bit-shop"
const uri = `mongodb+srv://cadel2022:Imperio2022@clustergrupo23.ohrikw4.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true})
    .then((db) => console.log("Conexion a base de datos exitosa"))
    .catch((err) => console.log(err))

module.exports = mongoose