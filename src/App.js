import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import MediaDetails from './Components/MediaDetails';

import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mediaDetails">
            <MediaDetails />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
