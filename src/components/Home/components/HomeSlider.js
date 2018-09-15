import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

import photoSlider1 from '../../../img/sledzZPomidorem.png';
import photoSlider2 from '../../../img/sledzWOleju.png';

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
            slideInterval={10000}
            slideDuration={1500}
            showPlayButton={false}
            autoPlay={true}
            showFullscreenButton={false}
            showThumbnails={false}/>
        );
    }
}

export default HomeSlider;

