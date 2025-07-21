import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface WeatherData {
    id: number;
    name: string;
    weather: { description: string; icon: string }[];
    main: { temp: number };
}

const Weather = () => {
    const { getAccessTokenSilently } = useAuth0();
    const [data, setData] = useState<WeatherData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const token = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: "https://weather-api.assignment.com",
                    },
                });
                console.log("Access Token:", token);

                const response = await axios.get("http://localhost:3000/api/weather", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setData(response.data);
                setLoading(false);
            } catch (error: any) {
                console.error("Failed to get token or fetch weather:", error);
                setError(error.message || "Error fetching weather data");
                setLoading(false);
            }
        };

        fetchWeather();
    }, [getAccessTokenSilently]);


    if (loading) return <p>Loading weather data...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.map((city) => {
                const iconCode = city.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

                return (
                    <div
                        key={city.id}
                        className="p-4 border rounded-xl shadow-md bg-blue-50 flex items-center gap-4"
                    >
                        <img src={iconUrl} alt={city.weather[0].description}
                             className="w-16 h-16"/>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">{city.name}</h2>
                            <p className="capitalize text-gray-600">{city.weather[0].description}</p>
                            <p className="text-gray-700 font-medium">
                                🌡️ {Math.round(city.main.temp)}°C
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Weather;
