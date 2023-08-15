import { Link } from "react-router-dom";
import "../css/singleMountain.css";

function SingleMountain({m}){

    return(
        <div>
        {m.id%2===0 ? (<div className="mountainCard1">
        <h5>{m.name}</h5>
        <Link to= {'/instructors/'+m.id}>
        <img src={m.photo} alt="mountain photo" className="mountainPhoto1"></img>
        </Link>
    </div>)  :
         (<div className="mountainCard2"> 
        <h5>{m.name}</h5>
        <Link to= {'/instructors/'+m.id}>
        <img src={m.photo} alt="mountain photo" className="mountainPhoto2"></img>
      </Link>
        
        </div>)
         } 
        </div>
        );
}

export default SingleMountain;