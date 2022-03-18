require("colors");

const { mostrarMenu, pausa } = require("./helpers/mensajes");

const main = async () => {
  console.log("hola");
  let opt = "";
  do {
    //espera hasta que tengamos una respuesta
    opt = await mostrarMenu();
    console.log({ opt });
    if(opt !== '0') await pausa();
  } while (opt !== "0");
};
main();
