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
            Plataforma oficial de los guerreros
          </p>

          <div className="buttons">
            <button className="primary-btn">
              Más sobre michi
            </button>

            <button className="secondary-btn">
              Ver competidores
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