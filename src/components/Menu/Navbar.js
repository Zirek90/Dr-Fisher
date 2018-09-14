import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from "../../img/znak_drFisher_01.jpg";

class Menu extends Component {

    render() {
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
                        <NavItem eventKey={1} componentClass={Link} to="/" href="/">Strona Główna</NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/products" href="/products">Produkty</NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/contact" href="/contact">Kontakt</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Menu;