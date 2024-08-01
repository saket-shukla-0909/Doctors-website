import { useState } from "react";
import axios from "axios";





const Profileregist=()=>{

    const [birth, getBirth] = useState('');
    const [blood, getBlood] = useState('');
    const [height, getHeight] = useState('');
    const [width, getWidth] = useState('');
    const [patientid , getPatientId] = useState('');
    const [addressp, getAddressp] = useState('');
    const [aboutp, getAboutp] = useState('');

    const birthHandler=(event)=>{
        getBirth(event.target.value)
    }
    const bloodHandler=(event)=>{
        getBlood(event.target.value);
    }
    const heightHandler=(event)=>{
        getHeight(event.target.value);
    }
    const widthHandler=(event)=>{
        getWidth(event.target.value);
    }
    const patientidHandler=(event)=>{
        getPatientId(event.target.value);
    }
    const addresspHandler=(event)=>{
        getAddressp(event.target.value);
    }
    const aboutpHandler=(event)=>{
        getAboutp(event.target.value);
    }
    const submitUpdatehandler=(e)=>{
        e.preventDefault();
        console.log(birth, blood, height, width, patientid, addressp, aboutp);
        const registrationData = {birth: birth, blood:blood, height:height, width: width, patientid:patientid, addressp:addressp, aboutp: aboutp};
        axios.post('http://localhost:8080/patientregists/patientregistregistration', registrationData).then((response)=>{
            console.log(response.data.message);
        })
    }
    return(
        <>
            <div className="upd-pat-maindiv">
                <div className="upd-pat-div">
                        <div className="">
                            <div className="header">Patient Profile Update</div>
                            <div className="error">Formerror</div>
                        </div>
                        <form>
                            <div className="update-col-box">
                            <div className="date">
                                         <label htmlFor="">Date-Of-Birth</label>
                                         <input type="date" value={birth} onChange={birthHandler}/>
                                 </div>
                                 <div className="blood">
                                         <label htmlFor="">Blood Group</label>
                                         <input type="text" placeholder="blood group" value={blood} onChange={bloodHandler}/>
                                 </div>
                             </div>
                             <div className="update-col-box">
                                 <div className="date">
                                         <label htmlFor="">Height</label>
                                         <input type="text" placeholder="height" value={height} onChange={heightHandler}/>
                                 </div>
                                 <div className="blood">
                                         <label htmlFor="">Width</label>
                                         <input type="text" placeholder="width" value={width} onChange={widthHandler}/>
                                 </div>
                             </div>
                             <div className="update-row-box">
                                     <label htmlFor="">Patient Id</label>
                                     <input type="text" placeholder="number" value={patientid} onChange={patientidHandler}/>
                             </div>
                             <div className="update-row-box">   
                                     <label htmlFor="">Address</label>
                                     <textarea type="text" placeholder="address" rows={5} col={12} value={addressp}  onChange={addresspHandler}></textarea>
                             </div>
                             <div className="update-row-box">   
                                     <label htmlFor="">About</label>
                                     <textarea type="text" placeholder="value" rows={5} col={12} value={aboutp} onChange={aboutpHandler}></textarea>
                             </div>
                            <div className="updatemebtn"><button  type="button" onClick={submitUpdatehandler}>Update Patient</button></div>
                        </form>
                </div>
            </div>
        </>
    )
}
export default Profileregist