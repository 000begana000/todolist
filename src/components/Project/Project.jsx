//// hooks
import { useContext, useState, useRef } from "react";

//// context
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
  const { checkIsDone, editProject, deleteProject } = projectContext;

  //// refs
  const title = useRef();
  const dueDate = useRef();
  const description = useRef();

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

  function handleSaveEditedProject() {
    const editedProjectDetails = {
      id: project.id,
      title: title.current.value,
      dueDate: dueDate.current.value,
      description: description.current.value,
      isDone: project.isDone,
    };
    editProject(project.id, editedProjectDetails);
    setIsEditing(prevState => !prevState);
  }

  function handleDeleteProject() {
    deleteProject(project.id);
  }

  let projectTitle;
  let projectDueDate;
  let projectDesc;

  //// show input field when isEditing is true - else display project details
  if (isEditing) {
    projectTitle = (
      <input
        className={styles.inputTitle}
        defaultValue={project.title}
        ref={title}
        required
      />
    );
    projectDueDate = (
      <div className={styles.flex}>
        <span>{formattedDate}</span>
        <span>to</span>
        <input
          className={styles.inputDate}
          type="date"
          defaultValue={project.dueDate}
          ref={dueDate}
          required
        />
      </div>
    );
    projectDesc = (
      <textarea
        className={styles.textarea}
        defaultValue={project.description}
        ref={description}
        required
      />
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
                onClick={
                  isEditing ? handleSaveEditedProject : handleEditProject
                }
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
