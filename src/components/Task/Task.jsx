//// hook
import { useState } from "react";

//// component
import Button from "../UI/Button";

//// css module
import styles from "./Task.module.css";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditTask() {
    setIsEditing(prevState => !prevState);
  }

  let taskDesc;

  if (isEditing) {
    taskDesc = <input type="text" defaultValue={task.description} />;
  } else {
    taskDesc = <label className={styles.label}>{task.description}</label>;
  }

  return (
    <p className={styles.task}>
      <span>
        <input type="checkbox" />
        {taskDesc}
      </span>
      <Button
        button={isEditing ? "save" : "edit"}
        className={styles.lowercase}
        onClick={handleEditTask}
      />
    </p>
  );
}
