import React, {Component} from 'react';
import {Grid} from 'react-bootstrap'

import MissionContent from "./components/subcomponents/MissionContent";
import HomeSlider from "./components/HomeSlider";
import SideBar from "./components/SideBar";

import inlettaPhoto from "../../img/zdjecia-zakladu/zdjecieZakladu1.jpg"

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                {/*<HomeSlider/>*/}
                <div className="background">
                    <MissionContent/>
                    <img src={inlettaPhoto} className="backgroundImage"/>
                </div>
                {/*<Grid className="text-center">*/}
                    {/*<MissionContent/>*/}
                    {/*<SideBar/>*/}
                {/*</Grid>*/}
            </div>
        );
    }
}

export default Home;
