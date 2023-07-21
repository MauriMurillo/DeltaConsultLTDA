import './App.css';
import {Header} from './components/Header.js'
import { NavLink } from "react-router-dom";

<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>;
function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hola mundo</h1>
    </div>
  );
}

export {App};
