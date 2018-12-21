import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import ProductsHeader from "./ProductsHeader";
import ListOfProducts from '../../../data/photosContainer.js';

import ProductElements from "./subcomponent/ProductElements";
import BrandDescription from "./subcomponent/BrandDescription";


class ProductsList extends Component {

    render() {
        const data = this.props.data;

        return (
            <Row>
                <BrandDescription data={data.description}/>
                <ProductsHeader data={data}/>
                <Col sm={12} xs={12} className="products-list-container">

                    {ListOfProducts.map((e, i) =>
                        <ProductElements
                            photo={e.photo}
                            title={e.title}
                            engTitle={e.engTitle}
                            description={e.description}
                            engDescription={e.engDescription}
                            dimension={e.dimension}
                            nettoWeight={e.nettoWeight}
                            key={i}/>
                    )}
                </Col>
            </Row>

        );
    }
}

export default ProductsList;