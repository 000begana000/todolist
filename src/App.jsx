import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Input from "./components/UI/Input";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <Input type="text" label="title" />
        <Input label="description" textarea />
        <Input type="date" label="due date" />
      </main>
    </>
  );
}
