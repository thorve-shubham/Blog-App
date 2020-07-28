import express from "express";
import bodyParser from "body-parser";
import userRoutes from '../routes/userRoutes';
import blogRoutes from '../routes/blogRoutes';
const server = express();

server.use(bodyParser.json());

server.use('/user',userRoutes.getRoutes());
server.use('/blog',blogRoutes.getRoutes());

export default server;  