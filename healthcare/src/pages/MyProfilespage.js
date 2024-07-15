import Footer from "../componants/footer"
import Header from "../componants/header"
import Navbar from "../componants/navbar"
import { TfiEmail } from "react-icons/tfi";
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import { useEffect, useState } from "react";



const MyProfile=()=>{
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

            {/* Patient Profile page */}
            <div className="pat-prof-maindiv">
                <div className="pat-prof-main">
                    <div className="pat-prof-parent1">
                        <div className="pat-prof-child1">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="pat-prof-parent2">
                        <div className="pat-prof-parent2-child1">
                            <h2>PROFILE</h2>
                            <h1>{firstname} {lastname}</h1>
                            <p>{about}</p>
                        </div>
                        <div className="pat-prof-parent2-child3">
                            <h3>DETAILS</h3>
                            <div>Date-of-Birth: {dob}</div>
                            <div>Age: {age}</div>
                            <div>Gender: {gender}</div>
                        </div>
                        <div className="pat-prof-parent2-child2">
                            <h3>CONTACT</h3>
                            <div>{<MdAddCall className="con-icon"/>} {contact}</div>
                            <div>{<TfiEmail className="email-icon"/>} {email}</div>
                            <div>{<FaLocationDot className="con-add"/>} {address}</div>
                        </div>
                    </div>
                </div>
            </div>

            {<Footer/>}
        </>
    )
}
export default MyProfile