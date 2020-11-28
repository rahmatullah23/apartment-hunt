import React, {useState, createContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Apartments from './Component/Apartments/Apartments';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import Details from './Component/Details/Details';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import PrivateRoute from './Component/Login/PrivateRoute';
import Login from './Component/Login/Login';
import Dashboard from './Component/BookingPage/Dashboard';
import { createStore } from 'redux';
import allReducers from './Reducers/CombineReducers';
import { Provider } from 'react-redux';
export const UserContext = createContext();

// Store => Global State
let store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  const [keyword, setKeyword] = useState(null);
  const [user, setUser] = useState({
    signed: false,
    name: '',
    email: '',
    password: '',
    message: ''
  });
  
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Navbar />
              <Header setKeyword={setKeyword} />
              <Apartments keyword={keyword} />
              <Services />
              <Footer />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/apartment/:id" component={Details} />
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </Provider>
    </UserContext.Provider>
  );
}

export default App;