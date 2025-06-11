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
  const projectContext = useContext(ProjectContext);
  const { checkIsDone, deleteProject } = projectContext;

  //// format date to EU
  const formattedDate = new Date(project.dueDate).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

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

  function handleDeleteProject() {
    deleteProject(project.id);
  }

  return (
    <>
      <div className={styles.project}>
        <input
          type="checkbox"
          id="project"
          name="project"
          checked={project.isDone}
          onChange={handleIsDone}
        />
        <label name="title" className={styles.projectTitle}>
          {project.title}
        </label>
        <button
          className={styles.collapseButton}
          onClick={handleToggleCollapse}
        >
          {isCollapsed ? collapseDownIcon : collapseUpIcon}{" "}
          {/* Arrow icon changes based on state */}
        </button>
        {!isCollapsed && (
          <>
            <p>
              <Button button="delete" onClick={handleDeleteProject} />
            </p>
            <p className={styles.projectDuedate}>due date: {formattedDate}</p>
            <p className={styles.projectDesc}>{project.description}</p>
          </>
        )}
      </div>
    </>
  );
}
