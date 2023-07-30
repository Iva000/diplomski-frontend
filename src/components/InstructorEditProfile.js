import axios from "axios";
import { useState, useEffect } from "react";
import "../css/userEditProfile.css";

function InstructorEditProfile(){

    const[instructorInfo, setInstructorInfo] = useState();

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/getInstructor/"+window.sessionStorage.getItem('auth_instructor')).then((res)=>{
            setInstructorInfo(res.data.instructor[0]);
        })
    },[])

    function handleInput(e){
        let newData = instructorInfo;
        newData[e.target.name]=e.target.value;
        console.log(newData);
        setInstructorInfo(newData);
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/updateInstructor", instructorInfo).then((res)=>{
            if(res.data.success=='true'){
                alert("Podaci su uspešno ažurirani!");
            }
            else{
                alert("Greška prilikom ažuriranja podataka!");
            }
        })
    }

    return (
        <div>
            <h1>Izmeni svoje podatke</h1>
            {instructorInfo!=null ? (
                <form onSubmit={handleSubmit} className="editInfoForm">
                    <div className="mainEditDiv">
                        <div className="editDiv1">
                        <label>Ime</label>
                        <br/>
                        <input
                        type="text"
                        name="name"
                        placeholder={instructorInfo.name}
                        onInput={handleInput}
                        className="editInput"
                        ></input>
                        <br/>

                        <label>Ski škola</label>
                        <br/>
                        <input
                        type="text"
                        name="skiSchool"
                        placeholder={instructorInfo.skiSchool}
                        onInput={handleInput}
                        className="editInput"
                        ></input>
                        <br/>

                        <label>Aktivnost</label>
                        <br/>
                        <input
                        type="text"
                        name="activity"
                        placeholder={instructorInfo.activity}
                        onInput={handleInput}
                        className="editInput"
                        ></input>
                        <br/>
                        </div>

                        <div className="editDiv1">
                        <label>Prezime</label>
                        <br/>
                        <input
                        type="text"
                        name="surname"
                        placeholder={instructorInfo.surname}
                        onInput={handleInput}
                        className="editInput"
                        ></input>
                        <br/>

                        <label>Planina</label>
                        <br/>
                        <input
                        type="text"
                        name="mountain"
                        placeholder={instructorInfo.mountain_id}
                        onInput={handleInput}
                        className="editInput"
                        ></input>
                        <br/>

                        <label>Cena časa</label>
                        <br/>
                        <input
                        type="text"
                        name="price"
                        placeholder={instructorInfo.price}
                        onInput={handleInput}
                        className="editInput"
                        ></input>
                        <br/>
                        </div>

                        <div>
                        <label>Broj telefona</label>
                        <br/>
                        <input
                        type="text"
                        name="phoneNumber"
                        placeholder={instructorInfo.phoneNumber}
                        onInput={handleInput}
                        className="editInput"
                        ></input>
                        <br/>

                        <label>Godine rada</label>
                        <br/>
                        <input
                        type="text"
                        name="experience"
                        placeholder={instructorInfo.experience}
                        onInput={handleInput}
                        className="editInput"
                        ></input>
                        <br/>

                        <label>Poruka</label>
                        <br/>
                        <input
                        type="text"
                        name="description"
                        placeholder={instructorInfo.description}
                        onInput={handleInput}
                        className="editInput"
                        ></input>
                        <br/>
                        </div>
                    </div>
                <button type="submit" className="editInfoButton">Zapamti izmene!</button>
            </form>
            ): (<></>)}
            
        </div>
    );
}

export default InstructorEditProfile;