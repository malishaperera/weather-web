import express, { Request, Response, NextFunction } from 'express';

import weatherRoutes from './routes/weather.routes';

import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());


app.use("/api/",weatherRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});