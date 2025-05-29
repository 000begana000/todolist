import Input from "../UI/Input";

export default function Project({ project }) {
  return (
    <p>
      <input
        type="checkbox"
        id="project"
        name="project"
        checked={project.isDone}
      />
      <label htmlFor="">{project.title}</label>
    </p>
  );
}
