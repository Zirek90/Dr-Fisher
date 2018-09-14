import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Menu from "./components/Menu/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu/>
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/contact" component={Contact}/>
            <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
