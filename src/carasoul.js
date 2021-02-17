import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpeg";
import Slider from "react-slick";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Fade } from "react-reveal";
import CarouselComp from "./Carousel";
import styled, { css } from "styled-components";
import Reveal from "react-reveal/Reveal";

//
import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from "react-reveal/Slide";
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import { Fragment } from "react";

const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  z-index: 100;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>
        {console.log(children)}
      </Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>
        {">"}
      </Arrow>
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
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  text-align: center;
  position: absolute;
  top: 0;
  line-height: 100vh;
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
//

function App() {
  // images

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplaySpeed: 5000,
    // cssEase: "linear",
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

  const slides = (
    <Slider {...settings}>
      {/* <button className="top-left">
				<FontAwesomeIcon style={{ Color: 'red' }} icon={faArrowAltCircleLeft} />
			</button> */}

      {/*  */}

      {/* Slide 1 */}

      <div
        className={`container image1`}
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1 className="h1" style={{ paddingTop: "30vh" }}>
          MAIMI {currentSlide}
        </h1>

        <p>
          Friday June 25 <br /> Arriving 8.30 pm{" "}
        </p>

        <Fade left>
          <button className="excursions-button">Book Excursions</button>
        </Fade>
        <div>
          <button className="button">
            MIA{" "}
            <FontAwesomeIcon
              className="icon-size"
              icon={faArrowAltCircleRight}
            />
          </button>
          <button className="button">
            BIM{" "}
            <FontAwesomeIcon
              className="icon-size"
              icon={faArrowAltCircleRight}
            />
          </button>
          <button className="button">
            HAV{" "}
            <FontAwesomeIcon
              className="icon-size"
              icon={faArrowAltCircleRight}
            />
          </button>
          <button className="button">MIA</button>
        </div>
      </div>
      {/* Slide 2 */}

      <div
        className={`container image2`}
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1 className="h1" style={{ paddingTop: "30vh" }}>
          HAVANA {currentSlide}
        </h1>
        <p>
          Friday June 25 <br /> Arriving 8.30 pm{" "}
        </p>
        <Fade left>
          <button className="excursions-button">Book Excursions</button>
        </Fade>
        <div>
          <button className="button">
            MIA{" "}
            <FontAwesomeIcon
              className="icon-size"
              icon={faArrowAltCircleRight}
            />
          </button>
          <button className="button">
            BIM{" "}
            <FontAwesomeIcon
              className="icon-size"
              icon={faArrowAltCircleRight}
            />
          </button>
          <button className="button">
            HAV{" "}
            <FontAwesomeIcon
              className="icon-size"
              icon={faArrowAltCircleRight}
            />
          </button>
          <button className="button">MIA</button>
        </div>
      </div>
      {/* Slide 3 */}

      <div
        className={`container image3`}
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1 className="h1" style={{ paddingTop: "30vh" }}>
          BIMI
        </h1>
        <p>
          Friday June 25 <br /> Arriving 8.30 pm{" "}
        </p>
        <button className="excursions-button">Book Excursions</button>
        <div>
          <button className="button">
            MIA{" "}
            <FontAwesomeIcon
              className="icon-size"
              icon={faArrowAltCircleRight}
            />
          </button>
          <button className="button">
            BIM{" "}
            <FontAwesomeIcon
              className="icon-size"
              icon={faArrowAltCircleRight}
            />
          </button>
          <button className="button">
            HAV{" "}
            <FontAwesomeIcon
              className="icon-size"
              icon={faArrowAltCircleRight}
            />
          </button>
          <button className="button">MIA</button>
        </div>
      </div>

      {/* Slide 4 */}
      <div
        className={`container image4`}
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1 className="h1" style={{ paddingTop: "30vh" }}>
          MAIMI
        </h1>
        <p>
          Friday June 25 <br /> Arriving 8.30 pm{" "}
        </p>
        <button className="excursions-button">Book Excursions</button>
        <div>
          <button className="button">
            MIA{" "}
            <FontAwesomeIcon
              className="icon-size"
              icon={faArrowAltCircleRight}
            />
          </button>
          <button className="button">
            BIM{" "}
            <FontAwesomeIcon
              className="icon-size"
              icon={faArrowAltCircleRight}
            />
          </button>
          <button className="button">
            HAV{" "}
            <FontAwesomeIcon
              className="icon-size"
              icon={faArrowAltCircleRight}
            />
          </button>
          <button className="button">MIA</button>
        </div>
      </div>

      {/* <div className="box centered-popup" style={{backgroundColor:"white"}}>
            <hr/>
            <a className="bottom-button" href="#popup1">
              
            { d.content.city}
            
            </a>
          </div>

        {/* <div className="overlay">
            <div className="popup">
              <h2>Here i am</h2>
              <a className="close" href="#">&times;</a>
              <div className="content">
                Thank to pop me out of that button, but now i'm done so you can close this window.
	          	</div>
            </div>
          </div> */}
    </Slider>
  );

  const slider = (
<Slider>

        <Carousel {...settings} style={{ height: "100vh" }}>
          {/* slide 1 */}
          <div className="container">
            <button className="top-left">
              <FontAwesomeIcon
                style={{ Color: "red" }}
                icon={faArrowAltCircleLeft}
              />
            </button>
            <img alt="" src={image1} style={{ width: "100%", height: "100vh" }} />
            <div className="centered">
              <div className="abc">
                <Fade right>
                  <h1>MAIMI</h1>
                </Fade>
                <h1 className="right"> BIMI </h1>
              </div>
    
              <p>
                Friday June 25 <br /> Arriving 8.30 pm{" "}
              </p>
              <button className="excursions-button">Book Excursions</button>
    
              <div>
                <button className="button first " style={{ color: "red" }}>
                  MIA{" "}
                  <FontAwesomeIcon
                    className="icon-size"
                    icon={faArrowAltCircleRight}
                  />
                </button>
                <button className="button ">
                  BIM{" "}
                  <FontAwesomeIcon
                    className="icon-size"
                    icon={faArrowAltCircleRight}
                  />
                </button>
                <button className="button">
                  HAV{" "}
                  <FontAwesomeIcon
                    className="icon-size"
                    icon={faArrowAltCircleRight}
                  />
                </button>
                <button className="button">MIA</button>
              </div>
            </div>
            {/* Bottom fixed PopUp */}
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
          {/* slide 2 */}
          <div className="container">
            <button className="top-left">
              <FontAwesomeIcon
                style={{ Color: "red" }}
                icon={faArrowAltCircleLeft}
              />
            </button>
            <img alt="" src={image2} style={{ width: "100%", height: "100vh" }} />
            <div className="centered">
              <div className="abc2">
                <h1 className="left">MAIMI</h1>
                <h1>BIMI</h1>
                <h1 className="right">HAVANA</h1>
              </div>
              <p>
                Friday June 25 <br /> Arriving 8.30 pm{" "}
              </p>
              <button className="excursions-button">Book Excursions</button>
              <div>
                <button className="button first ">
                  MIA{" "}
                  <FontAwesomeIcon
                    className="icon-size"
                    icon={faArrowAltCircleRight}
                  />
                </button>
                <button className="button " style={{ color: "red" }}>
                  BIM{" "}
                  <FontAwesomeIcon
                    className="icon-size"
                    icon={faArrowAltCircleRight}
                  />
                </button>
                <button className="button">
                  HAV{" "}
                  <FontAwesomeIcon
                    className="icon-size"
                    icon={faArrowAltCircleRight}
                  />
                </button>
                <button className="button">MIA</button>
              </div>
            </div>
            {/* Bottom fixed PopUp */}
            <div
              className="box centered-popup"
              style={{ backgroundColor: "white" }}
            >
              <hr />
              <a className="bottom-button fade-in" href="#popup1">
                YOUR BIMI CITY GUIDE
              </a>
            </div>
          </div>
          {/* slide 3 */}
          <div className="container">
            <button className="top-left">
              <FontAwesomeIcon
                style={{ Color: "red" }}
                icon={faArrowAltCircleLeft}
              />
            </button>
            <img alt="" src={image3} style={{ width: "100%", height: "100vh" }} />
            <div className="centered">
              <h1 className="left">BIMI</h1>
              <h1>HAVANA</h1>
              <h1 className="right">MIAMI</h1>
    
              <p>
                Friday June 25 <br /> Arriving 8.30 pm{" "}
              </p>
              <button className="excursions-button">Book Excursions</button>
              <div>
                <button className="button first ">
                  MIA{" "}
                  <FontAwesomeIcon
                    className="icon-size"
                    icon={faArrowAltCircleRight}
                  />
                </button>
                <button className="button ">
                  BIM{" "}
                  <FontAwesomeIcon
                    className="icon-size"
                    icon={faArrowAltCircleRight}
                  />
                </button>
                <button className="button" style={{ color: "red" }}>
                  HAV{" "}
                  <FontAwesomeIcon
                    className="icon-size"
                    icon={faArrowAltCircleRight}
                  />
                </button>
                <button className="button">MIA</button>
              </div>
            </div>
            {/* Bottom fixed PopUp */}
            <div
              className="box centered-popup"
              style={{ backgroundColor: "white" }}
            >
              <hr />
              <a className="bottom-button fade-in" href="#popup1">
                YOUR HAVANA CITY GUIDE
              </a>
            </div>
          </div>
          {/* slide 4 */}
          <div className="container">
            <button className="top-left">
              <FontAwesomeIcon
                style={{ Color: "red" }}
                icon={faArrowAltCircleLeft}
              />
            </button>
            <img alt="" src={image3} style={{ width: "100%", height: "100vh" }} />
            <div className="centered">
              <h1 className="left">HAVANA</h1>
              <h1>MIAMI</h1>
    
              <p>
                Friday June 25 <br /> Arriving 8.30 pm{" "}
              </p>
              <button className="excursions-button">Book Excursions</button>
              <div>
                <button className="button first ">
                  MIA{" "}
                  <FontAwesomeIcon
                    className="icon-size"
                    icon={faArrowAltCircleRight}
                  />
                </button>
                <button className="button ">
                  BIM{" "}
                  <FontAwesomeIcon
                    className="icon-size"
                    icon={faArrowAltCircleRight}
                  />
                </button>
                <button className="button">
                  HAV{" "}
                  <FontAwesomeIcon
                    className="icon-size"
                    icon={faArrowAltCircleRight}
                  />
                </button>
                <button className="button" style={{ color: "red" }}>
                  MIA
                </button>
              </div>
            </div>
            {/* Bottom fixed PopUp */}
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
        </Carousel>
      
</Slider>
  
  );

  return <div className="App">{slider}</div>;
}

export default App;
