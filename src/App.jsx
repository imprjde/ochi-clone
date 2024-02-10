import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import ViewError from "./components/ViewError";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  console.log(locomotiveScroll);
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <div className="md:hidden">
        <ViewError />
      </div>
      <div className="hidden md:flex flex-col">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default App;
