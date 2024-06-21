import chalk from "chalk"; // utilizado para estilizar textos no terminal

// Configurações do prompt para Menu
const promptSchemaMain = [
  {
    name: "menuOption", // Nome para ser utilizado no Menu de escolha
    description: chalk.yellow.bold(
      "Escolha a ferramenta: [1] - QRCODE ou [2] - PASSWORD"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre [1] e [2]"),
    required: true,
  },
];

export default promptSchemaMain;