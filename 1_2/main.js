const fs = require("fs");
const filePath = "./1_2/";
const fileName = "second-text.txt";
let writeStream = fs.createWriteStream(filePath + fileName);
writeStream.write("custom text");
writeStream.end();
