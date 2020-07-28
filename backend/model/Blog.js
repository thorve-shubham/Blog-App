import mongoose from 'mongoose';
import unique_identifier from 'mongoose-unique-validator';

class Blog {
    initSchema(){
        let blogSchema = mongoose.Schema({
            title : {
                type : String,
                required : true 
            },
            topic : {
                type : String,
                enum : [ "Technology","Fashion","Science","Entertainment","Fitness"],
                required : true
            },
            tags : {
                type : [String]
            },
            body : {
                type : String,
                required : true
            },
            createdBy : {
                type : String,
                required : true
            },
            createdOn : {
                type : Date,
                default : new Date()
            }
        });
        mongoose.model('blogs',blogSchema);
    }

    getInstance(){
        this.getInstance();
        return mongoose.model('blogs')
    }
}