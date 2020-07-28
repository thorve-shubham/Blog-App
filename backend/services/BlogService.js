import Service from "./Service";

class BlogService extends Service {
    constructor(model){
        super(model);
    }

    async getById(id){
        try {
            let blog = await this.model.findById(id);
            if(blog){
                return {
                    error : false,
                    blog
                }
            }
            return {
                error : true,
                status : 500,
                message : "Blog not Found"
            }
        }catch(error){
            console.log("failed to retrieve blog",error);
            return {
                error : true,
                status : 500,
                message : "Blog not Found"
            }
        }
    }
}

export default BlogService;