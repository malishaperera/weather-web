import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import { Menu } from "lucide-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [showCard, setShowCard] = useState(false);

    if (isLoading) return <div className="text-center py-8 text-gray-500">Loading ...</div>;
    if (!isAuthenticated || !user) return null;

    return (
        <div className="w-full flex justify-center relative">
            {/* Mobile Menu Icon */}
            <div className="absolute top-4 left-4 sm:hidden z-50">
                <button
                    onClick={() => setShowCard(!showCard)}
                    className="text-gray-600 hover:text-blue-600"
                    aria-label="Toggle Profile Card"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            <div
                className={`
                    bg-white p-6 rounded-2xl shadow-lg text-center
                    w-full max-w-sm
                    transition-all duration-300 ease-in-out
                    ${showCard ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute"}
                    sm:opacity-100 sm:translate-x-0 sm:relative
                `}
            >
                <img
                    src={user.picture}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 rounded-full border-4 border-blue-300 object-cover mx-auto shadow"
                    onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/96";
                    }}
                />

                <h2 className="mt-4 text-lg font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-600 text-sm">{user.email}</p>

                <div className="mt-4">
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
};

export default Profile;
