import styles from "./Footer.module.css";
import visa from "../../images/visa.png";
import master from "../../images/mastercard.png";
const Footer = () => {
  return (
    <div className={styles.container} id="siteMap">
      <div className={styles.content}>
        <div className={styles.subscribe}>
          <h1>PlantMe</h1>
          <p>
            Subscribe and be the first to know about our news and promotions.
          </p>
          <div className={styles.emailInput}>
            <input
              type="email"
              aria-label="enter email to subscribe"
              aria-invalid="true"
              aria-describedby="email-description email-error"
            />
            <button>subscribe</button>
          </div>
        </div>
        <div className={styles.navigation}>
          <nav>
            <a href="aboutUs" alt="about">
              About Us
            </a>
            <a href="contactUs" alt="Contact">
              Contact Us
            </a>
            <a href="aboutUs" alt="Blog">
              Blog
            </a>
            <a href="siteMap" alt="Site Map">
              Site Map
            </a>
          </nav>
          <div className={styles.contact}>
            <span>Contacts</span>
            <a href="tel:+38 063 072 0121" alt="phone">
              +38 063 072 0121
            </a>
            <a href="mailito:plantme.store@gmail.com" alt="email">
              plantme.store@gmail.com
            </a>
            <div className={styles.cards}>
              <img src={visa} alt="" />
              <img src={master} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rights}>
        <span>© 2022 PlantMe. All Rights Reserved</span>
        <div className={styles.privacy}>
          <a href="#contactUs">Privacy Policy</a>
          <a href="contactUs">Terms of service</a>
          <a href="contactUs">Language</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
