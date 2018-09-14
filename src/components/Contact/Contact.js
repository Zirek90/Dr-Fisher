import React, {Component} from 'react';
import {Grid} from 'react-bootstrap'
import ContactInfo from "./components/ContactInfo";


class Contact extends Component {
    render() {
        return (
            <div>
                <Grid className="text-center contact-container">
                    <h1>Kontakt</h1>
                    <ContactInfo/>
                </Grid>
            </div>
        );
    }
}

export default Contact;
