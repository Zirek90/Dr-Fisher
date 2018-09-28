import React, {Component} from 'react';
import {Col} from 'react-bootstrap'


class ContactInfoCompany extends Component {
    render() {
        return (
            <Col className="contact-info">
                <div>
                    <h3>INLETTA Sp. z o.o.</h3>
                    <p>
                        Krzywań 25
                        <br/>
                        76-248 Dębnica Kaszubska
                        <br/>

                        NIP: 586-223-01-37
                        <br/>

                        REGON: 220696563
                        <br/>

                        Sad Rejonowy Gdańsk – Północ w Gdańsku VIII Wydział Gospodarczy
                        <br/>

                        Krajowego Rejestru Sadowego
                        <br/>

                        NR KRS: 0000316965
                    </p>
                    <p>Sekretariat tel: <a href="tel:(59)-815-20-53">(59) 815 20 53</a>
                        <br/>
                        Dział Handlowy tel: <a href="tel:(59)-815-20-54">(59) 815 20 54</a>
                        <br/>

                        Email: <a href="mailto:Drfisher@onet.pl"> Drfisher@onet.pl</a>
                    </p>
                </div>
            </Col>
        );
    }
}

export default ContactInfoCompany;
