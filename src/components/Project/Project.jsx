//// context
import { useContext } from "react";
import ProjectContext from "../../store/ProjectContext";

//// component
import Button from "../UI/Button";

//// css module
import sytles from "./Project.module.css";

export default function Project({ project }) {
  const projectContext = useContext(ProjectContext);
  const { checkIsDone, deleteProject } = projectContext;

  //// format date to EU
  const formattedDate = new Date(project.dueDate).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  function handleIsDone() {
    checkIsDone(project.id);
  }

  function handleDeleteProject() {
    deleteProject(project.id);
  }

  return (
    <>
      <div className={sytles.project}>
        <input
          type="checkbox"
          id="project"
          name="project"
          checked={project.isDone}
          onChange={handleIsDone}
        />
        <label name="title" className={sytles.projectTitle}>
          {project.title}
        </label>
        <p>
          <Button button="delete" onClick={handleDeleteProject} />
        </p>
        <p className={sytles.projectDuedate}>due date: {formattedDate}</p>
        <p className={sytles.projectDesc}>{project.description}</p>
      </div>
    </>
  );
}
