import { Request, Response, NextFunction } from "express";
import cities from "../data/cities.json";
import {getWeatherData} from "../services/weather.service";


export const fetchWeather = async (req: Request, res: Response, next: NextFunction) => {
    console.log("fetchWeather");
    try{
        const cityIds = cities.List.map(city => city.CityCode);
        console.log("city"+cityIds);
        const weather = await getWeatherData(cityIds);
        res.json(weather);
    }catch (error) {
        next(error)
    }
}