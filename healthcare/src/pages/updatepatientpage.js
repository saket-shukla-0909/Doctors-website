import { useNavigate } from "react-router-dom";
import Header from "../componants/header";
import Registration from "../componants/registration";





const Updatepatient=()=>{
    const navigate = useNavigate('');
    return(
        <>
                <div className="upd-pat-maindiv">
                    {<Header/>}
                    <div className="upd-pat-div">
                        <div onClick={()=>{navigate('/MyProfilespage')}}>My Profile</div>
                        <div onClick={()=>{navigate('/Pdashboard')}}>Dashboard</div>
                    </div>
                    {<Registration/>}
                </div>
        </>
    )
}

export default Updatepatient;