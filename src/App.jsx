import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import { ArticlesProvider } from "./contexts/ArticlesContexts";
function App() {
  return (
    <div className={styles.app}>
      <ArticlesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/:id/:postTitle" element={<PostPage />} />
          </Routes>
        </BrowserRouter>
      </ArticlesProvider>
    </div>
  );
}

export default App;
