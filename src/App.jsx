import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import NewProject from "./components/NewProject/NewProject";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <NewProject />
      </main>
    </>
  );
}
