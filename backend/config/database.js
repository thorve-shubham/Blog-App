import mongoose from "mongoose";

class Connection {
  constructor() {
    const url = process.env.MONGODB_URI || `mongodb://localhost/Blog-App`;
    mongoose.connect(url,{ useNewUrlParser : true, useUnifiedTopology : true})
        .then(()=>console.log("Connected to Database"))
        .catch((err)=>console.log("Something Went Wrong : ", err));
  }
}

export default new Connection();