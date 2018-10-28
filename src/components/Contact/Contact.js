import React, {Component} from 'react';
import {Grid} from 'react-bootstrap'
import ContactInfo from "./components/ContactInfo";
import {actions} from '.././actions/actions';
let ReactRedux = require('react-redux');


class Contact extends Component {
    render() {
        const content = this.props.content;

        return (
            <div className="contact">
                <Grid className="text-center contact-container">
                    <h1>{content.page.contact.header}</h1>
                    <ContactInfo content={content.page.contact}/>
                </Grid>
            </div>
        );
    }
}

export default ReactRedux.connect(
    (state) => ({content: state.content}),
    (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
  )(Contact);

// export default Contact;
