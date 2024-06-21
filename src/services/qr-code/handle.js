import qr from "qrcode-terminal"; // utilizado para gerar o qrcode
import chalk from "chalk";

async function handle(err, result) {
  if (err) {
    console.log("Erro na aplicação.");
    return;
  }

  // result.type -> pega o valor do tipo do QRCODE escolhido por meio do prompt
  const isSmall = result.type == 2;

  // result.link -> valor informado para gerar o qrcode (ULR)
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso 👇\n"));
    console.log(qrcode);
  });
}

export default handle;