// import CarouselSlider from "../componants/CarouselSlider"
import Footer from "../componants/footer"
import Header from "../componants/header"
import Navbar from "../componants/navbar"
import { FcContacts } from "react-icons/fc";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { GiEmptyHourglass } from "react-icons/gi";


const Contact=()=>{
    return(
        <>
            {<Header/>}
            {<Navbar/>}
            <div className="contact-maindiv">
                <div className="contact-div1">
                    <img src="https://img1.wsimg.com/isteam/ip/3007436f-f8db-4183-baf3-47deca1c1d29/contact.png/:/rs=w:1240,h:620,cg:true,m/cr=w:1240,h:620"/>
                </div>
                <div className="contact-div2"> 
                    <div className="contact-div2-child1">
                        <h3>{<FcContacts/>} CALL US</h3>
                        <p>(+91) 886 407 8090 </p>
                        <p>(+91) 822 988 5158</p>
                    </div>
                    <div className="contact-div2-child2">
                        <h3>{<FaLocationCrosshairs className="con-icon2"/>} LOCATION</h3>
                        <p>Adarsh Nagar, Near NCR Hospital, Indirapuram, Ghaziabad, UP, 201309</p>
                    </div>
                    <div className="contact-div2-child3">
                        <h3>{<GiEmptyHourglass className="con-icon3"/>} HOURS</h3>
                        <p>MON - FRI: 11 AM - 08 PM</p>
                        <p>SAT - SUN: 06 AM - 08 PM</p>
                    </div>
                </div>
            </div>
            {<Footer/>}
        </>
    )
}
export default Contact