import Service from "./Service";
import bcryptLib from "../helpers/bcryptLib";
import jwt from 'jsonwebtoken';

class UserService extends Service{
    constructor(model){
        super(model);
    }

    async login(data){
        try{
            let user = await this.model.findOne({ email : data.email });
            if(user){
                if(bcryptLib.isPasswordRight(data.password,user.password)){
                    
                    let info = {
                        name : user.firstName+" "+user.lastName,
                        email :  user.email
                    }
                    let authToken = this.generateToken(info);
                    return {
                        error : false,
                        authToken,
                        message : "logged in successfully"
                    }
                }
            }   
            return {
                error : true,
                status : 500,
                Message : "invalid User/ Password"
            }
        }catch(error){
            console.log("Something went wrong while loggin in",error);
            return {
                error : true,
                status : 500,
                Message : "invalid User/ Password"
            }
        }
    }

    generateToken(data){
        return jwt.sign({ data },process.env.jwtKey,{ expiresIn : '24h'});
    }

}

export default UserService