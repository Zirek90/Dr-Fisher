import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap'


class ProductsHeader extends Component {
    render() {
        const data = this.props.data;

        return (
            <Jumbotron>
                <h1>{data.header}</h1>
            </Jumbotron>
        );
    }
}

export default ProductsHeader;