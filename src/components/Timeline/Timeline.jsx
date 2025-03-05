import React from "react";
import TimelineItem from "../../common/TimelineItem/TimelineItem";
function Timeline() {
    const timeLineWorkFlow = [
        { order_number: 1, title: "MEETING", content: "Gặp trực tiếp trao đổi và khảo sát" },
        { order_number: 2, title: "DESGIN", content: "Ký hợp đồng thiết kế và lên bản vẽ 3D" },
        { order_number: 3, title: "QUOTATION", content: "Chốt bản vẽ, gửi báo giá" },
        { order_number: 4, title: "CONSTRUCTION", content: "Ký hợp đồng thi công sản xuất và lắp đặt hoàn thiện" },
        { order_number: 5, title: "HAND - OVER", content: "Nghiệm thu và bàn giao" },
    ];

    return (
        <div className="bg-secondary py-10 w-full relative">
            <h3 className="md:text-7xl  sm:text-2xl text-5xl  text-primary font-primary text-center w-auto">
                QUY TRÌNH GS INTERIOR DESGN
            </h3>
            <ol className="lg:mt-30 mt-15  border-l md:w-sm w-xs border-primary dark:border-primary mx-auto">
                {timeLineWorkFlow.map((workFlow, index) => {
                    return <TimelineItem workFlow={workFlow} key={index} />;
                })}
            </ol>
        </div>
    );
}

export default Timeline;
