import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
