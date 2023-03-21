import React, { useState } from 'react';
import './carrousel.css';
import flecheDroite from '../../images/flecheDroite.png';
import flecheGauche from '../../images/flecheGauche.png';


const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const cliqueAv = () => {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };
  
    const cliqueAp = () => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };
  
    return (
      <div className="carrousel">
        <img className='fleche carrousel_flecheG' onClick={cliqueAv} src={flecheGauche} alt="flechegauche"/>
        <img className='carrousel_img' src={images[currentImageIndex]} alt="carousel" />
        <img className='fleche carrousel_flecheD' onClick={cliqueAp} src={flecheDroite} alt="flechedroite"/>
        <p className='nbImg'>{currentImageIndex + 1} / {images.length}</p>
      </div>
    );
  };
  
  export default Carousel;