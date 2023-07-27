import "../css/singleInstructor.css";
import axios from "axios";
import InstructorClasses from "./InstructorClasses";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom";
//import { useHistory } from 'react-router-dom';

function SingleInstructor({i, flag}){

    //const history=useHistory();

    //let navigate=useNavigate();
    const ins = i.id;

    function deleteInstructor(){
        i.status=2;
        axios.post("http://127.0.0.1:8000/api/updateInstructor", i).then((res)=>{
            if(res.data.success=="true"){
                alert("Instruktor je uspešno uklonjen!");
            }else{
                alert("Došlo je do greške prilikom brisanja!");
            }  
        }).catch((e) => {
            console.log(e);
            alert("Došlo je do greške prilikom brisanja!");
        });
    }

    function acceptInstructor(){
        i.status=1;
        axios.post("http://127.0.0.1:8000/api/updateInstructor", i).then((res)=>{
            if(res.data.success=="true"){
                alert("Zahtev je uspešno prihvaćen!");
            }else{
                alert("Došlo je do greške prilikom obrade zahteva!");
            }  
        }).catch((e) => {
            console.log(e);
            alert("Došlo je do greške prilikom obrade zahteva!");
        });
    }

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
                <p>Cena časa: {i.price}€</p>
                {window.sessionStorage.getItem("auth_email")=="admin@gmail.com" && flag ==1 ? (
                    <button className="deleteInstructorButton" onClick={deleteInstructor}>Ukloni</button>
                    
                ):(<></>)}
                {window.sessionStorage.getItem("auth_email")=="admin@gmail.com" && flag ==0 ? (
                    <div>
                        <button className="deleteInstructorButton1" onClick={deleteInstructor}>Odbij</button>
                        <button className="acceptInstructorButton" onClick={acceptInstructor}>Prihvati</button>
                    </div>
                    
                ):(<></>)}
                {window.sessionStorage.getItem("auth_token")=="user" && window.sessionStorage.getItem("auth_email")!=="admin@gmail.com" ? (
                    //<button className="deleteInstructorButton" onClick={showClasses}>Vidi termine</button>
                    <Link to= {'/instructorClasses/'+i.id} className="deleteInstructorButton">
        Vidi termine
      </Link>
                ):(<></>)}
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
                {window.sessionStorage.getItem("auth_email")=="admin@gmail.com" && flag ==1 ? (
                    <button className="deleteInstructorButton" onClick={deleteInstructor}>Ukloni</button>
                    
                ):(<></>)}
                {window.sessionStorage.getItem("auth_email")=="admin@gmail.com" && flag ==0 ? (
                    <div>
                        <button className="deleteInstructorButton1" onClick={deleteInstructor}>Odbij</button>
                        <button className="acceptInstructorButton" onClick={acceptInstructor}>Prihvati</button>
                    </div>
                    
                ):(<></>)}
                {window.sessionStorage.getItem("auth_token")=="user" && window.sessionStorage.getItem("auth_email")!=="admin@gmail.com" ? (
                    //<button className="deleteInstructorButton" onClick={showClasses}>Vidi termine</button>
                    <Link to= {'/instructorClasses/'+i.id} className="deleteInstructorButton">
        Vidi termine
      </Link>
                ):(<></>)}
                </div>
            </div>)
}
        </div>
    );
}
export default SingleInstructor;