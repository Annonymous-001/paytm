import { Wallet } from "lucide-react";

export const Balance = ({ value }) => {
    return (
        <div className="flex items-center bg-blue-600 text-white rounded-lg p-4 shadow-md">
            <Wallet size={28} className="mr-3" />
            <div className="flex flex-col">
                <span className="font-medium text-lg">Your Balance</span>
                <span className="text-xl font-semibold">Rs {value}</span>
            </div>
        </div>
    );
};
