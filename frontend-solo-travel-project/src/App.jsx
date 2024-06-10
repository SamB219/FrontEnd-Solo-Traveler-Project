import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Dashboard from "./components/dash/Dashboard";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
