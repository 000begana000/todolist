//// context
import { useContext, useState } from "react";
import ProjectContext from "../../store/ProjectContext";

//// component
import Button from "../UI/Button";

//// css module
import styles from "./Project.module.css";

//// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Project({ project }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const projectContext = useContext(ProjectContext);
  const { checkIsDone, deleteProject } = projectContext;

  //// format date to EU
  const formattedDate = new Date(project.dueDate).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  //// font awesome icons
  const collapseUpIcon = (
    <FontAwesomeIcon icon={faChevronUp} className={styles.collapseIcon} />
  );
  const collapseDownIcon = (
    <FontAwesomeIcon icon={faChevronDown} className={styles.collapseIcon} />
  );

  function handleIsDone() {
    checkIsDone(project.id);
  }

  function handleToggleCollapse() {
    setIsCollapsed(prevState => !prevState);
  }

  function handleEditProject() {
    setIsEditing(prevState => !prevState);
  }

  function handleDeleteProject() {
    deleteProject(project.id);
  }

  let projectTitle;
  let projectDueDate;
  let projectDesc;

  if (isEditing) {
    projectTitle = (
      <input placeholder={project.title} className={styles.inputTitle} />
    );
    projectDueDate = (
      <div className={styles.flex}>
        <span>{formattedDate}</span>
        <span>to</span>
        <input
          type="date"
          placeholder={project.dueDate}
          className={styles.inputDate}
        />
      </div>
    );
    projectDesc = (
      <textarea placeholder={project.description} className={styles.textarea} />
    );
  } else {
    projectTitle = (
      <label name="title" className={styles.projectTitle}>
        {project.title}
      </label>
    );
    projectDueDate = formattedDate;
    projectDesc = project.description;
  }

  return (
    <>
      <div className={styles.project}>
        <div className={styles.flex}>
          <span className={styles.projectTitleContainer}>
            <input
              type="checkbox"
              id="project"
              name="project"
              checked={project.isDone}
              onChange={handleIsDone}
            />
            {projectTitle}
          </span>
          <span>
            <button
              className={styles.collapseButton}
              onClick={handleToggleCollapse}
            >
              {isCollapsed ? collapseDownIcon : collapseUpIcon}
            </button>
          </span>
        </div>

        {!isCollapsed && (
          <>
            <p className={styles.buttons}>
              <Button
                button={isEditing ? "save" : "edit"}
                onClick={handleEditProject}
              />
              <Button button="delete" onClick={handleDeleteProject} />
            </p>
            <p className={styles.projectDuedate}>due date: {projectDueDate}</p>
            <p className={styles.projectDesc}>{projectDesc}</p>
          </>
        )}
      </div>
    </>
  );
}
