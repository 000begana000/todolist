//// component
import Button from "../UI/Button";

//// css module
import styles from "./Tasks.module.css";

export default function Tasks() {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <span>
          <input type="checkbox" />
          <input type="text" />
        </span>
        <Button button="save" />
      </div>
    </div>
  );
}
