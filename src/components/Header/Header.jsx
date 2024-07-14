import { Link } from "react-router-dom";
import SearchInput from "../Search/SearchInput";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src="/assets/logo.png" alt="Almdrasa Blog Logo" />
        </Link>
      </div>
      <Link to={"/"}>
        <h3>Home</h3>
      </Link>
      <SearchInput />
    </header>
  );
}

export default Header;
