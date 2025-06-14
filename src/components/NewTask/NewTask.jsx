//// hooks
import { useRef, useContext } from "react";

//// context
import TaskContext from "../../store/TaskContext";

//// component
import Button from "../UI/Button";

//// css module
import styles from "./NewTask.module.css";

export default function NewTask() {
  const taskCtx = useContext(TaskContext);

  const task = useRef();

  function handleAddTask() {
    const enteredTask = task.current.value;

    const newTask = {
      id: Math.floor(Math.random() * 1000) + 1,
      description: enteredTask,
    };

    taskCtx.addTask(newTask);
  }

  return (
    <div className={styles.flex}>
      <input type="text" placeholder="add new task..." ref={task} />
      <Button button="add" onClick={handleAddTask} />
    </div>
  );
}
