import { useEffect, useState } from "react";
import images from "../../assets/Imgs";

const Banner = () => {
    const [checkWith, setCheckWith] = useState(false);
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (+window.innerWidth < 1000) {
                setCheckWith(true);
            } else {
                setCheckWith(false);
            }
        });
    }, [checkWith]);
    return (
        <div className="relative w-full h-screen">
            {/* Background */}
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black/50">
                <img src={images.BannerImg} alt="Banner" className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center py-3 px-5 h-full">
                {/* Banner Content */}
                <div className="text-center text-primary flex flex-col justify-center flex-grow gap-6">
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-normal font-primary">
                        THIẾT KẾ KIẾN TRÚC <br /> NỘI THẤT
                    </h1>

                    <p className="text-xl leading-relaxed font-secondary">
                        Mộc Đức. <br />
                        Thiết kế thi công Kiến Trúc và
                        {checkWith && <br />} Nội Thất chuyên nghiệp.
                        <br />
                        Thiết kế đa dạng phong cách
                        {checkWith && <br />} Hoàn Mỹ - Sang Trọng - Độc Nhất
                    </p>
                </div>

                {/* Button */}
                <div className="pb-25">
                    <button className="border-2 border-primary w-48 sm:w-56 h-12 sm:h-14 text-xl sm:text-2xl text-primary font-primary font-bold hover:bg-primary/80 hover:text-white transition-all duration-300">
                        Xem Dự Án
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
