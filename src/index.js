const materialRoutes = require("./routes/crud")
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 5000
const { default: mongoose } = require("mongoose");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('dotenv').config();

app.use('/api',materialRoutes);
app.use(express.json());



app.get('/', function(req, res) {
    respuesta = {
     error: true,
     codigo: 200,
     mensaje: 'Punto de inicio'
    };
    res.send(respuesta);
})
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("login")).catch((error)=> console.error(error))


let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
   };


   app.listen(5000, () => {
    console.log("El servidor está inicializado en el puerto 5000");
   });
