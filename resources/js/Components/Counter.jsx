import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleReset = () => {
        setCount(0);
    };

    const handleRandom = () => {
        const randomNumber = Math.floor(Math.random() * 11) + 5;
        setCount(randomNumber);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-sm">
            <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
            <div className="space-x-4">
                <button
                    onClick={handleIncrement}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Increment
                </button>
                <button
                    onClick={handleDecrement}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                >
                    Decrement
                </button>
                <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
                >
                    Reset
                </button>
                <button
                    onClick={handleRandom}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                >
                    Random
                </button>
            </div>
        </div>
    );
};

export default Counter;
