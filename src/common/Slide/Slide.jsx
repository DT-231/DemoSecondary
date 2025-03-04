import React, { useEffect } from "react";
import "./Slide.css";
import images from "../../assets/Imgs";

function Slide() {
    const imgs = [
        images.BannerImg,
        images.WhyChooseUsImg,
        images.BannerImg,
        images.WhyChooseUsImg,
        images.BannerImg,
        images.WhyChooseUsImg,
        images.BannerImg,
        images.WhyChooseUsImg,
    ];

    useEffect(() => {
        const slidesContainer = document.querySelector(".slides");
        const slides = document.querySelectorAll(".slide");
        let currentIndex = 0;

        const updateSlides = () => {
            // Cập nhật trạng thái active cho các slide
            slides.forEach((slide, index) => {
                if (index === currentIndex) {
                    slide.classList.add("active");
                } else {    
                    slide.classList.remove("active");
                }
            });

            // Tính toán chuyển động đơn giản hơn
            const slideWidth = slides[0].clientWidth;
            slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlides();
        };

        updateSlides();
        const interval = setInterval(nextSlide, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        // Thêm kích thước cố định và overflow-hidden cho container chính
        <div className="bg-white w-full" style={{ maxWidth: "100%" }}>
            {/* Container với chiều rộng cố định và overflow-hidden */}
            <div className="w-full overflow-hidden" style={{ maxWidth: "100%" }}>
                <div className="slides flex transition-transform duration-500 ease-linear">
                    {imgs.map((src, i) => (
                        <div key={i} className="slide flex-shrink-0 w-64 md:w-80 lg:w-96">
                            <div className="bg-indigo-50 rounded-2xl h-64 md:h-80 lg:h-96 flex justify-center items-center m-2">
                                <img
                                    src={src}
                                    alt={`Slide ${i + 1}`}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slide;
