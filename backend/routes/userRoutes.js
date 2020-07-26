import express from 'express';
import UserController from '../controller/UserController';

class UserRouter {
    constructor(){
        this.router = express.Router();
        this.getRoutes = this.getRoutes.bind(this);
    }

    getRoutes(){
        this.router.post('/add',UserController.insert);
        return this.router;
    }
    
}

export default new UserRouter();