import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import React, {Component} from 'react';
import logo from "../../../../img/inletta-przezroczyste.png"
import {Col} from 'react-bootstrap'
import Google_API from './config';


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter={{lat: 54.406364, lng: 17.155092}}
    >
        {props.isMarkerShown && <Marker position={{lat: 54.407203, lng: 17.155245}}
                                        defaultAnimation={2}
        >
            <InfoWindow>
                <div className={"MapInfo"}>
                    <img src={logo} alt="company logo"></img>
                    <p>Inletta Sp z o.o.</p>
                    <p>Krzywań 25</p>
                    <p><a href="tel:(59) 815 20 53">tel: (59) 815 20 53</a></p>
                    <p><a href="mailto:sekretariat@inletta.com">sekretariat@inletta.com</a></p>
                </div>
            </InfoWindow>

        </Marker>}
    </GoogleMap>
))


class MapContainer extends Component {
    render() {
        const Api = `https://maps.googleapis.com/maps/api/js?key=${Google_API}`;

        return (
            <Col>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL={Api}
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


