import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import MissionHeader from "./MissionHeader";

class MissionContent extends Component {
    render() {
        return (
            <Row className="about-us">

                    <MissionHeader/>
                    <Col>
                        <p>W naszym zakładzie produkujemy szeroką gamę wysokiej jakości konserwy rybne pod własną marką
                            Dr.
                            Fisher jak i pod markami naszych globalnych partnerów.
                        </p>
                        <p>Naszą misją jest śledzenie trendów na rynku oraz sprostanie wysublimowanym gustom naszych
                            klientów przy zapewnieniu najwyższej jakości naszych wyrobów.
                        </p>
                    </Col>
            </Row>
        );
    }
}

export default MissionContent;
