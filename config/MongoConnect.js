const mongoose = require("mongoose");

const mongoConnect = async () => {
	try {
		const connect = await mongoose.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${connect.connection.host}`)
	} catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = mongoConnect;