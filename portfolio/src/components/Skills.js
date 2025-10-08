export default function Skills() {
  return (
    <section className="mt-16 text-center text-white">
      <h2 className="text-lg font-semibold mb-6">Key Skills</h2>
      <div className="flex justify-center flex-wrap gap-4">
        {["Mobile App Development", "Cross Platform", "UI/UX Design"].map(
          (skill) => (
            <div
              key={skill}
              className="px-4 py-2 border border-cyan-500/30 rounded-lg bg-[#101b33] hover:border-cyan-400/70 transition"
            >
              {skill}
            </div>
          )
        )}
      </div>
    </section>
  );
}
