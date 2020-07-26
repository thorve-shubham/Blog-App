import mongoose, { mongo } from 'mongoose';
import unique_validator from 'mongoose-unique-validator';

class User {

    initSchema(){
       const userShema = new mongoose.Schema({
            firstName : {
                type : String,
                required : true
            },
            lastName : {
                type : String,
                required : true
            },
            email : {
                type : String,
                unique : true,
                required : true
            },
            password : {
                type : String,
                required : true
            }
       }); 

       userShema.plugin(unique_validator);
       mongoose.model('users',userShema)
    }
    getInstance(){
        this.initSchema();
        return mongoose.model('users');
    }
}

export default User;