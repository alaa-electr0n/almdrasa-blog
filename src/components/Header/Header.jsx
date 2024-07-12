import SearchInput from "../Search/SearchInput";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/logo.png" alt="Almdrasa Blog Logo" />
      </div>
      <h3>Home</h3>
      <SearchInput />
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
