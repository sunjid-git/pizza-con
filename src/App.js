import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/menu">
            <Menu></Menu>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
