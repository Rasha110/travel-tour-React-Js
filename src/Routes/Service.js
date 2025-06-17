import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Foot from "../components/Foot";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"
        title="Service"
        url="/"
        btnClass="hide"
      />
      <Trip />
      <Foot />
    </>
  );
}
export default Service;
