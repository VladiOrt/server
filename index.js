require("dotenv").config();
const mongoose = require('mongoose');
const { MONGO_URL } = process.env;

const dbConnection = async() =>{
  try{
      await mongoose.connect(MONGO_URL, {
          useNewUrlParser: true, 
          useUnifiedTopology: true,
      });
      console.log('DB ONLINE');
  }catch( error ){
      console.log( error );
      throw new Error('Failed connect to db');
  }
}

module.exports = { 
  dbConnection
}