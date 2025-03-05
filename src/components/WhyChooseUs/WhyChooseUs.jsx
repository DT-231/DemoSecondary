import images from "~/assets/Imgs";

function WhyChooseUs({}) {
    return (
        <div className="relative mb-10">
            <div className="max-w-5xl lg:w-5xl w-xs mx-auto relative lg:pt-[200px] pt-[120px]">
                <img
                    src={images.WhyChooseUsImg}
                    alt="Why Choose Us"
                    className="absolute lg:top-[-150px] top-[-50px] left-1/2 transform -translate-x-1/2 z-10"
                />
                {/* Nội dung text */}
                <div className="bg-white md:py-10 px-2 xl:mt-[150px] ">
                    <div className="flex flex-row lg:flex-row gap-5">
                        <h4 className="text-black lg:text-3xl py-5 md:text-lg w-md font-primary font-bold">
                            Giá Trị Cốt Lõi
                        </h4>
                        <div className="flex flex-col gap-5">
                            {Array(3)
                                .fill(null)
                                .map((_, i) => (
                                    <div key={i} className="py-5">
                                        <h5 className="lg:text-2xl pb-5 text-xs font-primary font-bold">
                                            Vì sao chọn?
                                        </h5>
                                        <p className="text-secondary lg:text-base text-xs font-secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
                                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
