import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Input from "./components/UI/Input";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <Input label="title" />
        <Input label="description" textarea />
        <Input label="due date" />
      </main>
    </>
  );
}
