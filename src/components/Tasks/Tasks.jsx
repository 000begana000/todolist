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
          <input type="text" placeholder="add new task..." />
        </span>
        <Button button="add" />
      </div>
    </div>
  );
}
