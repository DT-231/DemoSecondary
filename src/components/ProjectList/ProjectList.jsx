import ProjectItem from "../../common/ProjectItem/ProjectItem";
import img from "~/assets/testImg";

function ProjectList() {
    // const srcImg = [img.testImg, img.Img5, img.Img6,img.testImg, img.Img5, img.Img6, img.Img5, img.Img6];
    const srcImg = [
        "https://img.upanh.tv/2025/03/03/57a4607f5e7e84daa.png",
        "https://img.upanh.tv/2025/03/03/6.png",
        "https://img.upanh.tv/2025/03/03/test.png",
        "https://img.upanh.tv/2025/03/03/57a4607f5e7e84daa.png",
        "https://img.upanh.tv/2025/03/03/6.png",
        "https://img.upanh.tv/2025/03/03/test.png",
        "https://img.upanh.tv/2025/03/03/57a4607f5e7e84daa.png",
        "https://img.upanh.tv/2025/03/03/6.png",
    ];
    return (
        <div className="bg-black pt-[100px] lg:pb-[350px] pb-[150px] font-primary w-full">
            <h1 className="text-primary lg:text-5xl md:text-3xl text-2xl text-center">Dự Án Đã Và Đang Thi Công</h1>
            <div className="pt-[90px] flex flex-wrap justify-center gap-5">
                {/* {[...Array(8)].map((_, i) => (
                    <ProjectItem key={i} imageSrc={images.testImg} title={`Dự Án ${i + 1}`} />
                ))} */}
                {srcImg.map((src, i) => (
                    <ProjectItem key={i} imageSrc={src} title={`Dự Án ${i + 1}`} />
                ))}
            </div>
            <div className="transform  translate-y-25 flex justify-center">
                <button className="text-primary border-2  border-primary px-10 py-4 text-2xl font-bold hover:bg-primary hover:text-secondary cursor-pointer">
                    Xem thêm
                </button>
            </div>
        </div>
    );
}

export default ProjectList;
