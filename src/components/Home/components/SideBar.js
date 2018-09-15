import React, {Component} from 'react';

import { Row } from 'react-bootstrap';

import project1 from '../../../img/zdjecia-zakladu/zaklad1.jpg';
import project2 from '../../../img/zdjecia-zakladu/zaklad2.jpg';
import project3 from '../../../img/zdjecia-zakladu/zaklad3.jpg';
import project4 from '../../../img/zdjecia-zakladu/zaklad4.jpg';
import project5 from '../../../img/zdjecia-zakladu/zaklad5.jpg';
import project6 from '../../../img/zdjecia-zakladu/zaklad6.jpg';

import SideBarGallery from "./subcomponents/SideBarGallery";

const gallery = [
    {
        photo: project1,
        title: "",
    },
    {
        photo: project2,
        title: "",
    },
    {
        photo: project3,
        title: "",
    },
    {
        photo: project4,
        title: "",
    },
    {
        photo: project5,
        title: "",
    },
    {
        photo: project6,
        title: "",
    }
];

class SideBar extends Component {
    render() {
        return (
            <div className="side-bar">
                <h2>Nasz Zakład</h2>
                    <Row>
                        {gallery.map((e, i) =>
                            <SideBarGallery
                                photo={e.photo}
                                title={e.title}
                                key={i}/>
                        )}
                    </Row>
            </div>
        );
    }
}

export default SideBar;