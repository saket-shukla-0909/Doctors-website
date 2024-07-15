import { TfiEmail } from "react-icons/tfi";
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer=()=>{
    const navigate = useNavigate()
    return(
        <>
            <div className="maindiv-footer">
                <div className="">
                    <h2>Contact</h2>
                    <p>{<FaLocationDot className="icon1"/>} Noida 62 A-8B, Ghaziabad, UP</p>
                    <p>{<MdAddCall className="icon2"/>} +91 8864078090</p>
                    <p>{<TfiEmail className="icon3"/>} shukla.kumar.saket@gmail.com</p>
                </div>
                <div className="">
                    <h2>Market Place</h2>
                    <p>FAQS</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy</p>
                </div>
                <div className="">
                    <h2>Quick Links</h2>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Appointments</p>
                    <p>Blog</p>
                </div>
                <div className="">
                    <h2>News Letter</h2>
                    <p>Subscribe and get discount</p>
                    <div className="child1">
                        <input className="input1" type="search" placeholder="Enter your email address "/>
                        <input className="input2" type="button" value="Subscribe" />
                    </div>
                    <div className="child2">
                        <div className="social1-footer" onClick={()=>{navigate('/')}}>{<FaFacebook/>}</div> 
                        <div className="social2-footer" onClick={()=>{navigate('/')}}>{<FaTwitter/>}</div> 
                        <div className="social3-footer" onClick={()=>{navigate('/')}}>{<AiFillInstagram/>}</div>
                        <div className="social4-footer" onClick={()=>{navigate('/')}}>{<FaLinkedinIn/>}</div>
                    </div>
                </div> 
            </div>
        </>
    )
}
export default Footer