function Slide() {
    const swiper = new Swiper(".centered-slide-carousel", {
        centeredSlides: true,
        paginationClickable: true,
        loop: true,
        spaceBetween: 30,
        slideToClickedSlide: true,
        pagination: {
            el: ".centered-slide-carousel .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1920: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1028: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            990: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });
    return (
        <div>
            <div class="w-full relative">
                <div class="swiper centered-slide-carousel swiper-container relative ">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                                <span class="text-3xl font-semibold text-indigo-600">Slide 1 </span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                                <span class="text-3xl font-semibold text-indigo-600">Slide 2 </span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                                <span class="text-3xl font-semibold text-indigo-600">Slide 3 </span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                                <span class="text-3xl font-semibold text-indigo-600">Slide 4 </span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                                <span class="text-3xl font-semibold text-indigo-600">Slide 5 </span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                                <span class="text-3xl font-semibold text-indigo-600">Slide 6 </span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination "></div>
                </div>
            </div>
        </div>
    );
}

export default Slide;
