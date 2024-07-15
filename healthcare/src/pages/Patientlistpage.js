import Footer from "../componants/footer"
import Header from "../componants/header"
import Navbar from "../componants/navbar"
import Patientlist from "../componants/patientlist"





const Patientlistpage=()=>{
    return(
        <>
            {<Header/>}
            {<Navbar/>}
            <div className="Patientlistpage-maindiv">
                {<Patientlist/>}
            </div>
            {<Footer/>}
        </>
    )
}
export default Patientlistpage