import { FaCalendar, FaClock, FaShoppingBag } from 'react-icons/fa';
import "../css/singleClass.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

function SingleClass({c}){

    const reservation= {
        totalPrice:c.price,
        period_id:c.id,
        user_id:window.sessionStorage.getItem('auth_user'),
        status:-1,
    };

    const currentDate= new Date(c.date);

    const today = format(currentDate, 'dd.MM.yyyy.');

    let navigate = useNavigate();

    function makeReservation(){
        axios.post("http://127.0.0.1:8000/api/makeReservation", reservation).then((res)=>{
            console.log(res);
            if(res.data.success=='true'){
                alert("Čas je stavljen u korpu!");
                window.sessionStorage.setItem("reservation_id", res.data.created_reservation.id);
                navigate("/equipments");
            }else{
                alert("Greška prilikom pravljenja rezervacije!");
            }
        }).catch((e)=>{
            console.log(e);
            alert("Greška prilikom pravljenja rezervacije!");
        })
    }

    return(
        <div className="classCard">
            <div className='classCardFirst'>
                <FaCalendar size={25} color='grey'/><p>{today}</p>
                <FaClock size={25} color='grey'/><p>{c.time}</p>
                <FaShoppingBag size={25} color='grey'/><p>{c.instructor.price}€</p>
                <button className='classButton' onClick={makeReservation}>Rezerviši!</button>
            </div>

            <div>
                <img src={c.instructor.photo} alt="instructor photo" className="instructorClassPhoto"></img>
                <h5>{c.instructor.name} {c.instructor.surname}</h5>
            </div>

        </div>
    );
}

export default SingleClass;