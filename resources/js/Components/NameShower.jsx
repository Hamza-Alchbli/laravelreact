import React, { useState } from "react";

const NameShower = ({ name }) => {
    const [isReversed, setIsReversed] = useState(false);

    const toggleReverse = () => {
        setIsReversed(!isReversed);
    };

    const getFullName = () => {
        if (isReversed) {
            return `${name.lastName} ${name.middleName} ${name.firstName}`;
        } else {
            return `${name.firstName} ${name.middleName} ${name.lastName}`;
        }
    };

    const getSalutation = () => {
        if (name.gender === "male") {
            return "Dhr";
        } else if (name.gender === "female") {
            return "Mevr";
        } else {
            return "";
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-sm">
            <p className="text-2xl font-bold mb-4">
                {getSalutation()} {getFullName()}
            </p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={toggleReverse}
            >
                Toggle Reverse
            </button>
        </div>
    );
};

export default NameShower;
