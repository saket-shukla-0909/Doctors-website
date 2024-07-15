import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";





const Patientlist=()=>{
    
    const navigate = useNavigate('');
    const [patientData, getPatientData] = useState('');
    let doctorId = localStorage.getItem('doctorId');
    const allpatientlist=()=>{
            axios.get('http://localhost:8080/patients/singlepatientlist/' +doctorId).then((response)=>{
                getPatientData(response.data.message);
            })
        }
    const deleteHandler=(id)=>{
        axios.delete('http://localhost:8080/patients/deletepatient/'+id).then((response)=>{
            allpatientlist();
        })
    }
    useEffect(()=>{
         allpatientlist();
    },[])

    return(
        <>
            <div className="maindiv-Pateintlist">
                <div className="patientdiv1-header">
                    Patients List
                </div>
                <div className="patientdiv2-table">
                    <table>
                        <tr>
                            <th>Doctor's Name</th>
                            <th>Patient Name</th>
                            <th>Age</th>
                            <th>Number</th>
                            <th>Gender</th>
                            <th>Symptoms</th>
                            <th>Treatment</th>
                            <th>Action</th>
                        </tr>
                        {patientData  && patientData.map((patient)=>( 
                            <tr>
                                <td>{patient.docname}</td>
                                <td>{patient.patientname}</td>
                                <td>{patient.age}</td>
                                <td>{patient.number}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.symptoms}</td>
                                <td>{patient.treatment}</td>
                                <td>
                                    <input className="input1" type="button" value="Delete" onClick={()=>{deleteHandler(patient._id)}}/>
                                    <input className="input2" type="button" value="Check" onClick={()=>{navigate('/edit/'+patient._id)}}/>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </>
    )
}
export default Patientlist