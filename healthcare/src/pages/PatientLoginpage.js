import Footer from "../componants/footer"
import Header from "../componants/header"
import Navbar from "../componants/navbar"
import PatientRegistC from "../componants/PatientRegist"






const PatientLoginpage=()=>{
    return(
        <>
            {<Header/>}
            {<Navbar/>}
            <div className="PatientRegist-maindiv">
                {<PatientRegistC/>}
            </div>
            {<Footer/>}
        </>
    )
}
export default PatientLoginpage