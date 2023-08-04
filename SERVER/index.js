import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL);
await client.connect();
console.log('MONGODB client connected');
//! using cors and express.json();
app.use(cors())
app.use(express.json())


app.get('/', function(request, response) {
    response.send('WELCOME to SERVER SIDE')
})


app.listen(PORT, () => console.log(`SERVER IS LISTENING AT ${PORT}`));