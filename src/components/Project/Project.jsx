//// context
import { useContext } from "react";
import ProjectContext from "../../store/ProjectContext";

//// component
import Button from "../UI/Button";

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
      <label name="title">{project.title}</label>
      <Button button="delete" />
    </p>
  );
}
