import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
    return (
      <div>
        <Navbar />
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/564x/21/7a/7a/217a7a60cc05cc990b8586fdec8076af.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;
