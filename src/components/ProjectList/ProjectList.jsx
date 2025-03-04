import ProjectItem from "../../common/ProjectItem/ProjectItem";
import img from "~/assets/testImg";

function ProjectList() {
    const srcImg = [
        img.nguyenxi,
        img.nguyenxi,
        img.TonDan,
        img.TonDan,
        img.voAnNinh,
        img.voAnNinh,
        img.TonDan,
        img.voAnNinh,
    ];

    return (
        <div className="bg-black pt-[100px] lg:pb-[350px] pb-[250px] font-primary w-full">
            <h1 className="text-primary  lg:text-5xl md:text-3xl text-2xl text-center">Dự Án Đã Hoàn Thiện</h1>
            <div className="pt-[90px] flex flex-wrap justify-center lg:gap-5 gap-2">
                {srcImg.map((src, i) => (
                    <ProjectItem key={i} imageSrc={src} title={`Dự Án ${i + 1}`} />
                ))}
            </div>
            {srcImg.length > 8 && (
                <div className="transform  translate-y-25 flex justify-center ">
                    <button className="text-primary border-2  border-primary px-10 py-4 md:text-2xl text-xl font-bold hover:bg-primary hover:text-secondary cursor-pointer">
                        Xem thêm
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProjectList;
