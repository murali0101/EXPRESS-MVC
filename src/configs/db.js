const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://muralimv:murali12345@masai.g7gpy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};
module.exports=connect;