import Navbar from "../Components/Navbar";

const Artikel = () => {
    return (
      <div>
        <Navbar />
        <div
          className="hero min-h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/564x/21/7a/7a/217a7a60cc05cc990b8586fdec8076af.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content flex justify-center items-center text-center text-neutral-content">
            <div className="max-w-lg px-4 py-8">
              <h1 className="text-5xl font-bold mb-4">Hello there</h1>
              <p className="text-lg mb-6">
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
}

export default Artikel;