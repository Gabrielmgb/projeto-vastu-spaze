// import constants from "./constants"

import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <main class="overflow-x-hidden antialiased text-neutral-800">
        <NavBar/>
        <Hero/>
        <Services/>
        <Portfolio/>
        <About/>
        <Reviews/>
        <ContactUs/>
        <Footer/>
      </main>
    </div>
  );
};

export default App;
