// Database-related utilities,
// such as connecting, disconnecting, seeding, and deleting from the database 

const { default: mongoose } = require("mongoose");

async function dbConnect(){
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/SuperCoolExampleDatabase");
		console.log("Database connected!");
	} catch (error) {
		console.log("Database connection failed!\n" + JSON.stringify(error));
	}
}


async function dbClose(){
	await mongoose.connection.close();
	console.log("Database disconnected!");
}


await dbConnect();
await dbClose();
// console.log("file will end after this log");