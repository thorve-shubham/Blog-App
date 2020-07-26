

class Service {
    constructor(model){
        this.model = model;
        this.insert = this.insert.bind(this);
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
        }
        catch(error){
            console.log(err);
            return{
                error : true,
                status : 500,
                message : error.errmsg || "Failed to Create User"
            }
        }
    }
}

export default Service;