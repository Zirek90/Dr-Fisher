import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {actions} from '.././actions/actions';

// import logo from "../../img/logo.png";
import logo from "../../img/inletta-przezroczyste.png";
import plFlag from '../../img/plFlag.png'
import enFlag from '../../img/enFlag.png'

let ReactRedux = require('react-redux');

class Menu extends Component {

    render() {
        const content = this.props.content;
        let switchLanguage = this.props.switchLanguage;

        if (content) {

        return (
            <Navbar default collapseOnSelect className="top-menu">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" href="/"><img src={logo} alt="logo" className="logo"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to="/" href="/">{content.page.menu.home}</NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/products" href="/products">{content.page.menu.brand}</NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/contact" href="/contact">{content.page.menu.contact}</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to="#" href="#" onClick={switchLanguage.bind(this,'pl')}>
                            <img src={plFlag} alt='polish-flag'></img>
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="#" href="#" onClick={switchLanguage.bind(this,'en')}>
                            <img src={enFlag} alt='english-flag'></img>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    } else {
        return;
      }
   
    }
}
export default ReactRedux.connect(
    (state) => ({content: state.content}),
    (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
  )(Menu);

// export default Menu;