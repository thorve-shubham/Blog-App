import brcyptLib from '../helpers/bcryptLib';

class Controller {
    constructor(service){
        this.service = service;
        this.insert = this.insert.bind(this);
    }

    async insert(req,res){
        req.body.password = await brcyptLib.generateHashedPassword(req.body.password)
        let response = await this.service.insert(req.body);
        if(response.error) return res.status(response.status).send(response);
        return res.status(201).send(response);
    }
}

export default Controller;