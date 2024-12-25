import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <div>
        <img src="/mainicon.png" alt="Main Icon" className={styles.navTitle} />
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
