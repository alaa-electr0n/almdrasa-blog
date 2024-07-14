import { useArticles } from "../../contexts/ArticlesContexts";
import styles from "./SearchInput.module.css";

function SearchInput() {
  const { searchquey, setSearchquery } = useArticles();

  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        id="search-input"
        placeholder="Search"
        value={searchquey}
        onChange={(e) => setSearchquery(e.target.value)}
      />
      <label htmlFor="search-input">
        <img src="/assets/search-outline.svg" />
      </label>
    </div>
  );
}

export default SearchInput;
