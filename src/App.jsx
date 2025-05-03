import { useState } from "react";

import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import NewProject from "./components/NewProject/NewProject";

export default function App() {
  const [projectsState, setProjectsState] = useState([
    // dummy project
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Project 1",
      description: "Description for project 1",
      dueDate: "2023-10-01",
      isDone: false,
    },
  ]);

  function handleCreateNewProject(project) {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;

    setProjectsState(prevProejct => {
      const newProject = {
        id: randomNumber,
        title: project.title,
        description: project.description,
        dueDate: project.dueDate,
        isDone: false,
      };
      return [newProject, ...prevProejct];
    });
  }

  return (
    <>
      <Header />
      <main>
        <Projects projects={projectsState} />
        <NewProject onCreate={handleCreateNewProject} />
      </main>
    </>
  );
}
