import axios from "axios";
import { useState, useEffect } from "react";
import "../css/userEditProfile.css";

function UserEditProfile(){

    const[userInfo, setUserInfo] = useState();

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/getUser/"+window.sessionStorage.getItem('auth_user')).then((res)=>{
            //console.log(res.data.user);
            setUserInfo(res.data.user[0]);
        })
    },[])

    function handleInput(e){
        let newData = userInfo;
        newData[e.target.name]=e.target.value;
        console.log(newData);
        setUserInfo(newData);
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/updateUser", userInfo).then((res)=>{
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
            {userInfo!=null ? (
                <form onSubmit={handleSubmit} className="editInfoForm">
                <label>Ime</label>
                <br/>
                <input
                type="text"
                name="name"
                placeholder={userInfo.name}
                onInput={handleInput}
                className="editInput"
                ></input>
                <br/>

                <label>Prezime</label>
                <br/>
                <input
                type="text"
                name="surname"
                placeholder={userInfo.surname}
                onInput={handleInput}
                className="editInput"
                ></input>
                <br/>

                <label>Broj telefona</label>
                <br/>
                <input
                type="text"
                name="phoneNumber"
                placeholder={userInfo.phoneNumber}
                onInput={handleInput}
                className="editInput"
                ></input>
                <br/>

                <button type="submit" className="editInfoButton">Zapamti izmene!</button>
            </form>
            ): (<></>)}
            
        </div>
    );
}

export default UserEditProfile;