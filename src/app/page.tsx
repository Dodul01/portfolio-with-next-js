import Banner from "@/components/Banner/Banner";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";
import Skills from "@/components/Skills/Skills";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Skills />
      <FeaturedProjects />
      <Footer />
    </div>
  );
};

export default HomePage;
