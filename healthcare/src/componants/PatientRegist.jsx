import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';




const PatientRegistC=()=>{
    const location = useLocation('');
    const[firstname, getFirstname]=useState('');
    const[lastname, getLastname] = useState('');
    const[email, getEmail]=useState('');
    const[password, getPassword]=useState('');
    const[gender, getGender]=useState('');
    const[age, getAge]=useState('');
    const[contact, getContact]=useState('');
    const[address, getAddress]=useState('');
    const[dob, getDob]=useState('');
    const[about, getAbout]=useState('');
    const[pregistrationform, getPregistrationform]=useState(`Patient's Registration Form`);
    const[buttonname, getButtonName]=useState('Submit Form');
    const navigate = useNavigate('');
    const[formerror, getFormError] = useState('')
    const params = useParams('');

    useEffect(()=>{
        if(location.pathname == '/PatientLoginpage'){
            getPregistrationform(`Patient's Login Form`);
            getButtonName('Login')
        }
        if(params.id){
            getPregistrationform(`Update Form`);
            getButtonName(`Update Form`);
            axios.get('http://localhost:8080/patientregists/singlepatientregist/' +params.id).then((response)=>{
                getFirstname(response.data.message.firstname);
                getLastname(response.data.message.lastname);
                getEmail(response.data.message.email);
                getPassword(response.data.message.password);
                getGender(response.data.message.gender);
                getAge(response.data.message.age);
                getContact(response.data.message.contact);
                getAddress(response.data.message.address);
                getDob(response.data.message.dob)
                getAbout(response.data.message.about)
            })
        }
    })
    const firstnameHandler=(event)=>{
        getFirstname(event.target.value);
    }
    const lastnameHandler=(event)=>{
        getLastname(event.target.value);
    }
    const emailHandler=(event)=>{
        getEmail(event.target.value);
    }
    const passwordHandler=(event)=>{
        getPassword(event.target.value);
    }
    const genderHandler=(event)=>{
        getGender(event.target.value)
    }
    const ageHandler=(event)=>{
        getAge(event.target.value);
    }
    const contactHandler=(event)=>{
        getContact(event.target.value)
    }
    const addressHandler=(event)=>{
        getAddress(event.target.value)
    }
    const dobHandler=(event)=>{
        getDob(event.target.value)
    }
    const aboutHandler=(event)=>{
        getAbout(event.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(params.id){
            const registrationData = {firstname:firstname, lastname:lastname,dob:dob, email:email, password:password, gender:gender, about:about, age:age, contact:contact, address:address}
            axios.put('http://localhost:8080/patientregists/updatepatientregist/'+params.id, registrationData).then((response)=>{
                console.log(response)
                getFormError(`Patient has successfully Updated`)
            })
        }else if(buttonname=='Login'){
            let registrationData ={email:email, password:password}
            console.log(registrationData);
            axios.post('http://localhost:8080/patientregists/loginpatientregist',registrationData).then((response)=>{
                if(response.data.message=='either username or password is wrong'){
                    getFormError(response.data.message)
                }else{
                    console.log(response.data.message);
                    localStorage.setItem('patient_Id', response.data.message._id);
                    localStorage.setItem('firstname', response.data.message.firstname);
                    localStorage.setItem('lastname', response.data.message.lastname);
                    localStorage.setItem('contact', response.data.message.contact);
                    localStorage.setItem('address', response.data.message.address);
                    navigate('/MyProfilespage');
                }
            })
        }else{
        const registrationData = {firstname:firstname, lastname:lastname, dob:dob, email:email, password:password,about:about, gender:gender, age:age, contact:contact, address:address}
        axios.post('http://localhost:8080/patientregists/patientregistregistration', registrationData).then((response)=>{
            getFormError(`Patient prescription has successfully created`);
        })
    }
}
    return(
        <>  
            <div className="Patientregistc-maindiv">
                <div className="Patientregistc-parent1">
                    <div className="patient-header">
                            {pregistrationform}
                    </div>
                    <div className="formerror">
                            {formerror}
                    </div>
                    <div>
                        <form action="">
                        {buttonname != 'Login' &&
                        <>
                            <div className="input-box-row">
                                <div className="input-col-box">   
                                    <label htmlFor="">First Name: </label>
                                    <input type="text" placeholder="firstname" value={firstname} onChange={firstnameHandler}/>
                                </div>
                                <div className="input-col-box">   
                                    <label htmlFor="">Last Name: </label>
                                    <input type="text" placeholder="lastname" value={lastname} onChange={lastnameHandler}/>
                                </div>
                            </div>
                        </>}
                           
                                <div className="input-col-box">   
                                    <label htmlFor="">Email: </label>
                                    <input type="text" placeholder="email" value={email} onChange={emailHandler}/>
                                </div>
                                <div className="input-col-box">   
                                    <label htmlFor="">Password: </label>
                                    <input type="password" placeholder="password" value={password} onChange={passwordHandler}/>
                                </div>
                               
                            { buttonname != 'Login' &&
                            <>
                            <div className="input-box-row">
                                <div className="input-col-box">   
                                    <label htmlFor="">Gender: </label>
                                    <input type="text" placeholder="gender" value={gender} onChange={genderHandler}/>
                                </div>
                                <div className="input-col-box">   
                                    <label htmlFor="">Age: </label>
                                    <input type="text" placeholder="age" value={age} onChange={ageHandler}/>
                                </div>
                            </div>
                            <div className="input-box-row">
                                <div className="input-col-box">   
                                    <label htmlFor="">Date-of-Birth </label>
                                    <input type="text" placeholder="birthdate" value={dob} onChange={dobHandler}/>
                                </div>
                                <div className="input-col-box">   
                                    <label htmlFor="">Contact Number </label>
                                    <input type="text" placeholder="contact" value={contact} onChange={contactHandler}/>
                                </div>
                            </div>
                            <div className="input-col-box">   
                                <label htmlFor="">Address</label>
                                <textarea name="" id="" rows={5} color="12" value={address} onChange={addressHandler}></textarea>
                            </div>
                            <div className="input-col-box">   
                                <label htmlFor="">About yourself</label>
                                <textarea name="" id="" rows={5} color="12" value={about} onChange={aboutHandler}></textarea>
                            </div>
                            <div className="switching-account">Already have an account? <span onClick={()=>{navigate('/PatientLoginpage')}}>Login</span></div>
                            </>}
                            {buttonname == 'Login' &&
                            <>
                                <div className="switching-account">Don't have an account? <span onClick={()=>{navigate('/Patientregist')}}>SignUp</span></div>
                            </>}
                            <div className="input-button">
                                <button type="button" onClick={submitHandler}>{buttonname}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PatientRegistC