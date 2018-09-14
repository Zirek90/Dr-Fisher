import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

import photoSlider1 from '../../../img/fil sledz w oleju.jpg';
import photoSlider2 from '../../../img/fil sledz w pomid.jpg';

class HomeSlider extends Component {
    render() {

        const images = [
            {
                original: photoSlider1,
            },
            {
                original: photoSlider2,
            }
        ]

        return (
            <ImageGallery items={images}
            slideInterval={3000}
            slideDuration={1500}
            showPlayButton={false}
            autoPlay={false}
            showFullscreenButton={false}
            showThumbnails={false}/>
        );
    }
}

export default HomeSlider;

