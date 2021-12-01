import React from "react";
import { Carousel } from "react-bootstrap";
import SignInButton from "./SignInButton";

const LandingImages = () => {
  const carCaption = (
    <>
      <h1>DataproX</h1>
      <h3>Conocimiento especializado a tu alcance</h3>
      <SignInButton />
    </>
  );

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
         src="https://cdn.glitch.me/354fc71e-5018-4a34-aa63-0a5f3e65d730%2Fslide1.png?v=1637808733818"
         // src="../assets/img/slide1.png"
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          {carCaption}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.glitch.me/354fc71e-5018-4a34-aa63-0a5f3e65d730%2Fslide2.png?v=1637808741541"
          alt="Second slide"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          {carCaption}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingImages;