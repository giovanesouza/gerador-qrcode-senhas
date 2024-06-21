import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  // Utilizando o prompt para interação com o usuário
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) console.log(err);

    if (choose.menuOption == 1) await createQRCode();
    if (choose.menuOption == 2) await createPassword();
  });

  prompt.start(); // Inicia o prompt com a solicitação de escolha acima
}


main();