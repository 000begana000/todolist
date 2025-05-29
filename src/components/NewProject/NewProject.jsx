import { useContext, useRef } from "react";

//// Context
import ProjectContext from "../../store/ProjectContext";

//// Components
import Input from "../UI/Input";
import Button from "../UI/Button";

//// css moudle
import styles from "./NewProject.module.css";

export default function NewProject() {
  const projectContext = useContext(ProjectContext);
  const { addProject } = projectContext;

  //// ref
  const form = useRef();

  //// Save project
  function handleSaveProject(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const enteredTitle = formData.get("title");
    const enteredDescription = formData.get("description");
    const enteredDueDate = formData.get("dueDate");

    const newProject = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      isDone: false,
    };

    //// Context function
    addProject(newProject);

    //// Reset form
    form.current.reset();
  }

  return (
    <section className={styles.newProject}>
      <div className={styles.heading}>create new project</div>
      <form
        className={styles.container}
        ref={form}
        onSubmit={handleSaveProject}
      >
        <Input label="title" name="title" minLength={3} />
        <Input textarea label="description" name="description" minLength={6} />
        <Input type="date" label="due date" name="dueDate" />
        <p className={styles.buttons}>
          <Button button="cancel" type="reset" />
          <Button button="save" type="submit" />
        </p>
      </form>
    </section>
  );
}
