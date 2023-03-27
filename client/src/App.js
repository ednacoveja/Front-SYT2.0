import './App.css';
import { Route } from 'react-router-dom';
import Landing from './view/Landing/Landing';
import About from './view/About/About';
import Admin from './view/Admin/Admin';
import Claim from './view/Claim/Claim';
import Home from './view/Home/Home';
import Premium from './view/Premium/Premium';
import Profile from './view/Profile/Profile';
import ReportUser from './view/ReportUser/ReportUser';

function App() {
  return (
    <div className="App">
      <Route exact path="/"  component={Landing} />
      <Route exact path="/About"  component={About} />
      <Route exact path="/Admin"  component={Admin} />
      <Route exact path="/Claim"  component={Claim} />
      <Route exact path="/Home"  component={Home} />
      <Route exact path="/Premium"  component={Premium} />
      <Route exact path="/Profile"  component={Profile} />
      <Route exact path="/ReportUser"  component={ReportUser} />
    </div>
  );
}

export default App;

