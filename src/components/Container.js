import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import {actions} from './actions/actions';
import Menu from "./Menu/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Products from "./Products/Products";
import Contact from "./Contact/Contact";
let ReactRedux = require('react-redux');

class Container extends Component {
  render() {
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;

    // if (content) {

    return (
        <div>
          <Menu />
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/contact" component={Contact}/>
            <Footer/>
        </div>
    );
// } else {
//     return;
//   }
  }
}

export default Container;