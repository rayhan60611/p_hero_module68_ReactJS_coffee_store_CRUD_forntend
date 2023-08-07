import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="!font-poppins">
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
