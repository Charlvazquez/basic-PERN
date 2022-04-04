const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//rutas
const rutaTodo = require('./rutas/todo');
app.use('/api/v1/todo', rutaTodo);

app.listen(5000,()=>{
    console.log("Servidor en http://localhost:5000")
});