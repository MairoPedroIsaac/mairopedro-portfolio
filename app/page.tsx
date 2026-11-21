import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Testimonial from "@/components/sections/Testimonial";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Testimonial />
      <About />
      <Contact />
    </>
  );
}
