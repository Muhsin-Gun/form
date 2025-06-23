import './App.css';
import './index.css';
import Navbar from './components/navbar';
import Login from './components/login';
import AddStudent from './components/AddStudent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content container mt-5">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/AddStudent">
              <AddStudent />
            </Route>
              
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
