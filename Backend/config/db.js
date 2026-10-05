const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");

dns.setServers(["8.8.8.8", "1.1.1.1"]);


const connectedDB = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Database connected successfully.");
           // console.log("Database Name:", mongoose.connection.name);
           // console.log("Host:", mongoose.connection.host);
        })
        .catch((error) => {
            console.log("Error to connect database:", error);

        });
};

module.exports = connectedDB;