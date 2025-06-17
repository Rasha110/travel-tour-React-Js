import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Foot from "../components/Foot";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="About"
        url="/"
        btnClass="hide"
      />
      <AboutUs />
      <Foot />
    </>
  );
}
export default About;
