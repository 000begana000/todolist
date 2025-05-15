import { useRef } from "react";

import classes from "./NewProject.module.css";

import Input from "../UI/Input";
import Button from "../UI/Button";

export default function NewProject({ onCreate }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  // save the new project
  function handleSave() {
    console.log("save");

    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onCreate({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    // empty the input fields after saving
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }

  // cancel the new project
  function handleCancel() {
    // empty the input fields
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }

  return (
    <section className={classes.newProject}>
      <h1 className={classes.newProjectHeading}>Create New Project</h1>
      <div className={classes.container}>
        <Input type="text" label="title" ref={title} />
        <Input label="description" textarea ref={description} />
        <Input type="date" label="due date" ref={dueDate} />
        <p className={classes.buttons}>
          <Button button="cancel" onClick={handleCancel} />
          <Button button="save" onClick={handleSave} />
        </p>
      </div>
    </section>
  );
}
