import Footer from "../componants/footer"
import Header from "../componants/header"
import Navbar from "../componants/navbar"
import Registration from "../componants/registration"





const Login=()=>{
    return(
        <>
            {<Header/>}
            {<Navbar/>}
            <div className="loginpage-maindiv">
            {<Registration/>}
            </div>
            {<Footer/>}
        </>
    )
}
export default Login