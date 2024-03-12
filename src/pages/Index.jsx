import { Link } from "react-router-dom";
function Index() {
  return (
    <div className="container">
      <section>
        <h1>Learn Animation by Kenji Wilkins</h1>
      </section>
      <main>
        <ul>
          <li>
            <Link to="/buttons">Buttons</Link>
          </li>
          <li>
            <Link to="/texts">Texts</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
          <li>
            <Link to="/inputs">Inputs</Link>
          </li>
          <li>
            <Link to="/loaders">Loaders</Link>
          </li>
        </ul>
      </main>
      <footer>© 2024 by Kenji Wilkins</footer>
    </div>
  );
}

export default Index;
