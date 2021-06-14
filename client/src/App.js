import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OtherPage from './pages/OtherPage'
import FibPage from './pages/FibPage'

function App() {
  return (
    <Router>
      <div className="App" style={{ margin: "5rem" }}>
        <Link to="/">Home</Link><span style={{ marginLeft: "1rem" }} />
        <Link to="/other">Other</Link>
        <div style={{ margin: "5rem" }}>
          <Switch>
            <Route exact path="/other">
              <OtherPage />
            </Route>
            <Route exact path="/">
              <FibPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
