export default function Projects() {
  const projects = [
    {
      title: "Fitness Tracker App",
      desc: "A cross-platform app with custom workout analytics and tracking.",
      color: "bg-rose-200",
    },
    {
      title: "Social Media App",
      desc: "A seamless and modern UI social app built for engagement and speed.",
      color: "bg-peach-200",
    },
  ];

  return (
    <section className="mt-16 text-white max-w-5xl mx-auto">
      <h2 className="text-lg font-semibold mb-6 text-center">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className={`rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition ${proj.color}`}
          >
            <div className="p-6 bg-[#0e162b]">
              <h3 className="font-semibold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-400 text-sm">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
