import express from "express";
import {fetchWeather} from "../controllers/weather.controller";
import {checkJwt} from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/weather",checkJwt,fetchWeather);
console.log("hellos");


export default router;