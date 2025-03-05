import Slide from "../../common/Slide/Slide";

function News() {
    return (
        <div className="relative bg-white lg:pb-100 pb-50 md:mb-60 w-full flex justify-center items-center">
            <div className="absolute md:top-[-180px] sm:top-[-130px] top-[-100px] py-8 w-full max-w-[1400px] sm:px-20 px-10">
                <Slide />
                <h5
                    className="text-secondary font-primary font-normal lg:text-3xl md:text-2xl text-xl 
                absolute sm:-bottom-15 -bottom-10 left-1/2 transform -translate-1/2"
                >
                    Tin tức
                </h5>
            </div>
        </div>
    );
}

export default News;
