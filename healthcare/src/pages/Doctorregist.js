import Footer from "../componants/footer"
import Header from "../componants/header"
import Navbar from "../componants/navbar"
import Registration from "../componants/registration"








const DoctorRegist=()=>{
    return(
        <>
            {<Header/>}
            {<Navbar/>}
            <div className="PatientRegist-maindiv">
                {<Registration/>}
            </div>
            {<Footer/>}
        </>
    )
}
export default DoctorRegist