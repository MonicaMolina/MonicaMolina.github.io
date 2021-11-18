import "./carde.css";

const  ponencias = [
    {
        icon: require("../img/AMECIP.png").default,
        institution: "VIII Political Science International Conference. AMECIP.",
        topic: "Political Culture, representation seats electoral competition.",
        title: "Metamorphosis of the Mexican Party System: Independent Candidates and its effects",
        date: "December 9th, 2020",
    },
    {  
        icon: require("../img/1858-las-reformas-politicas-a-la-representacion-en-america-latina-detalle.jpeg").default,
        institution: "Second International Seminar: “The representation politic reforms in Latin America. UNAM",
        topic: "Parties and Party Systems",
        title: "Metamorphosis of the Mexican Party System: Independent Candidates and its effects",
        date: "September 30th 2020 - October 2nd 2020, Mexico City",
    },
    {
        icon: require("../img/LID.jpg").default,
        institution: "Laboratory of Democratic Innovation's 4th Research Seminar, LID",
        topic: "Parties and Party Systems",
        title: "Metamorphosis of the Mexican Party System: Independent Candidates and its effects",
        date: "March 20th, 2020",
    },
    {   
        icon: require("../img/logo-coljal-header.png").default,
        institution: "III International Colloquium of Metropolitan Gobernance, ReGobM2019. El Colegio de Jalisco.",
        topic: "Open Government and accountability",
        title: "Open Government and Account Opacity. Study of the municipalities in Jalisco, Mexico.",
        date: "5 al 8 de noviembre de 2019",
    },
]

function CardI() {
    return <div id="Card">
        {ponencias.map((p, i) => {
    return <div id="card-each" key={i} className="row">
        <div className="col-2">
        <img id="icon-card" src={p.icon} alt=""/>
        </div> 
        <div id="text-card" className="col-10">
            <p className="fw-bold">{p.institution} </p>
            <p className="fw-bold"> {p.title}</p>
            <p>{p.topic}</p>
            <p>Date: {p.date}</p>
        </div>
    </div> 
    })}
    </div>
}

export default CardI;