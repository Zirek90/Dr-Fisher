import React, {Component} from 'react';
import {Col} from 'react-bootstrap'


class ContactInfoCompany extends Component {
    render() {
        const content = this.props.content;

        return (
            <Col className="contact-info">
                <div>
                    <h3>{content.subheader}</h3>
                    <p>
                        {content.paragraphOne}
                        <br/>
                        {content.paragraphTwo}
                        <br/>
                        {content.paragraphThree}
                        <br/>
                        {content.paragraphFour}
                        <br/>
                        {content.paragraphFive}
                        <br/>
                        {content.paragraphSix}
                    </p>
                    <p>{content.paragraphSeven} <a href="tel:(59)-815-20-53">(59) 815 20 53</a>
                        <br/>
                        {content.paragraphEight} <a href="mailto:sekretariat@inletta.com"> sekretariat@inletta.com</a>
                        <br/>

                        {content.paragraphNine} <a href="mailto:zamowienia@inletta.com"> zamowienia@inletta.com</a>
                    </p>
                </div>
            </Col>
        );
    }
}

export default ContactInfoCompany;
