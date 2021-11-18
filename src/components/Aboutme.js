import './Aboutme.css';
import yo from "../img/66991953-5F5C-45CD-B203-BD6896C84ED5.jpeg";

function Aboutme () {
    return (
    <div id="Aboutme" className="row">
        <div className="col-lg-2 col-md-2 col-sm-block"></div>
        <img id="imagen" className="col-3" src={yo} alt=""/>
        <div id="text" className="col-5">
        <p className="title">Hello and welcome to my personal website!</p>
        <p className="texto">I'm Monica Molina, political scientist and I love to work with data. I strongly believe that using data to analyze social behaviors is not about fitting models, it's about discover how diverse are we and how societies evolve.</p> 
        <p className="texto">I use programming languages as R, Python and JavaScript. I'm an specialist in electoral strategy and public finance, and I love to keep learning and solve problems.</p>
        <p className="texto">I've worked as freelance consultant, research assistant  and public server in Mexico.</p>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-block"></div>
    </div>
    );
}

export default Aboutme;