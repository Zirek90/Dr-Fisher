import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

import photoSlider1 from '../../../img/product1.JPG';
import photoSlider2 from '../../../img/product2.JPG';

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
            slideInterval={6000}
            slideDuration={1500}
            showPlayButton={false}
            autoPlay={false}
            showFullscreenButton={false}
            showThumbnails={false}/>
        );
    }
}

export default HomeSlider;

