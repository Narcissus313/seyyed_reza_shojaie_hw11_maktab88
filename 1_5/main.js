const fs = require("fs");
const userDataFile = "./user-data.json";
let userData = fs
	.readFileSync(userDataFile, (err) => console.log("err", err))
	.toString();
userData = JSON.parse(userData);
userData.map((user) => {
	if (user.age >= 18) {
		console.log(user);
	}
});
