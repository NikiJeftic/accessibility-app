import styles from "./FormDescription.module.css";
import icon from "../../../images/bi_facebook.svg";

const FormDescription = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>Contact Us</h1>
          <div className={styles.info}>
            <p>
              Fill up the form and ur Team will get back to you within 24 hours.
              Happy to see your message!
            </p>
            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <img src={icon} alt="facebook" />
                <a href="tel:+380 93 15 32 456" alt="phone">
                  +380 93 15 32 456
                </a>
              </div>
              <div className={styles.contactItem}>
                <img src={icon} alt="facebook" />
                <a href="mailto:example@gmail.com" alt="email">
                  example@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <img src={icon} alt="facebook" />
                <address>Pidmurma 5a, Lviv</address>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.social}>
          <img src={icon} alt="facebook" />
          <img src={icon} alt="facebook" />
          <img src={icon} alt="facebook" />
        </div>
      </div>
    </div>
  );
};

export default FormDescription;
