import styles from "./App.module.css";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className={styles.app}>
      <HomePage />
      <main></main>
    </div>
  );
}

export default App;
