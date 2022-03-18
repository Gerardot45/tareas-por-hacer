require("colors");

const { inquirerMenu } = require("./helpers/inquirer");

const main = async () => {
  let opt = "";
  do {
    //espera hasta que tengamos una respuesta
    opt = await inquirerMenu();
    console.log({ opt });
  } while (opt !== "0");
};
main();
