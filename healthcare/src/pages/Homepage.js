import Footer from "../componants/footer"
import Header from "../componants/header"
import Navbar from "../componants/navbar"
import { FaUserDoctor } from "react-icons/fa6";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { AiOutlineSolution } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import axios from 'axios';
import Mycard from "./Mycard";




const Home=()=>{
    const [appointmentname, getAppointname] = useState('');
    const [appointnumber, getAppointnumber] = useState('');
    const [appointtime, getAppointtime] = useState('');
    const [appointreason, getAppointreason] = useState('');
    const [appointmenterror, getAppointmentError] = useState('');
    const [showModal, setShowModal] = useState(false)
    const appointnameHandler=(event)=>{
        getAppointname(event.target.value);
    }
    const appointnumberHandler=(event)=>{
        getAppointnumber(event.target.value)
    }
    const appointtimeHandler=(event)=>{
        getAppointtime(event.target.value);
    }
    const appointreasonHandler=(event)=>{
        getAppointreason(event.target.value);
    }
    const appointmentSubmitHandler=()=>{
        const appointmentData ={appointmentname:appointmentname, appointnumber:appointnumber, appointtime:appointtime, appointreason:appointreason}
        axios.post('http://localhost:8080/appointments/registration', appointmentData).then((response)=>{
            console.log(response.data.message);
            // getAppointmentError('Your appointment has successfully created')
        })
    }
   
    return(
        <>
            {<Header/>}
            {<Navbar/>}

        {/* Home Page Code Start */}
            <div className="div1-home">
                    <pre>Making Health Care<br />And Better Together</pre>
                    <input className="button-appoint" type="button" value="Making an Appointment" onClick={()=>setShowModal(true)}/>
                <div className="homediv1-parent1">
                    <img src="./img_folder/hearthold_doctor.jpg" alt="" />
                </div>
            { showModal && 
            <> 
                <div className="homediv1-parent2" id="box-model">
                    <div className="appoint-error">{appointmenterror}</div>
                    <div className="appoint-header">Book Appointment <span><button type="button" onClick={()=>setShowModal(false)} >{<RxCross2/>}</button> </span></div>
                    <div className="parent2-child">
                        <div className="book-appoint">
                            <div>
                                    <label htmlFor="">Name</label>
                                    <input type="text" placeholder="your name" value={appointmentname} onChange={appointnameHandler}/>
                            </div>
                            <div>
                                    <label htmlFor="">Phone Number</label>
                                    <input type="text" placeholder="number" value={appointnumber} onChange={appointnumberHandler}/>
                            </div>
                            <div>
                                    <label htmlFor="">Time</label> <br />
                                    <input className="time" type="time" value={appointtime} onChange={appointtimeHandler}/>
                            </div>
                            <div>
                                    <label htmlFor="">Reason for Visit</label>
                                    <textarea name="" id="" value={appointreason} onChange={appointreasonHandler}></textarea>
                            </div>
                        </div>
                        <div>
                            <img src="./img_folder/bookappoint.png" alt="" />
                        </div>
                    </div>
                    <div className="button"> 
                        <div>
                            <input className="Cancel" type="button" value="Cancel" onClick={()=>setShowModal(false)}/>
                        </div>      
                        <div>
                        <input className="Book" type="button" value="Book Now" onClick={appointmentSubmitHandler()}/>
                        </div>             
                    </div>
                </div>
            </>}
            </div>
            <div className="body-div">
                <div className="div2-home">
                    <div className="div2-parent1">
                        Every steps for your care
                    </div>
                    <div className="div2-parent2">
                        <div>{<FaUserDoctor className="icon"/>}
                            <p>Search Doctor</p>
                        </div>
                        <div>{<FaCodePullRequest className="icon"/>}
                            <p>Request a Consultation</p>
                        </div>
                        <div>{<FaBusinessTime className="icon"/>}
                            <p>Make Appointment</p>
                        </div>
                        <div>{<AiOutlineSolution className="icon"/>}
                            <p>Get Solution</p>
                        </div>
                    </div>
                </div>
                {<Mycard/>}  
                <div className="home-div6">
                    <h2>Health Services Or Tips For <br /> Healthy Living, You Can Find Here</h2>
                    <p>The key to a healthy diet is to eat the right amount of calories for how active you are so you balance the energy you consume with the energy you use.</p>
                    <p>It's recommended that you eat at least 5 portions of a variety of fruit and veg every day. They can be fresh, frozen, canned, dried or juiced.</p>
                    <p>A portion of fresh, canned or frozen fruit and vegetables is 80g. A portion of dried fruit (which should be kept to mealtimes) is 30g.</p>
                <div className="stay">Stay Connected</div>
                </div>
            </div>
            {<Footer/>}
        </>
    )
}

export default Home