import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'

import MissionContent from "./components/subcomponents/MissionContent";
import HomeSlider from "./components/HomeSlider";
import SideBar from "./components/SideBar";

// import {Parallax} from 'react-parallax';
// import headerBackground from '../../img/backgroundHome3.jpg';

import {actions} from '.././actions/actions';
let ReactRedux = require('react-redux');


class Home extends Component {
    render() {

        const content = this.props.content
        if (content) {

        return ( 
            
            <div className="home-container">
            {/* <Parallax
                    bgImage={headerBackground}
                    bgImageAlt="the Background"
                    strength={10}> */}
            <HomeSlider/>
            <Grid className="text-center">
            <MissionContent content={content.page.home}/>
                <SideBar/>
            </Grid>
            {/* </Parallax> */}
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
  )(Home);


// export default Home;