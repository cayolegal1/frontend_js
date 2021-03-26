import React from 'react'
import { Carousel } from "react-bootstrap"
import PrimerSlide from "../../img/slider-1.png"
import SecondSlide from "../../img/section3-image.png"
import ThirdSlide from "../../img/section4-image.png"


const Hero = () => {
  return (
      <section className="Hero">
            <Carousel>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={PrimerSlide}
                    alt="First slide"
                  />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={PrimerSlide}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={PrimerSlide}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </section>
    )}


export default Hero;