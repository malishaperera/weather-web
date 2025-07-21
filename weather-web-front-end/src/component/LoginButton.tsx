import {type RedirectLoginOptions, useAuth0} from "@auth0/auth0-react";


interface LoginButtonProps {
    disabled?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ disabled = false }) => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button
            onClick={() =>
                loginWithRedirect({
                    connection: "Username-Password-Authentication",
                } as RedirectLoginOptions & { connection: string })
            }
            disabled={disabled}
            className={`px-5 py-2 rounded-md bg-blue-600 text-white font-semibold transition-all duration-200
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        >
            Log In
        </button>
    );
};

export default LoginButton;
