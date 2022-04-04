CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion VARCHAR(255)
);