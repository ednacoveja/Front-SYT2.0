import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./view/Landing/Landing";
import About from "./view/About/About";
import Admin from "./view/Admin/Admin";
import Claim from "./view/Claim/Claim";
import Home from "./view/Home/Home";
import Premium from "./view/Premium/Premium";
import Profile from "./view/Profile/Profile";
import ReportUser from "./view/ReportUser/ReportUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Claim" element={<Claim />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Premium" element={<Premium />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ReportUser" element={<ReportUser />} />
      </Routes>
    </div>
  );
}

export default App;
