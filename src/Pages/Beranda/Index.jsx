import AboutUs from "./AboutUs";
import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
import News from "./News";
import Testimonials from "./Testimonials";

const Beranda = () => {
  return (
    <>
      <Hero />
      {/* About Us Section with Parallax */}
      <AboutUs />
      {/* Featured Products Section */}
      <FeaturedProducts />
      {/* Latest News Section */}
      <News />
      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
};

export default Beranda;
