import { useRef } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";

export default function NewProject({ onCreate }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

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

  function handleCancel() {
    // empty the input fields
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }

  return (
    <>
      <Input type="text" label="title" ref={title} />
      <Input label="description" textarea ref={description} />
      <Input type="date" label="due date" ref={dueDate} />
      <Button button="cancel" onClick={handleCancel} />
      <Button button="save" onClick={handleSave} />
    </>
  );
}
