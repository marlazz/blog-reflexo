import Hero from "../components/Hero";
import "./Home.css";
import Footer from "../components/Footer";
import Practices from "../components/sections/pratices/Pratices";
import About from "../components/sections/about/About";
import Warning from "../components/sections/warning/warning";
import Partners from "../components/sections/partners/Partners";
import LastPublications from "../components/sections/last-publications/LastPublications";
import ContactSection from "../components/sections/contact/ContactSection";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="homePage">
      <Navbar />
      <Hero />
      <Practices />
      <About />
      <Warning />
      <Partners />
      <LastPublications />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
