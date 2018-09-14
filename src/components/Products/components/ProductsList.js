import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'

import product1 from '../../../img/product1.JPG';
import product2 from '../../../img/product2.JPG';
import ProductElements from "./subcomponent/ProductElements";

const ListOfProducts = [
    {
        photo: product1,
        title: "Filety śledziowe w sosie pomidorowym",
        description: "Rewelacyjny śledzior który zadowoli każdą rodzine, da duzo szczescia, sprawi że w rodzinnej atmosferze " +
        "będzie panować miłośc przyjaźń i braterstwo",
        dimension: "130 x 150 x 20",
        nettoWeight: "170g",
        packingStyle: "1 karton = 13 puszek lub 1 paleta = 238 kartonów",
        accesibility: "dostępny na magazynie"
    },
    {
        photo: product2,
        title: "Filety śledziowe w oleju",
        description: "Inny niesamowity śledzior który zadowoli każdą rodzine, da duzo szczescia, sprawi że w rodzinnej atmosferze " +
        "będzie panować miłośc przyjaźń i braterstwo",
        dimension: "130 x 150 x 20",
        nettoWeight: "170g",
        packingStyle: "1 karton = 13 puszek lub 1 paleta = 238 kartonów",
        accesibility: "dostępny na magazynie"
    }
];

class ProductsList extends Component {


    render() {
        return (
            <Row>

            <Col sm={12} xs={12} className="products-list-container">

                    {ListOfProducts.map((e, i) =>
                        <ProductElements
                            photo={e.photo}
                            title={e.title}
                            description={e.description}
                            dimension={e.dimension}
                            nettoWeight={e.nettoWeight}
                            accesibility={e.accesibility}
                            packingStyle={e.packingStyle}
                            key={i} />
                )}
            </Col>
            </Row>

        );
    }
}

export default ProductsList;