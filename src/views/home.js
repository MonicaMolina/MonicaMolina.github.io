import Card from '../components/Card';
import Educacion from '../components/Educacion';
import Investigacion from '../components/Investigacion';
import Carrucel from '../components/Carrucel';
import Hero from '../components/Hero';
import Aboutme from '../components/Aboutme';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import iconIMG from "../img/logog.png";
import './Home.css';

function Home() {
    return(
        <div className= "Body-Home">
            <Navbar />
            <Hero />
            <Aboutme />
            <div className="container d-flex justify-content-center align-items-center">
                <div className="col-lg-6 col-md-10 col-sm-12 col-sx-12">
                <p id="trayectoria">Work Experience</p>
                <Card />
                <p id="trayectoriaI">Research Experience</p>
                <Investigacion />
                <p id="trayectoriaA">Academic Achievements</p>
                <Educacion />
                </div>
            </div>
            <p id="Component"><img id="Icon" src= {iconIMG} alt=""/> Molina Consultores</p>
            <Carrucel />
            <div id="Contact" className="row w-100">
            <div className="col-2"></div>
            <div className="col-8">
            <p>Would you like to colaborate with me or make me a work offer?</p>
            <p>Please find the contact information below. </p>
            </div>
            <div className="col-2"></div>
            </div>
            <Footer />
        </div>
        );
    }

export default Home;