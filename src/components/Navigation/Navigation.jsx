import styles from "./Navigation.module.css";
import img from "../../images/Logo.png";
import vector from "../../images/Vector 17.svg";
import arrow from "../../images/Arrow - Down.svg";
import search from "../../images/Search.svg";
const Navigation = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <img src={img} alt="vector" className={styles.logo} />
        <a href="#aboutUs">About Us</a>
        <img src={vector} alt="vector" />
        <a href="contactUs">Contact Us</a>
        <img src={vector} alt="vector" />
        <a href="#aboutUs">Blog</a>
        <img src={vector} alt="vector" />
        <a href="#siteMap">Site Map</a>
        <img src={vector} alt="vector" />
        <a href="">Eng</a>
        <img src={arrow} alt="arrow down" />
      </nav>
      <div className={styles.input}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Search this site"
        />
        <button className={styles.searchIcon}>
          <img src={search} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
