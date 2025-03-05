import images from "../../assets/Imgs";
import ProjectCard from "../../common/ProjectCard/ProjectCard";
function FeaturedProjects() {
    const projectContent = {
        imgSrc: images.WhyChooseUsImg,
        tittle: "Dự Án 1",
        content:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad ",
    };
    return (
        <div className="py-16 md:pb-100 pb-50 bg-secondary text-primary h-auto">
            <h4 className=" lg:text-4xl text-2xl font-bold font-primary text-center mb-20">
                Dự án tiêu biểu
            </h4>
            <div className="flex flex-col gap-30">
                <ProjectCard projectContent={projectContent} sideImg="left" />
                <ProjectCard projectContent={projectContent} sideImg="right" />
                <ProjectCard projectContent={projectContent} sideImg="left" />
            </div>
        </div>
    );
}

export default FeaturedProjects;
