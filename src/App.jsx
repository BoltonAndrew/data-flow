import style from "./App.module.css";
import Product from "./components/Product";

function App() {
  return (
    <div className={style.App}>
      <header>
        <h1>Unidirectional Data Flow</h1>
      </header>
      <main>
        <h2>New Code</h2>
        <Product />
      </main>
      <footer>
        <h3>Created By Andy Bolton</h3>
      </footer>
    </div>
  );
}

export default App;
