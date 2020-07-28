import Controller from "./Controller";
import BlogService from "../services/BlogService";
import Blog from "../model/Blog";

const blogService = new BlogService(new Blog().getInstance()); 

class BlogController extends Controller {
    constructor(service){
        super(service)
    }
}

export default new BlogController(blogService);