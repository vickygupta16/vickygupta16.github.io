import './App.css';
import {NavBar} from ".//components/navbar.js";
import {Personal} from ".//components/personal.js";
import {Almamater} from ".//components/almamater.js"
import {Profession} from ".//components/profession.js";

function App() {
  return (
    <div>
      <NavBar/>
      <Personal/>
      <Almamater/>
      <Profession/>
    </div>
  );
}

export default App;
