import "../assets/styles/links.css";

function LinkPage() {
  return (
    <article className="container">
      <section>
        <h1>Links Hover</h1>
      </section>
      <div className="link-container">
        <div className="tooltip">
          <a href="#" className="tooltip-link" data-tooltip="Hi World">
            <span className="tooltiptext">Tooltip</span>
          </a>
        </div>
        <div className="blink">
          <a href="#" className="blink-link">
            Blink
          </a>
        </div>
        <div className="slide-underline">
          <a href="#" className="slide-underline-link">
            Slide Underline
          </a>
        </div>
      </div>
    </article>
  );
}

export default LinkPage;
