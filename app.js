require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");

const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();
  if (tareasDB) {
    //establecer las tareas
    
  }

  await pausa();

  do {
    //espera hasta que tengamos una respuesta
    opt = await inquirerMenu();
    console.log({ opt });

    switch (opt) {
      case "1":
        //crear la tareas
        const desc = await leerInput("Descripcion:");
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas.listadoArr);
        break;
    }

    // guardarDB(tareas.listadoArr);

    // //crean las nuevas tareas
    // const tareas = new Tareas();
    // const tarea = new Tarea("Comida");

    // //el id de la clase Tareas"es la nueva tares
    // tareas._listado[tarea.id] = tarea;
    await pausa();
  } while (opt !== "0");
};
main();
