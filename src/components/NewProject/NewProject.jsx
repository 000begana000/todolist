import Input from "../UI/Input";

import styles from "./NewProject.module.css";

export default function NewProject() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>create new project</div>
      <Input label="title" />
      <Input textarea label="description" />
      <Input label="due date" />
    </section>
  );
}
