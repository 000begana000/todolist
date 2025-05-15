import classes from "./Projects.module.css";
import Project from "../Project/Project";

export default function Projects({ projects, onDelete }) {
  return (
    <section className={classes.projects}>
      <h1 className={classes.projectsHeading}>To Do</h1>
      <div>
        {projects.length === 0 && <p>No projects found.</p>}
        <ul className={classes.container}>
          {projects.map(project => (
            <Project project={project} key={project.id} onDelete={onDelete} />
          ))}
        </ul>
      </div>
    </section>
  );
}
