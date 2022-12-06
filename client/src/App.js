import { Routes, Route } from "react-router-dom";
import LoginButton from "./components/LandingPage";
import LogoutButton from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="/home" element={<LogoutButton />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
