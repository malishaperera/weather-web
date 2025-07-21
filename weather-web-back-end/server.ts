import express, { Request, Response, NextFunction } from 'express';
import weatherRoutes from './routes/weather.routes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
}));

app.use("/api/",weatherRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});