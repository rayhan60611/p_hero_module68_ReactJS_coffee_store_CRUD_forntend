import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="!font-poppins">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
