import { useState } from "react";

import classes from "./Task.module.css";

import Input from "../UI/Input";
import Button from "../UI/Button";

export default function Task({ task }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <div className={classes.newTask}>
        <Input task />
        <Button button="save" task />
      </div>
      <li key={task.id} className={classes.task}>
        <div className={classes.flex}>
          <input
            type="checkbox"
            id="scales"
            name="scales"
            checked={isDone}
            className={classes.checkbox}
          />
          <label htmlFor="scales" className={classes.description}>
            {task.description}
          </label>
        </div>
        <Button button="edit" task />
      </li>
    </>
  );
}
