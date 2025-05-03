import Input from "../UI/Input";
import Button from "../UI/Button";

export default function NewProject() {
  return (
    <>
      <Input type="text" label="title" />
      <Input label="description" textarea />
      <Input type="date" label="due date" />
      <Button button="cancel" />
      <Button button="save" />
    </>
  );
}
