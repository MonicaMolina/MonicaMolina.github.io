import "./carde.css";

const  educacion = [
    {
        icon: require("../img/logo-itam.png").default,
        institution: "Instituto Tecnológico Autónomo de México (ITAM), Mexico City.",
        degree: "BA Political Science",
        period: "2013 - 2019",
    },
    {
        icon: require("../img/logo-itam.png").default,
        institution: "Instituto Tecnológico Autónomo de México (ITAM), Mexico City.",
        degree: "Economics",
        period: "2012 - 2015 (Unfinished)",
    },
    {   
        icon: require("../img/logo-itam.png").default,
        institution: "Instituto Tecnológico Autónomo de México (ITAM), Mexico City.",
        degree: "International Relations",
        period: "2016 - 2017 (Unfinished)",
    },
    {  
        icon: require("../img/Imagen 27-05-21 a las 13.15.jpeg").default,
        institution: "Universitat Pompeu Fabra (UPF), Barcelona, Spain.",
        degree: "European Union Economic Affairs/Globalization",
        period: "Summer 2014",
    },
    {  
        icon: require("../img/LogoIPSA.jpg").default,
        institution: "IPSA-FLACSO Summer School, Mexico City",
        degree: "Quantitative Methods for Public Policy Analysis",
        period: "Summer 2016",
    },
]

function CardE() {
    return <div id="Card">
        {educacion.map((e, i) => {
    return <div id="card-each" key={i} className="row">
        <div className="col-2">
        <img id="icon-card" src={e.icon} alt=""/>
        </div> 
        <div id="text-card" className="col-10">
            <p className="fw-bold">{e.institution} </p>
            <p className="fw-bold"> {e.degree}</p>
            <p>Period: {e.period}</p>
        </div>
    </div> 
    })}
    </div>
}

export default CardE;