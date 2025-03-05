import React, { useRef } from "react";
import Slider from "react-slick";
import imgs from "../../assets/Imgs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css";
import icons from "../../assets/Icons"

const images = [
    imgs.BannerImg,
    imgs.WhyChooseUsImg,
    imgs.BannerImg,
    imgs.WhyChooseUsImg,
    imgs.BannerImg,
    imgs.WhyChooseUsImg,
    imgs.BannerImg,
    imgs.WhyChooseUsImg,
];

function CenterMode() {
    const sliderRef = useRef(null);
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        arrows: false,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        // adaptiveHeight: true,
        ref: sliderRef ,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1536, // 2xl
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 1280, // xl
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 1024, // lg
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 768, // md
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 640, // sm
                settings: { slidesToShow: 1 },
            },
        ],
    };
    const goToNextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className="slider-container w-full">
            <Slider {...settings}>
                {images.map((srcImg, index) => (
                    <div
                        key={index}
                        className="px-1 sm:px-5 2xl:h-[600px] 
xl:h-[500px]    lg:h-[400px]    
md:h-[300px]    sm:h-[200px]   
h-[150px]       "
                    >
                        <img src={srcImg} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </Slider>
            <img
                src={icons.arrow}
                onClick={goToNextSlide}
                className="md:w-[70px] w-[50px] md:h-[20px] h-[10px] absolute md:right-30 right-10 md:-bottom-1 bottom-2 transform -translate-y-1/2 cursor-pointer z-10"
            />
        </div>
    );
}

export default CenterMode;
