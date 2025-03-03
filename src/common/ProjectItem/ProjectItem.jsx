function ProjectItem({ imageSrc, title }) {
    console.log(imageSrc);

    return (
        <div className="relative w-auto max-w-xs  aspect-[3/5] overflow-hidden rounded-md shadow-lg">
            {/* Tiêu đề */}
            <h5 className="absolute top-2 left-2 text-white font-bold z-10">{title}</h5>

            {/* Hình ảnh + Overlay */}
            <div className="relative w-full h-full before:absolute before:inset-0 before:bg-primary/30 hover:before:opacity-0">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            </div>
        </div>
    );
}

export default ProjectItem;
