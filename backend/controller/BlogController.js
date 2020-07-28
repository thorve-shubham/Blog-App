import Controller from "./Controller";
import BlogService from "../services/BlogService";
import Blog from "../model/Blog";

const blogService = new BlogService(new Blog().getInstance()); 

class BlogController extends Controller {
    constructor(service){
        super(service);
        this.getById = this.getById.bind(this);
    }

    async getById(req,res){
        let response = await this.service.getById(req.params.id);
        if(response.error) return res.status(response.status).send(response);
        return res.status(201).send(response);
    }
}

export default new BlogController(blogService);