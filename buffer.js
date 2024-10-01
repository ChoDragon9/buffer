const cfb = require("cfb");

const buf = Buffer.alloc(6);

cfb.utils.prep_blob(buf, 0);
buf.write_shift(6, "abc", "utf16le");

console.log("Buffer");
console.log(buf);

const arrBuf = new ArrayBuffer(6);
const view = new Uint8Array(arrBuf);

cfb.utils.prep_blob(view, 0);
view.write_shift(6, "abc", "utf16le");

console.log("ArrayBuffer");
console.log(arrBuf);
