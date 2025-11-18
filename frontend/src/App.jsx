import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Landing page/Dashboard";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
