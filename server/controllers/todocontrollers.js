const pool = require('../config/db');
const consultas = require('../db/consultas');

//metodo para tener todas las tareas
const getTodoes = (req,res)=>{ 
    //declaracion de consulta usando una variable donde esta almacenada el tipo de consulta y metodo a usar
    pool.query(consultas.getTodoes , (error, resultados)=>{
        if(error) throw error;
        res.status(200).json(resultados.rows);
    });   
};

//metodo para mostrar una sola tarea.
const getTodoById = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(consultas.getTodoById, [id], (error , resultados)=>{
        if(error) throw error;
        res.status(200).json(resultados.rows);
    });
};

//metodo para agregar tareas
const agregarTodo = (req,res)=>{
    const{nombre,descripcion} = req.body;
    pool.query(consultas.agregarTodo,[nombre,descripcion],(error)=>{
        if(error) throw error;
        res.status(200).send('Tarea agregada exitosamente!');
    });
};

//metodo para actualizar
const actualizarTodo = (req,res)=>{
    const id = parseInt(req.params.id);
    const {nombre} = req.body;
    const {descripcion} = req.body;

    pool.query(consultas.getTodoById,[id],(error,resultados)=>{
        const busqueda = !resultados.rows.length;
        if(busqueda){
            res.status(404).send('Tarea no encontrada');
        }

        pool.query(consultas.actualizarTodo,[nombre,descripcion,id],(error)=>{
            if(error)throw error;
            res.status(200).send('Tarea modificada!');
        });
    });
};

//metodo para eliminar
const eliminarTodo = (req,res)=>{
    const id = parseInt(req.params.id);

    pool.query(consultas.getTodoById, [id],(error,resultados)=>{
        const busqueda = !resultados.rows.length;
        if(busqueda){
            res.status(404).send('Tarea no encontrada');
        }
    pool.query(consultas.eliminarTodo,[id],(error,resultados)=>{
        if(error)throw error;
        res.status(200).json({message:"Tarea eliminada"});
    });    
    });
};



module.exports={
    getTodoes,
    agregarTodo,
    getTodoById,
    actualizarTodo,
    eliminarTodo,
};
