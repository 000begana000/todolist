import styles from "./Input.module.css";

export default function Input({ textarea, label, ...props }) {
  let inputField;

  if (textarea) {
    inputField = <textarea className={styles.textarea} {...props} />;
  } else {
    inputField = <input className={styles.input} {...props} />;
  }

  return (
    <p>
      <label className={styles.label}>{label}</label>
      {inputField}
    </p>
  );
}
