const elInquirer = require("inquirer"); //inquirer trabaja bajo promesas
require("colors");

//preguntas que nos pedirá el prompt de la variable 'inquirer'
const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    //En las opciones, mapearemos un valor a cada pregunta, y eso tomaremos como opción
    choices: [
      {
        value: "1",
        name: "1. Crear lista",
      },
      {
        value: "2",
        name: "2. Listar tareas",
      },
      {
        value: "3",
        name: "3. Listar tareas completadas",
      },
      {
        value: "4",
        name: "4. Listar tareas pendientes",
      },
      {
        value: "5",
        name: "5. Completar tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar tarea",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];

//función asíncrona
const inquirerMenu = async () => {
  console.clear();
  console.log("==============".green);
  console.log("seleccione una opcion".green);
  console.log("==============\n".green);

  const { opcion } = await elInquirer.prompt(preguntas);
  return opcion;
};

module.exports = {
  inquirerMenu,
};
