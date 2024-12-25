import styles from "./Brands.module.css";

const companies = [
  "/companies/amazon.png",
  "/companies/dribble.png",
  "/companies/hubspot.png",
  "/companies/notion.png",
  "/companies/netflix.png",
  "/companies/zoom.png",
];

export const Brands = () => {
  return (
    <section className={styles.container}>
      {companies.map((company, _) => (
        <img id={_} src={company} alt={`${_}+${company}`} />
      ))}
    </section>
  );
};
