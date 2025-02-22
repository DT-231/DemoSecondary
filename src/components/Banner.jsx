import images from "../assets/Imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Background */}
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black/50">
                <img src={images.BannerImg} alt="Banner" className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center !py-3 !px-5 h-full">
                {/* Header */}
                <div className="flex justify-between items-center w-full py-5">
                    <img src={images.LogoImg} alt="Logo" className="w-36 " />
                    <FontAwesomeIcon icon={faBars} className="text-primary text-2xl" />
                </div>

                {/* Banner Content */}
                <div className="text-center text-primary flex flex-col justify-center flex-grow gap-6">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-normal font-Playfair">
                        THIẾT KẾ KIẾN TRÚC <br /> NỘI THẤT
                    </h1>

                    <p className="text-lg leading-relaxed font-Lora">
                        Mộc Đức. <br />
                        Thiết kế thi công Kiến Trúc và <br />
                        Nội Thất chuyên nghiệp.
                        <br />
                        Thiết kế đa dạng phong cách
                        <br />
                        Hoàn Mỹ - Sang Trọng - Độc Nhất
                    </p>
                </div>

                {/* Button */}
                <div className="!pb-25">
                    <button className="border-2 border-primary w-48 sm:w-56 h-12 sm:h-14 text-xl sm:text-2xl text-primary">
                        Xem Dự Án
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
