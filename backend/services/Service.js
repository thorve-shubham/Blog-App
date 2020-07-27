

class Service {
    constructor(model){
        this.model = model;
    }

    async insert(data){
        try{
            let item = await this.model.create(data);
            if(item){
                return {
                    error : false,
                    item
                }
            }
            return{
                error : true,
                status : 500,
                message : error.errmsg || "Failed to Create item"
            }
        }
        catch(error){
            return{
                error : true,
                status : 500,
                message : error._message || "Failed to Create item"
            }
        }
    }

    async getAll(){
        try{
            let items = await this.model.find();
            if(items.length>0){
                return {
                    error : false,
                    items
                }
            }
            return {
                error : true,
                status : 500,
                message : error.errmsg || "Failed to retrieve items"
            }
        }catch(error){  
            return {
                error : true,
                status : 500,
                message : error.errmsg || "Failed to retrieve items"
            }
        }
    }

    async delete(id){
        try{
            let item = await this.model.findByIdAndDelete(id);
            if(item){
                return {
                    error : false,
                    item
                }
            }
            return {
                error : true,
                status : 500,
                message : error.errmsg || "Failed to delete item"
            }
        }catch(error){  
            return {
                error : true,
                status : 500,
                message : error.errmsg || "Failed to delete item"
            }
        }
    }

    async update(id,data){
        try{
            let item = await this.model.findOneAndUpdate(id,data,{new : true});
            if(item){
                return {
                    error : false,
                    item
                }
            }
            return {
                error : true,
                status : 500,
                message : error.errmsg || "Failed to update item"
            }
        }catch(error){
            return {
                error : true,
                status : 500,
                message : error.errmsg || "Failed to update item"
            }
        }
    }
}

export default Service;