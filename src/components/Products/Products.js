import React, {Component} from 'react';
import {Grid} from 'react-bootstrap'
import ProductsList from "./components/ProductsList";
import {actions} from '.././actions/actions';

{/*import ProductsHeader from "./components/ProductsHeader";*/}
let ReactRedux = require('react-redux');


class Products extends Component {
    render() {
        const content = this.props.content;

        if (content) {

        return (
            <div className="main-products-container">
                <Grid className="text-center">
                    {/*<ProductsHeader/>*/}
                        <ProductsList data={content.page.brand}/>
                </Grid>
            </div>
        )
    } else {
        return;
      }
    }
}
export default ReactRedux.connect(
    (state) => ({content: state.content}),
    (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
  )(Products);

// export default Products;