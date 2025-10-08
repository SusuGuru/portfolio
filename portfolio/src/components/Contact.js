export default function Contact() {
  return (
    <section className="mt-20 mb-10 text-white text-center max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-6">Contact</h2>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-md bg-[#101b33] text-gray-200 border border-cyan-500/20 focus:outline-none focus:border-cyan-400"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="p-3 rounded-md bg-[#101b33] text-gray-200 border border-cyan-500/20 focus:outline-none focus:border-cyan-400"
        ></textarea>
        <button className="bg-[#101b33] border border-cyan-500 text-white px-5 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition-all active:scale-95">
          Send Message
        </button>
      </form>
    </section>
  );
}
