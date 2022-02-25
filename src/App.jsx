import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import ProfileForm from './components/ProfileForm';
import { ProfileContext, ProfileProvider } from './context/ProfileContext';
import { UserProvider } from './context/UserContext';
import Confirm from './views/Confirm';
import Home from './views/Home';
import Login from './views/Login';
import ProfileCreate from './views/ProfileCreate';
import ProfileEdit from './views/ProfileEdit';
import ProfileView from './views/ProfileView';

export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <ProfileProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/confirm-email">
                <Confirm />
              </Route>
              <PrivateRoute exact path="/profile">
                <Header />
                <ProfileView />
              </PrivateRoute>
              <PrivateRoute exact path="/profile/edit">
                <ProfileEdit />
              </PrivateRoute>
              <PrivateRoute exact path="/profile/create">
                <Header />
                <ProfileCreate />
              </PrivateRoute>
            </Switch>
          </BrowserRouter>
        </ProfileProvider>
      </UserProvider>
    </div>
  );
}
