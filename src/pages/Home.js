import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import SubHeader from "../components/SubHeader";
import Intro from "../components/Intro";
import LastPublications from "../components/LastPublications";
import Partners from "../components/Partners";
import "./Home.css";

function Home() {
  return (
    <div className="homePage">
      <Hero />
      <SubHeader />
      <Intro />
      <LastPublications />
      <ContactSection />
      <Partners />
    </div>
  );
}

export default Home;
