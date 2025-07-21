import './App.css'
import LoginButton from "./component/LoginButton.tsx";
import Profile from "./component/Profile.tsx";
import {useAuth0} from "@auth0/auth0-react";
import Weather from "./component/Weather.tsx";


function App() {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading authentication status...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6 text-center">
                🌦️ Weather App
            </h1>

            <div className="mb-4">
                {!isAuthenticated && <LoginButton />}
            </div>

            <div className="mb-6 flex absolute top-0 right-5">
                <Profile />
            </div>

            <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 space-y-6">
                {isAuthenticated ? (
                    <Weather />
                ) : (
                    <p className="text-center text-gray-600 font-medium">
                        🔐 Please login to view weather information.
                    </p>
                )}
            </div>
        </div>
    );
}
export default App;