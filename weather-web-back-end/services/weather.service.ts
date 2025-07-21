import axios from "axios";
import dotenv from 'dotenv';


dotenv.config();

const API_KEY = process.env.OPEN_WEATHER_API_KEY;


let memoryCache: Record<string, any> = {};
export const getWeatherData = async (cityIds: string[]) => {

    console.log("getWeatherData",API_KEY);

    const cacheKey = cityIds.join(",");

    console.log("cacheKey",cacheKey);

    if (memoryCache[cacheKey]) {
        console.log("Serving from Memory Cache");
        memoryCache[cacheKey].forEach((city: any) => {
            console.log(`City: ${city.name}, Temp: ${city.main.temp}°C`);
        });
        return memoryCache[cacheKey];
    }


    const responses = await Promise.all(
        cityIds.map((id) =>
            axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    id,
                    units: "metric",
                    appid: API_KEY,
                },
            })
        )
    );
    responses.forEach((res) => {
        console.log(`City: ${res.data.name}, Temp: ${res.data.main.temp}°C`);
    });
    const data = responses.map(res => res.data);
    memoryCache[cacheKey] = data;


    setTimeout(() => {
        delete memoryCache[cacheKey];
    }, 5 * 60 * 1000); // 5 minutes

    return responses.map((res) => res.data);
};


// async function testCache() {
//     const cityIds = ["1248991","1850147","2644210"];
//
//     let data1 = await getWeatherData(cityIds);
//     console.log("First fetch:", data1.length);
//
//     let data2 = await getWeatherData(cityIds);
//     console.log("Second fetch:", data2.length);
// }
// testCache();