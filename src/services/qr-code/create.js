import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  // Chama o prompt de QRCODE
  prompt.get(promptSchemaQRCode, handle);
  prompt.start();
}

export default createQRCode;