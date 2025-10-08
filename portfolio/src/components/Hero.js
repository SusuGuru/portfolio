export default function Hero() {
  return (
    <section className="text-white text-center mt-10">
      <div
        className="relative p-10 rounded-2xl max-w-3xl mx-auto overflow-hidden shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,140,0,0.35), rgba(0,255,255,0.25)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Crafting Seamless Mobile Experiences
          </h1>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            I design, develop, and optimize cutting-edge mobile apps with
            user-focused solutions and clean, maintainable code.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2 rounded-md transition active:scale-95">
            View Projects
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1221]/60 to-transparent rounded-2xl"></div>
      </div>
    </section>
  );
}
