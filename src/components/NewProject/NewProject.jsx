import Input from "../UI/Input";
import Button from "../UI/Button";

import styles from "./NewProject.module.css";

export default function NewProject() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>create new project</div>
      <Input label="title" />
      <Input textarea label="description" />
      <Input label="due date" />
      <p className={styles.alignRight}>
        <Button button="cancel" />
        <Button button="save" />
      </p>
    </section>
  );
}
