import { useNavigate } from "react-router-dom";
import Profileregist from "../componants/patientprofregist";





const Updatepatient=()=>{

    

    const navigate = useNavigate('');
    return(
        <>  
            <div>
                <div className="header-update">
                    <div onClick={()=>{navigate('/MyProfilespage')}}>My Profile</div>
                    <div onClick={()=>{navigate('/Pdashboard')}}>Dashboard</div>
                </div>
                {<Profileregist/>}
            </div>
        </>
    )
}

export default Updatepatient;
