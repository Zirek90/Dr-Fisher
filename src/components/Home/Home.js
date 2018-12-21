import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'

import MissionContent from "./components/subcomponents/MissionContent";


import {actions} from '.././actions/actions';
let ReactRedux = require('react-redux');


class Home extends Component {
    render() {

        const content = this.props.content
        if (content) {

        return ( 
            
            <div className="background">
                <MissionContent content={content.page.home}/>
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


