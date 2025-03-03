function ProjectItem({ imageSrc, title }) {
   

    return (
        <div className="relative lg:w-[300px] lg:h-[500px] w-[150px] h-[250px] overflow-hidden rounded-md shadow-lg">
            {/* Tiêu đề */}
            <h5 className="absolute top-2 left-2 text-white font-bold z-10">{title}</h5>

            {/* Hình ảnh + Overlay */}
            <div className="relative w-full h-full before:absolute before:inset-0 before:bg-primary/30 hover:before:opacity-0 cursor-pointer">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            </div>
        </div>
    );
}

export default ProjectItem;
