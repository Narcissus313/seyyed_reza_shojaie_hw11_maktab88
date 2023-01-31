const fs = require("fs");
const filePath = "./1_4/";
const fileName = "third-text.txt";

fs.unlink(filePath + fileName, (err) => {
	if (!!err) {
		return console.log(`file ${fileName} doesn't exist`);
	}
	console.log(fileName + " deleted successfully");
});
