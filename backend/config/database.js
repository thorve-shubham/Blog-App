import mongoose from "mongoose";

class Connection {
  constructor() {
    const url = process.env.MONGODB_URI || `mongodb://localhost/Blog-App`;
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose.connect(url)
        .then(()=>console.log("Connected to Database"))
        .catch((err)=>console.log("Something Went Wrong : ", err));
  }
}

export default new Connection();