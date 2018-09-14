import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap'
import ProductsHeader from "./components/ProductsHeader";
import ProductsList from "./components/ProductsList";


class Products extends Component {
    render() {
        return (
            <div className="main-products-container">
                <Grid className="text-center">
                    <ProductsHeader/>
                        <ProductsList/>

                </Grid>
            </div>
        );
    }
}

export default Products;