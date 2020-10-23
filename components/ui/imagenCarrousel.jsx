import React from 'react';
import Carousel from 'react-images';

const images = [{ source: '/img/contrata.jpg' }, { source: '/img/galeria2.jpg' }, { source: '/img/galeria3.jpg' }, { source: '/img/galeria4.jpg' }];

const ImagenCarrousel = () => {
    return ( 
        <Carousel views={images} />
     );
}
 
export default ImagenCarrousel;
