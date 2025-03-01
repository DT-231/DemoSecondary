import ProjectItem from "../../common/PorojectItem";
import images from "../../assets/Imgs";

function ProjectList() {
    return (
        <div className="bg-black py-[100px] font-primary w-full">
            <h1 className="text-primary lg:text-5xl text-3xl text-center">Dự Án Đã Và Đang Thi Công</h1>
            {/* projects */}
            <div className="py-[90px] flex flex-wrap    justify-center gap-5">
                {[...Array(20)].map((_, i) => (
                    <ProjectItem key={i} imageSrc={images.ProjectImg} title={`Dự Án ${i + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default ProjectList;
