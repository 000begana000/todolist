//// hook
import { useContext } from "react";

//// context
import TaskContext from "../../store/TaskContext";

//// component
import NewTask from "../NewTask/NewTask";

//// css module
import styles from "./Tasks.module.css";

export default function Tasks() {
  const taskCtx = useContext(TaskContext);
  const { tasks } = taskCtx;

  return (
    <div className={styles.container}>
      <NewTask />
      {tasks.map(task => (
        <p className={styles.task}>
          <input type="checkbox" />
          <label key={task.id}>{task.description}</label>
        </p>
      ))}
    </div>
  );
}
