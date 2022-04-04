const {Router} = require('express');
const router = Router();
const controladores = require('../controllers/todocontrollers');


router.get('/',controladores.getTodoes);//ruta para todas las tareas

router.post('/',controladores.agregarTodo)//ruta para agregar

router.get('/:id',controladores.getTodoById); //ruta para una sola tarea

router.put('/:id',controladores.actualizarTodo); //ruta para actualizar

router.delete('/:id',controladores.eliminarTodo); //ruta para eliminar

module.exports = router;