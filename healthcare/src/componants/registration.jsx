import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import axios from 'axios';




const Registration=()=>{
    const doctorId = localStorage.getItem('doctorId');

    const doctorName = localStorage.getItem('doctorName');
    const address =  localStorage.getItem('address');
    const doctornumber = localStorage.getItem('doctorNumber')
    const [buttonname, getButtonName] = useState('Submit Form');
    const [formName, getFormName] = useState(`${doctorName} Health Clinic`)
    const [formError, getFormError] = useState('');
    const [patientname, getPatientName] = useState('');
    const [age, getAge] = useState('');
    const [number, getNumber] = useState('');
    const [symptoms, getSymptoms] = useState('');
    const [treatment, getTreatment] = useState('');
    const Location = useLocation('');
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');
    // const [male, getMale] = useState('');
    // const [female, getFemale] = useState('');
    // const [other, getOther] =useState();
    const [gender, getGender] = useState('');
    const [passwordp, getPasswordp] = useState('');
    const [date, getDate] = useState('');
    const params = useParams('');
    const navigate = useNavigate('');

    
    useEffect(()=>{
        if(Location.pathname == '/Loginpage'){
            getButtonName('Login');
            getFormName('Login Form');
            getFormError('')
        }
        if(Location.pathname == '/PatientLoginpage'){
            getButtonName('Patient Login');
            getFormName('Patient Login Form');
            getFormError('');
        }
        if(params.id){
            getFormName('Update Patient Form');
            getButtonName('Update Patient');
            axios.get('http://localhost:8080/patients/singlepatientlist/'+params.id).then((response)=>{
                getPatientName(response.data.message.patientname);
                getAge(response.data.message.age);
                getNumber(response.data.message.number);
                getGender(response.data.message.gender);
                getSymptoms(response.data.message.symptoms);
                getTreatment(response.data.message.treatment);
                getEmail(response.data.message.email);
                getPassword(response.data.message.password);
            })
        }
    },[])
    const patientnameHandler=(event)=>{
        getPatientName(event.target.value);
    }
    const ageHandler=(event)=>{
        getAge(event.target.value)
    }
    const numberHandler=(event)=>{
        getNumber(event.target.value);
    }
    const genderHandler=(event)=>{
        // getFemale(event.target.value);
        // getMale(event.target.value);
        // getOther(event.target.value);
        getGender(event.target.value);
    }
    const symptomsHandler=(event)=>{
        getSymptoms(event.target.value);
    }
    const treatmentHandler=(event)=>{
        getTreatment(event.target.value)
    }
    const emailHandler=(event)=>{
        getEmail(event.target.value)
    }
    const passwordHandler=(event)=>{
        getPassword(event.target.value)
    }
    const passwordpHandler=(event)=>{
        getPasswordp(event.target.value)
    }
    const dateHandler=(event)=>{
        getDate(event.target.value);
    }
    
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(patientname, age, number, symptoms, treatment, email, password);
        if(params.id){
            const registrationData = {patientname:patientname, age:age, number:number, gender:gender, symptoms:symptoms, treatment:treatment, passwordp:passwordp, date:date }
            axios.put('http://locahost:8080/patients/updatepatient/'+params.id, registrationData).then((response)=>{
                console.log(response);
                navigate('/patientlist');
                getFormError('Patient has successfully updated')
            })
        }else if(buttonname=='Login'){

            let registrationData ={email:email, password:password}
            console.log(registrationData);
            axios.post('http://localhost:8080/doctors/logindoctor',registrationData).then((response)=>{

                if(response.data.message=='either username or password is wrong'){
                    getFormError(response.data.message)
                }else{
                    console.log(response.data.message);
                    localStorage.setItem('doctorId', response.data.message._id);
                    localStorage.setItem('doctorName', response.data.message.doctorName);
                    localStorage.setItem('doctorNumber', response.data.message.doctorNumber);
                    localStorage.setItem('email', response.data.message.email);
                    localStorage.setItem('password', response.data.message.password);
                    localStorage.setItem('address', response.data.message.address);
                    navigate('/Prescriptionpage')
                }
            })
        }else if(buttonname=='Patient Login'){
            let registrationData ={number:number, passwordp:passwordp}
            axios.post('http://localhost:8080/patients/login',registrationData).then((response)=>{

                if(response.data.message=='either number or password is wrong'){
                    getFormError(response.data.message)
                }else{
                    console.log(response.data.message);
                    localStorage.setItem('patientId', response.data.message._id);
                    localStorage.setItem('patientName', response.data.message.patientname);
                    navigate('/MyProfilespage')
                }
            })}else{
            const registrationData = {docid:doctorId, docname:doctorName, patientname:patientname, age:age, number:number,passwordp:passwordp, gender:gender, date:date, symptoms:symptoms, treatment:treatment }
            console.log(registrationData);
            axios.post('http://localhost:8080/patients/registration', registrationData).then((response)=>{
                console.log(response.data.message);
                navigate('/patientlistpage')
            })
        }
    }
    return(
        <>
            <div className="presmain-div1">
                <div className="div1-parent1">
                    <div className="div1-header">
                        {formName} <br />
                       { buttonname != 'Update Patient' &&
                       <> 
                       <span className="registheader-span"> {address}  {doctornumber}</span>
                       </>}     
                    </div>
                    <div className="div1-error">
                        {formError}
                    </div>
                    <form action="">
                    { (buttonname == 'Submit Form' || buttonname=='Update Patient') && 
                    <>
                        <div className="pres-form-col1">
                            <div>
                                <label htmlFor="">Patient Name:</label>
                                <input className="input1" type="text" placeholder="patient name" value={patientname} onChange={patientnameHandler}/>
                            </div>
                            <div>
                                <label htmlFor="">Date:</label>
                                <input className="input2" type="text" placeholder="check-up date" value={date} onChange={dateHandler}/>
                            </div>
                        </div>
                    </>}
                    { (buttonname == 'Submit Form' || buttonname=='Update Patient' || buttonname=='Patient Login') && 
                    <>
                            <div className="pres-form-col6">
                                <label htmlFor="">Number:</label> 
                                <input className="input3" type="text" placeholder="number" value={number} onChange={numberHandler}/>
                            </div>
                            <div className="pres-form-col6">
                                <label className="password" htmlFor="">Password:</label> 
                                <input type="password"  className="input4" value={passwordp} placeholder="password" onChange={passwordpHandler}/>
                            </div>
                    </>}
                    { (buttonname == 'Submit Form' || buttonname=='Update Patient') && 
                    <>
                        <div className="pres-form-col2">
                            <div>
                                <label htmlFor="">Gender:</label> <br />
                                {/* <input className="gender" type="radio" name="Gender" value={male} onChange={genderHandler}/> Male
                                <input className="female gender" type="radio" name="Gender" value={female} onChange={genderHandler}/> Female
                                <input className="female gender" type="radio" name="Gender" value={other} onChange={genderHandler}/> others */}
                                <input type="text" value={gender} onChange={genderHandler}/>
                            </div>
                            <diV>
                                <label className="Blood" htmlFor="">Age:</label> <br/>
                                <input type="text" className="inputblood" placeholder="patient age" value={age} onChange={ageHandler}/>   
                            </diV>

                        </div>
                        <div className="pres-form-col3">
                            <label className="" htmlFor="">Symptoms</label>
                            <textarea name="" id="" rows="4" value={symptoms} onChange={symptomsHandler}></textarea>
                        </div>
                        <div className="pres-form-col3">
                            <label className="" htmlFor="">Treatments</label>
                            <textarea name="" id="" rows="4" value={treatment} onChange={treatmentHandler}></textarea>
                        </div>
                    </>}

                    { buttonname == 'Login' &&
                    <>
                        <div className="pres-form-col4">
                                <label htmlFor="">Email: </label>
                                <input type="email" placeholder="yourname@gmail.com" value={email} onChange={emailHandler}/>
                            </div>
                            <div className="pres-form-col4">
                                <label htmlFor="">Password: </label>
                                <input type="password" placeholder="password"value={password} onChange={passwordHandler}/>
                            </div>  

                            <div className="pres-form-col5">Switch to <span onClick={()=>{navigate('/PatientLoginpage')}}>Patient Login</span></div>
                    </>}

                    <div className="regist-button-submit">
                        <button type="submit" onClick={submitHandler}>{buttonname}</button>
                    </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}
export default Registration