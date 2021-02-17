import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Fade, Slide } from "react-reveal";
import styled, { css } from "styled-components";


import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
// we'll need the Slide component for sliding animations
// but you can use any other effect
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )


const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  user-select: none;
  padding: 0 10px 0 10px;
`;
const Dots = styled.span`
  text-align: center;
  z-index: 1000;
  left: 0%;
  top: 64%;
  position: absolute;
  display: inline;
  width: 100%;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;
const arr = ["Mia", "Bim", "Hav", "Mia"];
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow style={{ color: "white", fontSize: "100px" }} data-position={1}>
        <FontAwesomeIcon
          className="icon-size"
          icon={faArrowAltCircleLeft}
          data-position={0}
          onClick={handleClick}
          style={{ color: "white", fontSize: "40px", opacity: ".5" }}
        />
      </Arrow>
      <Dots right>
        {arr.map((val, index) => (
          <Dot key={index} onClick={handleClick} data-position={index}>
            <span style={{ color: index === position ? "red" : "white" }}>
              {val.toLocaleUpperCase()}
            </span>
            {index === position ? (
              <FontAwesomeIcon
                className="icon-size"
                style={{ color: "red" }}
                icon={faArrowAltCircleRight}
              />
            ) : (
              <FontAwesomeIcon
                onClick={handleClick}
                icon={faArrowAltCircleRight}
                style={{ color: "white" }}
                data-position={index}
              />
            )}
          </Dot>
        ))}
      </Dots>
    </Children>
  </Container>
);

const Carousel = makeCarousel(CarouselUI);
const Children = styled.div`
  width: 100vw;
  position: relative;
  height: 100vh;
`;
const Arrow = styled.a`
  z-index: 100;
  text-align: top;
  position: absolute;
  line-height: 20vh;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${(props) =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;


function App() {
  // images

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    useCSS: true,
    beforeChange: (current, next) => setCurrentSlide(current),
    customPaging: function (i) {
      return <a>{i}</a>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    className: "slides",
  };

  const slider = (
    <Carousel style={{ height: "100vh" }}>
      {/* slide 1 */}
      <Fade>
        <div className="container image1">
          <div className="centered">
            <div className="abc">
              <h1 className="transition">MAIMI</h1>

              <Slide right>
                <h1 className="right"> BIMI </h1>
              </Slide>
            </div>

            <p>
              Friday June 25 <br /> Arriving 8.30 pm{" "}
            </p>

            <a href="#" className="excursions-button">
              Book Excursions
            </a>
          </div>
          {/* Bottom fixed PopUp */}
          <div
            className="box centered-popup"
            style={{ backgroundColor: "white" }}
          >
            <hr />
            <a href="#" className="bottom-button fade-in" href="#popup1">
              YOUR MAIMI CITY GUIDE
            </a>
          </div>
        </div>
      </Fade>
      {/* slide 2 */}
      <Fade>
        <div className="container image2">
          <div className="centered">
            <Slide right>
              <h1 className="left">BIMI</h1>
            </Slide>
            <Slide right>
              <h1>BIMINI</h1>
            </Slide>
            <Slide right>
              <h1 className="right">MIAMI</h1>
            </Slide>

            <p>
              Friday June 25 <br /> Arriving 8.30 pm{" "}
            </p>

            <a href="#" className="excursions-button">
              Book Excursions
            </a>
          </div>
          {/* Bottom fixed PopUp */}
          <div
            className="box centered-popup"
            style={{ backgroundColor: "white" }}
          >
            <hr />

            <a href="#" className="bottom-button fade-in" href="#popup1">
              YOUR BIMINI CITY GUIDE
            </a>
          </div>
        </div>
      </Fade>
      {/* slide 3 */}
      <Fade>
        <div className="container image3">
          <div className="centered">
            <Slide right>
              <h1 className="left">BIMI</h1>
            </Slide>
            <Slide right>
              <h1>HAVANA</h1>
            </Slide>
            <Slide right>
              <h1 className="right">MIAMI</h1>
            </Slide>

            <p>
              Friday June 25 <br /> Arriving 8.30 pm{" "}
            </p>

            <a href="#" className="excursions-button">
              Book Excursions
            </a>
          </div>
          {/* Bottom fixed PopUp */}
          <div
            className="box centered-popup"
            style={{ backgroundColor: "white" }}
          >
            <hr />

            <a href="#" className="bottom-button fade-in" href="#popup1">
              YOUR HAVANA CITY GUIDE
            </a>
          </div>
        </div>
      </Fade>
      {/* slide 4 */}
      <Fade>
        <div className="container image4">
          <div className="centered">
            <Slide right>
              <h1 className="left">HAVANA</h1>
            </Slide>
            <Slide right>
              <h1>MIAMI</h1>
            </Slide>

            <p>
              Friday June 25 <br /> Arriving 8.30 pm{" "}
            </p>

            <a href="#" className="excursions-button">
              Book Excursions
            </a>
          </div>
          {/* Bottom fixed */}
          <div
            className="box centered-popup"
            style={{ backgroundColor: "white" }}
          >
            <hr />
            <a className="bottom-button fade-in" href="#popup1">
              YOUR MAIMI CITY GUIDE
            </a>
          </div>
        </div>
      </Fade>
    </Carousel>
  );

  return <div className="App">{slider}</div>;
}

export default App;
