import "../css/singleInstructor.css";

function SingleInstructor({i}){
    return(
        <div>
            {i.id%2===0 ? 
            (<div className="instructorCard1">
                <div>
                <h5>{i.name} {i.surname}</h5>
                <p>{i.description}</p>
                <p>Planina: {i.mountain.name}</p>
                <p>Ski škola: {i.skiSchool}</p>
                <p>Iskustvo: {i.experience}</p>
                <p>Cena časa: {i.price}</p>
                </div>
                <div>
                <img src={i.photo} alt="instructor photo" className="instructorPhoto1"></img>
                </div>
            </div>):(<div className="instructorCard2">
                <div>
                <img src={i.photo} alt="instructor photo" className="instructorPhoto2"></img>
                </div>
                <div>
                <h5>{i.name} {i.surname}</h5>
                <p>{i.description}</p>
                <p>Planina: {i.mountain.name}</p>
                <p>Ski škola: {i.skiSchool}</p>
                <p>Iskustvo: {i.experience}</p>
                <p>Cena časa: {i.price}</p>
                </div>
            </div>)
}
        </div>
    );
}
export default SingleInstructor;