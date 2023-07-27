import { FaCalendar, FaClock, FaShoppingBag } from 'react-icons/fa';
import { format } from 'date-fns';
import "../css/singleClass.css";

function SingleClass({c}){

    let dateVariable = format(c.date, 'dd.MM.yyyy.');

    return(
        <div className="classCard">
            <div className='classCardFirst'>
                <FaCalendar size={25} color='grey'/><p>{dateVariable}</p>
                <FaClock size={25} color='grey'/><p>{c.time}</p>
                <FaShoppingBag size={25} color='grey'/><p>{c.instructor.price}€</p>
                <button className='classButton'>Rezerviši!</button>
            </div>

            <div>
                <img src={c.instructor.photo} alt="instructor photo" className="instructorClassPhoto"></img>
            </div>

        </div>
    );
}

export default SingleClass;