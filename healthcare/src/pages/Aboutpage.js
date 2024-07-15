import CarouselSlider from "../componants/CarouselSlider"
import Footer from "../componants/footer"
import Header from "../componants/header"
import Navbar from "../componants/navbar"
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { PiStethoscope } from "react-icons/pi";
import { IoMdTimer } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { IoTelescopeSharp } from "react-icons/io5";
import { FaUserSecret } from "react-icons/fa";
import { GiEnergyArrow } from "react-icons/gi"
const About=()=>{
    return(
        <>
            {<Header/>}
            {<Navbar/>}
            <div className="car-div">
            {<CarouselSlider/>}
            </div>
            <div className="about-body">
                {/* About div1 */}
                <div className="about-div1"><span className="span1">Helping Your Stay </span><br/>Happy One
                    <h3 className="h3">Everyday We Bring Hope And Smile To The Patient We Serve.</h3>
                </div>

                {/* About div2 */}
                <div className="about-div2">
                    <div className="div2-parent">
                        <div className="div2-child1">
                            {<FaUserDoctor className="icon1"/>}
                        </div>
                        <div>
                            <h3>Qualified Doctors</h3>
                            <p> “Physicians should not be condescending or arrogant.
                                 They should treat others as they want to be treated.”</p>
                        </div>
                    </div>
                    <div className="div2-parent">
                        <div className="div2-child1">
                            {<FaAmbulance className="icon2"/>}
                        </div>
                        <div>
                            <h3>Emergency Care</h3>
                            <p>The services are good and the staff and doctors were excellent in all ways. Very good treatment and the doctors are very friendly to us.</p>
                        </div>
                    </div>
                    <div className="div2-parent">
                        <div className="div2-child1">
                            {<PiStethoscope className="icon3"/>}
                        </div>
                        <div>
                            <h3>Outdoor Checkup</h3>
                            <p>Regular checkups are beneficial for people of all ages. It can help identify potential issues before they start, and early detection of illnesses.</p>
                        </div>
                    </div>
                    <div className="div2-parent">
                        <div className="div2-child1">
                            {<IoMdTimer className="icon4"/>}
                        </div>
                        <div>
                            <h3>24 Hours Services</h3>
                            <p> customers can get their issues resolved anytime they need assistance. This is the support that is available 24 hours a day and 7 days a week.</p>
                        </div>
                    </div>
                </div>

                {/* about div3 */}
                <div className="about-div3">
                    <div className="div3-parent">
                        <div className="div3-header">
                            We are always ensure best Medical treatment for <br /> Your Health 
                        </div>
                        <div className="div3-para">
                            <p>{<FaCheckCircle className="div3-icons"/>} Top Specialist Doctor</p>
                            <p>{<FaCheckCircle className="div3-icons"/>} State of the art Doctor Services</p>
                            <p>{<FaCheckCircle className="div3-icons"/>} Discount for all medical treatment</p>
                            <p>{<FaCheckCircle className="div3-icons"/>} Enrollment is Quick and Easy</p>
                        </div>
                        <div className="button"><input type="button" value="Making an appointment" /></div>
                    </div>
                    <div className="div3-parent">
                        <div className="div3-child">
                            <img src="https://nationaleczema.org/wp-content/uploads/2019/01/shutterstock_624008096.jpg" alt="" />
                        </div>
                        <div className="checkup">{<FaCheckSquare className="icons"/>}Regular Checkup</div>
                        <div className="checkup1">
                            <p>Meet our doctor</p>
                            <div className="img">
                                <img src="./img_folder/prince.jpg" alt="" /> 
                                <img src="./img_folder/naina.jpg" alt="" /> 
                                <img src="./img_folder/harshit.jpg" alt="" /> 
                                <img src="./img_folder/tannu.jpg" alt="" /> 
                                {<FaCirclePlus className="icons"/>}
                            </div>
                            <p className="p1">A meeting between a patient with a physician to get health advice or treatment plan for a symptom or condition</p>
                        </div>
                    </div>
                </div>

                {/* About  div-4 */}
                <div className="about-div4">
                    <div className="div4-head">Why Choose Us</div>
                    <div className="div4-parent1">
                        <div className="div4-child1"><img src="https://www.lubigelindia.com/files/catalog/About/why-choose-us.jpg" alt="" /></div>
                        <div className="div4-child2">
                            <h1>Professional doctors with guaranteed experience</h1>
                            <p>There are expert doctor ready to help you understand youself. Get quick and easy access to quality advice regarding your physical and mental health. 
                            In today’s time These doctors giving treatment for symptoms, They try to find out the root cause of the problem. These all are very patient friendly and born for his profession. 
                            He saved many life as we know.
                            </p>
                            <div className="div4-child2div">
                                <div>
                                        <p className="para"><b>100%</b></p>
                                        <p>Guaranted</p>
                                </div>
                                <div>
                                        <p className="para"><b>2,000+</b></p>
                                        <p>Client Trusted+</p>
                                </div>
                                <div>
                                        <p className="para"><b>1,000+</b></p>
                                        <p>Professional Doctors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div4-child1"><img className="img" src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Public%20Opinion%20Research%201200x666.jpg?itok=Z9g0DOPe" alt="" /></div>
                </div>

                {/* About div5 */}
                <div className="about-div5">
                    <div className="div5-parent1">
                        <img src="https://static.vecteezy.com/system/resources/previews/015/286/180/non_2x/abstract-doctor-medical-line-medical-treatment-illustration-concept-and-icon-modern-on-health-background-health-insurance-vector.jpg" alt="" />
                    </div>
                    <div className="div5-parent2">
                            <div className="div5-child">
                                <div className="icon-div">
                                    {<IoTelescopeSharp className="icon"/>}
                                 </div>
                                <div className="para">
                                    <h2>Our Vision</h2>
                                    <p>Doctor's Mission is to cure the sickness to save the patient. This is a summary of Doctor's Mission, which consists of three aspects and three levels, namely, medical science research, medical education and diagnosis and treatment of patient.</p>
                                </div>
                            </div>
                        <div className="div5-child">
                            <div className="icon-div">
                                {<FaUserSecret className="icon"/>}
                                 </div>
                                <div className="para">
                                    <h2>Who We are</h2>
                                    <p> Doctors are the only people who have a thorough understanding of all diseases, their symptoms, and their remedies. The life of a doctor is not so easy. Becoming a doctor also needs a lot of hard work and dedication</p>                          
                                </div>
                        </div>
                        <div className="div5-child">
                            <div className="icon-div"> 
                                {<GiEnergyArrow className="icon"/>}
                            </div>
                                <div className="para">
                                    <h2>Our Mission</h2>
                                    <p>
                                    That's my vision of how the world could be. Turning that vision into a practical reality is not easy. He had a vision of Cheryl, slumped on a plastic chair in the waiting-room. Maybe you had visions of being surrounded by happy.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            {<Footer/>}
        </>
    )
}
export default About