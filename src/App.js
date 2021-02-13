import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import Slider from "react-slick";
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'




function App() {
  // images
  const data = [
    {
      image: image1,
      content: {
        title: "First Slide",
        title2: "balh22",
      },
    },
    {
      image: image2,
      content: {
        title: "Second Slide",
        title2: "balh22",
      },
    },
    {
      image: image3,
      content: {
        title: "Third Slide",
        title2: "balh22",
      },
    },
  ]
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }
    ],
    autoplaySpeed: 2000,
    cssEase: "linear",
    fade: true,
    className: "slides"

  };

  const slides = () =>
    data.map(d => (
      <div className="container">
        <img alt="" src={d.image} style={{ width: "100%", height: "100vh" }} />
        <div className="centered">
          <h1 >{d.content.title}</h1>
          <p>Friday June 25 <br /> Arriving 8.30 pm </p>
          <button className="excursions-button">Book Excursions</button>
          <div>
            <button className="button">MIA <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            <button className="button">BIM <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            <button className="button">HAV <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            <button className="button">MIA</button>
          </div>
          {/* Bottom fixed PopUp */}
          

        </div>
        <div className="box centered-popup" style={{backgroundColor:"white"}}>
            <hr/>
            <a className="bottom-button" href="#popup1">YOUR MAIMI CITY GUIDE</a>
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
      </div>
    )
    );



  return (

    <div className="App">

      <Slider {...settings} style={{ height: "100vh" }}>
        {slides()}
      </Slider>

    </div>
  );
}

export default App;
