const getTodoes = "SELECT * FROM todo";
const agregarTodo = "INSERT INTO todo(nombre, descripcion) VALUES($1,$2)";
const getTodoById = "SELECT * FROM todo WHERE todo_id = $1";
const actualizarTodo = "UPDATE todo SET nombre=$1,descripcion=$2 WHERE todo_id=$3";
const eliminarTodo = "DELETE FROM todo WHERE todo_id = $1";

module.exports={
    getTodoById,
    getTodoes,
    agregarTodo,
    actualizarTodo,
    eliminarTodo
}