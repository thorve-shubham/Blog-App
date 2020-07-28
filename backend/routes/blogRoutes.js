import express from 'express';
import BlogController from '../controller/BlogController';

class BlogRoutes {
    constructor(){
        this.router = express.Router();
    }

    getRoutes(){
        this.router.post('/add',BlogController.insert);
        this.router.put('/update',BlogController.update);
        this.router.delete('/delete',BlogController.delete);
        return this.router;
    }
}

export default new BlogRoutes();