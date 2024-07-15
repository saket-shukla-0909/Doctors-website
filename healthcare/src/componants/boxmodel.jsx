// import axios from "axios";
// import { useState } from "react";
// import { RxCross2 } from "react-icons/rx";



// const BoxModel =()=>{
//     const [appointmentname, getAppointname] = useState('');
//     const [appointnumber, getAppointnumber] = useState('');
//     const [appointtime, getAppointtime] = useState('');
//     const [appointreason, getAppointreason] = useState('');
//     const [appointmenterror, getAppointmentError] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const appointnameHandler=(event)=>{
//         getAppointname(event.target.value);
//     }
//     const appointnumberHandler=(event)=>{
//         getAppointnumber(event.target.value)
//     }
//     const appointtimeHandler=(event)=>{
//         getAppointtime(event.target.value);
//     }
//     const appointreasonHandler=(event)=>{
//         getAppointreason(event.target.value);
//     }
//     const appointmentSubmitHandler=()=>{
//         const appointmentData ={appointmentname:appointmentname, appointnumber:appointnumber, appointtime:appointtime, appointreason:appointreason}
//         axios.post('http://localhost:8080/appointments/registration', appointmentData).then((response)=>{
//             console.log(response.data.message);
//             getAppointmentError('Your appointment has successfully created')
//         })
//     }
//     return(
//         <>   
//         {showModal &&
//         <>
            
//             </>}
//         </>
//     )
// }
// export default BoxModel