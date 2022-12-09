import './App.css';
import { Route } from 'react-router-dom';
import Landing from './view/Landing';
import About from './view/About';
import Admin from './view/Admin';
import Claim from './view/Claim';
import Home from './view/Home';
import Premium from './view/Premium';
import Profile from './view/Profile';
import ReportUser from './view/ReportUser';

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

