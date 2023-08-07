import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
