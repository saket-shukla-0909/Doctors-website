import Footer from "../componants/footer"
import Header from "../componants/header"
import Navbar from "../componants/navbar"
import { TfiEmail } from "react-icons/tfi";
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";

const MyProfilepage=()=>{
    let doctorId = localStorage.getItem('doctorId');
    const[doctorName, getDoctorName] = useState('');
    const[doctorSpeciality, getDoctorSpeciality] = useState('');
    const[degree, getDegree] = useState('');
    const[experience, getExperience] = useState('');
    const[language, getLanguage] = useState('');
    const[typesof, getTypesof] = useState('');
    const[biography, getBiograhy] = useState('');
    const[doctorNumber, getDoctorNumber] = useState('');
    const[address, getAddress] = useState('');
    const[email, getEmail] = useState('');

    const getDoctor = ()=>{
        axios.get('http://localhost:8080/doctors/singledoctorlist/'+ doctorId).then((response)=>{
            getDoctorName(response.data.message.doctorName);
            getDoctorSpeciality(response.data.message.doctorSpeciality);
            getDegree(response.data.message.degree);
            getExperience(response.data.message.experience);
            getLanguage(response.data.message.language);
            getTypesof(response.data.message.typesof);
            getBiograhy(response.data.message.biography);
            getDoctorNumber(response.data.message.doctorNumber);
            getAddress(response.data.message.address);
            getEmail(response.data.message.email);
            getAddress(response.data.message.address);
        })
    }
    useEffect(()=>{
        getDoctor();
    },[])
    
    return(
        <>
            {<Header/>}
            {<Navbar/>}
            <div className="Myprof-maindiv">
                <div className="Myprof-div1">
                    <div className="Myprof-child1">
                        <div>
                            <img className="docImgp" src=""  alt="" /> 
                            
                        </div>
                        <div className="Profile">
                            <div>
                                <h3 className="profile">PROFILE</h3>
                                <h2 className="doctorname">{doctorName}</h2> 
                                <h4 className="doctorspeciality">{doctorSpeciality}</h4>
                                <p className="degree">{degree}</p>
                            </div>
                            <div>
                                <h4 className="h4">SPECIALITY: <span className="span1">{doctorSpeciality}</span></h4>
                                <h4 className="h4">EXPERIENCE: <span className="span1">{experience}</span></h4>
                                <h4 className="h4">LANGUAGE: <span className="span1">{language}</span></h4>
                                <h4 className="h4">TYPES OF: <span className="span1">{typesof}</span></h4>
                            </div>
                        </div>
                    </div>
                   <div className="Myprof-child2">
                        <div>
                            <h3 className="biography">BIOGRAPHY</h3>
                            <p className="p">
                                {biography}
                            </p>
                        </div>
                        <div>
                            <h3 className="contact">CONTACT</h3>
                            <pre className="p2">{<MdAddCall/>} {doctorNumber}   {<TfiEmail/>} {email}
                            </pre>
                            <p className="p2">{<FaLocationDot/>} {address}</p>
                        </div>
                   </div>
                </div>
            </div>
            {<Footer/>}
        </>
    )
}
export default MyProfilepage