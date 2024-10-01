const { createHash } = require("node:crypto");

const hash = createHash("sha1").update("password").digest();

console.log("Nodejs");
console.log(hash);

const arrBuf = new ArrayBuffer(2);
const view = new Uint8Array(arrBuf);
crypto.getRandomValues(view);

console.log("Brower");
console.log(arrBuf);
