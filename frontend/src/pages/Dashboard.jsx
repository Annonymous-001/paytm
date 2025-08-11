import { useEffect, useState } from "react";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";


export const Dashboard = () => {
    const [balance, setBalance] = useState(null);
    const [userToken] = useState(localStorage.getItem("token"));
  

    useEffect(() => {
        if (userToken) {
            axios.get("http://localhost:3000/api/v1/account/balance", {
                headers: { Authorization: `Bearer ${userToken}` }
            })
            .then(response => setBalance(response.data.balance))
            .catch(error => console.error("Error fetching balance:", error));
        }
    }, [userToken]);



    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <Appbar />
            <div className="container mx-auto p-8">
                {/* Balance Card */}
                <div className="bg-white text-gray-800 shadow-xl rounded-2xl p-6 mb-6 max-w-md mx-auto">
                    <h2 className="text-xl font-bold mb-2">Your Balance</h2>
                    {balance !== null ? (
                        <Balance value={balance.toFixed(2)} />
                    ) : (
                        <p className="text-gray-600">Loading balance...</p>
                    )}
                </div>

                {/* Users List */}
                <div className="bg-white text-gray-800 shadow-xl rounded-2xl p-6 max-w-lg mx-auto">
                    <h2 className="text-xl font-bold mb-4">Users</h2>
                    <Users userToken={userToken} />
                </div>
            </div>

        
        </div>
    );
};
