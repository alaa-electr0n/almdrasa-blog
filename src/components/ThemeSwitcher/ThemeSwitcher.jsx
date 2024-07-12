import styles from "./ThemeSwitcher.module.css";
function ThemeSwitcher() {
  return (
    <div className={styles["checkbox-container"]}>
      <input type="checkbox" className={styles.checkbox} id="checkbox" />
      <label htmlFor="checkbox" className={styles["checkbox-label"]}>
        <span>🌞</span>
        <span>🌙</span>
        <span className={styles.ball}></span>
      </label>
    </div>
  );
}

export default ThemeSwitcher;
