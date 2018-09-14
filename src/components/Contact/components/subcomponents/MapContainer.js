import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import React, {Component} from 'react';
import photo from "../../../../img/WP_20150313_001.jpg"
import {Col} from 'react-bootstrap'


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: 54.406364, lng: 17.155092}}
    >
        {props.isMarkerShown && <Marker position={{lat: 54.407203, lng: 17.155245}}
                                        defaultAnimation={2}
        >
            <InfoWindow>
                <div className={"MapInfo"}>
                    <img src={photo}></img>
                    <h3>Dr Fisher</h3>
                    <p>ul. Zachodnia 22</p>
                </div>
            </InfoWindow>

        </Marker>}
    </GoogleMap>
))


class MapContainer extends Component {
    render() {
        const Google_API = "AIzaSyBzozCH6QP2_nxDfaWud45oWuLRrP11pBQ";

        return (
            <Col>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBzozCH6QP2_nxDfaWud45oWuLRrP11pBQ'
                    type="text/javascript"

                    loadingElement={<div className={"map-loading-element"}/>}
                    containerElement={<div className={"map-container-element"}/>}
                    mapElement={<div className={"map-element"}/>}
                />
            </Col>
        );
    }
}

export default MapContainer;


