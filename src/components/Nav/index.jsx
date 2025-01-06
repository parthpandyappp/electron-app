import { useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navContainer}>
      <div>
        <img
          src="/mainicon.png"
          alt="Main Icon"
          className={styles.navTitle}
          onClick={() => navigate("/")}
        />
      </div>
      <ul className={styles.secondaryNavContainer}>
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li className={styles.requestQuoteContainer}>Request a Quote</li>
      </ul>
    </nav>
  );
};
