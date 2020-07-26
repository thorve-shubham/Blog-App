import server from './config/server';
import './config/database';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {

  console.log(`app running on port ${PORT}`);

});