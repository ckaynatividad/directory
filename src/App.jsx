import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Home from './views/Home';
import Login from './views/Login';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <PrivateRoute path="/profile"></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
