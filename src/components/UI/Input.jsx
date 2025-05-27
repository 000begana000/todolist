import styles from "./Input.module.css";

export default function Input({ textarea, label }) {
  let inputField;

  if (textarea) {
    inputField = <textarea className={styles.textarea} />;
  } else {
    inputField = <input className={styles.input} />;
  }

  return (
    <p>
      <label className={styles.label}>{label}</label>
      {inputField}
    </p>
  );
}
