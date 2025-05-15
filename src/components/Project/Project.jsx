import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./Project.module.css";

import Task from "../Task/Task";
import Button from "../UI/Button";

export default function Project({ project, tasks, onDelete }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDone, setIsDone] = useState(false);

  /// collapse icons ///
  const collapseUpIcon = <FontAwesomeIcon icon={faChevronUp} />;
  const collapseDownIcon = <FontAwesomeIcon icon={faChevronDown} />;

  /// style project title ///
  let isProjectDone;

  if (isDone) {
    isProjectDone = `${classes.projectTitle} ${classes.lineThrough}`;
  } else {
    isProjectDone = classes.projectTitle;
  }

  /// toggle collapse when user clicks collapse button ///
  function toggleCollapse() {
    setIsCollapsed(prevState => !prevState);
  }

  /// toggle isDone state & update UI ///
  function handleToggleDone() {
    setIsDone(!isDone);
  }

  return (
    <>
      <li className={classes.projectContainer} key={project.id}>
        <div className={classes.project}>
          <div>
            <input
              type="checkbox"
              id="scales"
              name="scales"
              checked={isDone}
              className={classes.checkbox}
              onChange={handleToggleDone}
            />
            <label htmlFor="scales" className={isProjectDone}>
              {project.title}
            </label>
          </div>
          <div>
            <button
              className={classes.collapseButton}
              onClick={toggleCollapse}
              aria-label="Toggle project details"
            >
              {isCollapsed ? collapseDownIcon : collapseUpIcon}{" "}
              {/* Arrow icon changes based on state */}
            </button>
          </div>
        </div>

        {!isCollapsed && (
          <div>
            <p className={classes.buttons}>
              <Button button="edit" />
              <Button button="delete" onClick={() => onDelete(project.id)} />
            </p>
            <p className={classes.projectDueDate}>
              due date: {project.dueDate}
            </p>
            <p className={classes.projectDescription}>{project.description}</p>

            <div>
              <ul className={classes.tasks}>
                {tasks.map(task => (
                  <Task task={task} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </li>
      <div className={classes.breakline}></div>
    </>
  );
}
