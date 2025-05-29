import { useContext } from "react";
import ProjectContext from "../../store/ProjectContext";

import styles from "./Projects.module.css";

export default function Projects() {
  const projectContext = useContext(ProjectContext);
  const { projects } = projectContext;

  return (
    <section className={styles.projects}>
      <h1 className={styles.heading}>to do</h1>
      {projects.length === 0 && <p>create new project</p>}
      {projects.map(project => (
        <p>{project.title}</p>
      ))}
    </section>
  );
}
