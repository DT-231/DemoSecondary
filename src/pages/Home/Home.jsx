import Banner from "../../components/Banner/Banner";
import ProjectList from "../../components/ProjectList/ProjectList";
import WhyChooseUs from "~/components/WhyChooseUs/WhyChooseUs";
import FeaturedProjects from "~/components/FeaturedProjects/FeaturedProjects";
import Slide from "../../common/Slide/Slide";
const Home = () => {
    return (
        <>
            <Banner />
            <ProjectList />
            <WhyChooseUs />
            <FeaturedProjects />
            {/* <Slide /> */}
        </>
    );
};

export default Home;
