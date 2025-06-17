import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import AboutImage from "../assets/10.jpg";
import Trip from "../components/Trip";
import Foot from "../components/Foot";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImage}
        title="Your Journey starts here"
        text="Choose your favourite Destination."
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Foot />
    </>
  );
}
export default Home;
