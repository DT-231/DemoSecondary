const TimelineItem = ({ workFlow }) => {
    return (
        <li>
            <div className="flex-start flex items-center pt-10 relative">
                {/* Hiệu ứng phát sáng */}
                <div className="absolute -left-4 w-10 h-10 bg-primary opacity-50 blur-xl rounded-full"></div>

                {/* Chấm tròn chính */}
                <div className="-ml-[10px] mr-3 h-[20px] w-[20px] rounded-full bg-primary shadow-[0_0_20px_10px_rgba(255,255,255,0.6)]"></div>

                {/* Số 1 với hiệu ứng phát sáng */}
                <div className="relative bottom-4">
                    <p className="text-6xl ml-5 font-primary text-primary dark:text-primary relative z-10">
                        {workFlow.order_number}
                    </p>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-full h-full bg-primary/30 blur-[10px] rounded-lg animate-pulse z-0"
                    ></div>
                </div>
                <h4 className="md:mb-1.5 ml-10 md:text-4xl  text-2xl uppercase text-primary font-semibold">{workFlow.title}</h4>
            </div>
            <div className="mb-10 ml-4 mt-2">
                <p className="mb-3 w-3xs ml-7 text-primary-500 text-sm dark:text-primary">{workFlow.content}</p>
            </div>
        </li>
    );
};

export default TimelineItem;
