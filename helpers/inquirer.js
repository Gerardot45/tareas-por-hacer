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
        name: `${"1".blue}. Crear lista`,
      },
      {
        value: "2",
        name: `${"2".blue}. Listar tareas`,
      },
      {
        value: "3",
        name: `${"3".blue}. Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4".blue}. Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5".blue}. Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6".blue}. Borrar tarea`,
      },
      {
        value: "0",
        name: `${"0".blue}. Salir`,
      },
    ],
  },
];

//función asíncrona
const inquirerMenu = async () => {
  console.clear();
  console.log("==============".green);
  console.log("seleccione una opcion".white);
  console.log("==============\n".green);

  const { opcion } = await elInquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  const entrada = [
    {
      type: "input",
      name: "enter",
      messsage: `Presione ${"enter".gree} para continuar`,
    },
  ];
  console.log("\n");
  await elInquirer.prompt(entrada);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await elInquirer.prompt(question);
  console.log(desc);
  return desc;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
};
