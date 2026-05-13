import "./App.css";
import profileImage from "./images/angie.png";

function App() {
  return (
    <main className="hero">
      <div className="overlay"></div>

      <section className="hero-content">
        <div className="hero-text">
          <span className="tag">CineSoilerS</span>

          <h1>
            ANGIE
            <br />
            PORTOCARRERO
          </h1>

          <p>
            Frontend Developer apasionada por crear
            experiencias visuales modernas con React.
          </p>

          <div className="buttons">
            <button className="primary-btn">
              Explore Movies
            </button>

            <button className="secondary-btn">
              View Projects
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={profileImage}
            alt="Angie Portocarrero"
          />
        </div>
      </section>
    </main>
  );
}

export default App;