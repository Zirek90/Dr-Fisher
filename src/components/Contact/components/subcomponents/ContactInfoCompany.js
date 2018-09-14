import React, {Component} from 'react';
import {Col} from 'react-bootstrap'


class ContactInfoCompany extends Component {
    render() {
        return (
            <Col className="contact-info">
                <div>
                    <h3>Dr.Fisher Sp. z o.o.</h3>
                    <p>
                        ul. Stryjska 24
                        <br/>
                        81-506 Gdynia
                        <br/>

                        NIP: 586-220-96-28
                        <br/>

                        REGON: 220547633
                        <br/>

                        Sad Rejonowy Gdańsk – Północ w Gdańsku VIII Wydział Gospodarczy
                        <br/>

                        Krajowego Rejestru Sadowego
                        <br/>

                        NR KRS: 0000292569
                    </p>
                    <p>Dział handlowy tel: 508 051 500
                        <br/>

                        Email: Drfisher@onet.pl
                    </p>
                </div>
            </Col>
        );
    }
}

export default ContactInfoCompany;
