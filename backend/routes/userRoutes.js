import express from 'express';
import UserController from '../controller/UserController';

class UserRouter {
    constructor(){
        this.router = express.Router();
        this.getRoutes = this.getRoutes.bind(this);
    }

    getRoutes(){
        this.router.post('/add',UserController.insert);
        this.router.get('/all',UserController.getAll);
        this.router.delete('/delete',UserController.delete);
        this.router.put('/update',UserController.update);
        return this.router;
    }
    
}

export default new UserRouter();