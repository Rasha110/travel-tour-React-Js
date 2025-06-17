import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Foot from "../components/Foot";
import AboutImg from "../assets/11.jpg";
import Contactform from "../components/Contactform";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        url="/"
        btnClass="hide"
      />
      <Contactform />
      <Foot />
    </>
  );
}
export default Contact;
