import express from "express";
import bodyParser from "body-parser";
import userRoutes from '../routes/userRoutes';
const server = express();

server.use(bodyParser.json());

server.use('/user',userRoutes.getRoutes())

export default server;  