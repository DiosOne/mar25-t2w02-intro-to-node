const { default: mongoose } = require("mongoose");


const Book = mongoose.model(
	// model name
	"Book", 

	// model properties
	{
		title: {
			type: String,
			required: true
		},
		isbn: [String],
		author: [String],
		series: String
	}
);

module.exports = {
	Book
}

// const Book = mongoose.model("Book", {})