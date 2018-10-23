import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'

import MissionContent from "./components/subcomponents/MissionContent";
import HomeSlider from "./components/HomeSlider";
import SideBar from "./components/SideBar";


class Home extends Component {
    render() {
        return ( 
            <div className="background">
                <MissionContent />
            </div>
        );
    }
}

export default Home;