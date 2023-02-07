import "./App.scss";
import { Header } from "../components";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Skill from "../components/Skill/Skill";
import ExperienceTime from "../components/TimeExperience/TimeLine";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skill />
      <ExperienceTime />
    </>
  );
}

export default App;
