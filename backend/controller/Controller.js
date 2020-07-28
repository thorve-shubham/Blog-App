import brcyptLib from '../helpers/bcryptLib';

class Controller {
    constructor(service){
        this.service = service;
        this.insert = this.insert.bind(this);
        this.getAll = this.getAll.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    async insert(req,res){
        let response = await this.service.insert(req.body);
        if(response.error) return res.status(response.status).send(response);
        return res.status(201).send(response);
    }

    async getAll(req,res){
        let response = await this.service.getAll();
        if(response.error) return res.status(response.status).send(response);
        return res.status(201).send(response);
    }

    async delete(req,res){
        let response = await this.service.delete(req.body.id);
        if(response.error) return res.status(response.status).send(response);
        return res.status(201).send(response);
    }

    async update(req,res){
        let response = await this.service.update(req.body.id,req.body.data);
        if(response.error) return res.status(response.status).send(response);
        return res.status(201).send(response);
    }
}

export default Controller;