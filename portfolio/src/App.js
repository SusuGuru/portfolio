import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1221] font-sans text-white">
      {/* Main Wrapper */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="mt-12 md:mt-20">
          <Hero />
        </section>

        {/* Skills Section */}
        <section className="mt-24 md:mt-32">
          <Skills />
        </section>

        {/* Projects Section */}
        <section className="mt-24 md:mt-32">
          <Projects />
        </section>

        {/* Contact Section */}
        <section className="mt-24 md:mt-32 mb-16 md:mb-24">
          <Contact />
        </section>
      </div>
    </div>
  );
}
