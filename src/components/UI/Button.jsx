import styles from "./Button.module.css";

export default function Button({ button, className = "", ...props }) {
  let classes = styles.button + " " + className;

  return (
    <button className={classes} {...props}>
      {button}
    </button>
  );
}
