const fs = require("fs");
const filePath = "./1_2/";
const fileName = "second-text.txt";
fs.writeFileSync(filePath + fileName, "custom text", (err) => {
	if (err) console.log("there was a problem");
});
