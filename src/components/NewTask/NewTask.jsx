//// hooks
import { useRef, useContext } from "react";

//// context
import TaskContext from "../../store/TaskContext";

//// component
import Button from "../UI/Button";

//// css module
import styles from "./NewTask.module.css";

export default function NewTask({ projectId }) {
  const taskCtx = useContext(TaskContext);

  const task = useRef();

  function handleAddTask(event) {
    event.preventDefault();
    const enteredTask = task.current.value;

    const newTask = {
      id: Math.floor(Math.random() * 1000) + 1,
      projectId: projectId,
      description: enteredTask,
      isDone: false,
    };

    taskCtx.addTask(newTask);

    task.current.value = "";
  }

  return (
    <form className={styles.flex} onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="add new task..."
        ref={task}
        required
        className={styles.taskInput}
      />
      <Button button="add" type="submit" className={styles.lowercase} />
    </form>
  );
}
