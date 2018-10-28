import React, {Component} from 'react';
import { Row } from 'react-bootstrap'
import ContactInfoCompany from "./subcomponents/ContactInfoCompany";
import MapContainer from "./subcomponents/MapContainer";



class ContactInfo extends Component {
    render() {
        const content = this.props.content;

        return (
                <Row className="contact-row">
                    <ContactInfoCompany content={content.contactInfo}/>
                    <MapContainer/>
                </Row>
        );
    }
}

export default ContactInfo;
