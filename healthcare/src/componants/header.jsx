import { FaHandHoldingMedical } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Header=()=>{
    return(
        <>
            <div className="maindiv-head">
                   <div className="parent1div-head">
                        <div className="child1">@shukla.kumar.saket@gmail.com</div>
                        <div>+91 8864078090</div>
                   </div>
                   <div className="parent2div-head">
                        <div className="child1">Your Health Our Priority</div>
                        <div>{<FaHandHoldingMedical className="head-icon1"/>} <span className="span1">Emergency</span> <span className="span2">24{<ImCross className="head-icon2"/>}7</span></div>
                   </div>
                    
            </div>
        </>
    )
}
export default Header;