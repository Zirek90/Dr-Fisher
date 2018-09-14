import React, {Component} from 'react';
import { Row } from 'react-bootstrap'
import ContactInfoCompany from "./subcomponents/ContactInfoCompany";
import MapContainer from "./subcomponents/MapContainer";



class ContactInfo extends Component {
    render() {
        return (
                <Row className="contact-row">
                    <ContactInfoCompany/>
                    <MapContainer/>
                </Row>
        );
    }
}

export default ContactInfo;
