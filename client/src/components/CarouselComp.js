import React from 'react';
import { Carousel } from 'react-bootstrap';
function CarouselComp () {
    return (
        <div>
        <Carousel>  
        <Carousel.Item>
  <img
    className="d-block w-100"
    style={{height:500}}
    src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXJ8ZW58MHx8MHx8&w=1000&q=80"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>SAVING ENERGY</h3>
    <h3>SAVING tHE PLANET</h3>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    style={{height:500}}
    src="https://media.istockphoto.com/id/1247794854/photo/solar-panels-with-sunset-and-blue-sky-background-clean-power-energy-concept.jpg?s=612x612&w=0&k=20&c=2urq5Qyycjr3XC_RE1lcArwR_5M3S6s953g7RN2aAd0="
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3>THE SOURCE OF ENERGY</h3>
    <h3>THAT NEVER CAN BE EXHAUSTED</h3>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    style={{height:500}}
    src="https://www.wiprolighting.com/media/images/blogpost/image/benefits-of-solar-lighting---wipro-lighting-1588504149.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>ENERGY GENERATED</h3>
    <h3>FROM NATURAL RESOURCES</h3>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
    );
}

export default CarouselComp;