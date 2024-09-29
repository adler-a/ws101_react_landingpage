import './Home.css';


function Home() {
    return(
        <section className="hero" id="hero">
            <img src="9d05f810-5ba7-4533-809a-eb1e9b6b48a0.jpg" alt="hero-img" />
            <div className="hero-content">
              <h1>Transforming innovative ideas</h1>
              <h2>
                into seamless digital experiences, one line of code at a time—where
                imagination and technology converge.
              </h2>
              <a href="#about"><button>Get Started</button></a>
            </div>
        </section>
    );

}

export default Home;