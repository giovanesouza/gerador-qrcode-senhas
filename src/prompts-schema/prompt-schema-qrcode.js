import chalk from "chalk"; // utilizado para estilizar textos no terminal

// Configurações do prompt para QRCODE
const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR CODE: "), // O que for digitado aqui é armazenado na variável name "link"
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de QRcode: [1] - NORMAL ou [2] - TERMINAL"
    ), // Utilizado para definir a exibição do QRCODE
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre [1] e [2]"), // mensagem de erro
    required: true,
  },
];

export default promptSchemaQRCode; 