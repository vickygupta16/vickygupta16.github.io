import './App.css';
import {NavBar} from ".//components/navbar.js";
import {Personal} from ".//components/personal.js";
import {Almamater} from ".//components/almamater.js"

function App() {
  return (
    <div>
      <NavBar/>
      <Personal/>
      <Almamater/>
    </div>
  );
}

export default App;
