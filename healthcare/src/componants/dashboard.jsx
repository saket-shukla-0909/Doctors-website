import { useEffect, useState } from "react";
import axios from "axios";
import { MdDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { PiListDashesBold } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa6";
import { IoIosClock } from "react-icons/io";
import { FaPlus } from "react-icons/fa"
import { TiTick } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import { BiSolidMessageRounded } from "react-icons/bi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";




const Dashboard=()=>{
    const navigate = useNavigate('');
    const doctorId = localStorage.getItem('doctorId');
    const[doctorName, getDoctorName] = useState('');
    const[doctorSpeciality, getDoctorSpeciality] = useState('');
    const[degree, getDegree] = useState('');
 


    const getDoctor=()=>{
        axios.get('https://doctors-website-backend.onrender.com/doctors/singledoctorlist/'+doctorId).then((response)=>{
            getDoctorName(response.data.message.doctorName);
            getDoctorSpeciality(response.data.message.doctorSpeciality);
            getDegree(response.data.message.degree);
        })
    }

    useEffect(()=>{
        getDoctor();
    }, [])
    const logoutHandler=()=>{
        localStorage.clear();
        navigate('/')
    }
    return(
        <>
            <div className="doc-dash-maindiv">
                <div className="doc-dash-div1">
                    <div className="dash-profile-parent1">
                        <div><img src="" alt=""/></div>
                        <h2>{doctorName}</h2> 
                        <h4>{doctorSpeciality}</h4>
                        <p>{degree}</p>                       
                    </div>
                    <div className="dash-profile-parent2" onClick={()=>{navigate('')}}>{<MdDashboard className="icon-dash"/>} Dashboard</div>
                    <div className="dash-profile-parent2" onClick={()=>{navigate('')}}>{<SlCalender className="icon-dash"/>}Appointment</div>
                    <div className="dash-profile-parent2" onClick={()=>{navigate('')}}>{<LiaBusinessTimeSolid className="icon-dash"/>} Appointment Page</div>
                    <div className="dash-profile-parent2" onClick={()=>{navigate('')}}>{<MdOutlinePayment className="icon-dash"/>} Payment</div>
                    <div className="dash-profile-parent2" onClick={()=>{navigate('/MyProfilepage')}}>{<FaUser className="icon-dash"/>}Profile</div>
                    <div className="dash-profile-parent2" onClick={()=>{navigate('')}}>{<IoMdSettings className="icon-dash"/>}Setting</div>
                    <div className="dash-profile-parent2" onClick={logoutHandler}>{<FaArrowRightFromBracket className="icon-dash"/>}Logout</div>
                </div>
                <div className="doc-dash-div2">
                    <div className="dash-div2-parent1">
                        <div className="dash-div2-parent1-div1">
                            <div>Dashboard</div>
                        </div>
                        <div className="dash-div2-parent1-div2">
                            <div className="dash-head">{<MdOutlineMail/>}</div>
                            <div className="dash-head1">{<FaBell/>}</div>
                        </div>
                        <div className="dash-div2-parent1-div3">
                            <div className="dash-head2"><input type="search" placeholder="Search"/></div>
                            <div className="dash-head3">{<PiListDashesBold/>}</div>
                        </div>
                    </div>

                    <div className="dash-div2-parent2">
                        <div className="box1">
                            <div>
                                {<FaUserEdit className="box-react-icons"/>}
                            </div>
                            <div>
                                <p className="p1">Total Patient</p>
                                <h2>2000 {<FaPlus className="plus-box1"/>}</h2>
                                <p>Till Today</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div>
                                {<FaHospitalUser className="box-react-icons"/>}
                            </div>
                            <div>
                                <p className="p1">Today Patient</p>
                                <h2>068</h2>
                                <p>21 Jan-2024</p>
                            </div>
                        </div>
                        <div className="box1">
                            <div>
                                {<IoIosClock className="box-react-icons"/>}
                            </div>
                            <div>
                                <p className="p1">Today Appointments</p>
                                <h2>085</h2>
                                <p>07 July-2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="dash-div2-parent3">
                        <div className="box1">
                            <div><p>Patient's Summary July 2024</p></div>
                            <div><img src="./img_folder/circless.png" alt=""/></div>
                            <div>
                                <div>{<MdCheckBoxOutlineBlank className="icon1"/>} New Patients</div>
                                <div>{<MdCheckBoxOutlineBlank className="icon2"/>} Old Patients</div>
                                <div>{<MdCheckBoxOutlineBlank className="icon3"/>} Total Patients</div>
                            </div>
                        </div>
                        <div className="box2">
                            <div><h4>Today Appointment</h4></div>
                            <div className="child1">
                                <div>Patient</div>
                                <div>Name/Diagnosis</div>
                                <div>Time</div>
                            </div>
                            <div  className="child2">
                                <div><img src="./img_folder/dipan.png" alt=""/></div>
                                <div>
                                    <div><p>Dipan Shukla</p></div>
                                    <div><p>Health Checkup</p></div>
                                </div>
                                <div><p>On Going</p></div>
                            </div>
                            <div  className="child2">
                                <div><img src="./img_folder/nidhi.jpeg" alt=""/></div>
                                <div>
                                    <div><p>Nidhi Singh</p></div>
                                    <div><p>Report</p></div>
                                </div>
                                <div><p>12:30 PM</p></div>
                            </div>
                            <input className="seeall" type="button" value="See All" /> 
                        </div>
                        <div className="box2">
                            <div><h4>Next Patient Details</h4></div>
                            <div  className="child2">
                                <div><img src="./img_folder/arnav.jpg" alt=""/></div>
                                <div>
                                    <div><p className="dark-para"><b>Arnav Roy</b></p></div>
                                    <div><p>Health Checkup</p></div>
                                </div>
                                <div>
                                    <div><p className="dark-para"><b>PatientId</b></p></div>
                                    <div><p>0220092020005</p></div>
                                </div>
                            </div>
                            <div  className="child2">
                                <div>
                                    <div><p><b>D.O.B</b></p></div>
                                    <div><p>15 January 2001</p></div>
                                </div>
                                <div>
                                    <div><p><b>Sex</b></p></div>
                                    <div><p>Male</p></div>
                                </div>
                                <div>
                                    <div><p><b>Weight</b></p></div>
                                    <div><p>59 kg</p></div>
                                </div>
                            </div>
                            <div  className="child2">
                                <div>
                                    <div><p><b>Last Appointment</b></p></div>
                                    <div><p>15 January 2001</p></div>
                                </div>
                                <div>
                                    <div><p><b>Height</b></p></div>
                                    <div><p>Male</p></div>
                                </div>
                                <div>
                                    <div><p><b>Regis. Date</b></p></div>
                                    <div><p>59 kg</p></div>
                                </div>
                            </div>
                            <div className="child3">
                                <div className="div1">Anesthesia</div>
                                <div className="div2">Hypertension</div>
                                <div className="div3">Fever</div>
                            </div>
                        </div>
                    </div>
                       
                    <div className="dash-div2-parent4">
                        <div className="box1">
                            <h3>Patients Review</h3>
                            <div>Excellent</div>
                            <div>Great</div>
                            <div>Good</div>
                            <div>Average</div>
                        </div>
                        <div className="box2">
                            <h3>Appointment Request</h3>
                            <div className="app-req-div1">
                                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s" alt=""/></div>
                                <div className="child2">
                                    <div>Naina Sharma</div>
                                    <div>cold</div>
                                </div>
                                <div className="react-icons">{<TiTick className="icons1"/>} {<RxCrossCircled className="icons2"/>} {<BiSolidMessageRounded className="icons3"/>}</div>
                            </div>
                            <div className="app-req-div1">
                                <div><img src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149659.png" alt=""/></div>
                                <div className="child2">
                                    <div> Harshit Sharma</div>
                                    <div>Over Switting</div>
                                </div>
                                <div className="react-icons">{<TiTick className="icons1"/>} {<RxCrossCircled className="icons2"/>} {<BiSolidMessageRounded className="icons3"/>}</div>
                            </div>
                            <input className="seeall" type="button" value="See All"/>
                        </div>
                        <div className="box2">
                            <div className="box2-calender">
                                <div><h3>Calender</h3></div>
                                <div><input type="date" /></div>
                            </div>
                            <div className="box3">
                                <img src="./img_folder/calss.png" alt=""/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}
export default DashboardC;