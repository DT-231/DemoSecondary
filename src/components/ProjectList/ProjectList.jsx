import ProjectItem from "~/Common/ProjectItem/ProjectItem";
import images from "~/assets/Imgs";

function ProjectList() {
    return (
        <div className="bg-black pt-[100px] lg:pb-[250px] pb-[150px] font-primary w-full">
            <h1 className="text-primary lg:text-5xl md:text-3xl text-2xl text-center">
                Dự Án Đã Và Đang Thi Công
            </h1>
            <div className="pt-[90px] flex flex-wrap justify-center gap-5">
                {[...Array(20)].map((_, i) => (
                    <ProjectItem key={i} imageSrc={images.ProjectImg} title={`Dự Án ${i + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default ProjectList;

