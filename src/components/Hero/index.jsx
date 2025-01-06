import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.sectionTitle}>
          Navigating the digital landscape for success
        </div>
        <div className={styles.sectionDescription}>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </div>
        <div className={styles.btnContainer}>
          <button>Book a consultation</button>
          <button
            onClick={() => navigate("/record")}
            className={styles.secondaryBtn}
          >
            Record
          </button>
        </div>
      </div>
      <div className={styles.heroImgContainer}>
        <img src="/hero-img.png" alt="hero-image" />
      </div>
    </section>
  );
};
