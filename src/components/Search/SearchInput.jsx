import styles from "./SearchInput.module.css";
function SearchInput() {
  return (
    <div className={styles.searchInput}>
      <input type="text" id="search-input" placeholder="Search" />
      <label htmlFor="search-input">
        <img src="/assets/search-outline.svg" />
      </label>
    </div>
  );
}

export default SearchInput;
