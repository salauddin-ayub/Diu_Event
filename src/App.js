import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Status from './Pages/Appointment/Status/Status';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Switch>
          <PrivateRoute path="/event-booking">
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/appointmentEdit/:appointmentId">
            <Status />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
  
    </div>
  );
}

export default App;
