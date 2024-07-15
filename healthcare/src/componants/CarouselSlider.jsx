import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';




const CarouselSlider=()=>{
    const location = useLocation('');
    const [slidername, getSliderName] = useState('ABOUT US');
    useEffect(()=>{
        if(location.pathname== '/Contactpage'){
            getSliderName('CONTACT')
        }
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <>  
            <div className='slider-maindiv'>
                <Slider {...settings}>
                    {slider.map((s)=>(
                        <div className='imgslider'>
                            <img src={s.img} alt="" />
                        </div>
                    ))}
                </Slider>
                <div className='aboutus'>
                    {slidername}
                </div>
            </div>
        </> 
    )
}
const slider = [
    {
        img:`./img_folder/sliderimg1.jpeg`
    },
    {
        img:`./img_folder/imgslider1.png`
    },
    {
        img:`./img_folder/imgslider.png`
    } 
]
export default CarouselSlider