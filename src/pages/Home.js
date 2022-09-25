import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Partners from "../components/Partners";
import Practices from "../components/Practices";

function Home() {
  return (
    <div className="homePage">
      <Hero />
      <Intro />
      <Practices />
      <Partners />
      <ContactSection />
    </div>
  );
}

export default Home;
