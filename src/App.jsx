import { useState } from "react";

import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import NewProject from "./components/NewProject/NewProject";

export default function App() {
  const [projectsState, setProjectsState] = useState({
    projects: [
      // dummy project
      {
        id: Math.floor(Math.random() * 1000) + 1,
        title: "Project 1",
        description: "Description for project 1",
        dueDate: "2023-10-01",
        isDone: false,
      },
    ],
    tasks: [
      // dummy task
      {
        id: Math.floor(Math.random() * 1000) + 1,
        description: "this is test",
      },
    ],
  });

  /// create new project ///
  function handleCreateNewProject(project) {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;

    setProjectsState(prevProject => {
      const newProject = {
        id: randomNumber,
        title: project.title,
        description: project.description,
        dueDate: project.dueDate,
      };
      return { projects: [newProject, ...prevProject] };
    });
  }

  /// delete a project ///
  function handleDeleteProject(id) {
    setProjectsState(prevState => {
      return {
        projects: prevState.projects.filter(project => project.id !== id),
      };
    });
  }

  return (
    <>
      <Header />
      <main>
        <Projects
          projects={projectsState.projects}
          onDelete={handleDeleteProject}
          tasks={projectsState.tasks}
        />
        <NewProject onCreate={handleCreateNewProject} />
      </main>
    </>
  );
}
