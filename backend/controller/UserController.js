import Controller from "./Controller";
import UserService from "../services/UserService";
import User from "../model/User";

const userService = new UserService(new User().getInstance());

class UserController extends Controller{
    constructor(service){
        super(service);
        this.login = this.login.bind(this);
    }

    async login(req,res){
        let response = await this.service.login(req.body);
        if(response.error) return res.status(response.status).send(response);
        return res.status(201).send(response);
    }

}

export default new UserController(userService);