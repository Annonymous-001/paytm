import { useEffect, useState } from "react";
import axios from "axios";
import { UserCircle, LogOut } from "lucide-react"; // Importing icons
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.get("http://localhost:3000/api/v1/user/me", {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => setUser(response.data))
            .catch(error => console.error("Error fetching user details:", error));
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    };

    return (
        <div className="shadow-md h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-between items-center px-6">
            {/* Left Section - Logo */}
            <div className="text-xl font-bold tracking-wide">💰 PayTM App</div>

            {/* Right Section - User Info */}
            <div className="flex items-center gap-4">
                {user ? (
                    <>
                        <span className="text-lg font-medium">Hello, {user.firstName}</span>
                        <div className="rounded-full h-12 w-12 bg-white text-gray-800 flex items-center justify-center font-bold text-lg">
                            {user.firstName[0].toUpperCase()}
                        </div>
                        <button 
                            onClick={handleSignOut} 
                            className="p-2 rounded-full hover:bg-white/20 transition"
                        >
                            <LogOut size={24} />
                        </button>
                    </>
                ) : (
                    <>
                        <span className="text-lg">Hello</span>
                        <div className="rounded-full h-12 w-12 bg-white text-gray-800 flex items-center justify-center">
                            <UserCircle size={32} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
