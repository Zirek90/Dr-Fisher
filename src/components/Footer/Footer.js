import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {actions} from '.././actions/actions';
let ReactRedux = require('react-redux');

class Footer extends Component {

    render() {
        const content = this.props.content.page.menu;

        return (
            <div className="footer">
                <Navbar className="bottom-menu">
                    <Nav>
                        <NavItem eventKey={1} componentClass={Link} to="/" href="/">{content.home}</NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/products" href="/products">{content.brand}</NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/contact" href="/contact">{content.contact}</NavItem>
                    </Nav>
                </Navbar>
                <p>&copy; 2018 Dr.Fisher All Rights Reserved. <span>Designed and implemented <a
                    href="https://zirek90.github.io/Mateusz-Grzymowicz-Portfolio/">Mateusz Grzymowicz</a></span></p>
            </div>
        )
    }
}

export default ReactRedux.connect(
    (state) => ({content: state.content}),
    (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
  )(Footer);

// export default Footer;