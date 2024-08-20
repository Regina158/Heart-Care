import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="flex bg-purple-900 min-h-screen items-center justify-end">
                <img
                src="https://i.pinimg.com/originals/e3/18/d5/e318d52370cd99c920b0b05dd14c4ac3.jpg"
                alt="Decorative"
                className="w-auto h-auto max-w-md max-h-80 object-cover rounded-lg shadow-lg mr-20"
                />
            </div>
        </div>
  );
};

export default Home;
