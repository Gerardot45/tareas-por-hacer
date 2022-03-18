require("colors");

const mostrarMenu = () => {
  console.clear();
  console.log("==============".green);
  console.log("seleccione una opcion".green);
  console.log("==============\n".green);

  console.log(`${"1".green}. crear una tarea`);
  console.log(`${"2".green}. listar tareas`);
  console.log(`${"3".green}. listar tareas completadas`);
  console.log(`${"4".green}. listar tareas pendientes`);
  console.log(`${"5".green}. completar tarea(s)`);
  console.log(`${"6".green}. borrar tarea`);
  console.log(`${"0".green}. salir`);

  //creación de interfaz para recibir y entregar información
  const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine.question("Seleccione una opcion: ", (opt) => {
    readLine.close();
  });
};

const pausa = () => {
  const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine.question(`\nPresione ${'ENTER'.green} para continuar`, (opt) => {
    readLine.close();
  });
};

//exportamos todos las funciones
module.exports = {
  mostrarMenu,
  pausa
};
