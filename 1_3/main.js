const fs = require("fs");
const filePath = "./1_3/";
const fileName = "text.txt";

fs.readFile(filePath + fileName, (err) => {
	if (err) console.log("** There is no such file in this directory");
	else console.log("** The file exists here");
});

// fs.access(filePath + fileName, (err) =>
// 	err ? console.log("does not exist") : console.log("exists")
// );
