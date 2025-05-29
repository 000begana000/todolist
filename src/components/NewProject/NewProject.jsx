import { useContext, useRef } from "react";

// context
import ProjectContext from "../../store/ProjectContext";

// components
import Input from "../UI/Input";
import Button from "../UI/Button";

// css moudle
import styles from "./NewProject.module.css";

export default function NewProject() {
  const projectContext = useContext(ProjectContext);
  const { addProject } = projectContext;

  // refs
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  // save project
  function handleSaveProject() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    const newProject = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      isDone: false,
    };

    // context function
    addProject(newProject);
  }

  return (
    <section className={styles.newProject}>
      <div className={styles.heading}>create new project</div>
      <div className={styles.conatiner}>
        <Input label="title" ref={title} />
        <Input textarea label="description" ref={description} />
        <Input type="date" label="due date" ref={dueDate} />
        <p className={styles.buttons}>
          <Button button="cancel" />
          <Button button="save" onClick={handleSaveProject} />
        </p>
      </div>
    </section>
  );
}
