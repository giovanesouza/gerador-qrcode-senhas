# Gerador de QR Code e Senhas 

## 💻 Descrição

O Gerador de QR Code e Senhas é um projeto que permite a geração de QR Codes e senhas seguras diretamente pelo terminal. Este projeto foi desenvolvido para facilitar a criação de QR Codes a partir de URLs fornecidas pelo usuário e a geração de senhas com base em configurações personalizadas.

## 📦 Pacotes Utilizados
- `prompt` - Para interação com o usuário no terminal.
- `chalk` - Para estilizar a saída no terminal.
- `qrcode-terminal` - Para geração de QR Codes diretamente no terminal.


## 🪛 Instalação
Para instalar e configurar o projeto, siga os passos abaixo:

1. Clone o repositório:
```bash
git clone https://github.com/giovanesouza/gerador-qrcode-senhas.git
cd gerador-qrcode-senhas
```

2. Instale as dependências:
```bash
npm i
```

3. Configure o arquivo .env:

Renomeie o arquivo `.env.example` para `.env` e ajuste as configurações conforme necessário (veja Configuração abaixo).

## ⚙️ Configuração

O arquivo `.env` contém as configurações para a geração de senhas. Exemplo de configuração:

```
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=12
```

- `UPPERCASE_LETTERS`: Permitir letras maiúsculas.
- `LOWERCASE_LETTERS`: Permitir letras minúsculas.
- `NUMBERS`: Permitir números.
- `SPECIAL_CHARACTERS`: Permitir caracteres especiais.
- `PASSWORD_LENGTH`: Comprimento da senha gerada.

## 📝 Como usar
Para utilizar o projeto, execute o seguinte comando no terminal:

```bash
npm run start
```

**Você verá um menu com as seguintes opções**:

- **Gerar QR Code**: Escolha a opção [1] e insira o URL para gerar o QR Code - em seguida deverá escolher se deseja gerar um QR CODE padrão (imagem) ou tipo terminal.
- **Gerar Senha**: Escolha a opção [2] e a senha será gerada com base nas configurações do .env.

