import "../css/singleEquipment.css";

function SingleEquipment({e}){
    return(
        <div>
            {e.id%2===0 ? 
            (<div className="equipmentCard1">
                <div>
                <h5>{e.name}</h5>
                <p>Cena izražena po danu: {e.price}</p>
                {/* <p>{e.description}</p> */}
                </div>
                <div>
                <img src={e.photo} alt="equipment photo" className="equipmentPhoto1"></img>
                </div>
            </div>):(<div className="equipmentCard2">
                <div>
                <img src={e.photo} alt="equipment photo" className="equipmentPhoto2"></img>
                </div>
                <div>
                <h5>{e.name}</h5>
                <p>Cena izražena po danu: {e.price}</p>
                {/* <p>{e.description}</p> */}
                </div>
            </div>)
}
        </div>
    );
}
export default SingleEquipment;