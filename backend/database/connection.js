const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        //mongodb connection string
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useFindAndModify:false,
            useCreateIndex:true

        })
        console.log("Mongo DB connected ");
    }catch(err){
        console.log("Connection failed"+err);
        process.exit(1);
    }
}

module.exports = connectDB;