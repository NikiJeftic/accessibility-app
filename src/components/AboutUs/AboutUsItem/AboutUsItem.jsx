import styles from "./AboutUsItem.module.css";
import image from "../../../images/leefs.jpeg";

const AboutUsItem = ({ title }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="leefs" className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
          tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
          hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut
          ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus
          cursus.
        </p>
        <button className={styles.button}>Learn more about →</button>
      </div>
    </div>
  );
};

export default AboutUsItem;
