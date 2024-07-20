
import axios from "axios";
import Header from "../componants/header"
import Navbar from "../componants/navbar"
import { useEffect, useState } from "react";





const Pprescription=()=>{
    let patientId = localStorage.getItem('patientId');
    const [patientname, getPatientName] = useState('');
    const [docname, getDocname] = useState('');
    const [age, getAge] = useState('');
    const [symptoms, getSymptoms] = useState('');
    const [treatment, getTreatment] = useState('');
    const [gender, getGender] = useState('');
    const [date, getDate] = useState('');
    const getPatient=()=>{
        axios.get('http://localhost:8080/patients/singlepatient/'+patientId).then((response)=>{
            getPatientName(response.data.message.patientname);
            getAge(response.data.message.age);
            getDocname(response.data.message.docname);
            getSymptoms(response.data.message.symptoms);
            getTreatment(response.data.message.treatment);
            getGender(response.data.message.gender);
            getDate(response.data.message.date);
        })
    }
    useEffect(()=>{
        getPatient();
    },[])
    return(
        <>
            {<Header/>}
            {<Navbar/>}
            <div className="pat-pres-maindiv">
                <div className="pat-pres-parent">
                    <div className="pat-pres-child1">
                        <div className="header">
                            <h2>{docname} Health Clinic</h2> 
                            {/* <p>Punjabi Bagh, North Delhi occupation</p> */}
                        </div>
                    </div>

                    <div className="col-box-child2">
                        <div>
                            Name: {patientname}
                        </div>
                        <div>
                            Birth: 09-09-2001
                        </div>
                    </div>
                    <div className="col-box-child2">
                        <div>
                            Gender: {gender}
                        </div>
                        <div>
                            Date: {date}
                        </div>
                    </div>
                    <div className="col-box-child2">
                        <div className="gender">
                            Age: {age}
                        </div>
                    </div>
                    <div className="col-box-child3">
                        <h2>Symptoms</h2>
                        <p>{symptoms}</p>
                    </div>
                    <div className="col-box-child3">
                       <h2>Treatment</h2>
                       <p>{treatment}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pprescription