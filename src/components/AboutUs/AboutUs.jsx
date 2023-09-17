import styles from "./AboutUs.module.css";
import AboutUsItem from "./AboutUsItem/AboutUsItem";
const AboutUs = () => {
  const title1 = "About Us";
  const title2 = "About Us2";
  return (
    <div className={styles.container} id="aboutUsSection">
      <AboutUsItem title={title1} />
      <AboutUsItem title={title2} />
    </div>
  );
};

export default AboutUs;
