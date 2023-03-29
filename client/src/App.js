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
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Admin" element={<Admin/>} />
        <Route exact path="/Claim" element={<Claim/>} />
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/Premium" element={<Premium/>} />
        <Route exact path="/Profile" element={<Profile/>} />
        <Route exact path="/ReportUser" element={<ReportUser/>} />
      </Routes>
    </div>
  );
}

export default App;
