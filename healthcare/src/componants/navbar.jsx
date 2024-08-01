import { useNavigate } from "react-router-dom";





const Navbar=()=>{

    const navigate = useNavigate('');
    const doctorId = localStorage.getItem('doctorId')
    const patientId = localStorage.getItem('patientId')
    const doctorName = localStorage.getItem('doctorName');
    const docImage = localStorage.getItem('docImage');
    let patientname = localStorage.getItem('patientName');

    const logoutHandler=()=>{
        localStorage.clear();
        navigate('/Loginpage');
    }
    return(
        <>
                <div className="maindiv-nav">
                    <div className="parent1div-nav">
                        <img src="./img_folder/logo_img.jpg" alt="" />
                    </div>
                    <div className="parent2div-nav"> 
                    {  (!doctorId && !patientId) && <>
                        <div onClick={()=>{navigate('/')}}>Home </div>
                        <div onClick={()=>{navigate('/Aboutpage')}}>About</div>
                        <div onClick={()=>{navigate('/Contactpage')}}>Contact</div>
                        <div onClick={()=>{navigate('/Loginpage')}}>Doctor's Login</div>
                        <div onClick={()=>{navigate('/Doctorregist')}}>Doctor Registration</div>
                    </>}
                    { (doctorId && !patientId) &&
                    <>   
                        <div><img className="docImg" src={docImage} alt="" /> </div>
                        <div>{doctorName}</div>
                        <div onClick={()=>{navigate('/MyProfilepage')}}>Your Profile</div>
                        <div onClick={()=>{navigate('/Dashboardpage')}}>Dashboard</div>
                        <div onClick={()=>{navigate('/Prescriptionpage')}}>Prescription</div>
                        <div onClick={()=>{navigate('/Patientlistpage')}}>Patientlist</div>
                        <div onClick={logoutHandler}>Logout</div>
                    </>}

                    { (patientId) &&
                    <>
                        <div><img src="" alt="" /></div>
                        <div>{patientname}</div>
                        <div onClick={()=>{navigate('/MyProfilespage')}}>My Profile</div>
                        <div onClick={()=>{navigate('/Pdashboard')}}>Dashboard</div>
                        <div onClick={()=>{navigate('/Pprescriptionpage')}}>Prescription</div>
                        <div onClick={logoutHandler}>Logout</div>
                    </>}
                    </div>
                </div>
        </>
    )
}

export default Navbar;