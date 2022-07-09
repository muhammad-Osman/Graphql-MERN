const mongoose = require('mongoose');

const connectDatabase = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Mongodb connected: ${connect.connection.host}`.yellow.bold);
};

module.exports = connectDatabase;