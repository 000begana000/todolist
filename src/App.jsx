import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import NewProject from "./components/NewProject/NewProject";
import { ProjectContextProvider } from "./store/ProjectContext";
import { TaskContextProvider } from "./store/TaskContext";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <ProjectContextProvider>
          <TaskContextProvider>
            <Projects />
            <NewProject />
          </TaskContextProvider>
        </ProjectContextProvider>
      </main>
    </>
  );
}
