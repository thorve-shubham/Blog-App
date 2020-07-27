import Controller from "./Controller";
import UserService from "../services/UserService";
import User from "../model/User";

const userService = new UserService(new User().getInstance());

class UserController extends Controller{
    constructor(service){
        super(service);
    }

}

export default new UserController(userService);