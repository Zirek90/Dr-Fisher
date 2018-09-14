import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <Navbar className="bottom-menu">
                    <Nav>
                        <NavItem eventKey={1} componentClass={Link} to="/" href="/">Strona Główna</NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/products" href="/products">Produkty</NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/contact" href="/contact">Kontakt</NavItem>
                    </Nav>

            </Navbar>
        )
    }
}

export default Footer;