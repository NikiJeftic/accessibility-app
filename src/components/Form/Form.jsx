import styles from "./Form.module.css";
import FormDescription from "./FormDescription/FormDescription";
const Form = () => {
  return (
    <div className={styles.background} id="contactUs">
      <div className={styles.container}>
        <FormDescription />
        <div className={styles.form}>
          <div className={styles.content}>
            {/* First Name/ Last Name */}
            <div className={styles.inputRow}>
              <div className={styles.inputElement}>
                <label htmlFor="name">
                  <span className={styles.star}>*</span> First Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John"
                  aria-label="enter name"
                />
              </div>
              <div className={styles.inputElement}>
                <label htmlFor="lastName">
                  <span className={styles.star}>*</span> Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  aria-label="enter surname"
                />
              </div>
            </div>
            {/* Email / Phone */}
            <div className={styles.inputRow}>
              <div className={styles.inputElement}>
                <label htmlFor="email">
                  <span className={styles.star}>*</span> Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  aria-label="enter email"
                  aria-invalid="true"
                  aria-describedby="email-description email-error"
                />
              </div>
              <div className={styles.inputElement}>
                <label htmlFor="lastName">
                  <span className={styles.star}>*</span> Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="+380|"
                  aria-label="enter phone number"
                />
              </div>
            </div>
            {/* Roles */}
            <div className={styles.roles}>
              <div className={styles.role}>
                <input
                  type="radio"
                  id="UI"
                  name="role"
                  value="UI Developer"
                  aria-label="choose UI as rolse"
                />
                <label htmlFor="UI">UI Developer</label>
              </div>
              <div className={styles.role}>
                <input
                  type="radio"
                  id="UI/UX"
                  name="role"
                  value="UI/UX Designer"
                  aria-label="choose UI/UX as role"
                />
                <label htmlFor="UI/UX">UI/UX Designer</label>
              </div>
              <div className={styles.role}>
                <input
                  type="radio"
                  id="accessibility"
                  name="role"
                  value="Accessibility"
                  aria-label="choose accessibility as rolse"
                />
                <label htmlFor="accessibility">Accessibility</label>
              </div>
              <div className={styles.role}>
                <input
                  type="radio"
                  id="qa"
                  name="role"
                  value="QA Engineer"
                  aria-label="choose qa as role"
                />
                <label htmlFor="qa">QA Engineer</label>
              </div>
              <div className={styles.role}>
                <input
                  type="radio"
                  id="other"
                  name="role"
                  value="Other"
                  aria-label="choose other as role"
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
            {/* Message */}
            <div className={styles.message}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                alt="message area"
              ></textarea>
            </div>
            {/* Terms */}
            <div className={styles.terms}>
              <div className={styles.term}>
                <label htmlFor="term1">Accept the Terms</label>
                <input
                  type="checkbox"
                  id="term1"
                  alt="checkbox terms1"
                  aria-label="You must check this box in order to submit the form"
                />
              </div>
              <div className={styles.term}>
                <label htmlFor="term1">Accept the Terms2</label>
                <input
                  type="checkbox"
                  id="term2"
                  alt="checkbox tems2"
                  aria-label="You must check this box in order to submit the form"
                />
              </div>
            </div>
            <button className={styles.submit}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
