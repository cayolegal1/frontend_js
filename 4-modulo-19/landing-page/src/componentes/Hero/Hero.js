import React from 'react'
import SliderImage from '../../img/slider-1.png'
import {Carousel, Button} from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="Hero">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SliderImage}
      alt="First slide" title="Slider"
    /> 
    <Carousel.Caption>
      <h3>Sed ut perspiciatis  <br/> unde omnis iste natus</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim doloremque primero.</p>
      <Button variant='primary' className="But-read"> Read More </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SliderImage}
      alt="Second slide" 
    />

    <Carousel.Caption>
      <h3>Sed ut perspiciatis  <br/> unde omnis iste natus</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim doloremque segundo.</p>
      <Button variant='primary' className="But-read"> Read More </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SliderImage}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Sed ut perspiciatis  <br/> unde omnis iste natus</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim doloremque tercero.</p>
      <Button variant='primary' className="But-read" > Read More </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </section>
    )
}

export default Hero;