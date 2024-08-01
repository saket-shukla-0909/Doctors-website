import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { PiListDashesBold } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoIosTv } from "react-icons/io";
import { GiMedicines } from "react-icons/gi";
import { SiMinetest } from "react-icons/si";
import { IoIosAdd } from "react-icons/io";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";
import { HiUserPlus } from "react-icons/hi2";
import Progressbar from "../componants/progressbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Pdashboard=()=>{
    const navigate = useNavigate('');
    const logoutHandler=()=>{
        localStorage.clear();
        navigate('/');
    }

    const[progress, setProgress] = useState(0);
    useEffect(()=>{
        const time = setInterval(()=>{
            if(progress<45){
                setProgress((p)=> p+1)
            }
        }, 20);
        return()=>{
            clearInterval(time);
        }
    }, [progress])
    let patientId = localStorage.getItem('patientId');
    console.log(patientId);

    const[patientname, getPatientName] = useState('');
    
    // const[age, getAge] = useState('');
    // const[gender, getGender] = useState('');
    // const[number, getNumber] = useState('');


    const getPatient=()=>{
        axios.get('http://localhost:8080/patients/singlepatient/'+patientId).then((response)=>{
            getPatientName(response.data.message.patientname);
            
        })
    }


    useEffect(()=>{
        getPatient();
    })
    return(
        <>

            {/* Pdashboard code  Start */}
            
            <div className="pdash-maindiv">
                <div className="pdash-div1">
                    <div className="img">
                            <img src="" alt=""/>
                    </div>
                    <div className="pdash-div1-child1">{patientname}</div>
                    <div>
                        <div className="pdash-child2" onClick={()=>{navigate('')}}>{<MdDashboard className="icon-dash"/>} Dashboard</div>
                        <div className="pdash-child2" onClick={()=>{navigate('')}}>{<SlCalender className="icon-dash"/>} Appointment</div>
                        <div className="pdash-child2" onClick={()=>{navigate('')}}>{<MdOutlinePayment className="icon-dash"/>} Payment</div>
                        {/* <div className="pdash-child2" onClick={()=>{navigate('/updatepatientpage')}}>{<MdOutlinePayment className="icon-dash"/>} Update</div> */}
                        <div className="pdash-child2" onClick={()=>{navigate('/MyProfilespage')}}>{<FaUser className="icon-dash"/>} Profile</div>
                        <div className="pdash-child2" onClick={()=>{navigate('/updatepatientpage')}}>{<HiUserPlus className="icon-dash"/>}Update</div>
                        <div className="pdash-child2" onClick={()=>{navigate('')}}>{<IoMdSettings className="icon-dash"/>} Setting</div>
                        <div className="pdash-child2" onClick={logoutHandler}>{<FaArrowRightFromBracket className="icon-dash"/>} Logout</div>
                    </div>
                </div>
                <div className="pdash-div2">
                    <div className="pdash-div2-child1">
                            <div className="dashboard">Dashboard</div>
                            <div className="icon-div">
                                <div>{<MdOutlineMail/>}</div>
                                <div>{<FaBell/>}</div>
                            </div>
                            <div className="btn-icon">
                                <div><input className="" type="search" placeholder="Search"/></div>
                                <div className="icon-bold">{<PiListDashesBold/>}</div>
                            </div>
                    </div>
                    <div className="pdash-div2-child2">
                        <div className="left">
                            <div className="parent1">
                                <div className="child1">
                                    <h1>Hello, {patientname}!</h1>
                                    <p>Have are you feeling today?</p>
                                </div>
                                <div className="child2">
                                    <div>{<MdOutlineMessage className="icon1"/>}</div>
                                    <div>{<IoIosCall className="icon2"/>}</div>
                                </div>
                            </div>
                            <div className="parent2">
                                <div className="child1"> 
                                    <div className="div1">
                                        <div>Your doctor</div>
                                        <div className="change">{<MdModeEdit/>} change</div>
                                    </div>
                                    <div className="div2">
                                        <div className="child1">
                                            <div className="img"><img src="https://th.bing.com/th/id/OIP.LoqQ15EiLvHxNJVj_k8mXgHaHa?rs=1&pid=ImgDetMain" alt=""/></div>
                                            <div className="doctor">
                                                <p>Harshit Sharma</p>
                                                <p>Therapist</p>
                                            </div>
                                            <div className="icon">
                                                <div>{<MdMessage/>}</div>
                                                <div>{<IoMdCall/>}</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="child2">
                                    <div className="div1">
                                        <div>Your doctor</div>
                                        <div className="change">{<MdModeEdit/>} change</div>
                                    </div>
                                    <div className="div2">
                                        <div className="child1">
                                            <div className="div">
                                                <p className="para1">weight</p>
                                                <p>58 kg</p>
                                            </div>
                                            <div className="div">
                                                <p className="para1">Height</p>
                                                <p>6 feet</p>
                                            </div>
                                            <div className="div">
                                                <p className="para1">Blood</p>
                                                <p>A+</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                                <div className="parent3">
                                    <div className="child1">
                                        <div className="div1">
                                            <img src="https://th.bing.com/th/id/OIP.34PqEvpvUVWypCUF1TGg7QHaJ_?w=141&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
                                        </div>
                                        <div className="div2">
                                            <div className="child1">
                                                <div>{<IoIosTv className="icon"/>}</div>
                                                <div>
                                                    <p>Diagnostic</p>
                                                    <p>List of diseases</p>
                                                </div>
                                                <div>{<IoIosAdd className="icon1"/>}</div>
                                            </div>
                                            <div className="child1">
                                                <div>{<GiMedicines className="icon"/>}</div>
                                                <div>
                                                    <p>Drugs</p>
                                                    <p>Archive of tests</p>
                                                </div>
                                                <div>{<IoIosAdd className="icon1"/>}</div>
                                            </div>
                                            <div className="child1">
                                                <div>{<SiMinetest className="icon"/>}</div>
                                                <div>
                                                    <p>Tests</p>
                                                    <p>Prescribed medicine</p>
                                                </div>
                                                <div>{<IoIosAdd className="icon1"/>}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="right">
                            <div className="parent1">
                                <div className="child1">
                                    <div>Remind me</div>
                                    <div>Show: <span>This week</span>{<BiSolidDownArrow className="icon1"/>}</div>
                                </div>
                                <div className="child2">
                                    <div className="div1">4 task completed out of 10</div>
                                    <div className="div2"><Progressbar progress={progress} color={'lightgreen'}/></div>
                                </div>
                            </div>
                            <div className="parent2">
                                <div>{<GiMedicines className="icon1"/>}</div>
                                <div>
                                    <p>Order drugs</p>
                                    <p>21-07-2024</p>
                                </div>
                                <div className="change">{<MdModeEdit/>} change</div>
                            </div>
                            <div className="parent2">
                                <div>{<GiMedicines className="icon1"/>}</div>
                                <div>
                                    <p>Start Course</p>
                                    <p>22-07-2024</p>
                                </div>
                                <div className="change">{<MdModeEdit />} change</div>
                            </div>
                            <div className="parent2">
                                <div>{<SiMinetest className="icon1"/>}</div>
                                <div>
                                    <p>Blood test</p>
                                    <p>09:30, 25-07-2024</p>
                                </div>
                                <div className="change">{<MdModeEdit/>} change</div>
                            </div>
                            <div className="parent2">
                                <div>{<IoIosTv className="icon1"/>}</div>
                                <div>
                                    <p>Diagnostic</p>
                                    <p>09:30, 26-07-2024</p>
                                </div>
                                <div className="change">{<MdModeEdit/>} change</div>
                            </div>
                            <div className="parent2">
                                <div>{<SiMinetest className="icon1"/>}</div>
                                <div>
                                    <p>Took tests</p>
                                    <p>10:00, 26-07-2024</p>
                                </div>
                                <div className="change">{<MdModeEdit/>} change</div>
                            </div>
                            <div className="parent2">
                                <div>{<FaSuitcaseMedical className="icon1"/>}</div>
                                <div>
                                    <p>Consultation</p>
                                    <p>12:00, 27-07-2024</p>
                                </div>
                                <div className="change">{<MdModeEdit/>} change</div>
                            </div>
                            <div className="parent2">
                                <div>{<IoIosTv className="icon1"/>}</div>
                                <div>
                                    <p>Diagnostic</p>
                                    <p>09:30, 22-07-2024</p>
                                </div>
                                <div className="change">{<MdModeEdit/>} change</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pdashboard code end*/}
           
        </>
    )
}
export default Pdashboard;