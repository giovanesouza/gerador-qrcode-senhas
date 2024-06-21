import permittedCharacters from "./utils/permitted-characters.js";

// Contém a lógica para a criação da senha
async function handle() {
  let characters = []; // armazena todos os caracteres permitidos com base nas configurações do .env
  let password = ""; // armazena a senha gerada

  const passwordLength = process.env.PASSWORD_LENGTH;
  characters = await permittedCharacters(); // contém a lógica dos caracteres permitidos com base nas configurações do .env

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length); // pega caracteres aleatorios de characteres[] até completar o tamanho da senha
    password += characters[index]; // concatena os caracteres selecionados acima (index)
  }

  return password; // retorna a senha para o usuário
}

export default handle;