//// component
import NewTask from "../NewTask/NewTask";

//// css module
import styles from "./Tasks.module.css";

export default function Tasks() {
  return (
    <div className={styles.container}>
      <NewTask />
    </div>
  );
}
