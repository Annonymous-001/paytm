import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectBasedOnAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            // User is logged in, check user details
            axios.get("http://localhost:3000/api/v1/user/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                // If response is successful, redirect to /dashboard
                navigate("/dashboard");
            })
            .catch(error => {
                // If there's an error (e.g., invalid token), redirect to /signup
                console.error("Error fetching user details:", error);
                navigate("/signup");
            });
        } else {
            // No token found, redirect to /signup
            navigate("/signup");
        }
    }, [navigate]);

    return <div>Loading...</div>; // Optional loading state
};

export default RedirectBasedOnAuth;
