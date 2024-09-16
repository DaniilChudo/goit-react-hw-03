import styles from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <li className={styles.item}>
      <div>
        <p>{name}:</p>
        <p>{number}</p>
      </div>
      <button type="button">Delete</button>
    </li>
  );
};

export default Contact;
