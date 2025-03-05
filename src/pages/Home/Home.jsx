import Banner from "../../components/Banner/Banner";
import ProjectList from "../../components/ProjectList/ProjectList";
import WhyChooseUs from "~/components/WhyChooseUs/WhyChooseUs";
import FeaturedProjects from "~/components/FeaturedProjects/FeaturedProjects";
import News from "../../components/News/News";
import Timeline from "../../components/Timeline/Timeline";
const Home = () => {
    return (
        <>
            <Banner />
            <ProjectList />
            <WhyChooseUs />
            <FeaturedProjects />
            <News />
            <Timeline /> 
        </>
    );
};

export default Home;
