import "../assets/styles/loaders.css";

function LoaderPage() {
  return (
    <article className="loader-page-container">
      <section>
        <h1>Loaders</h1>
      </section>
      <div className="loader-container">
        <h2>Spinner - border</h2>
        <div className="loader"></div>
        <h2>Spinner - border - multi color</h2>
        <div className="loader loader-2"></div>
      </div>
    </article>
  );
}

export default LoaderPage;
