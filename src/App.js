import './App.css';
import {NavBar} from ".//components/navbar.js";
import {Personal} from ".//components/personal.js";
import {Almamater} from ".//components/almamater.js"
import {Profession} from ".//components/profession.js";
import {Skills} from ".//components/skills.js";
import {Certifications} from ".//components/certifications.js";
import {Projects} from ".//components/projects.js";

function App() {
  return (
    <div>
      <NavBar/>
      <Personal/>
      <Profession/>
      <Skills/>
      <Almamater/>
      <Certifications/>
      <Projects/>
    </div>
  );
}

export default App;
