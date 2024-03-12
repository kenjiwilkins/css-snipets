import "../assets/styles/texts.css";
const LOREN_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

function TextPage() {
  return (
    <article className="container">
      <section>
        <h1>Texts</h1>
      </section>
      <div className="text-container">
        <section>
          <h2>Lip off tape</h2>
          <div className="text-demo-container">
            <p className="rip-off">{LOREN_IPSUM}</p>
            <div className="placeholder"></div>
          </div>
        </section>
        <section>
          <h2>Drop From Screen</h2>
          <div className="text-demo-container">
            <div className="placeholder"></div>
            <p className="drop-from-z">{LOREN_IPSUM}</p>
          </div>
        </section>
        <section>
          <h2>slide in DJ</h2>
          <div className="text-demo-container">
            <p className="slide-in">{LOREN_IPSUM}</p>
            <div className="placeholder"></div>
          </div>
        </section>
        <section>
          <h2>Shadowing</h2>
          <div className="text-demo-container">
            <div className="placeholder"></div>
            <p className="shadowing">{LOREN_IPSUM}</p>
          </div>
        </section>
        <section>
          <h2>Sliding</h2>
          <div className="text-demo-container">
            <p className="sliding">{LOREN_IPSUM}</p>
            <div className="placeholder"></div>
          </div>
        </section>
        <section>
          <h2>Emerging</h2>
          <div className="text-demo-container">
            <div className="placeholder"></div>
            <p className="emerging">{LOREN_IPSUM}</p>
          </div>
        </section>
        <section>
          <h2>Flip Appearing</h2>
          <div className="text-demo-container">
            <p className="flip-appearing">{LOREN_IPSUM}</p>
            <div className="placeholder"></div>
          </div>
        </section>
        <section>
          <h2>Shaking</h2>
          <div className="text-demo-container">
            <div className="placeholder"></div>
            <p className="shaking">{LOREN_IPSUM}</p>
          </div>
        </section>
      </div>
    </article>
  );
}
export default TextPage;
