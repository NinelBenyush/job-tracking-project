import "./index.css";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/personalPage" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
