import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./Project.module.css";

import Button from "../UI/Button";

// change input field to Input component
export default function Project({ project }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const collapseUpIcon = <FontAwesomeIcon icon={faChevronUp} />;
  const collapseDownIcon = <FontAwesomeIcon icon={faChevronDown} />;

  // toggle collapse when user clicks collapse button
  function toggleCollapse() {
    setIsCollapsed(prevState => !prevState);
  }

  return (
    <>
      <li className={classes.project} key={project.id}>
        <div className={classes.projectCheckbox}>
          <div>
            <input
              type="checkbox"
              id="scales"
              name="scales"
              checked={project.isDone ? ture : false}
              className={`${classes.checkbox} ${classes.test}`}
            />
            <label htmlFor="scales" className={classes.projectTitle}>
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
              <Button button="delete" />
            </p>
            <p className={classes.projectDueDate}>
              due date: {project.dueDate}
            </p>
            <p className={classes.projectDescription}>{project.description}</p>
          </div>
        )}
      </li>
      <div className={classes.underline}></div>
    </>
  );
}
