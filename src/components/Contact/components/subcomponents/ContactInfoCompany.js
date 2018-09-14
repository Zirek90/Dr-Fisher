import React, {Component} from 'react';
import {Col} from 'react-bootstrap'


class ContactInfoCompany extends Component {
    render() {
        return (
            <Col className="contact-info">
                <div>
                <h3>GRAAL S.A.</h3>
                <p>
                    ul. Zachodnia 22
                <br/>
                    84-200 Wejherowo
                    <br/>

                    NIP: 588-20-01-859
                    <br/>

                    Sad Rejonowy Gdańsk – Północ w Gdańsku VIII Wydział Gospodarczy
                    <br/>

                    Krajowego Rejestru Sadowego
                    <br/>

                    NR KRS: 0000205630
                    <br/>

                    K. zakładowy.: 68.456.310 PLN
                    <br/>

                    K. wpłacony: 68.456.310 PLN</p>
                </div>
            </Col>
        );
    }
}

export default ContactInfoCompany;
