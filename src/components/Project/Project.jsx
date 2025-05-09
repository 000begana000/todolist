import classes from "./Project.module.css";

import Button from "../UI/Button";

export default function Project({ project }) {
  return (
    <li key={project.id}>
      <div className={classes.projectCheckbox}>
        <input
          type="checkbox"
          id="scales"
          name="scales"
          checked={project.isDone ? ture : false}
          className={`${classes.checkbox} ${classes.test}`}
        />
        <label for="scales" className={classes.projectTitle}>
          {project.title}
        </label>
      </div>
      <p className={classes.buttons}>
        <Button button="edit" />
        <Button button="delete" />
      </p>
      <p className={classes.projectDueDate}>due date: {project.dueDate}</p>
      <p className={classes.projectDescription}>{project.description}</p>
    </li>
  );
}
