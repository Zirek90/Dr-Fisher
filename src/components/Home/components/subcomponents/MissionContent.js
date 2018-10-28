import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import MissionHeader from "./MissionHeader";

class MissionContent extends Component {
    render() {
        const content = this.props.content

        return (
            <Row className="about-us">

                    <MissionHeader content={content}/>
                    <Col>
                        <p> 
                            {content.paragraphOne}
                        </p>
                        <p>
                            {content.paragraphTwo}
                        </p>
                    </Col>
            </Row>
        );
    }
}

export default MissionContent;
