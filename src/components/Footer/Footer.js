import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <Navbar className="bottom-menu">
                    <Nav>
                        <NavItem eventKey={1} componentClass={Link} to="/" href="/">Strona Główna</NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/products" href="/products">Produkty</NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/contact" href="/contact">Kontakt</NavItem>
                    </Nav>
                </Navbar>
                <p>&copy; 2018 Dr.Fisher All Rights Reserved. <span>Designed and implemented <a
                    href="https://zirek90.github.io/Mateusz-Grzymowicz-Portfolio/">Mateusz Grzymowicz</a></span></p>
            </div>
        )
    }
}

export default Footer;