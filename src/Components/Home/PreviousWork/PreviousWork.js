import React from 'react';
import CarouselOne from '../../../images/carousel-1.png'
import CarouselTwo from '../../../images/carousel-2.png'
import CarouselThree from '../../../images/carousel-3.png'
const PreviousWork = () => {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
      <img src={CarouselTwo} class="d-block " alt="..." />
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src={CarouselTwo} class="d-block " alt="..." />
    </div>
    <div class="carousel-item">
      <img src={CarouselThree} class="d-block " alt="..." />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    );
};

export default PreviousWork;