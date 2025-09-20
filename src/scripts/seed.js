const { Book } = require("../models/BookModel");
const { dbConnect, dbClose } = require("../utils/database");


async function seed(){
	// 1. Connect to the DB
	await dbConnect();

	// 2. Start seeding stuff into the DB
	let booksData = [
		{
			title: "Hitchhiker's Guide to the Galaxy",
			author: [
				"Douglas Adams"
			],
			series: "Hitchhiker's Guide to the Galaxy"
		},
		{
			title: "Some Cool Book About Puns",
			author: [
				"Some Punny Guy"
			],
			series: "Very Serious Collection of Very Funny Jokes"
		},
	];

	let seedResult = await Book.insertMany(booksData);

	console.log(seedResult);

	// 3. Disconnect from the DB
	await dbClose();
}

// 4. Make sure the script actually runs the function configured here!
seed();