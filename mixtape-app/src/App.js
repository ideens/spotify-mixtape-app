import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import Home from './components/Home';
import Request from './components/Request';
import Logout from './components/Logout';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <Switch>
        <Route path='/login' component={() => (
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        )} />
        <Route path='/logout' component={() => (
          <Logout setLoggedIn={setLoggedIn} />
        )} />
        <Route path='/callback/' component={Home} />
        <Route path='/request' component={Request} />
      </Switch>
    </Router>
  );
}

export default App;
