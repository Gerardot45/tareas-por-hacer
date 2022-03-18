require("colors");

const { mostrarMenu, pausa } = require("./helpers/mensajes");

const main = async () => {
  console.clear();
  console.log("hola");
  mostrarMenu();
  pausa()
};
main();
