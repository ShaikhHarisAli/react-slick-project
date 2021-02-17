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

function App() {
  // images
  const data = [
    {
      image1: image1,
      content: {
        title: "First Slide",
        city: "YOUR MAIMI CITY GUIDE",
        color: "red",
      },
    },
    {
      image2: image2,
      content: {
        title: "Second Slide",
        city: "YOUR HAVANA CITY GUIDE",
        color: "red",
      },
    },
    {
      image3: image3,
      content: {
        title: "Third Slide",
        city: "YOUR MAIMI BIMI GUIDE",
        color: "red",
      },
    },
    {
      image: image4,
      content: {
        title: "FORTH Slide",
        city: "YOUR MAIMI BIMI GUIDE",
        color: "red",
      },
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    autoplaySpeed: 1000,
    cssEase: "linear",
    fade: true,
    // useCSS: false,

    className: "slides",
    // stack overflow code
  };

  return (
    <div className="App">
      <Slider {...settings} style={{ height: "100vh" }}>
        {/* slide 1 */}
        <div className="container" >
          <button className="top-left">
            <FontAwesomeIcon
              style={{ Color: "red" }}
              icon={faArrowAltCircleLeft}
            />
          </button>
          <img alt="" src={image1} style={{ width: "100%", height: "100vh" }} />
          <div className="centered">
            <h1 className="h1">MAIMI</h1>
            <h1 className="right"> BIMI </h1>

            <p>
              Friday June 25 <br /> Arriving 8.30 pm{" "}
            </p>
            <button className="excursions-button">Book Excursions</button>
            <div>
              <button className="button first " style={{color:"red"}}>
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
            <h1 className="left">MAIMI</h1>
            <h1 className="h1" >BIMI</h1>
            <h1 className="right">HAVANA</h1>

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
              <button className="button " style={{color:"red"}}>
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
            <h1 className="left" >BIMI</h1>
            <h1 className="h1" >HAVANA</h1>
            <h1 className="right" >MIAMI</h1>

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
              <button className="button" style={{color:"red"}}>
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
            <h1 className="left" >HAVANA</h1>
            <h1 className="h1" >MIAMI</h1>
            

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
              <button className="button" style={{color:"red"}}>MIA</button>
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
      </Slider>
    </div>
  );
}

export default App;
