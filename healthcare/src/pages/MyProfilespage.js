import Footer from "../componants/footer"
import Header from "../componants/header"
import Navbar from "../componants/navbar"
import { TfiEmail } from "react-icons/tfi";
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const MyProfile=()=>{
    // const params = useParams('');
    let patientId = localStorage.getItem('patientId');
    console.log(patientId);

    const[patientname, getPatientName] = useState('');
    const[age, getAge] = useState('');
    const[gender, getGender] = useState('');
    const[number, getNumber] = useState('');
    const[addressp ,getAddressp] = useState('');
    const[aboutp, getAboutp] = useState('');
    const[birth, getBirth] = useState('');
    const[emailp, getEmailp] = useState('')

    const getPatient=()=>{
        axios.get('http://localhost:8080/patients/singlepatient/'+patientId).then((response)=>{
            getPatientName(response.data.message.patientname);
            getAge(response.data.message.age);
            getGender(response.data.message.gender);
            getNumber(response.data.message.number);
            
        })
    }
    
    const getPatientdata=()=>{
        axios.get('http://localhost:8080/patientregists/singlepatientregist/'+ patientId).then((response)=>{
            getAddressp(response.data.message.addressp);
            getAboutp(response.data.message.aboutp);
            getBirth(response.data.message.birth);
            getEmailp(response.data.message.emailp);
   
        })
    }

        getPatient();
        getPatientdata();
  
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
                            <h1>{patientname}</h1>
                            <p>{aboutp}</p>
                        </div>
                        <div className="pat-prof-parent2-child3">
                            <h3>DETAILS</h3>
                            <div>Date-of-Birth: {birth}</div>
                            <div>Age: {age}</div>
                            <div>Gender: {gender}</div>
                        </div>
                        
                        <div className="pat-prof-parent2-child2">
                            <h3>CONTACT</h3>
                            <div>{<MdAddCall className="con-icon"/>} {number}</div>
                            <div>{<TfiEmail className="email-icon"/>}{emailp} </div>
                            <div>{<FaLocationDot className="con-add"/>} {addressp} </div>

                        </div>
                     
                    </div>
                </div>
            </div>

            {<Footer/>}
        </>
    )
}
export default MyProfile