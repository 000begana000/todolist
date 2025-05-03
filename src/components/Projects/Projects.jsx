export default function Projects({ projects }) {
  return (
    <section>
      <h1>To Do</h1>
      {projects.length === 0 && <p>No projects found.</p>}
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Due Date: {project.dueDate}</p>
            <p>Status: {project.isDone ? "Done" : "Not Done"}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
