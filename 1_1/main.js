const fs = require("fs");
const filePath = "./1_1/";
const fileName = "text.txt";
fs.appendFileSync(filePath + fileName, "\nreza");
