import Carousel from 'react-bootstrap/Carousel';
import video from "../img/video.mp4";
import plataforma from "../img/plataforma.mov";
import banner from "../img/mapa.png";
import './Carousel.css';

function Carucel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <video
          className="d-block w-100"
          src={video}
          alt="First slide"
          autoPlay loop
        />
        <Carousel.Caption>
        <h3 id="title-video">Geo-data</h3>
        <p id="title-video">Visualization of strategic data. Electoral and Public Policy planning.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <video
          className="d-block w-100"
          src={plataforma}
          alt="Second slide"
          autoPlay loop
        />
        <Carousel.Caption>
        <h3 id="title-video">Electoral platform under construction</h3>
        <p id="title-video">Electoral application with local and federal information (2000-2021) under construction.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="mapa"
          className="d-block"
          src={banner}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3 id="title-map">Electoral Strategy</h3>
        <p id="text-map">Electoral strategy and estimation of results.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
  
  export default Carucel;
  