import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Mycard=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };
    return(
        <>  
            <div className="home-div3">
                <div className="div3-header">
                  Our Services
                </div>
            
                <div className="Mycard-maindiv2">
                <Slider {...settings}>
                    { data1.map((d1)=>(
                        <div className="mycard-div2">
                            <div className="mycard2-imgslider">
                                <img src={d1.img} alt="" />
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
            <div className='home-div7'>
                <div className='div7-header'>
                    Top Service Category
                </div>
                <div className='div7-parent1'>
                        <div><h2>Primary Care</h2></div>
                        <div><h2>ChiroPractor</h2></div>
                        <div><h2>Blood Test</h2></div>
                        <div><h2>Orthopedic</h2></div>
                        <div><h2>Laboratory</h2></div>
                </div>
            </div>
            <div className="home-div4">
                    <div className="div4-header">
                        Meet Our Expert Doctors
                    </div>
                <div className="Mycard-maindiv">
                <Slider {...settings}>
                    { data.map((d)=>(
                        <div className="mycard-div1">
                            <div className="mycard-imgslider">
                                <img src={d.img} alt="" />
                            </div>
                            <div className="mycard-div1-child">
                                <p><b>{d.name}</b></p>
                                <p>{d.review}</p>
                                <p><button className='button-slider'>Read More</button></p>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
            <div className="home-div5">
                    <div className="div5-header">
                      Patients Feedback
                    </div>
                <div className="Mycard3-maindiv">
                <Slider {...settings}>
                    { data2.map((d2)=>(
                        <div className="mycard-div">
                            <div className="mycard3-imgslider">
                                <img src={d2.img} alt="" />
                            </div>
                            <div className="mycard-div1-child">
                                <p><b>{d2.name}</b></p>
                                <p>{d2.comment}</p>
                                <p><b>{d2.postedon}</b></p>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}
const data2 = [
    {
        name:`Ms. Sandhya Kumari`,
        img:`./img_folder/patient.png`,
        comment:`Dr. Prince Shukla is an exceptional surgeon whose expertise, compassion and dedication are truly commendable.`,
        postedon: `08/03/2024`
    },
    {
        name:`Ms. Megha Joshi`,
        img:`./img_folder/patient.png`,
        comment:`I wish to record my thanks and appreciation to Dr. Prerna Shukla for running an effiecient and patient-focused hospital.`,
        postedon: `21/02/2024`
    },
    {
        name:`Mr. Naveen Sharma`,
        img:`./img_folder/patient.png`,
        comment:`I visited Dr. Harshit Clinic Center last month, lost my purse there. Thank You for security team who cordinate with me.`,
        postedon:`14/02/2024`
    },
    {
        name:`Mr. Aarya Singh`,
        img:`./img_folder/patient.png`,
        comment:`My experience under the care of Dr. Tannu Shukla has been nothing short of extra ordinary. As a Senior Consultant.`,
        postedon: `12/01/2024`
    },
    {
        name:`Ms. Riya Roy`,
        img:`./img_folder/patient.png`,
        comment:`Dr. Naina Sharma is very professional and takes good care of patient. He explained me throughly the problem in my teethand solution.`,
        postedon:`06/05/2024`
    },
    {
        name:`Ms. Neha Patel `,
        img:`./img_folder/patient.png`,
        comment:`I can't express my gratitude enough to Dr. Prachi Bhardwaj, a remarkable cardiologist who guided me throgh a challenging time.`,
        postedon: `13/05/2024`
    },
    {
        name:`Ms. Nidhi Desai`,
        img:`./img_folder/patient.png`,
        comment:`Under the care of Dr. Onkar nath Pandey, I found not just treatment but genuine understanding and support for my orthopdeic.`,
        postedon: `03/06/2024`
    }
]
const data1 = [
    {
        img:`./img_folder/anesthesia.png`
    },
    {
        img:`./img_folder/nephrology.jpg`
    },
    {
        img:`./img_folder/neuro.jpg`
    },
    {
        img:`./img_folder/orthopedic.jpg`
    },
    {
        img:`./img_folder/pediatrician.png`
    },
    {
        img:`./img_folder/radiology.jpg`
    },
    {
        img:`./img_folder/surgeon.jpg`
    },
    {
        img:`./img_folder/psychaiatry.jpg`
    }
]
const data = [
    {
        name:  `Dr. Prince Shukla`,
        img:    `./img_folder/prince.jpg`,
        review:`Dr. Prince shukla is one of the best Neurologist. A neurologist is a medical doctor who diagnoses, treats and manages disorders of the brain and nervous system (brain, spinal cord and nerves`
    },
    {
        name:  `Dr. Prerna Shukla`,
        img:    `./img_folder/prerna.jpg`,
        review:`Dr. Prerna Shukla is one of the  best Radiologist. Radiologists are medical doctors that specialize in diagnosing and treating injuries and diseases using medical imaging (radiology).`
    },
    {
        name:  `Dr. Tannu Shukla`,
        img:    `./img_folder/tannu.jpg`,
        review:`Dr. Tannu Shukla is one of the best surgeon. A surgeon is a doctor who specializes in evaluating and treating conditions that may require surgery, or physically changing the human body.`
    },
    {
        name:  `Dr. Naina Sharma`,
        img:    `./img_folder/naina.jpg`,
        review:`Dr. Naina Sharma is one of the best Orthopedic Surgeon. Orthopedic doctors, often referred to as orthopedic surgeons, focus on helping you with musculoskeletal issues.`
    },
    {
        name:  `Dr. Harshit Sharma`,
        img:    `./img_folder/harshit.jpg`,
        review:`Dr. Harshit Sharma is one of the best Psychiatrictic. A psychiatrist is a medical doctor who's an expert in the field of psychiatry — the branch of medicine focused on the diagnosis.`
    },
    {
        name:  `Dr. Prachi Bhardwaj`,
        img:    `./img_folder/prachi.jpg`,
        review:`Dr. Prachi Bhardwaj is one of the best Nephrologist. A nephrologist is a physician who studies and deals with nephrology. Nephrology is the adult and pediatric study of the kidneys and its diseases.`
    },
    {
        name:  `Dr. Aarohi Kumar`,
        img:    `./img_folder/doctor6.png`,
        review:`Dr. Aarohi kumar is one of the best Dentist doctor. A dentist is a healthcare provider who diagnoses and treats oral health conditions. Taking good care of your teeth.`
    },
    {
        name:  `Dr. Madhav Verma`,
        img:    `./img_folder/doctor10.png`,
        review:`Dr. Madhav Verma is one of the best Gynecologist. A gynecologist is a doctor who specializes in female reproductive health.`
    },
    
    {
        name:  `Dr. Onkar Nath Pandey`,
        img:    `./img_folder/onkar.jpg`,
        review:`Dr. Onkar is one of the best anestheslogy doctor. Anesthesiologists are medical doctors just like your primary care physician and surgeon. They specialize in anesthesia care.`
    }
]
export default Mycard;