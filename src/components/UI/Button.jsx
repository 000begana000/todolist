import styles from "./Button.module.css";

export default function Button({ button, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {button}
    </button>
  );
}
