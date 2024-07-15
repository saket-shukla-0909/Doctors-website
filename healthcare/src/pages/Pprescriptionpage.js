
import axios from "axios";
import Header from "../componants/header"
import Navbar from "../componants/navbar"
import { useEffect, useState } from "react";





const Pprescription=()=>{
    let patientId = localStorage.getItem('patient_Id');
    const[firstname, getFirstname] = useState('');
    const[lastname, getLastname] = useState('');
    const[email, getEmail] = useState('');
    const[contact, getContact] = useState('');
    const[dob, getDob] = useState('');
    const[age, getAge] = useState('');
    const[gender, getGender] = useState('');
    const[address, getAddress] = useState('');
    const[about, getAbout] = useState('')
    const getPatient=()=>{
        axios.get('http://localhost:8080/patientregists/singlepatientregist/'+patientId).then((response)=>{
            getFirstname(response.data.message.firstname);
            getLastname(response.data.message.lastname);
            getEmail(response.data.message.email);
            getContact(response.data.message.contact);
            getDob(response.data.message.dob);
            getAge(response.data.message.age);
            getGender(response.data.message.gender);
            getAddress(response.data.message.address);
            getAbout(response.data.message.about);
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
                            <h2>Dr. Prachi Bhardwaj Health Clinic</h2> 
                            <p>Punjabi Bagh, North Delhi occupation</p>
                        </div>
                    </div>

                    <div className="col-box-child2">
                        <div>
                            Name: {firstname}{lastname} 
                        </div>
                        <div>
                            Birth: {dob}
                        </div>
                    </div>
                    <div className="col-box-child2">
                        <div>
                            Age: {age}
                        </div>
                        <div>
                            Date: 28-10-2023
                        </div>
                        <div>
                            Sex: {gender}
                        </div>
                    </div>
                    <div className="col-box-child3">
                        <h2>Symptoms</h2>
                        <p>Cold Fever</p>
                        <p>Neumonea</p>
                        <p></p>
                    </div>
                    <div className="col-box-child3">
                       <h2>Treatment</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pprescription