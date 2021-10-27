import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/logout' component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
