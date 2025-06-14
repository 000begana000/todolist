//// hook
import { useContext } from "react";

//// context
import TaskContext from "../../store/TaskContext";

//// component
import NewTask from "../NewTask/NewTask";
import Task from "../Task/Task";

//// css module
import styles from "./Tasks.module.css";

export default function Tasks() {
  const taskCtx = useContext(TaskContext);

  return (
    <div className={styles.container}>
      <NewTask />
      <div className={styles.taskContainer}>
        {taskCtx.tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
