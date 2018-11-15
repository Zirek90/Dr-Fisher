import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Provider} from 'react-redux';
import { createStore } from 'redux';
import content  from "./components/reducers/reducer"


import Menu from "./components/Menu/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";


const store = createStore(content);

class App extends Component {
  render() {
    return (
      <Provider {... { store }}>
      <Router>
      <div>
            <Menu />
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/contact" component={Contact}/>
            <Footer/>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
