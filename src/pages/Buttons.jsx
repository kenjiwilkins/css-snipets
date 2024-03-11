import "../assets/styles/buttons.css";

function ButtonPage() {
  return (
    <article className="container">
      <section>
        <h1>Buttons</h1>
      </section>
      <div className="button-container">
        <section>
          <h2>Filling</h2>
          <button className="filling">
            <span className="filling-span">Filling</span>
          </button>
        </section>
        <section>
          <h2>Expanding</h2>
          <button className="expanding">Expanding</button>
        </section>
        <section>
          <h2>Glowing</h2>
          <button className="glowing">Glowing</button>
        </section>
        <section>
          <h2>Flipping</h2>
          <button className="flipping">Flipping</button>
        </section>
        <section>
          <h2>Shaking</h2>
          <button className="shaking">Shaking</button>
        </section>
        <section>
          <h2>Emerging</h2>
          <button className="emerging">Emerging</button>
        </section>
      </div>
    </article>
  );
}

export default ButtonPage;
