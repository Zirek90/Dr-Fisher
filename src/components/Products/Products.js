import React, {Component} from 'react';
import {Grid} from 'react-bootstrap'
import ProductsList from "./components/ProductsList";

{/*import ProductsHeader from "./components/ProductsHeader";*/}


class Products extends Component {
    render() {
        return (
            <div className="main-products-container">
                <Grid className="text-center">
                    {/*<ProductsHeader/>*/}
                        <ProductsList/>

                </Grid>
            </div>
        );
    }
}

export default Products;