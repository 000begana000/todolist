import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import NewProject from "./components/NewProject/NewProject";
import { ProjectContextProvider } from "./store/ProjectContext";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <ProjectContextProvider>
          <Projects />
          <NewProject />
        </ProjectContextProvider>
      </main>
    </>
  );
}
