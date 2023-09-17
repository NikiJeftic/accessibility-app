import styles from "./Header.module.css";
import leef from "../../images/leef.jpeg";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Lorem ipsum dolor sit amet</h1>
        <h2 className={styles.subheading}>Lorem ipsum dolor sit amet</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
          tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
          hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut
          ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <button className={styles.button} disabled aria-disabled="true">
          Buy Now
        </button>
      </div>
      <img
        src={leef}
        alt="leefs"
        className={`${styles.content} ${styles.image}`}
      />
    </div>
  );
};

export default Header;
