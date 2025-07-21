import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="
        px-6 py-2
        bg-red-600 hover:bg-red-700
        text-white font-semibold
        rounded-full
        shadow-lg
        transition
        duration-300
        ease-in-out
        focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-50
        select-none
      "
            aria-label="Logout"
            title="Log out"
        >
            Log Out
        </button>
    );
};

export default LogoutButton;
