import express from 'express';
import UserController from '../controller/UserController';

class UserRouter {
    constructor(){
        this.router = express.Router();
    }

    getRoutes(){
        this.router.post('/add',UserController.insert);
        this.router.get('/all',UserController.getAll);
        this.router.delete('/delete',UserController.delete);
        this.router.put('/update',UserController.update);
        this.router.post('/login',UserController.login);
        return this.router;
    }
    
}

export default new UserRouter();