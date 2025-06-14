//// hook
import { useState, useContext, useRef } from "react";

//// context
import TaskContext from "../../store/TaskContext";

//// component
import Button from "../UI/Button";

//// css module
import styles from "./Task.module.css";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  const taskCtx = useContext(TaskContext);

  const taskRef = useRef();

  function handleEditTask() {
    setIsEditing(prevState => !prevState);
  }

  function handleIsDone() {
    taskCtx.checkIsDone(task.id);
  }

  function handleSaveEditedTask() {
    const enteredTaskDesc = taskRef.current.value;

    const editedTask = {
      id: task.id,
      description: enteredTaskDesc,
      isDone: task.isDone,
    };

    taskCtx.editTask(task.id, editedTask);
    setIsEditing(prevState => !prevState);
  }

  let taskDesc;

  if (isEditing) {
    taskDesc = (
      <input type="text" defaultValue={task.description} ref={taskRef} />
    );
  } else {
    taskDesc = <label className={styles.label}>{task.description}</label>;
  }

  return (
    <p className={styles.task}>
      <span>
        <input type="checkbox" checked={task.isDone} onChange={handleIsDone} />
        {taskDesc}
      </span>
      <Button
        button={isEditing ? "save" : "edit"}
        className={styles.lowercase}
        onClick={isEditing ? handleSaveEditedTask : handleEditTask}
      />
    </p>
  );
}
