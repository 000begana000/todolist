//// hook
import { useContext } from "react";

//// context
import TaskContext from "../../store/TaskContext";

//// component
import NewTask from "../NewTask/NewTask";
import Button from "../UI/Button";

//// css module
import styles from "./Tasks.module.css";

export default function Tasks() {
  const taskCtx = useContext(TaskContext);
  const { tasks } = taskCtx;

  return (
    <div className={styles.container}>
      <NewTask />
      <div className={styles.taskContainer}>
        {tasks.map(task => (
          <p className={styles.task}>
            <span>
              <input type="checkbox" />
              <label key={task.id}>{task.description}</label>
            </span>
            <Button button="edit" />
          </p>
        ))}
      </div>
    </div>
  );
}
