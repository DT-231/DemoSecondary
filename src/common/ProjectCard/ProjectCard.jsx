function ProjectCard({ projectContent, sideImg = "left" }) {
    const isLeft = sideImg === "left";
    return (
        <div
            className={`lg:w-5xl w-full mx-auto font-primary flex flex-col lg:flex-row ${
                isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            } justify-center lg:gap-30 gap-5`}
        >
            <div className="relative lg:w-md w-full flex justify-center">
                <div className="relative">
                    <img
                        src={projectContent.imgSrc}
                        className="cursor-pointer w-full max-w-[300px] lg:max-w-none"
                        alt=""
                    />
                    <button
                        className={`absolute lg:bottom-[-30px] bottom-[-10px] left-1/2 transform -translate-x-1/2 lg:text-base text-sm bg-primary/20 px-5 py-2 hover:bg-primary/50 cursor-pointer`}
                    >
                        Xem Dự Án
                    </button>
                </div>
            </div>
            <div className="text-center lg:text-left px-5 lg:px-0">
                <h5 className="lg:text-2xl text-lg font-bold font-primary pb-3">{projectContent.tittle}</h5>
                <p className="font-secondary text-sm lg:w-xs w-full">{projectContent.content}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
