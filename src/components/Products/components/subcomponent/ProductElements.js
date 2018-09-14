import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap'


class ProductElements extends Component {
    constructor(props) {
        super(props)
        this.state ={
            opacity: "rgba(64, 152, 229, 0.5)"
        }
    }
    increaseOpacity = () => {
        this.setState({
            opacity: "rgba(64, 152, 229, 1)"
        })
    }

    decreaseOpacity = () => {
        this.setState({
            opacity: "rgba(64, 152, 229, 0.5)"
        })
    }

    render() {
        return (
            <Row className="products-row">
                <h2>{this.props.title}</h2>
                <Col xs={2} sm={12} className="product-element-container">
                    <Image src={this.props.photo} responsive thumbnail/>
                    <div className="products-description" style={{backgroundColor:this.state.opacity}}
                    onMouseEnter={this.increaseOpacity}
                    onMouseLeave={this.decreaseOpacity}>
                        <ul>
                            <li><span className="product-text"> Opis: </span> {this.props.description}</li>
                            <li><span className="product-text">Gramatura: </span> {this.props.dimension}</li>
                            <li><span className="product-text">Waga: </span> {this.props.nettoWeight}</li>
                            <li><span className="product-text">Sposób pakowania: </span> {this.props.packingStyle}</li>
                            <li><span className="product-text">Dostępność:</span> {this.props.accesibility}</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default ProductElements;