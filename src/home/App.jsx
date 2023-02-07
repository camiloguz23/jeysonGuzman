import "./App.scss";
import { Header } from "../components";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Skill from "../components/Skill/Skill";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skill />
    </>
  );
}

export default App;
