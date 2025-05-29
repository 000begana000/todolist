// context
import { useContext } from "react";
import ProjectContext from "../../store/ProjectContext";

export default function Project({ project }) {
  const projectContext = useContext(ProjectContext);
  const { checkIsDone } = projectContext;

  function handleIsDone() {
    checkIsDone(project.id);
  }

  return (
    <p>
      <input
        type="checkbox"
        id="project"
        name="project"
        checked={project.isDone}
        onChange={handleIsDone}
      />
      <label htmlFor="">{project.title}</label>
    </p>
  );
}
